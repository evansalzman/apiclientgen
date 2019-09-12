import fs from 'fs';
import mustache from 'mustache';
import * as requestPromise from 'request-promise';

// disable mustache HTML escaping
mustache.escape =  (text) => text;

const moduleTemplate = fs.readFileSync ('./data/templates/moduleTemplateApiClient.mustache', 'utf8');
const functionTemplateGET = fs.readFileSync ('./data/templates/functionTemplateGET.mustache', 'utf8');
const functionTemplateDELETE = fs.readFileSync ('./data/templates/functionTemplateDELETE.mustache', 'utf8');
const functionTemplatePOST = fs.readFileSync ('./data/templates/functionTemplatePOST.mustache', 'utf8');
const functionTemplatePUT = fs.readFileSync ('./data/templates/functionTemplatePUT.mustache', 'utf8');
const interfaceTemplate = fs.readFileSync ('./data/templates/interfaceTemplate.mustache', 'utf8');

/**
 * Based on a swagger doc, create an API client module for NodeJS
 * @param swaggerJsonUrl {string} The URL for the swagger json document
 * @param apiClientName {string} The name you want to give the api client module
 */
export async function Write (swaggerJsonUrl: string, apiClientName: string) {

  const swaggerJson = await LoadSwaggerJson (swaggerJsonUrl);
  const functionsString = await GenerateClientCalls (swaggerJson, apiClientName); // TODO: make the client lib name a passed in param
  const interfaceString = await GenerateInterfaces (swaggerJson);
  await GenerateModule (functionsString, interfaceString, apiClientName);

}

/**
 * Load the swagger json document describing the API
 * @param url the URL of the swagger json doc ppppppp
 */
export async function LoadSwaggerJson ( url: string ) {
  const logMessagePrefix = 'apiclientwriter.LoadSwaggerJson() ';

  return await requestPromise.get (url)
  .then ((response: any) => {

    const responseJson = JSON.parse (response);

    return responseJson;
  })
  .catch ((errorResponse: any) => {

    console.log (`${logMessagePrefix} errorResponse: ${require ('util').inspect (errorResponse, {colors: true, depth: 2})}`);

    return errorResponse;
  });
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

  // break path into an array, and capitalize each array element
  const pathArray = path.split ('/');
  for (let i = 0; i < pathArray.length; i++) {
    if (pathArray[i].charAt (0).match (/\{/)) {
      // uppercase the second char, char one is a curly brace
      pathArray[i] = pathArray[i].charAt (1).toUpperCase () + pathArray[i].slice (2);
      // prefix the 'filter name' with By (e.g. ByColumnName) and remove the curly braces
      pathArray[i] = 'By' + pathArray[i].replace ('{', '').replace ('}', '');
    }
    if (pathArray[i].charAt (0).match (/[a-zA-z]/)) {
      pathArray[i] = pathArray[i].charAt (0).toUpperCase () + pathArray[i].slice (1);
    }
  }
  // join the array elements into a single camelcase word
  const functionName = 'Get' + pathArray.join ('');

  const parameterSignature = GenerateFunctionParameterSignature (apiRequestDefinition);

  const functionDocumentation = GenerateFunctionDocumentation (apiRequestDefinition);

  const queryString = GenerateApiQueryString (apiRequestDefinition);

  let headerAccept = '';
  for (const produces of apiRequestDefinition.produces) {
    if (produces.toLowerCase ().includes ('application/json')) {
      headerAccept = `'Accept': 'application/json'`;
    }
  }
  const headersCustom = GenerateCustomHeaderEntries (apiRequestDefinition);
  headersCustom.push (headerAccept);

  // convert the swagger path variables into JS string template variables (e.g. {var} becomes ${; let; })
  const pathUpdated = path.replace (/\{/g, '${');

  const templateInputs = {
    clientLibraryName,
    endpointPath: `${pathUpdated}${queryString}`,
    functionDocumentation,
    functionName,
    headersCustom,
    parameterSignature
  };

  const functionString = mustache.render (functionTemplateGET, templateInputs);

  return functionString;
}

function GenerateApiQueryString (apiRequestDefinition: any): string {
  let paramPrefix = '?';
  let queryString = '';
  let counter = 0;
  for (const parameter of apiRequestDefinition.parameters) {
    if (parameter.in.toLowerCase () === 'query') {
      console.log (counter++, parameter.name);
      queryString += `${paramPrefix}${parameter.name}=\${${parameter.name}}`;
      paramPrefix = '&';
    }
  }
  console.log  (queryString);

  return queryString;
}

function CreateDeleteFunction (path: string, apiRequestDefinition: any, clientLibraryName: string): string {

  const logMessagePrefix = 'apiclientwriter.CreateGetFunction() ';

  // break path into an array, and capitalize each array element
  const pathArray = path.split ('/');
  for (let i = 0; i < pathArray.length; i++) {
    if (pathArray[i].charAt (0).match (/\{/)) {
      // uppercase the second char, char one is a curly brace
      pathArray[i] = pathArray[i].charAt (1).toUpperCase () + pathArray[i].slice (2);
      // prefix the 'filter name' with By (e.g. ByColumnName) and remove the curly braces
      pathArray[i] = 'By' + pathArray[i].replace ('{', '').replace ('}', '');
    }
    if (pathArray[i].charAt (0).match (/[a-zA-z]/)) {
      pathArray[i] = pathArray[i].charAt (0).toUpperCase () + pathArray[i].slice (1);
    }
  }
  // join the array elements into a single camelcase word
  const functionName = 'Delete' + pathArray.join ('');

  const parameterSignature = GenerateFunctionParameterSignature (apiRequestDefinition);

  const functionDocumentation = GenerateFunctionDocumentation (apiRequestDefinition);

  let headerAccept = '';
  for (const produces of apiRequestDefinition.produces) {
    if (produces.toLowerCase ().includes ('application/json')) {
      headerAccept = `'Accept': 'application/json'`;
    }
  }
  const headersCustom = GenerateCustomHeaderEntries (apiRequestDefinition);
  headersCustom.push (headerAccept);

  // convert the swagger path variables into JS string template variables (e.g. {var} becomes ${; let; })
  const pathUpdated = path.replace (/\{/g, '${');

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

  // break path into an array, and capitalize each array element
  const pathArray = path.replace (/[\.]/g, '_').split ('/');
  for (let i = 0; i < pathArray.length; i++) {
    if (pathArray[i].charAt (0).match (/\{/)) {
      // uppercase the second char, char one is a curly brace
      pathArray[i] = pathArray[i].charAt (1).toUpperCase () + pathArray[i].slice (2);
      // prefix the 'filter name' with By (e.g. ByColumnName) and remove the curly braces
      pathArray[i] = 'By' + pathArray[i].replace ('{', '').replace ('}', '');
    }
    if (pathArray[i].charAt (0).match (/[a-zA-z]/)) {
      pathArray[i] = pathArray[i].charAt (0).toUpperCase () + pathArray[i].slice (1);
    }
  }
  // join the array elements into a single camelcase word, TODO: Create an optional map (API path => ReadableName) to allow better function names
  const functionName = 'Put' + pathArray.join ('');

  const parameterSignature = GenerateFunctionParameterSignature (apiRequestDefinition);

  const functionDocumentation = GenerateFunctionDocumentation (apiRequestDefinition);

  const headersCustom = GenerateCustomHeaderEntries (apiRequestDefinition);
  const headerAccept = GenerateAcceptHeader (apiRequestDefinition, swaggerJson);
  const headerContentType = GenerateContentTypeHeader (apiRequestDefinition, swaggerJson);
  headersCustom.concat (headerAccept, headerContentType);

  const formDataTs: string[] = GenerateFormDataArray (apiRequestDefinition);

  let bodyOrFormField: string = `body: ''`;
  if (formDataTs.length > 0) { bodyOrFormField = 'form'; }
  if (parameterSignature.search ('body:') > 1) { bodyOrFormField = 'body'; }

  // convert the swagger path variables into JS string template variables (e.g. {var} becomes ${var})
  const pathUpdated = path.replace (/\{/g, '${');

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

  // break path into an array, and capitalize each array element
  const pathArray = path.replace (/[\.]/g, '_').split ('/');
  for (let i = 0; i < pathArray.length; i++) {
    if (pathArray[i].charAt (0).match (/\{/)) {
      // uppercase the second char, char one is a curly brace
      pathArray[i] = pathArray[i].charAt (1).toUpperCase () + pathArray[i].slice (2);
      // prefix the 'filter name' with By (e.g. ByColumnName) and remove the curly braces
      pathArray[i] = 'By' + pathArray[i].replace ('{', '').replace ('}', '');
    }
    if (pathArray[i].charAt (0).match (/[a-zA-z]/)) {
      pathArray[i] = pathArray[i].charAt (0).toUpperCase () + pathArray[i].slice (1);
    }
  }
  // join the array elements into a single camelcase word, TODO: Create an optional map (API path => ReadableName) to allow better function names
  const functionName = 'Post' + pathArray.join ('');

  const parameterSignature = GenerateFunctionParameterSignature (apiRequestDefinition);

  const functionDocumentation = GenerateFunctionDocumentation (apiRequestDefinition);

  const headersCustom = GenerateCustomHeaderEntries (apiRequestDefinition);
  const headerAccept = GenerateAcceptHeader (apiRequestDefinition, swaggerJson);
  const headerContentType = GenerateContentTypeHeader (apiRequestDefinition, swaggerJson);
  headersCustom.concat (headerAccept, headerContentType);

  const formDataTs: string[] = GenerateFormDataArray (apiRequestDefinition);

  let bodyOrFormField: string = `body: ''`;
  if (formDataTs.length > 0) { bodyOrFormField = 'form'; }
  if (parameterSignature.search ('body:') > 1) { bodyOrFormField = 'body'; }

  // convert the swagger path variables into JS string template variables (e.g. {var} becomes ${var})
  const pathUpdated = path.replace (/\{/g, '${');

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
  functionDocumentation.push (`* ${getDef.summary}`);

  const description = getDef.description.trim ();
  for (const line of description.split (/\n/)) {
    functionDocumentation.push (`* ${line.trim ()}`);
  }
  for (const param of getDef.parameters) {
    if (param.in !== 'header') {
      functionDocumentation.push (`* @param ${param.name} ${param.type} ${param.description.trim ()}`);
    }
  }

  return functionDocumentation;
}

function GenerateCustomHeaderEntries (requestDefinition: any) {
  const customHeaders = [];

  for (const parameter of requestDefinition.parameters) {
    if (parameter.in === 'header') {
      customHeaders.push (`'${parameter .name}': \`\${${parameter.name.charAt (0).toLowerCase ()}${parameter.name.slice (1)}}\``);
    }
  }

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
    if (param.in === 'body' ) {
      // get the name we use to create the interface for the type, last part of the URI
      const pa = param.schema.$ref.split ('/');
      paramType = `I${pa[pa.length - 1]}`;
    } else {
      // convert numeric swagger supplied types to be represented as JS type 'number'
      paramType = (param.type === 'integer' || param.type === 'float') ? 'number' : param.type;
    }

    if ((param.in !== 'path') && param.required === false) {
      const paramName = `${param.name.charAt (0).toLowerCase ()}${param.name.slice (1)}?`; // make sure the fist letter is lowercase
      parametersOptionalItems += `${parametersOptionalItemsSeparator}${paramName}: ${paramType}`;
      parametersOptionalItemsSeparator = ', ';
    } else if ((param.in !== 'path') && param.required === true) {
      const paramName = `${param.name.charAt (0).toLowerCase ()}${param.name.slice (1)}`; // make sure the fist letter is lowercase
      parameterQueryItems += `${parameterQueryItemsSeparator}${paramName}: ${paramType}`;
      parameterQueryItemsSeparator = ', ';
    } else if (param.in === 'path') {
      const paramName = param.name;
      parameterPathItems += `${parameterPathItemsSeparator}${paramName}: ${paramType}`;
      parameterPathItemsSeparator = ', ';
    }
    // TODO: handle path parameters that are not required? apped them to the end of the optionals?
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
    const interfaceName: string = `I${entry[0]}`;
    const interfaceProps: any[] = [];
    const interfaceDocumentation: string[] = [];
    const currDef: any = entry[1];
    if (currDef.hasOwnProperty ('properties')) {

      Object.keys (currDef.properties).forEach ( (propertyName) => {
        // ensure that the name starts with a lowercase
        let propName = propertyName[0].toLowerCase () + propertyName.slice (1);
        let propNameForDoc = propName;
        // convert types to JS compatible type
        let propType: string;
        const propDescription: string = currDef.properties[propertyName].description;
        switch (currDef.properties[propertyName].type.toLowerCase ()) {
          case ('string'):
            propType = 'string';
            break;
          case('boolean'):
            propType = 'boolean';
            break;
          case('float'):
          case('integer'):
            propType = 'number';
            break;
          case('array'):
            propType = 'any[]';
        }
        // is the propname optional? (check w/the original prop name, not the fixed 'uncapitalized' one)
        if ( currDef.hasOwnProperty ('required') && !currDef.required.includes (propertyName) ) {
          propNameForDoc = `[${propName}]`;
          propName = `${propName}?`;
        }
        // add a line for the interface defining this property.
        interfaceProps.push (`${propName}: ${propType}`);
        // create a line for the interface jsdoc that describes the property.
        interfaceDocumentation.push (`@property {${propType}} ${propNameForDoc} - ${propDescription}`);
      });
      const genResult = GenerateInterfaceString (interfaceName, interfaceProps, interfaceDocumentation);
      interfacesString += genResult;
    } else {
      console.log (`${logMessagePrefix} failed to find 'properties' array for ${interfaceName}`);
      process.exit (1);
    }
  });

  return interfacesString;
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
  if ( ! fs.existsSync (`./out/`)) {
    fs.mkdirSync (`./out`);
  }
  if ( ! fs.existsSync (`./out/${apiClientName}/`)) {
    fs.mkdirSync (`./out/${apiClientName}`);
  }
  fs.writeFileSync ( `./out/${apiClientName}/${apiClientName}.ts`, moduleString);

  return moduleString;
}
