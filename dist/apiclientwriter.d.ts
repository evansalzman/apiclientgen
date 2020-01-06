/**
 * Based on a swagger doc, create an API client module for NodeJS
 * @param swaggerJsonUrl {string} The URL for the swagger json document
 * @param apiClientName {string} The name you want to give the api client module
 * @param {swaggerCallback} {function} a callback that handles any swagger.json customizations/fixes that are desired. Receives swagger.json, should return updated swagger.json.
 * @param {moudleCallback} {function} a callback that handles any scode customizations/fixes that are desired. Receives apiClient code, should return updated apiClientCode.
 */
export declare function Write(swaggerJsonUrl: string, apiClientName: string, swaggerCallback?: any, moduleCallback?: any): Promise<number>;
/**
 * Load the swagger json document describing the API
 * @param url the URL of the swagger json doc ppppppp
 */
export declare function LoadSwaggerJson(url: string): Promise<any>;
export declare function GenerateClientCalls(swaggerJson: any, clientLibraryName: string): Promise<string>;
export declare function GenerateInterfaces(swaggerJson: any): string;
export declare function GenerateModule(functionsString: string, interfaceString: string, apiClientName: string): string;
export declare function WriteModule(moduleString: string, apiClientName: string): number;
