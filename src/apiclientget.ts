import * as requestPromise from 'request-promise';

let swaggerJson: any;
const getFunctionTemplate = `
/**
{{functionDocumentation}}
**/
async fuction {{functionName}} ({{parameterSignature}}) {

  const logMessagePrefix = '{{functionName}}() ';

  const options = {{options}}

  return await requestPromise (options)
    .then ((response: any) => {
      log.debug(\`$[logMessagePrefix] API JSON response \${require ('util').inspect (response, {colors: true, depth: 2})}\`);
      return response;
    })
    . catch ( (errorResponse: any) => {
      log.info(\`$[logMessagePrefix] There was an error calling the API.\`);
      log.debug(\`$[logMessagePrefix] API JSON errorResponse \${require ('util').inspect (errorResponse, {colors: true, depth: 2})}\`);
      return errorResponse;
    };)

}
`;

/**
 * Load the swagger json document describing the API
 * @param url the URL of the swagger json doc
 */
async function LoadSwaggerJson ( url: string ) {
  const logMessagePrefix = 'LoadSwaggerJson() ';

  return await requestPromise.get (url)
  .then ((response: any) => {

    //console.log (`DEBUG -- response ${require ('util').inspect (response, {colors: true, depth: 2})}`);

    swaggerJson = JSON.parse (response);

    //console.log (`DEBUG -- swaggerJson ${require ('util').inspect (swaggerJson, {colors: true, depth: 2})}`);

    return response;
  })
  .catch ((errorResponse: any) => {

    console.log (`DEBUG -- errorResponse ${require ('util').inspect (errorResponse, {colors: true, depth: 2})}`);

    return errorResponse;
  });
}

async function GenerateClientCalls () {

  const logMessagePrefix = 'apiclientget.GenereateClientCalls() ';

  if (!swaggerJson) {
    console.log ('DEBUG -- Attempted iteration of swaggerJson, but swaggerJson is not loaded');

    return new Error (`{logMessagePrefix} Swagger json load failure. Or did you not try to load it yet, hmmm?`);
  }
  let functions = '';
  for (const path in swaggerJson.paths) {
    if (swaggerJson.paths.hasOwnProperty (path)) {
      // console.log (`DEBUG -- path ${require ('util').inspect (path, {colors: true, depth: 2})}`);
      // console.log (`DEBUG -- swaggerJson.paths[path] ${require ('util').inspect (swaggerJson.paths[path], {colors: true, depth: 2})}`);
      for (const method in swaggerJson.paths[path]) {
        if (swaggerJson.paths[path].hasOwnProperty (method)) {
          switch (method){
            case 'get':
              functions += CreateGetFunction (path, swaggerJson.paths[path][method]);
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

function CreateGetFunction (path: string, getDef: any): string {

  const logMessagePrefix = 'CreateGetMethod() ';

  console.log (`DEBUG -- getDef ${require ('util').inspect (getDef, {colors: true, depth: 2})}`);

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

  const parameterSignature = GenFunctionParameterSignature (getDef);

  const functionDocumentation = GenFunctionDocumentation (getDef);

  const options = GenRequestOptions (path, getDef);

  const functionString = getFunctionTemplate
    .replace ('{{functionDocumentation}}', functionDocumentation)
    .replace ('{{functionName}}', functionName)
    .replace ('{{parameterSignature}}', parameterSignature)
    .replace ('{{options}}', options);

  return functionString;
}

function GenFunctionDocumentation (getDef: any): string {
  let functionDocumentation = ` * ${getDef.summary}\n`;
  functionDocumentation += ` * ${getDef.description}\n`;
  let paramSeparator = '';
  for (const param of getDef.parameters) {
    functionDocumentation += ` * @param ${param.name} ${param.type} ${param.description}\n`;
    paramSeparator = ', ';
  }

  return functionDocumentation;
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

function GenRequestOptions (path: string, requestDef: any): string {

  // url values use of path.replace() function below replaces instances of swagger docs {variableName} with javascripts ${variableName}
  const options = `{
    headers: {
      'Accept': 'application/json', // TODO: how to add this field ONLY when application/json is specified in array requestDef.get.produces[]
      'Authorization': \`BEARER \${access_token}\`,
      'User-Agent': 'automated-testing-request',
      'X-Conversation-Id': 'automated-testing-request-id'
    },
    json: true,
    method: 'GET',
    url: \`\${config.apiServerUrl}\${basePath}${path.replace (/\{/g, '${')}\`
  };`;

  return options;
}

exports.LoadSwaggerJson = LoadSwaggerJson;
exports.GenerateClientCalls = GenerateClientCalls;
