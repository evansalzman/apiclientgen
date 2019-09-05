import requestPromise from 'request-promise';
import * as log from 'winston';

/**
 * List of TDM Tables
 * The TDM Tables endpoint returns information about the TDM Tables.
 * The list is limited to tables that the requester can access.
 * @param Authorization string OAuth2 token as Bearer type
 * @param searchText string Text used to limit results
 * @param sortOrder string Results are ordered by this column number list
 * @param startRow integer The first row to show, used for paging
 * @param pageSize integer The number of rows to return, used for paging
 */
async function GetTdmtables (searchText?: string, sortOrder?: string, startRow?: number, pageSize?: number) {

  const logMessagePrefix = 'TdmTablesClient.GetTdmtables() ';

  const config = {
    apiServerUrl: ''
  };
  const basePath: string = '';
  const apiUri: string = '';
  const accessToken: string = '';

  const options = {
    headers: {
      'Authorization': 'Bearer YourTokenHere',
      'Accept': 'application/json',
      'User-Agent': 'automated-testing-request',
      'X-Conversation-Id': 'automated-testing-request-id'
    },
    json: true,
    method: 'GET',
    url: `${config.apiServerUrl}${basePath}/tdmtables`
  };

  return await requestPromise (options)
    .then ((response: any) => {
      log.debug (`$[logMessagePrefix] API JSON response ${require ('util').inspect (response, {colors: true, depth: 2})}`);

      return response;
    })
    . catch ( (errorResponse: any) => {
      log.info (`$[logMessagePrefix] There was an error calling the API.`);
      log.debug (`$[logMessagePrefix] API JSON errorResponse ${require ('util').inspect (errorResponse, {colors: true, depth: 2})}`);

      return errorResponse;
    });

}
exports.GetTdmtables = GetTdmtables;

/**
 * Add new TDM Table
 * Allows authorized user to add new TDM Table definition.
 * @param Authorization string OAuth2 token as Bearer type
 * @param body undefined Minimal TDM Table Definition
 */
async function PostTdmtables () {

  const logMessagePrefix = 'TdmTablesClient.PostTdmtables() ';

  const config = {
    apiServerUrl: ''
  };
  const basePath: string = '';
  const apiUri: string = '';
  const accessToken: string = '';

  const body = {

  };

  const options = {
    body,
    headers: {
      'Authorization': 'Bearer YourTokenHere',
      'User-Agent': 'automated-testing-request',
      'X-Conversation-Id': 'automated-testing-request-id'
    },
    json: true,
    method: 'POST',
    url: `${config.apiServerUrl}${basePath}/tdmtables`
  };

  return await requestPromise (options)
    .then ((response: any) => {
      log.debug (`$[logMessagePrefix] API JSON response ${require ('util').inspect (response, {colors: true, depth: 2})}`);

      return response;
    })
    . catch ( (errorResponse: any) => {
      log.info (`$[logMessagePrefix] There was an error calling the API.`);
      log.debug (`$[logMessagePrefix] API JSON errorResponse ${require ('util').inspect (errorResponse, {colors: true, depth: 2})}`);

      return errorResponse;
    });

}
exports.PostTdmtables = PostTdmtables;

/**
 * Retrieves an existing TDM table
 * Allows authorized user to retrieve TDM Table definitions by Id.
 * @param Authorization string OAuth2 token as Bearer type
 * @param tdmTableId string TDM Table ID to retrieve
 */
async function GetTdmtablesByTdmTableId (tdmTableId: string) {

  const logMessagePrefix = 'TdmTablesClient.GetTdmtablesByTdmTableId() ';

  const config = {
    apiServerUrl: ''
  };
  const basePath: string = '';
  const apiUri: string = '';
  const accessToken: string = '';

  const options = {
    headers: {
      'Authorization': 'Bearer YourTokenHere',
      'Accept': 'application/json',
      'User-Agent': 'automated-testing-request',
      'X-Conversation-Id': 'automated-testing-request-id'
    },
    json: true,
    method: 'GET',
    url: `${config.apiServerUrl}${basePath}/tdmtables/${tdmTableId}`
  };

  return await requestPromise (options)
    .then ((response: any) => {
      log.debug (`$[logMessagePrefix] API JSON response ${require ('util').inspect (response, {colors: true, depth: 2})}`);

      return response;
    })
    . catch ( (errorResponse: any) => {
      log.info (`$[logMessagePrefix] There was an error calling the API.`);
      log.debug (`$[logMessagePrefix] API JSON errorResponse ${require ('util').inspect (errorResponse, {colors: true, depth: 2})}`);

      return errorResponse;
    });

}
exports.GetTdmtablesByTdmTableId = GetTdmtablesByTdmTableId;

/**
 * Retrieves an existing TDM table
 * Allows authorized user to retrieve TDM Table definitions by Table Name.
 * @param Authorization string OAuth2 token as Bearer type
 * @param tdmTableName string TDM Table Name to retrieve
 */
async function GetTdmtablesTablenameByTdmTableName (tdmTableName: string) {

  const logMessagePrefix = 'TdmTablesClient.GetTdmtablesTablenameByTdmTableName() ';

  const config = {
    apiServerUrl: ''
  };
  const basePath: string = '';
  const apiUri: string = '';
  const accessToken: string = '';

  const options = {
    headers: {
      'Authorization': 'Bearer YourTokenHere',
      'Accept': 'application/json',
      'User-Agent': 'automated-testing-request',
      'X-Conversation-Id': 'automated-testing-request-id'
    },
    json: true,
    method: 'GET',
    url: `${config.apiServerUrl}${basePath}/tdmtables/tablename/${tdmTableName}`
  };

  return await requestPromise (options)
    .then ((response: any) => {
      log.debug (`$[logMessagePrefix] API JSON response ${require ('util').inspect (response, {colors: true, depth: 2})}`);

      return response;
    })
    . catch ( (errorResponse: any) => {
      log.info (`$[logMessagePrefix] There was an error calling the API.`);
      log.debug (`$[logMessagePrefix] API JSON errorResponse ${require ('util').inspect (errorResponse, {colors: true, depth: 2})}`);

      return errorResponse;
    });

}
exports.GetTdmtablesTablenameByTdmTableName = GetTdmtablesTablenameByTdmTableName;

/**
 * Retrieves a TDM table id using the table name
 * Allows authorized user to retrieve TDM Table ID using the Table Name.
 * @param Authorization string OAuth2 token as Bearer type
 * @param tdmTableName string TDM Table Name to retrieve
 */
async function GetTdmtablesIdByTdmTableName (tdmTableName: string) {

  const logMessagePrefix = 'TdmTablesClient.GetTdmtablesIdByTdmTableName() ';

  const config = {
    apiServerUrl: ''
  };
  const basePath: string = '';
  const apiUri: string = '';
  const accessToken: string = '';

  const options = {
    headers: {
      'Authorization': 'Bearer YourTokenHere',
      'Accept': 'application/json',
      'User-Agent': 'automated-testing-request',
      'X-Conversation-Id': 'automated-testing-request-id'
    },
    json: true,
    method: 'GET',
    url: `${config.apiServerUrl}${basePath}/tdmtables/id/${tdmTableName}`
  };

  return await requestPromise (options)
    .then ((response: any) => {
      log.debug (`$[logMessagePrefix] API JSON response ${require ('util').inspect (response, {colors: true, depth: 2})}`);

      return response;
    })
    . catch ( (errorResponse: any) => {
      log.info (`$[logMessagePrefix] There was an error calling the API.`);
      log.debug (`$[logMessagePrefix] API JSON errorResponse ${require ('util').inspect (errorResponse, {colors: true, depth: 2})}`);

      return errorResponse;
    });

}
exports.GetTdmtablesIdByTdmTableName = GetTdmtablesIdByTdmTableName;

/**
 * Retrieves a TDM table name using the table ID
 * Allows authorized user to retrieve TDM Table Name using the Table ID.
 * @param Authorization string OAuth2 token as Bearer type
 * @param tdmTableId string TDM Table ID to retrieve
 */
async function GetTdmtablesNameByTdmTableId (tdmTableId: string) {

  const logMessagePrefix = 'TdmTablesClient.GetTdmtablesNameByTdmTableId() ';

  const config = {
    apiServerUrl: ''
  };
  const basePath: string = '';
  const apiUri: string = '';
  const accessToken: string = '';

  const options = {
    headers: {
      'Authorization': 'Bearer YourTokenHere',
      'Accept': 'application/json',
      'User-Agent': 'automated-testing-request',
      'X-Conversation-Id': 'automated-testing-request-id'
    },
    json: true,
    method: 'GET',
    url: `${config.apiServerUrl}${basePath}/tdmtables/name/${tdmTableId}`
  };

  return await requestPromise (options)
    .then ((response: any) => {
      log.debug (`$[logMessagePrefix] API JSON response ${require ('util').inspect (response, {colors: true, depth: 2})}`);

      return response;
    })
    . catch ( (errorResponse: any) => {
      log.info (`$[logMessagePrefix] There was an error calling the API.`);
      log.debug (`$[logMessagePrefix] API JSON errorResponse ${require ('util').inspect (errorResponse, {colors: true, depth: 2})}`);

      return errorResponse;
    });

}
exports.GetTdmtablesNameByTdmTableId = GetTdmtablesNameByTdmTableId;

/**
 * List of Columns
 * The TDM columns endpoint returns information about the columns definitions.
 * The list is limited to columns in the provided table.
 * @param Authorization string OAuth2 token as Bearer type
 * @param tdmTableId string TDM Table ID using these columns
 * @param searchText string Text used to limit results
 * @param sortOrder string Results are ordered by this column number list
 * @param startRow integer The first row to show, used for paging
 * @param pageSize integer The number of rows to return, used for paging
 */
async function GetColumnsTableidByTdmTableId (tdmTableId: string, searchText?: string, sortOrder?: string, startRow?: number, pageSize?: number) {

  const logMessagePrefix = 'TdmTablesClient.GetColumnsTableidByTdmTableId() ';

  const config = {
    apiServerUrl: ''
  };
  const basePath: string = '';
  const apiUri: string = '';
  const accessToken: string = '';

  const options = {
    headers: {
      'Authorization': 'Bearer YourTokenHere',
      'Accept': 'application/json',
      'User-Agent': 'automated-testing-request',
      'X-Conversation-Id': 'automated-testing-request-id'
    },
    json: true,
    method: 'GET',
    url: `${config.apiServerUrl}${basePath}/columns/tableid/${tdmTableId}`
  };

  return await requestPromise (options)
    .then ((response: any) => {
      log.debug (`$[logMessagePrefix] API JSON response ${require ('util').inspect (response, {colors: true, depth: 2})}`);

      return response;
    })
    . catch ( (errorResponse: any) => {
      log.info (`$[logMessagePrefix] There was an error calling the API.`);
      log.debug (`$[logMessagePrefix] API JSON errorResponse ${require ('util').inspect (errorResponse, {colors: true, depth: 2})}`);

      return errorResponse;
    });

}
exports.GetColumnsTableidByTdmTableId = GetColumnsTableidByTdmTableId;

/**
 * Add new Column
 * Allows authorized user to add new Column definition.
 * @param Authorization string OAuth2 token as Bearer type
 * @param tdmTableId string TDM Table ID using these columns
 * @param body undefined Column Definition
 */
async function PostColumnsTableidByTdmTableId (tdmTableId: string) {

  const logMessagePrefix = 'TdmTablesClient.PostColumnsTableidByTdmTableId() ';

  const config = {
    apiServerUrl: ''
  };
  const basePath: string = '';
  const apiUri: string = '';
  const accessToken: string = '';

  const body = {

  };

  const options = {
    body,
    headers: {
      'Authorization': 'Bearer YourTokenHere',
      'User-Agent': 'automated-testing-request',
      'X-Conversation-Id': 'automated-testing-request-id'
    },
    json: true,
    method: 'POST',
    url: `${config.apiServerUrl}${basePath}/columns/tableid/${tdmTableId}`
  };

  return await requestPromise (options)
    .then ((response: any) => {
      log.debug (`$[logMessagePrefix] API JSON response ${require ('util').inspect (response, {colors: true, depth: 2})}`);

      return response;
    })
    . catch ( (errorResponse: any) => {
      log.info (`$[logMessagePrefix] There was an error calling the API.`);
      log.debug (`$[logMessagePrefix] API JSON errorResponse ${require ('util').inspect (errorResponse, {colors: true, depth: 2})}`);

      return errorResponse;
    });

}
exports.PostColumnsTableidByTdmTableId = PostColumnsTableidByTdmTableId;

/**
 * List of Columns
 * The TDM columns endpoint returns information about the columns definitions.
 * The list is limited to columns in the provided table.
 * @param Authorization string OAuth2 token as Bearer type
 * @param tdmTableName string TDM Table Name using these columns
 * @param searchText string Text used to limit results
 * @param sortOrder string Results are ordered by this column number list
 * @param startRow integer The first row to show, used for paging
 * @param pageSize integer The number of rows to return, used for paging
 */
async function GetColumnsTablenameByTdmTableName (tdmTableName: string, searchText?: string, sortOrder?: string, startRow?: number, pageSize?: number) {

  const logMessagePrefix = 'TdmTablesClient.GetColumnsTablenameByTdmTableName() ';

  const config = {
    apiServerUrl: ''
  };
  const basePath: string = '';
  const apiUri: string = '';
  const accessToken: string = '';

  const options = {
    headers: {
      'Authorization': 'Bearer YourTokenHere',
      'Accept': 'application/json',
      'User-Agent': 'automated-testing-request',
      'X-Conversation-Id': 'automated-testing-request-id'
    },
    json: true,
    method: 'GET',
    url: `${config.apiServerUrl}${basePath}/columns/tablename/${tdmTableName}`
  };

  return await requestPromise (options)
    .then ((response: any) => {
      log.debug (`$[logMessagePrefix] API JSON response ${require ('util').inspect (response, {colors: true, depth: 2})}`);

      return response;
    })
    . catch ( (errorResponse: any) => {
      log.info (`$[logMessagePrefix] There was an error calling the API.`);
      log.debug (`$[logMessagePrefix] API JSON errorResponse ${require ('util').inspect (errorResponse, {colors: true, depth: 2})}`);

      return errorResponse;
    });

}
exports.GetColumnsTablenameByTdmTableName = GetColumnsTablenameByTdmTableName;

/**
 * Add new Column
 * Allows authorized user to add new Column definition.
 * @param Authorization string OAuth2 token as Bearer type
 * @param tdmTableName string TDM Table Name using these columns
 * @param body undefined Column Definition
 */
async function PostColumnsTablenameByTdmTableName (tdmTableName: string) {

  const logMessagePrefix = 'TdmTablesClient.PostColumnsTablenameByTdmTableName() ';

  const config = {
    apiServerUrl: ''
  };
  const basePath: string = '';
  const apiUri: string = '';
  const accessToken: string = '';

  const body = {

  };

  const options = {
    body,
    headers: {
      'Authorization': 'Bearer YourTokenHere',
      'User-Agent': 'automated-testing-request',
      'X-Conversation-Id': 'automated-testing-request-id'
    },
    json: true,
    method: 'POST',
    url: `${config.apiServerUrl}${basePath}/columns/tablename/${tdmTableName}`
  };

  return await requestPromise (options)
    .then ((response: any) => {
      log.debug (`$[logMessagePrefix] API JSON response ${require ('util').inspect (response, {colors: true, depth: 2})}`);

      return response;
    })
    . catch ( (errorResponse: any) => {
      log.info (`$[logMessagePrefix] There was an error calling the API.`);
      log.debug (`$[logMessagePrefix] API JSON errorResponse ${require ('util').inspect (errorResponse, {colors: true, depth: 2})}`);

      return errorResponse;
    });

}
exports.PostColumnsTablenameByTdmTableName = PostColumnsTablenameByTdmTableName;

/**
 * Retrieves an existing Column
 * Allows authorized user to retrieve Column definitions by Id.
 * @param Authorization string OAuth2 token as Bearer type
 * @param columnId string Column ID to retrieve
 */
async function GetColumnsByColumnId (columnId: string) {

  const logMessagePrefix = 'TdmTablesClient.GetColumnsByColumnId() ';

  const config = {
    apiServerUrl: ''
  };
  const basePath: string = '';
  const apiUri: string = '';
  const accessToken: string = '';

  const options = {
    headers: {
      'Authorization': 'Bearer YourTokenHere',
      'Accept': 'application/json',
      'User-Agent': 'automated-testing-request',
      'X-Conversation-Id': 'automated-testing-request-id'
    },
    json: true,
    method: 'GET',
    url: `${config.apiServerUrl}${basePath}/columns/${columnId}`
  };

  return await requestPromise (options)
    .then ((response: any) => {
      log.debug (`$[logMessagePrefix] API JSON response ${require ('util').inspect (response, {colors: true, depth: 2})}`);

      return response;
    })
    . catch ( (errorResponse: any) => {
      log.info (`$[logMessagePrefix] There was an error calling the API.`);
      log.debug (`$[logMessagePrefix] API JSON errorResponse ${require ('util').inspect (errorResponse, {colors: true, depth: 2})}`);

      return errorResponse;
    });

}
exports.GetColumnsByColumnId = GetColumnsByColumnId;

/**
 * List of Column Types
 * The TDM column types endpoint returns information about the columns types.
 * @param Authorization string OAuth2 token as Bearer type
 */
async function GetColumntypes () {

  const logMessagePrefix = 'TdmTablesClient.GetColumntypes() ';

  const config = {
    apiServerUrl: ''
  };
  const basePath: string = '';
  const apiUri: string = '';
  const accessToken: string = '';

  const options = {
    headers: {
      'Authorization': 'Bearer YourTokenHere',
      'Accept': 'application/json',
      'User-Agent': 'automated-testing-request',
      'X-Conversation-Id': 'automated-testing-request-id'
    },
    json: true,
    method: 'GET',
    url: `${config.apiServerUrl}${basePath}/columntypes`
  };

  return await requestPromise (options)
    .then ((response: any) => {
      log.debug (`$[logMessagePrefix] API JSON response ${require ('util').inspect (response, {colors: true, depth: 2})}`);

      return response;
    })
    . catch ( (errorResponse: any) => {
      log.info (`$[logMessagePrefix] There was an error calling the API.`);
      log.debug (`$[logMessagePrefix] API JSON errorResponse ${require ('util').inspect (errorResponse, {colors: true, depth: 2})}`);

      return errorResponse;
    });

}
exports.GetColumntypes = GetColumntypes;

/**
 * List of Rows
 * The TDM rows endpoint returns the tables rows.
 * The list is limited by the request parameters.
 * @param Authorization string OAuth2 token as Bearer type
 * @param tdmTableId string TDM Table ID having these rows
 * @param searchText string Text used to limit results
 * @param sortOrder string Results are ordered by this column number list
 * @param startRow integer The first row to show, used for paging
 * @param pageSize integer The number of rows to return, used for paging
 * @param includeInActiveColumns boolean If in-active columns should be included with row information
 */
async function GetRowsTableidByTdmTableId (tdmTableId: string, searchText?: string, sortOrder?: string, startRow?: number, pageSize?: number, includeInActiveColumns?: boolean) {

  const logMessagePrefix = 'TdmTablesClient.GetRowsTableidByTdmTableId() ';

  const config = {
    apiServerUrl: ''
  };
  const basePath: string = '';
  const apiUri: string = '';
  const accessToken: string = '';

  const options = {
    headers: {
      'Authorization': 'Bearer YourTokenHere',
      'Accept': 'application/json',
      'User-Agent': 'automated-testing-request',
      'X-Conversation-Id': 'automated-testing-request-id'
    },
    json: true,
    method: 'GET',
    url: `${config.apiServerUrl}${basePath}/rows/tableid/${tdmTableId}`
  };

  return await requestPromise (options)
    .then ((response: any) => {
      log.debug (`$[logMessagePrefix] API JSON response ${require ('util').inspect (response, {colors: true, depth: 2})}`);

      return response;
    })
    . catch ( (errorResponse: any) => {
      log.info (`$[logMessagePrefix] There was an error calling the API.`);
      log.debug (`$[logMessagePrefix] API JSON errorResponse ${require ('util').inspect (errorResponse, {colors: true, depth: 2})}`);

      return errorResponse;
    });

}
exports.GetRowsTableidByTdmTableId = GetRowsTableidByTdmTableId;

/**
 * Add new Row
 * Allows authorized user to add new Row.
 * @param Authorization string OAuth2 token as Bearer type
 * @param tdmTableId string TDM Table ID to add row
 * @param body undefined Row Information
 */
async function PostRowsTableidByTdmTableId (tdmTableId: string) {

  const logMessagePrefix = 'TdmTablesClient.PostRowsTableidByTdmTableId() ';

  const config = {
    apiServerUrl: ''
  };
  const basePath: string = '';
  const apiUri: string = '';
  const accessToken: string = '';

  const body = {

  };

  const options = {
    body,
    headers: {
      'Authorization': 'Bearer YourTokenHere',
      'User-Agent': 'automated-testing-request',
      'X-Conversation-Id': 'automated-testing-request-id'
    },
    json: true,
    method: 'POST',
    url: `${config.apiServerUrl}${basePath}/rows/tableid/${tdmTableId}`
  };

  return await requestPromise (options)
    .then ((response: any) => {
      log.debug (`$[logMessagePrefix] API JSON response ${require ('util').inspect (response, {colors: true, depth: 2})}`);

      return response;
    })
    . catch ( (errorResponse: any) => {
      log.info (`$[logMessagePrefix] There was an error calling the API.`);
      log.debug (`$[logMessagePrefix] API JSON errorResponse ${require ('util').inspect (errorResponse, {colors: true, depth: 2})}`);

      return errorResponse;
    });

}
exports.PostRowsTableidByTdmTableId = PostRowsTableidByTdmTableId;

/**
 * List of Rows
 * The TDM rows endpoint returns the tables rows.
 * The list is limited by the request parameters.
 * @param Authorization string OAuth2 token as Bearer type
 * @param tdmTableId string TDM Table ID having these rows
 * @param searchParam string WHERE clause used to limit results
 * @param sortOrder string Results are ordered by this column number list
 * @param startRow integer The first row to show, used for paging
 * @param pageSize integer The number of rows to return, used for paging
 * @param includeInActiveColumns boolean If in-active columns should be included with row information
 */
async function GetRowsTableidSearchByTdmTableIdBySearchParam (tdmTableId: string, searchParam: string, sortOrder?: string, startRow?: number, pageSize?: number, includeInActiveColumns?: boolean) {

  const logMessagePrefix = 'TdmTablesClient.GetRowsTableidSearchByTdmTableIdBySearchParam() ';

  const config = {
    apiServerUrl: ''
  };
  const basePath: string = '';
  const apiUri: string = '';
  const accessToken: string = '';

  const options = {
    headers: {
      'Authorization': 'Bearer YourTokenHere',
      'Accept': 'application/json',
      'User-Agent': 'automated-testing-request',
      'X-Conversation-Id': 'automated-testing-request-id'
    },
    json: true,
    method: 'GET',
    url: `${config.apiServerUrl}${basePath}/rows/tableid/search/${tdmTableId}/${searchParam}`
  };

  return await requestPromise (options)
    .then ((response: any) => {
      log.debug (`$[logMessagePrefix] API JSON response ${require ('util').inspect (response, {colors: true, depth: 2})}`);

      return response;
    })
    . catch ( (errorResponse: any) => {
      log.info (`$[logMessagePrefix] There was an error calling the API.`);
      log.debug (`$[logMessagePrefix] API JSON errorResponse ${require ('util').inspect (errorResponse, {colors: true, depth: 2})}`);

      return errorResponse;
    });

}
exports.GetRowsTableidSearchByTdmTableIdBySearchParam = GetRowsTableidSearchByTdmTableIdBySearchParam;

/**
 * List of Rows
 * The TDM rows endpoint returns the tables rows.
 * The list is limited by the request parameters.
 * @param Authorization string OAuth2 token as Bearer type
 * @param tdmTableName string TDM Table name having these rows
 * @param searchText string Text used to limit results
 * @param sortOrder string Results are ordered by this column number list
 * @param startRow integer The first row to show, used for paging
 * @param pageSize integer The number of rows to return, used for paging
 * @param includeInActiveColumns boolean If in-active columns should be included with row information
 */
async function GetRowsTablenameByTdmTableName (tdmTableName: string, searchText?: string, sortOrder?: string, startRow?: number, pageSize?: number, includeInActiveColumns?: boolean) {

  const logMessagePrefix = 'TdmTablesClient.GetRowsTablenameByTdmTableName() ';

  const config = {
    apiServerUrl: ''
  };
  const basePath: string = '';
  const apiUri: string = '';
  const accessToken: string = '';

  const options = {
    headers: {
      'Authorization': 'Bearer YourTokenHere',
      'Accept': 'application/json',
      'User-Agent': 'automated-testing-request',
      'X-Conversation-Id': 'automated-testing-request-id'
    },
    json: true,
    method: 'GET',
    url: `${config.apiServerUrl}${basePath}/rows/tablename/${tdmTableName}`
  };

  return await requestPromise (options)
    .then ((response: any) => {
      log.debug (`$[logMessagePrefix] API JSON response ${require ('util').inspect (response, {colors: true, depth: 2})}`);

      return response;
    })
    . catch ( (errorResponse: any) => {
      log.info (`$[logMessagePrefix] There was an error calling the API.`);
      log.debug (`$[logMessagePrefix] API JSON errorResponse ${require ('util').inspect (errorResponse, {colors: true, depth: 2})}`);

      return errorResponse;
    });

}
exports.GetRowsTablenameByTdmTableName = GetRowsTablenameByTdmTableName;

/**
 * Add new Row
 * Allows authorized user to add new Row.
 * @param Authorization string OAuth2 token as Bearer type
 * @param tdmTableName string TDM Table name to add row
 * @param body undefined Row Information
 */
async function PostRowsTablenameByTdmTableName (tdmTableName: string) {

  const logMessagePrefix = 'TdmTablesClient.PostRowsTablenameByTdmTableName() ';

  const config = {
    apiServerUrl: ''
  };
  const basePath: string = '';
  const apiUri: string = '';
  const accessToken: string = '';

  const body = {

  };

  const options = {
    body,
    headers: {
      'Authorization': 'Bearer YourTokenHere',
      'User-Agent': 'automated-testing-request',
      'X-Conversation-Id': 'automated-testing-request-id'
    },
    json: true,
    method: 'POST',
    url: `${config.apiServerUrl}${basePath}/rows/tablename/${tdmTableName}`
  };

  return await requestPromise (options)
    .then ((response: any) => {
      log.debug (`$[logMessagePrefix] API JSON response ${require ('util').inspect (response, {colors: true, depth: 2})}`);

      return response;
    })
    . catch ( (errorResponse: any) => {
      log.info (`$[logMessagePrefix] There was an error calling the API.`);
      log.debug (`$[logMessagePrefix] API JSON errorResponse ${require ('util').inspect (errorResponse, {colors: true, depth: 2})}`);

      return errorResponse;
    });

}
exports.PostRowsTablenameByTdmTableName = PostRowsTablenameByTdmTableName;

/**
 * List of Rows
 * The TDM rows endpoint returns the tables rows.
 * The list is limited by the request parameters.
 * @param Authorization string OAuth2 token as Bearer type
 * @param tdmTableName string TDM Table Name having these rows
 * @param searchParam string WHERE clause used to limit results
 * @param sortOrder string Results are ordered by this column number list
 * @param startRow integer The first row to show, used for paging
 * @param pageSize integer The number of rows to return, used for paging
 * @param includeInActiveColumns boolean If in-active columns should be included with row information
 */
async function GetRowsTablenameSearchByTdmTableNameBySearchParam (tdmTableName: string, searchParam: string, sortOrder?: string, startRow?: number, pageSize?: number, includeInActiveColumns?: boolean) {

  const logMessagePrefix = 'TdmTablesClient.GetRowsTablenameSearchByTdmTableNameBySearchParam() ';

  const config = {
    apiServerUrl: ''
  };
  const basePath: string = '';
  const apiUri: string = '';
  const accessToken: string = '';

  const options = {
    headers: {
      'Authorization': 'Bearer YourTokenHere',
      'Accept': 'application/json',
      'User-Agent': 'automated-testing-request',
      'X-Conversation-Id': 'automated-testing-request-id'
    },
    json: true,
    method: 'GET',
    url: `${config.apiServerUrl}${basePath}/rows/tablename/search/${tdmTableName}/${searchParam}`
  };

  return await requestPromise (options)
    .then ((response: any) => {
      log.debug (`$[logMessagePrefix] API JSON response ${require ('util').inspect (response, {colors: true, depth: 2})}`);

      return response;
    })
    . catch ( (errorResponse: any) => {
      log.info (`$[logMessagePrefix] There was an error calling the API.`);
      log.debug (`$[logMessagePrefix] API JSON errorResponse ${require ('util').inspect (errorResponse, {colors: true, depth: 2})}`);

      return errorResponse;
    });

}
exports.GetRowsTablenameSearchByTdmTableNameBySearchParam = GetRowsTablenameSearchByTdmTableNameBySearchParam;

/**
 * Retrieve a single Row
 * The TDM rows endpoint returns the requested tables row.
 * @param Authorization string OAuth2 token as Bearer type
 * @param tdmTableId string TDM Table ID having this row
 * @param rowId string Row ID to retrieve
 * @param includeInActiveColumns boolean If in-active columns should be included with row information
 */
async function GetRowsTableidByTdmTableIdByRowId (tdmTableId: string, rowId: string, includeInActiveColumns?: boolean) {

  const logMessagePrefix = 'TdmTablesClient.GetRowsTableidByTdmTableIdByRowId() ';

  const config = {
    apiServerUrl: ''
  };
  const basePath: string = '';
  const apiUri: string = '';
  const accessToken: string = '';

  const options = {
    headers: {
      'Authorization': 'Bearer YourTokenHere',
      'Accept': 'application/json',
      'User-Agent': 'automated-testing-request',
      'X-Conversation-Id': 'automated-testing-request-id'
    },
    json: true,
    method: 'GET',
    url: `${config.apiServerUrl}${basePath}/rows/tableid/${tdmTableId}/${rowId}`
  };

  return await requestPromise (options)
    .then ((response: any) => {
      log.debug (`$[logMessagePrefix] API JSON response ${require ('util').inspect (response, {colors: true, depth: 2})}`);

      return response;
    })
    . catch ( (errorResponse: any) => {
      log.info (`$[logMessagePrefix] There was an error calling the API.`);
      log.debug (`$[logMessagePrefix] API JSON errorResponse ${require ('util').inspect (errorResponse, {colors: true, depth: 2})}`);

      return errorResponse;
    });

}
exports.GetRowsTableidByTdmTableIdByRowId = GetRowsTableidByTdmTableIdByRowId;

/**
 * Count of the row in TDM Table.
 * The endpoint returns the count of the rows in TDM table matching the search param.
 * @param Authorization string OAuth2 token as Bearer type
 * @param tdmTableName string TDM Table Name whose row count needs to be fetched
 * @param searchParam string Text used to limit results
 */
async function GetRowsCountTablenameSearchByTdmTableNameBySearchParam (tdmTableName: string, searchParam: string) {

  const logMessagePrefix = 'TdmTablesClient.GetRowsCountTablenameSearchByTdmTableNameBySearchParam() ';

  const config = {
    apiServerUrl: ''
  };
  const basePath: string = '';
  const apiUri: string = '';
  const accessToken: string = '';

  const options = {
    headers: {
      'Authorization': 'Bearer YourTokenHere',
      'Accept': 'application/json',
      'User-Agent': 'automated-testing-request',
      'X-Conversation-Id': 'automated-testing-request-id'
    },
    json: true,
    method: 'GET',
    url: `${config.apiServerUrl}${basePath}/rows/count/tablename/search/${tdmTableName}/${searchParam}`
  };

  return await requestPromise (options)
    .then ((response: any) => {
      log.debug (`$[logMessagePrefix] API JSON response ${require ('util').inspect (response, {colors: true, depth: 2})}`);

      return response;
    })
    . catch ( (errorResponse: any) => {
      log.info (`$[logMessagePrefix] There was an error calling the API.`);
      log.debug (`$[logMessagePrefix] API JSON errorResponse ${require ('util').inspect (errorResponse, {colors: true, depth: 2})}`);

      return errorResponse;
    });

}
exports.GetRowsCountTablenameSearchByTdmTableNameBySearchParam = GetRowsCountTablenameSearchByTdmTableNameBySearchParam;

/**
 * Count of the row in TDM Table.
 * The endpoint returns the count of the rows in TDM table matching the search param.
 * @param Authorization string OAuth2 token as Bearer type
 * @param tdmTableId string TDM Table Id whose row count needs to be fetched
 * @param searchParam string Text used to limit results
 */
async function GetRowsCountTableidSearchByTdmTableIdBySearchParam (tdmTableId: string, searchParam: string) {

  const logMessagePrefix = 'TdmTablesClient.GetRowsCountTableidSearchByTdmTableIdBySearchParam() ';

  const config = {
    apiServerUrl: ''
  };
  const basePath: string = '';
  const apiUri: string = '';
  const accessToken: string = '';

  const options = {
    headers: {
      'Authorization': 'Bearer YourTokenHere',
      'Accept': 'application/json',
      'User-Agent': 'automated-testing-request',
      'X-Conversation-Id': 'automated-testing-request-id'
    },
    json: true,
    method: 'GET',
    url: `${config.apiServerUrl}${basePath}/rows/count/tableid/search/${tdmTableId}/${searchParam}`
  };

  return await requestPromise (options)
    .then ((response: any) => {
      log.debug (`$[logMessagePrefix] API JSON response ${require ('util').inspect (response, {colors: true, depth: 2})}`);

      return response;
    })
    . catch ( (errorResponse: any) => {
      log.info (`$[logMessagePrefix] There was an error calling the API.`);
      log.debug (`$[logMessagePrefix] API JSON errorResponse ${require ('util').inspect (errorResponse, {colors: true, depth: 2})}`);

      return errorResponse;
    });

}
exports.GetRowsCountTableidSearchByTdmTableIdBySearchParam = GetRowsCountTableidSearchByTdmTableIdBySearchParam;

/**
 * Count of the row in Archive Table.
 * The endpoint returns the count of the rows in Archived TDM table matching the search param.
 * @param Authorization string OAuth2 token as Bearer type
 * @param tdmTableName string TDM Table Name whose archived row count needs to be fetched
 * @param searchParam string Text used to limit results
 */
async function GetRowsArchiveCountTablenameSearchByTdmTableNameBySearchParam (tdmTableName: string, searchParam: string) {

  const logMessagePrefix = 'TdmTablesClient.GetRowsArchiveCountTablenameSearchByTdmTableNameBySearchParam() ';

  const config = {
    apiServerUrl: ''
  };
  const basePath: string = '';
  const apiUri: string = '';
  const accessToken: string = '';

  const options = {
    headers: {
      'Authorization': 'Bearer YourTokenHere',
      'Accept': 'application/json',
      'User-Agent': 'automated-testing-request',
      'X-Conversation-Id': 'automated-testing-request-id'
    },
    json: true,
    method: 'GET',
    url: `${config.apiServerUrl}${basePath}/rows/archive/count/tablename/search/${tdmTableName}/${searchParam}`
  };

  return await requestPromise (options)
    .then ((response: any) => {
      log.debug (`$[logMessagePrefix] API JSON response ${require ('util').inspect (response, {colors: true, depth: 2})}`);

      return response;
    })
    . catch ( (errorResponse: any) => {
      log.info (`$[logMessagePrefix] There was an error calling the API.`);
      log.debug (`$[logMessagePrefix] API JSON errorResponse ${require ('util').inspect (errorResponse, {colors: true, depth: 2})}`);

      return errorResponse;
    });

}
exports.GetRowsArchiveCountTablenameSearchByTdmTableNameBySearchParam = GetRowsArchiveCountTablenameSearchByTdmTableNameBySearchParam;

/**
 * Count of the row in Archive Table.
 * The endpoint returns the count of the rows in Archived TDM table matching the search param.
 * @param Authorization string OAuth2 token as Bearer type
 * @param tdmTableId string TDM Table Id whose archived row count needs to be fetched
 * @param searchParam string Text used to limit results
 */
async function GetRowsArchiveCountTableidSearchByTdmTableIdBySearchParam (tdmTableId: string, searchParam: string) {

  const logMessagePrefix = 'TdmTablesClient.GetRowsArchiveCountTableidSearchByTdmTableIdBySearchParam() ';

  const config = {
    apiServerUrl: ''
  };
  const basePath: string = '';
  const apiUri: string = '';
  const accessToken: string = '';

  const options = {
    headers: {
      'Authorization': 'Bearer YourTokenHere',
      'Accept': 'application/json',
      'User-Agent': 'automated-testing-request',
      'X-Conversation-Id': 'automated-testing-request-id'
    },
    json: true,
    method: 'GET',
    url: `${config.apiServerUrl}${basePath}/rows/archive/count/tableid/search/${tdmTableId}/${searchParam}`
  };

  return await requestPromise (options)
    .then ((response: any) => {
      log.debug (`$[logMessagePrefix] API JSON response ${require ('util').inspect (response, {colors: true, depth: 2})}`);

      return response;
    })
    . catch ( (errorResponse: any) => {
      log.info (`$[logMessagePrefix] There was an error calling the API.`);
      log.debug (`$[logMessagePrefix] API JSON errorResponse ${require ('util').inspect (errorResponse, {colors: true, depth: 2})}`);

      return errorResponse;
    });

}
exports.GetRowsArchiveCountTableidSearchByTdmTableIdBySearchParam = GetRowsArchiveCountTableidSearchByTdmTableIdBySearchParam;
