import { listenerCount } from 'cluster';
import fs from 'fs';
import mustache from 'mustache';
import * as requestPromise from 'request-promise';

// disable mustache HTML escaping
mustache.escape =  (text) => text;

const moduleTemplate = fs.readFileSync ('./data/templates/moduleTemplateApiClient.mustache', 'utf8');
const functionTemplateGET = fs.readFileSync ('./data/templates/functionTemplateGET.mustache', 'utf8');
const functionTemplatePOST = fs.readFileSync ('./data/templates/functionTemplatePOST.mustache', 'utf8');

/**
 * Load the swagger json document describing the API
 * @param url the URL of the swagger json doc
 */
async function LoadSwaggerJson ( url: string ) {
  const logMessagePrefix = 'LoadSwaggerJson() ';

  return await requestPromise.get (url)
  .then ((response: any) => {

    const responseJson = JSON.parse (response);

    return responseJson;
  })
  .catch ((errorResponse: any) => {

    console.log (`DEBUG -- errorResponse ${require ('util').inspect (errorResponse, {colors: true, depth: 2})}`);

    return errorResponse;
  });
}

async function GenerateClientCalls (swaggerJson: any, clientLibraryName: string) {

  const logMessagePrefix = 'apiclientget.GenereateClientCalls() ';

  if (!swaggerJson) {
    console.log ('DEBUG -- Attempted iteration of swaggerJson, but swaggerJson is not loaded');

    return new Error (`{logMessagePrefix} Swagger json load failure. Or did you not try to load it yet, hmmm?`);
  }

  let functions = '';
  for (const path in swaggerJson.paths) {
    if (swaggerJson.paths.hasOwnProperty (path)) {
      for (const method in swaggerJson.paths[path]) {
        if (swaggerJson.paths[path].hasOwnProperty (method)) {
          switch (method){
            case 'get':
              functions += CreateGetFunction (path, swaggerJson.paths[path][method], clientLibraryName);
              break;
            case 'post':
              functions += CreatePostFunction (path, swaggerJson.paths[path][method], clientLibraryName);
              break;
            case 'put':
              //
              break;
            case 'delete':
              //
              break;
            default:
              //
              console.log (`DEBUG -- ${logMessagePrefix} ${method} method not implemented. implement me!`);
              break;
          }
        }
      }
      //switch(swaggerJson.paths[path])
    }
  }

  return functions;

}

function CreatePostFunction (path: string, apiRequestDefinition: any, clientLibraryName: string): string {

  const logMessagePrefix = 'CreatePostFunction() ';

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
  // join the array elements into a single camelcase word, TODO: Create an optional map (API path => ReadableName) to allow better function names
  const functionName = 'Post' + pathArray.join ('');

  const parameterSignature = GenFunctionParameterSignature (apiRequestDefinition);

  const functionDocumentation = GenFunctionDocumentation (apiRequestDefinition);

  let headerAccept = '';
  for (const produces of apiRequestDefinition.produces) {
    if (produces.toLowerCase ().includes ('application/json')) {
      headerAccept = `'Accept': 'application/json'`;
    }
  }
  const headersCustom = GenCustomHeaderEntries (apiRequestDefinition);
  headersCustom.concat (headerAccept);

    // convert the swagger path variables into JS string template variables (e.g. {var} becomes ${var})
  const pathUpdated = path.replace (/\{/g, '${');

  const templateInputs = {
    clientLibraryName,
    endpointPath: `${pathUpdated}`,
    functionDocumentation,
    functionName,
    headersCustom,
    parameterSignature
  };

  const functionString = mustache.render (functionTemplatePOST, templateInputs);

  return functionString;
}

function CreateGetFunction (path: string, apiRequestDefinition: any, clientLibraryName: string): string {

  const logMessagePrefix = 'CreateGetFunction() ';

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

  const parameterSignature = GenFunctionParameterSignature (apiRequestDefinition);

  const functionDocumentation = GenFunctionDocumentation (apiRequestDefinition);

  let headerAccept = '';
  for (const produces of apiRequestDefinition.produces) {
    if (produces.toLowerCase ().includes ('application/json')) {
      headerAccept = `'Accept': 'application/json'`;
    }
  }
  const headersCustom = GenCustomHeaderEntries (apiRequestDefinition);
  headersCustom.push (headerAccept);

  // convert the swagger path variables into JS string template variables (e.g. {var} becomes ${var})
  const pathUpdated = path.replace (/\{/g, '${');

  const templateInputs = {
    clientLibraryName,
    endpointPath: `${pathUpdated}`,
    functionDocumentation,
    functionName,
    headersCustom,
    parameterSignature
  };

  const functionString = mustache.render (functionTemplateGET, templateInputs);

  return functionString;
}

function GenFunctionDocumentation (getDef: any): string[] {
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

function GenCustomHeaderEntries (requestDefinition: any) {
  const customHeaders = [];

  for (const parameter of requestDefinition.parameters) {
    if (parameter.in === 'header') {
      customHeaders.push (`'${parameter .name}': \`\${${parameter.name.charAt (0).toLowerCase ()}${parameter.name.slice (1)}}\``);
    }
  }

  return customHeaders;
}

function GenFunctionParameterSignature (apiRequestDefinition: any): string {

  let parameterPathItems = '';
  let parameterPathItemsSeparator = '';
  let parameterQueryItems = '';
  let parameterQueryItemsSeparator = '';
  let parametersOptionalItems = '';
  let parametersOptionalItemsSeparator = '';

  for (const param of apiRequestDefinition.parameters) {
      // convert numeric swagger supplied types to be represented as JS type 'number'
    const paramType = (param.type === 'integer' || param.type === 'float') ? 'number' : param.type;
    if ((param.in === 'query' || param.in === 'header') && param.required === false) {
      const paramName = `${param.name.charAt (0).toLowerCase ()}${param.name.slice (1)}?`; // make sure the fist letter is lowercase
      parametersOptionalItems += `${parametersOptionalItemsSeparator}${paramName}: ${paramType}`;
      parametersOptionalItemsSeparator = ', ';
    } else if ((param.in === 'query' || param.in === 'header') && param.required === true) {
      const paramName = `${param.name.charAt (0).toLowerCase ()}${param.name.slice (1)}`; // make sure the fist letter is lowercase
      parameterQueryItems += `${parameterQueryItemsSeparator}${paramName}: ${paramType}`;
      console.log (`DEBUG -- adding parameterQueryItems ${require ('util').inspect (parameterQueryItems, {colors: true, depth: 2})}`);
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

function GenerateModule (functionsString: string, apiClientName: string): string {

  const templateInputs = {
    apiClientName,
    functions: functionsString
  };

  const moduleString = mustache.render (moduleTemplate, templateInputs);
  if ( ! fs.existsSync (`./src/`)) {
    fs.mkdirSync (`./src`);
  }
  if ( ! fs.existsSync (`./src/${apiClientName}/`)) {
    fs.mkdirSync (`./src/${apiClientName}`);
  }
  fs.writeFileSync ( `./src/${apiClientName}/${apiClientName}.ts`, moduleString);

  return moduleString;
}

exports.LoadSwaggerJson = LoadSwaggerJson;
exports.GenerateClientCalls = GenerateClientCalls;
exports.GenerateModule = GenerateModule;
