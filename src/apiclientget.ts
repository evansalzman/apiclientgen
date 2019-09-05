import fs from 'fs';
import mustache from 'mustache';
import * as requestPromise from 'request-promise';

// disable mustache HTML escaping
mustache.escape =  (text) => text;

const moduleTemplate = fs.readFileSync ('./data/templates/moduleTemplateApiClient.mustache', 'utf8');
const functionTemplateGET = fs.readFileSync ('./data/templates/functionTemplateGET.mustache', 'utf8');

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
              //
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

function CreateGetFunction (path: string, apiRequestDefinition: any, clientLibraryName: string): string {

  const logMessagePrefix = 'CreateGetMethod() ';

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
      headerAccept = `'Accept': 'application/json',`;
    }
  }

  const templateInputs = {
    clientLibraryName,
    endpointPath: `${path}`,
    functionDocumentation,
    functionName,
    headerAccept,
    parameterSignature
  };

  const functionString = mustache.render (functionTemplateGET, templateInputs);

  return functionString;
}

function GenFunctionDocumentation (getDef: any): string {
  let functionDocumentation = ` * ${getDef.summary}\n`;

  const description = getDef.description.trim ();
  for (const line of description.split (/\n/)) {
    functionDocumentation += ` * ${line}\n`;
  }
  for (const param of getDef.parameters) {
    functionDocumentation += ` * @param ${param.name} ${param.type} ${param.description.trim ()}\n`;
  }

  return functionDocumentation.trim ();
}

function GenFunctionParameterSignature (getDef: any): string {
  let parameterSignature = '';
  let parameterSeparator = '';
  for (const param of getDef.parameters) {
    // handle integer and float type conversion to JS number
    parameterSignature += `${parameterSeparator}${param.name.toLowerCase ()}: ${(param.type === 'integer' || param.type === 'float') ? 'number' : param.type}`;
    parameterSeparator = ', ';
  }

  return parameterSignature;
}

function GenerateModule (functionsString: string): string {

  const templateInputs = {
    functions: functionsString
  };

  const moduleString = mustache.render (moduleTemplate, templateInputs);
  console.log (`DEBUG -- templateInputs ${require ('util').inspect (templateInputs, {colors: true, depth: 2})}`);

  return moduleString;
}

exports.LoadSwaggerJson = LoadSwaggerJson;
exports.GenerateClientCalls = GenerateClientCalls;
exports.GenerateModule = GenerateModule;
