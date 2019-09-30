import fs, { truncate } from 'fs';
import mustache from 'mustache';
import * as requestPromise from 'request-promise';

// disable mustache HTML escaping
mustache.escape =  (text: any) => text;

const moduleTemplate = fs.readFileSync ('./data/templates/moduleTemplateApiClient.mustache', 'utf8');
const functionTemplateGET = fs.readFileSync ('./data/templates/functionTemplateGET.mustache', 'utf8');
const functionTemplateDELETE = fs.readFileSync ('./data/templates/functionTemplateDELETE.mustache', 'utf8');
const functionTemplatePOST = fs.readFileSync ('./data/templates/functionTemplatePOST.mustache', 'utf8');
const functionTemplatePUT = fs.readFileSync ('./data/templates/functionTemplatePUT.mustache', 'utf8');
const interfaceTemplate = fs.readFileSync ('./data/templates/interfaceTemplate.mustache', 'utf8');
const urlParamsConstructorTemplate = fs.readFileSync ('./data/templates/urlParamConstructorTemplate.mustache', 'utf8');

/**
 * Based on a swagger doc, create an API client module for NodeJS
 * @param swaggerJsonUrl {string} The URL for the swagger json document
 * @param apiClientName {string} The name you want to give the api client module
 * @param {swaggerCallback} {function} a callback that handles any swagger.json customizations/fixes that are desired. Receives swagger.json, should return updated swagger.json.
 * @param {moudleCallback} {function} a callback that handles any scode customizations/fixes that are desired. Receives apiClient code, should return updated apiClientCode.
 */
export async function Write (swaggerJsonUrl: string, apiClientName: string, swaggerCallback?: any, moduleCallback?: any): Promise<number> {

  const swaggerJson = await LoadSwaggerJson (swaggerJsonUrl);
  const swaggerUpdated = swaggerCallback ? swaggerCallback (swaggerJson) : swaggerJson;
  const functionsString = await GenerateClientCalls (swaggerUpdated, apiClientName); // TODO: make the client lib name a passed in param
  const interfaceString = await GenerateInterfaces (swaggerUpdated);
  const moduleString = await GenerateModule (functionsString, interfaceString, apiClientName);
  const moduleStringUpdated = moduleCallback ? moduleCallback (moduleString) : moduleString;
  let moduleWriteErrorCode = WriteModule (moduleStringUpdated, apiClientName);
  moduleWriteErrorCode = SetupAsNpmProject (apiClientName) ? moduleWriteErrorCode : 1; // if setup completes cleanly, stick with the existing error code.

  return moduleWriteErrorCode;
}

/**
 * Copy all of the template config files in the new api client 'project' directory
 * @param apiClientName
 */
function SetupAsNpmProject (apiClientName: string): number {
  const errorCode = 0;
  const fileDestinations: any = {
    './data/templateConfigs/.eslintIgnore': `./out/${apiClientName}/.eslintIgnore`,
    './data/templateConfigs/.eslintrc.json': `./out/${apiClientName}/.eslintrc.json`,
    './data/templateConfigs/.gitignore': `./out/${apiClientName}/.gitignore`,
    './data/templateConfigs/.prettierrc': `./out/${apiClientName}/.prettierrc`,
    './data/templateConfigs/.tslint.json': `./out/${apiClientName}/.tslint.json`,
    './data/templateConfigs/.vscode/launch.json': `./out/${apiClientName}/.vscode/launch.json`,
    './data/templateConfigs/.vscode/settings.json': `./out/${apiClientName}/.vscode/settings.json`,
    './data/templateConfigs/.vscode/tasks.json': `./out/${apiClientName}/.vscode/tasks.json`,
    './data/templateConfigs/package.json': `./out/${apiClientName}/package.json`,
    './data/templateConfigs/tsconfig.json': `./out/${apiClientName}/tsconfig.json`
  };

  if ( ! fs.existsSync (`./out/${apiClientName}/.vscode`)) {
    fs.mkdirSync (`./out/${apiClientName}/.vscode`);
  }

  for (const file of Object.keys (fileDestinations)) {
    const dest = fileDestinations[file];
    fs.copyFileSync (file, `${dest}`);
  }

  return errorCode;
}

/**
 * Load the swagger json document describing the API
 * @param url the URL of the swagger json doc ppppppp
 */
export async function LoadSwaggerJson ( url: string ) {
  const logMessagePrefix = 'apiclientwriter.LoadSwaggerJson() ';

  if (url.toLowerCase ().includes ('http')) {

    return await requestPromise.get (url)
    .then ((response: any) => {

      const responseJson = JSON.parse (response);

      return responseJson;
    })
    .catch ((errorResponse: any) => {

      console.log (`${logMessagePrefix} errorResponse: ${require ('util').inspect (errorResponse, {colors: true, depth: 2})}`);

      return errorResponse;
    });

  } else {

    const swaggerFileJson = JSON.parse (fs.readFileSync (url, 'utf-8'));

    return swaggerFileJson;
  }
}

export async function GenerateClientCalls (swaggerJson: any, clientLibraryName: string): Promise<string> {

  const logMessagePrefix = 'apiclientwriter.GenereateClientCalls() ';

  let functions = '';

  Object.keys (swaggerJson.paths).forEach ( (path) => {
    if (swaggerJson.paths.hasOwnProperty (path)) {
      for (const method in swaggerJson.paths[path]) {
        if (swaggerJson.paths[path].hasOwnProperty (method)) {
          switch (method){
            case 'get':
              functions += CreateGetFunction (path, swaggerJson.paths[path][method], clientLibraryName);
              break;
            case 'post':
              functions += CreatePostFunction (path, swaggerJson.paths[path][method], clientLibraryName, swaggerJson);
              break;
            case 'put':
              functions += CreatePutFunction (path, swaggerJson.paths[path][method], clientLibraryName, swaggerJson);
              break;
            case 'delete':
              functions += CreateDeleteFunction (path, swaggerJson.paths[path][method], clientLibraryName);
              break;
            default:
              //
              console.log (`${logMessagePrefix} ${method} method not implemented. implement me!`);
              break;
          }
        }
      }
    }
  });

  return functions;

}

function CreateGetFunction (path: string, apiRequestDefinition: any, clientLibraryName: string): string {

  const logMessagePrefix = 'apiclientwriter.CreateGetFunction() ';

  const functionName = 'Get' + GenerateFunctionNameFromPath (path);

  const parameterSignature = GenerateFunctionParameterSignature (apiRequestDefinition);

  // create a code fragment that builds the URL parameters for the api call(e.g. ?key=val&key2=val2 )
  const urlParamsArray = GenerateUrlParamsArray (apiRequestDefinition);
  let urlParamsConstructor='';
  if (urlParamsArray.length > 0) {
    const uptInputs = {urlParamsArray};
    urlParamsConstructor = mustache.render (urlParamsConstructorTemplate, uptInputs);
  }
  const urlParamsConstructorArray = urlParamsConstructor.split (/\n/);

  // generate the functions JDSOC formatted documentation
  const functionDocumentation = GenerateFunctionDocumentation (apiRequestDefinition);

  let headerAccept = '';
  if (apiRequestDefinition.hasOwnProperty ('produces') && Array.isArray (apiRequestDefinition.produces)) {
    for (const produces of apiRequestDefinition.produces) {
      if (produces.toLowerCase ().includes ('application/json')) {
        headerAccept = `'Accept': 'application/json',`;
      }
    }
  }

  // generate custom header entries for the API call
  let headersCustom = GenerateCustomHeaderEntries (apiRequestDefinition);
  if (headerAccept !== '') {
    headersCustom.push (headerAccept);
  }

  // sort.. the linter complains when headers are not sorted
  headersCustom = headersCustom.sort ();
  // remove the comma from the last entry
  headersCustom[headersCustom.length - 1] = headersCustom[headersCustom.length - 1].slice (0, headersCustom[headersCustom.length - 1].length - 1);

  // convert the swagger path variables into JS string template variables (e.g. {var} becomes ${; let; })
  let pathUpdated = CleanPath (path);

  // if there are url params to be passed in, give the urlParamsConstructor code a variable to place the params in.
  if (urlParamsConstructorArray.length > 1) {
    pathUpdated += '/${paramString}';
  }

  const templateInputs = {
    clientLibraryName,
    endpointPath: `${pathUpdated}`,
    functionDocumentation,
    functionName,
    headersCustom,
    parameterSignature,
    urlParamsConstructorArray
  };

  const functionString = mustache.render (functionTemplateGET, templateInputs);

  return functionString;
}

function CreateDeleteFunction (path: string, apiRequestDefinition: any, clientLibraryName: string): string {

  const logMessagePrefix = 'apiclientwriter.CreateGetFunction() ';

  const functionName = 'Delete' + GenerateFunctionNameFromPath (path);

  const parameterSignature = GenerateFunctionParameterSignature (apiRequestDefinition);

  const functionDocumentation = GenerateFunctionDocumentation (apiRequestDefinition);

  let headerAccept = '';
  if (apiRequestDefinition.hasOwnProperty ('produces') && Array.isArray (apiRequestDefinition.produces)) {
    for (const produces of apiRequestDefinition.produces) {
      if (produces.toLowerCase ().includes ('application/json')) {
        headerAccept = `'Accept': 'application/json',`;
      }
    }
  }
  let headersCustom = GenerateCustomHeaderEntries (apiRequestDefinition);
  if (headerAccept !== '') {
    headersCustom.push (headerAccept);
  }
  // sort.. the linter complains when headers are not sorted
  headersCustom = headersCustom.sort ();
  // remove the comma from the last entry
  headersCustom[headersCustom.length - 1] = headersCustom[headersCustom.length - 1].slice (0, headersCustom[headersCustom.length - 1].length - 1);

  // convert the swagger path variables into JS string template variables (e.g. {var} becomes ${; let; })
  const pathUpdated = CleanPath (path);

  const templateInputs = {
    clientLibraryName,
    endpointPath: `${pathUpdated}`,
    functionDocumentation,
    functionName,
    headersCustom,
    parameterSignature
  };

  const functionString = mustache.render (functionTemplateDELETE, templateInputs);

  return functionString;
}

function CreatePutFunction (path: string, apiRequestDefinition: any, clientLibraryName: string, swaggerJson: any): string {

  const logMessagePrefix = 'apiclientwriter.CreatePutFunction() ';

  const functionName = 'Put' + GenerateFunctionNameFromPath (path);

  const parameterSignature = GenerateFunctionParameterSignature (apiRequestDefinition);

  const functionDocumentation = GenerateFunctionDocumentation (apiRequestDefinition);

  let headersCustom = GenerateCustomHeaderEntries (apiRequestDefinition);
  const headerAccept = GenerateAcceptHeader (apiRequestDefinition, swaggerJson);
  const headerContentType = GenerateContentTypeHeader (apiRequestDefinition, swaggerJson);
  headersCustom.concat (headerAccept, headerContentType);
  // sort.. the linter complains when headers are not sorted
  headersCustom = headersCustom.sort ();
  // remove the comma from the last entry
  headersCustom[headersCustom.length - 1] = headersCustom[headersCustom.length - 1].slice (0, headersCustom[headersCustom.length - 1].length - 1);

  const formDataTs: string[] = GenerateFormDataArray (apiRequestDefinition);

  let bodyOrFormField: string = `body: ''`;
  if (formDataTs.length > 0) { bodyOrFormField = 'form'; }
  if (parameterSignature.search ('body:') > 1) { bodyOrFormField = 'body'; }

  // convert the swagger path variables into JS string template variables (e.g. {var} becomes ${var})
  const pathUpdated = CleanPath (path);

  const templateInputs = {
    bodyOrFormField,
    clientLibraryName,
    endpointPath: `${pathUpdated}`,
    formDataTs,
    functionDocumentation,
    functionName,
    headersCustom,
    parameterSignature
  };

  const functionString = mustache.render (functionTemplatePUT, templateInputs);

  return functionString;
}

function CreatePostFunction (path: string, apiRequestDefinition: any, clientLibraryName: string, swaggerJson: any): string {

  const logMessagePrefix = 'apiclientwriter.CreatePostFunction() ';

  const functionName = 'Post' + GenerateFunctionNameFromPath (path);

  const parameterSignature = GenerateFunctionParameterSignature (apiRequestDefinition);

  const functionDocumentation = GenerateFunctionDocumentation (apiRequestDefinition);

  let headersCustom = GenerateCustomHeaderEntries (apiRequestDefinition);

  const headerAccept = GenerateAcceptHeader (apiRequestDefinition, swaggerJson);

  const headerContentType = GenerateContentTypeHeader (apiRequestDefinition, swaggerJson);
  headersCustom.concat (headerAccept, headerContentType);
  // sort.. the linter complains when headers are not sorted
  headersCustom = headersCustom.sort ();
  // remove the comma from the last entry
  headersCustom[headersCustom.length - 1] = headersCustom[headersCustom.length - 1].slice (0, headersCustom[headersCustom.length - 1].length - 1);

  const formDataTs: string[] = GenerateFormDataArray (apiRequestDefinition);

  let bodyOrFormField: string = `body: ''`;
  if (formDataTs.length > 0) { bodyOrFormField = 'form'; }
  if (parameterSignature.search ('body:') > 1) { bodyOrFormField = 'body'; }

  // convert the swagger path variables into JS string template variables (e.g. {var} becomes ${var})
  const pathUpdated = CleanPath (path);

  const templateInputs = {
    bodyOrFormField,
    clientLibraryName,
    endpointPath: `${pathUpdated}`,
    formDataTs,
    functionDocumentation,
    functionName,
    headersCustom,
    parameterSignature
  };

  const functionString = mustache.render (functionTemplatePOST, templateInputs);

  return functionString;
}

function CleanPath (path: string): string {

  // make all {var-names} JS String template compatible, e.g. ${var-names}
  const pathUpdated = path.replace (/\{/g, '${');
  // clean up each variable name in the path (while leaving the path, itself, as is)
  const pathArr = pathUpdated.split ('/');
  let pathSeparator = '';
  let pathNew = '';
  for (let pathItem of pathArr) {
    // if the item is a variable (starts with ${)
    if (pathItem.indexOf ('${') === 0 ) {
      pathItem = CleanVariableNames (pathItem);
    }
    pathNew += pathSeparator + pathItem;
    pathSeparator = '/';
  }

  return pathNew;
}
/** based on the api path return a function name */
function GenerateFunctionNameFromPath (path: string): string {

  // replace illegal chars [-] with a slash (the letter following a '/' is capitalized below)
  const pathArray = path.replace (/[-_\.]/g, '/').replace (/{/g, 'By/').replace (/}/g, '').split ('/');

  for (let i = 0; i < pathArray.length; i++) {
    // if (pathArray[i].charAt(0).match(/\{/)) {
    //   // uppercase the second char, char one is a curly brace
    //   pathArray[i] = pathArray[i].charAt(1).toUpperCase() + pathArray[i].slice(2);
    //   // prefix the 'filter name' with By (e.g. ByColumnName) and remove the curly braces
    //   pathArray[i] = 'By' + pathArray[i].replace('{', '').replace('}', '');
    // }
    // if (pathArray[i].charAt(0).match(/[a-zA-z]/)) {
      pathArray[i] = pathArray[i].charAt (0).toUpperCase () + pathArray[i].slice (1);
    // }
  }

  // join the array elements into a single camelcase word
  const functionName = pathArray.join ('');

  return functionName;
}

/**
 * Create an array of key:val pairs that give the index and name of each url query param in a function signature
 * This is important so that we can later walk through a functions arguments and check ONLY the query params, then
 * build a query string of the params that have a value passed to the function
 * @param apiRequestDefinition
 */
function GenerateUrlParamsArray (apiRequestDefinition: any): string[] {
  const urlParamsArray = [];
  let counter = 0;
  // for each parameter the function will be passed, including non url query params
  for (const parameter of apiRequestDefinition.parameters) {
    // only add the query params
    if (parameter.in.toLowerCase () === 'query') {
      const name = CleanVariableNames (parameter.name);
      // store the query param and the index where it will appear in the function signature (function args[])
      urlParamsArray.push (`${counter}: '${name}',`);
    }
    // *always* increase the counter so that we know the index of the query params in the function signatures
    // the function signatures (args array) will include other parameters, so count them!
    counter++;
  }
  // get rid of the comma on the last item in the array
  if (urlParamsArray.length > 0) {
    urlParamsArray[urlParamsArray.length - 1] = urlParamsArray[urlParamsArray.length - 1].slice (0, -1);
  }

  return urlParamsArray;
}

function GenerateFormDataArray (apiRequestDefinition: any): string[] {

  const formData: string[] = [];
  let formDataHead = 'const form = {';
  const formDataFoot = '};';

  for (const parameter of apiRequestDefinition.parameters) {
    // put an object def 'head' on an array, only once
    if (parameter.in === 'formData') {
      if (formDataHead) {
        formData.push (formDataHead);
        formDataHead = null;
      }
      // add the `fieldname` to the array, shorthand for 'fieldname: fieldname'
      formData.push (`  ${parameter.name},`);
    }
  }

  if (formData.length > 0) {
    //remove char (a comma) from last entry in list
    formData[formData.length - 1] = formData[formData.length - 1].slice (0, formData[formData.length - 1].length - 1);
    // add the 'foot' of the obj def
    formData.push (formDataFoot);
  }

  return formData;
}

function GenerateAcceptHeader (apiRequestDefinition: any, swaggerJson: any): string[] {
  // create an `Accept: {acceptType}` entry for the header (if it's not defined in the request def, look for a top level default in the API doc)
  let headerAccept = '';
  if (apiRequestDefinition.hasOwnProperty ('produces')) {
    for (const endpointProduces of apiRequestDefinition.produces) {
      if (endpointProduces.toLowerCase ().includes ('application/json')) {
        headerAccept = `'Accept': 'application/json'`;
      }
      else if (endpointProduces.toLowerCase ().includes ('application/xml')) {
        headerAccept = `'Accept': 'application/xml'`;
      }
    }
  }
  else if (swaggerJson.hasOwnProperty ('produces')) {
    for (const apiProduces of swaggerJson.produces) {
      if (apiProduces.toLowerCase ().includes ('application/json')) {
        headerAccept = `'Accept': 'application/json'`;
      }
      else if (apiProduces.toLowerCase ().includes ('application/xml')) {
        headerAccept = `'Accept': 'application/xml'`;
      }
    }
  }

  return [headerAccept];
}

function GenerateContentTypeHeader (apiRequestDefinition: any, swaggerJson: any): string[] {
  // create an `Content-Type: {contentType}` entry for the header (if it's not defined in the request def, look for a top level default in the API doc)
  let headerContentType = '';
  if (apiRequestDefinition.hasOwnProperty ('consumes')) {
    for (const endpointConsumes of apiRequestDefinition.consumes) {
      if (endpointConsumes.toLowerCase ().includes ('application/json')) {
        headerContentType = `'Content-Type': 'application/json'`;
      }
      else if (endpointConsumes.toLowerCase ().includes ('application/x-www-form-urlencoded')) {
        headerContentType = `'Content-Type': 'application/x-www-form-urlencoded'`;
      }
    }
  }
  else if (swaggerJson.hasOwnProperty ('consumes')) {
    for (const apiProduces of swaggerJson.produces) {
      if (apiProduces.toLowerCase ().includes ('application/json')) {
        headerContentType = `'Content-type': 'application/json'`;
      }
      else if (apiProduces.toLowerCase ().includes ('application/x-www-form-urlencoded')) {
        headerContentType = `'Content-types': 'application/x-www-form-urlencoded'`;
      }
    }
  }

  return [headerContentType];
}

function GenerateFunctionDocumentation (getDef: any): string[] {
  const functionDocumentation: string[] = [];

  // add the summary field
  functionDocumentation.push (`* ${getDef.summary.replace (/\n/g, ' ')}`);

  // TODO: handle API defined types from swaggerdoc.definitions. Currently appear as {undefined}
  // add the description field
  const description = getDef.description.trim ();
  for (const line of description.split (/\n/)) {
    const truncatedLines = line.match (/.{1,230}/g);
    if (truncatedLines) {
      for (const truncatedLine of truncatedLines) {
        functionDocumentation.push (`* ${truncatedLine.replace (/\n/g, ' ').trim ()}`);
      }
    }
  }

  // add each parameter for the JSDOC
  for (const param of getDef.parameters) {
    //if (param.in !== 'header') {
      const desc = param.hasOwnProperty ('description') ? param.description : 'Parameter was not given a description in the API documentation';
      const reqd = param.hasOwnProperty ('required') ? param.reqd : true; // if the definition of the param is broken, assume the param is required
      const paramName = reqd ? CleanVariableNames (param.name) : `[${CleanVariableNames (param.name)}]`;
      functionDocumentation.push (`* @param {${param.type}} ${paramName} ${desc}`);
    //}
  }

  // add the @return documentation, this specifies how we will return a full server response object, or errors.
  functionDocumentation.push ('* @return {any} Returns a full response object recieved from the server. This usually includes response.body and response.headers,');
  functionDocumentation.push ('*               but on error will return response.errorMessage and response.errorResponse which contains the full server response');

  return functionDocumentation;
}

function GenerateCustomHeaderEntries (requestDefinition: any) {
  const customHeaders = [];

  for (const parameter of requestDefinition.parameters) {
    if (parameter.in === 'header') {
      customHeaders.push (`'${parameter.name}': \`\${${parameter.name.charAt (0).toLowerCase ()}${CleanVariableNames (parameter.name).slice (1)}}\`,`);
    }
  }

  // add these here, not in the template, so we can sort them properly
  customHeaders.push (`'User-Agent': 'automated-testing-request',`);
  customHeaders.push (`'X-Conversation-Id': 'automated-testing-request-id',`);

  return customHeaders;
}

function GenerateFunctionParameterSignature (apiRequestDefinition: any): string {

  let parameterPathItems = '';
  let parameterPathItemsSeparator = '';
  let parameterQueryItems = '';
  let parameterQueryItemsSeparator = '';
  let parametersOptionalItems = '';
  let parametersOptionalItemsSeparator = '';

  for (const param of apiRequestDefinition.parameters) {

    // set the type to be used for each parameter in the signature
    let paramType: string;
    const paramNameClean = `${param.name.charAt (0).toLowerCase ()}${CleanVariableNames (param.name).slice (1)}`;
    if (param.in === 'body' ) {
      // get the name we use to create the interface for the type, last part of the URI
      if (param.schema.hasOwnProperty ('type')) {
        paramType = param.schema.type;
        // our param type is set, unless it's an array. Now get the array type
        if (paramType === 'array') {
          const pa = param.schema.items.$ref.split ('/');
          paramType = `I${pa[pa.length - 1]}[]`;
        }
      } else {
        const pa = param.schema.$ref.split ('/');
        paramType = `I${pa[pa.length - 1]}`;

      }
    } else {
      // convert numeric swagger supplied types to TS compat types
      switch (param.type) {
        case 'integer':
        case 'float':
        case 'long':
          paramType = 'number';
          break;
        case 'array':
          paramType = param.items.type + '[]';
          break;
        default:
          paramType = param.type;
      }
    }

    // add this param to the part of the signature it belongs in
    if ((param.in !== 'path') && param.required === false) {
      parametersOptionalItems += `${parametersOptionalItemsSeparator}${paramNameClean}?: ${paramType}`;
      parametersOptionalItemsSeparator = ', ';
    } else if ((param.in !== 'path') && param.required === true) {
      parameterQueryItems += `${parameterQueryItemsSeparator}${paramNameClean}: ${paramType}`;
      parameterQueryItemsSeparator = ', ';
    } else if (param.in === 'path') {
      parameterPathItems += `${parameterPathItemsSeparator}${paramNameClean}: ${paramType}`;
      parameterPathItemsSeparator = ', ';
    }
  }

  // for each param list, add a comma if there are more params to follow (i.e. they are non-zero length)
  if (parameterPathItems.length && (parameterQueryItems.length || parametersOptionalItems.length)) {
    parameterPathItems = `${parameterPathItems}, `;
  }
  if (parameterQueryItems.length && parametersOptionalItems.length) {
    parameterQueryItems = `${parameterQueryItems}, `;
  }

  // url path params first, query params, then optional query params last
  return parameterPathItems + parameterQueryItems + parametersOptionalItems;
}

export function GenerateInterfaces (swaggerJson: any ): string {

  const logMessagePrefix = 'apiclientwriter.GenerateInterfaces() ';

  let interfacesString: string = '';

  Object.entries (swaggerJson.definitions).forEach ((entry) => {
    const interfaceName = CleanInterfaceNames (entry[0]);
    const interfaceProps: any[] = [];
    const interfaceDocumentation: string[] = [];
    const currDef: any = entry[1];
    // if the definition has fields/properties
    if (currDef.hasOwnProperty ('properties')) {
      Object.keys (currDef.properties).forEach ( (propertyName) => {
        // ensure that the name starts with a lowercase
        let propName = propertyName[0].toLowerCase () + propertyName.slice (1);
        let propNameForDoc = propName;
        const propDescription: string = currDef.properties[propertyName].description;
        // convert types to JS compatible type, or set it to an API defined typ
        const propType = GetPropertyType (currDef, propertyName);
        // is the propname optional? (check w/the original prop name, not the fixed 'uncapitalized' one)
        if ( currDef.hasOwnProperty ('required') && !currDef.required.includes (propertyName) ) {
          propNameForDoc = `[${propName}]`;
          propName = `${propName}?`;
        }
        // add a line for the interface defining this property.
        interfaceProps.push (`${propName}: ${propType}`);
        // create a line for the interface jsdoc that describes the property.
        interfaceDocumentation.push (`@property {${CleanVariableNames (propType)}} ${propNameForDoc} - ${propDescription}`);
      });
      const genResult = GenerateInterfaceString (interfaceName, interfaceProps, interfaceDocumentation);
      interfacesString += genResult;
    } else {
      // if we run into a property without its type defined -> add a generic entry, allow any property to be allowed, optionally
      interfaceProps.push ('[propName: string]: any');
      interfaceDocumentation.push ('@property {optional} {any} generic type, generic object');
      const genResult = GenerateInterfaceString (interfaceName, interfaceProps, interfaceDocumentation);
      interfacesString += genResult;
    }
  });

  return interfacesString;
}

function GetPropertyType ( currDef: any, propertyName: string): string {
  let propType: string;
  if (currDef.properties[propertyName].hasOwnProperty ( '$ref')) {
    // aPI defined property type is based on the last part of the path
    const pa = currDef.properties[propertyName].$ref.split ( '/');
    // and we name interfaces, starting with the letter 'I'
    propType = `I${pa[pa.length - 1]}`;
  }
  else {
    switch (currDef.properties[propertyName].type.toLowerCase ( )) {
      case ('string'):
        propType = 'string';
        break;
      case ('boolean'):
        propType = 'boolean';
        break;
      case ('float'):
      case ('integer'):
        propType = 'number';
        break;
      case ('array'):
        propType = GetArrayTypeOfInterfaceProperty ( propertyName, currDef);
        break;
      case ('object'):
        propType = 'any';
    }
  }

  return propType;
}

/**
 * returns the array type for an Interface property definition as provided in the swagger.json.definitions
 * @param propertyName
 * @param currDef
 */
function GetArrayTypeOfInterfaceProperty (propertyName: string, currDef: any) {
  let propType = 'any[]';
  // the array type should be defined in the items property under .$ref or .type
  if (currDef.properties[propertyName].hasOwnProperty ('items')) {
    if (currDef.properties[propertyName].items.hasOwnProperty ('$ref')) {
      // an array of a swagger.json defined type
      const typeRef = currDef.properties[propertyName].items.$ref.split ('/');
      propType = `${CleanInterfaceNames (typeRef[typeRef.length - 1])}[]`;
    }
    else if (currDef.properties[propertyName].items.hasOwnProperty ('type')) {
      // an array of a TS type
      propType = `${currDef.properties[propertyName].items.type}[]`;
    }
  }

  return propType;
}

function GenerateInterfaceString (interfaceName: string, interfaceProperties: any[], interfaceDocumentation?: any): string {
  let interfaceString: string;
  const templateInputs = {
    interfaceDocumentation: interfaceDocumentation ? interfaceDocumentation : 'no documentation provided',
    interfaceName,
    interfaceProperties
  };
  interfaceString = mustache.render (interfaceTemplate, templateInputs);

  return interfaceString;
}

export function GenerateModule (functionsString: string, interfaceString: string, apiClientName: string): string {

  const templateInputs = {
    apiClientName,
    functions: functionsString,
    interfaces: interfaceString
  };

  const moduleString = mustache.render (moduleTemplate, templateInputs);

  return moduleString;
}

export function WriteModule (moduleString: string, apiClientName: string): number {

  let errorValue = 0;

  // create the directory structure for the api client output
  try {
    if ( ! fs.existsSync (`./out/`)) {
      fs.mkdirSync (`./out`);
    }
    if ( ! fs.existsSync (`./out/${apiClientName}`)) {
      fs.mkdirSync (`./out/${apiClientName}`);
    }
    if ( ! fs.existsSync (`./out/${apiClientName}/src`)) {
      fs.mkdirSync (`./out/${apiClientName}/src`);
    }
    fs.writeFileSync ( `./out/${apiClientName}/src/${apiClientName}.ts`, moduleString);
  } catch (e) {
    console.error (e);
    errorValue = 1;
  }

  return errorValue;
}

function CleanVariableNames (varString: string): string {
  return varString ? varString.replace (/[-_\ ]/g, '') : varString;
}

function CleanInterfaceNames (varString: string): string {
  let cleanedInterfaceName = CleanVariableNames (varString);
  // ensure interface names are capitalized
  cleanedInterfaceName = cleanedInterfaceName[0].toUpperCase () + cleanedInterfaceName.slice (1);
  const interfaceName: string = `I${cleanedInterfaceName}`;

  return interfaceName;
}
