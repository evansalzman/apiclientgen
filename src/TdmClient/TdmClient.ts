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
async function GetTdmtables (searchtext?: string, sortorder?: string, startrow?: number, pagesize?: number) {

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
exports.GetTdmtables = GetTdmtables; // TODO: Create an optional map (API path => ReadableName) to allow better function names

/**
 * Retrieves an existing TDM table
 * Allows authorized user to retrieve TDM Table definitions by Id.
 * @param Authorization string OAuth2 token as Bearer type
 * @param tdmTableId string TDM Table ID to retrieve
 */
async function GetTdmtablesByTdmTableId (tdmtableid: string) {

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
    url: `${config.apiServerUrl}${basePath}/tdmtables/{tdmTableId}`
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
exports.GetTdmtablesByTdmTableId = GetTdmtablesByTdmTableId; // TODO: Create an optional map (API path => ReadableName) to allow better function names

/**
 * Retrieves an existing TDM table
 * Allows authorized user to retrieve TDM Table definitions by Table Name.
 * @param Authorization string OAuth2 token as Bearer type
 * @param tdmTableName string TDM Table Name to retrieve
 */
async function GetTdmtablesTablenameByTdmTableName (tdmtablename: string) {

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
    url: `${config.apiServerUrl}${basePath}/tdmtables/tablename/{tdmTableName}`
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
exports.GetTdmtablesTablenameByTdmTableName = GetTdmtablesTablenameByTdmTableName; // TODO: Create an optional map (API path => ReadableName) to allow better function names

/**
 * Retrieves a TDM table id using the table name
 * Allows authorized user to retrieve TDM Table ID using the Table Name.
 * @param Authorization string OAuth2 token as Bearer type
 * @param tdmTableName string TDM Table Name to retrieve
 */
async function GetTdmtablesIdByTdmTableName (tdmtablename: string) {

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
    url: `${config.apiServerUrl}${basePath}/tdmtables/id/{tdmTableName}`
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
exports.GetTdmtablesIdByTdmTableName = GetTdmtablesIdByTdmTableName; // TODO: Create an optional map (API path => ReadableName) to allow better function names

/**
 * Retrieves a TDM table name using the table ID
 * Allows authorized user to retrieve TDM Table Name using the Table ID.
 * @param Authorization string OAuth2 token as Bearer type
 * @param tdmTableId string TDM Table ID to retrieve
 */
async function GetTdmtablesNameByTdmTableId (tdmtableid: string) {

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
    url: `${config.apiServerUrl}${basePath}/tdmtables/name/{tdmTableId}`
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
exports.GetTdmtablesNameByTdmTableId = GetTdmtablesNameByTdmTableId; // TODO: Create an optional map (API path => ReadableName) to allow better function names

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
async function GetColumnsTableidByTdmTableId (tdmtableid: string, searchtext?: string, sortorder?: string, startrow?: number, pagesize?: number) {

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
    url: `${config.apiServerUrl}${basePath}/columns/tableid/{tdmTableId}`
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
exports.GetColumnsTableidByTdmTableId = GetColumnsTableidByTdmTableId; // TODO: Create an optional map (API path => ReadableName) to allow better function names

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
async function GetColumnsTablenameByTdmTableName (tdmtablename: string, searchtext?: string, sortorder?: string, startrow?: number, pagesize?: number) {

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
    url: `${config.apiServerUrl}${basePath}/columns/tablename/{tdmTableName}`
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
exports.GetColumnsTablenameByTdmTableName = GetColumnsTablenameByTdmTableName; // TODO: Create an optional map (API path => ReadableName) to allow better function names

/**
 * Retrieves an existing Column
 * Allows authorized user to retrieve Column definitions by Id.
 * @param Authorization string OAuth2 token as Bearer type
 * @param columnId string Column ID to retrieve
 */
async function GetColumnsByColumnId (columnid: string) {

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
    url: `${config.apiServerUrl}${basePath}/columns/{columnId}`
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
exports.GetColumnsByColumnId = GetColumnsByColumnId; // TODO: Create an optional map (API path => ReadableName) to allow better function names

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
exports.GetColumntypes = GetColumntypes; // TODO: Create an optional map (API path => ReadableName) to allow better function names

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
async function GetRowsTableidByTdmTableId (tdmtableid: string, searchtext?: string, sortorder?: string, startrow?: number, pagesize?: number, includeinactivecolumns?: boolean) {

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
    url: `${config.apiServerUrl}${basePath}/rows/tableid/{tdmTableId}`
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
exports.GetRowsTableidByTdmTableId = GetRowsTableidByTdmTableId; // TODO: Create an optional map (API path => ReadableName) to allow better function names

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
async function GetRowsTableidSearchByTdmTableIdBySearchParam (tdmtableid: string, searchparam: string, sortorder?: string, startrow?: number, pagesize?: number, includeinactivecolumns?: boolean) {

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
    url: `${config.apiServerUrl}${basePath}/rows/tableid/search/{tdmTableId}/{searchParam}`
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
exports.GetRowsTableidSearchByTdmTableIdBySearchParam = GetRowsTableidSearchByTdmTableIdBySearchParam; // TODO: Create an optional map (API path => ReadableName) to allow better function names

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
async function GetRowsTablenameByTdmTableName (tdmtablename: string, searchtext?: string, sortorder?: string, startrow?: number, pagesize?: number, includeinactivecolumns?: boolean) {

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
    url: `${config.apiServerUrl}${basePath}/rows/tablename/{tdmTableName}`
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
exports.GetRowsTablenameByTdmTableName = GetRowsTablenameByTdmTableName; // TODO: Create an optional map (API path => ReadableName) to allow better function names

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
async function GetRowsTablenameSearchByTdmTableNameBySearchParam (tdmtablename: string, searchparam: string, sortorder?: string, startrow?: number, pagesize?: number, includeinactivecolumns?: boolean) {

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
    url: `${config.apiServerUrl}${basePath}/rows/tablename/search/{tdmTableName}/{searchParam}`
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
exports.GetRowsTablenameSearchByTdmTableNameBySearchParam = GetRowsTablenameSearchByTdmTableNameBySearchParam; // TODO: Create an optional map (API path => ReadableName) to allow better function names

/**
 * Retrieve a single Row
 * The TDM rows endpoint returns the requested tables row.
 * @param Authorization string OAuth2 token as Bearer type
 * @param tdmTableId string TDM Table ID having this row
 * @param rowId string Row ID to retrieve
 * @param includeInActiveColumns boolean If in-active columns should be included with row information
 */
async function GetRowsTableidByTdmTableIdByRowId (tdmtableid: string, rowid: string, includeinactivecolumns?: boolean) {

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
    url: `${config.apiServerUrl}${basePath}/rows/tableid/{tdmTableId}/{rowId}`
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
exports.GetRowsTableidByTdmTableIdByRowId = GetRowsTableidByTdmTableIdByRowId; // TODO: Create an optional map (API path => ReadableName) to allow better function names

/**
 * Count of the row in TDM Table.
 * The endpoint returns the count of the rows in TDM table matching the search param.
 * @param Authorization string OAuth2 token as Bearer type
 * @param tdmTableName string TDM Table Name whose row count needs to be fetched
 * @param searchParam string Text used to limit results
 */
async function GetRowsCountTablenameSearchByTdmTableNameBySearchParam (tdmtablename: string, searchparam: string) {

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
    url: `${config.apiServerUrl}${basePath}/rows/count/tablename/search/{tdmTableName}/{searchParam}`
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
exports.GetRowsCountTablenameSearchByTdmTableNameBySearchParam = GetRowsCountTablenameSearchByTdmTableNameBySearchParam; // TODO: Create an optional map (API path => ReadableName) to allow better function names

/**
 * Count of the row in TDM Table.
 * The endpoint returns the count of the rows in TDM table matching the search param.
 * @param Authorization string OAuth2 token as Bearer type
 * @param tdmTableId string TDM Table Id whose row count needs to be fetched
 * @param searchParam string Text used to limit results
 */
async function GetRowsCountTableidSearchByTdmTableIdBySearchParam (tdmtableid: string, searchparam: string) {

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
    url: `${config.apiServerUrl}${basePath}/rows/count/tableid/search/{tdmTableId}/{searchParam}`
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
exports.GetRowsCountTableidSearchByTdmTableIdBySearchParam = GetRowsCountTableidSearchByTdmTableIdBySearchParam; // TODO: Create an optional map (API path => ReadableName) to allow better function names

/**
 * Count of the row in Archive Table.
 * The endpoint returns the count of the rows in Archived TDM table matching the search param.
 * @param Authorization string OAuth2 token as Bearer type
 * @param tdmTableName string TDM Table Name whose archived row count needs to be fetched
 * @param searchParam string Text used to limit results
 */
async function GetRowsArchiveCountTablenameSearchByTdmTableNameBySearchParam (tdmtablename: string, searchparam: string) {

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
    url: `${config.apiServerUrl}${basePath}/rows/archive/count/tablename/search/{tdmTableName}/{searchParam}`
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
exports.GetRowsArchiveCountTablenameSearchByTdmTableNameBySearchParam = GetRowsArchiveCountTablenameSearchByTdmTableNameBySearchParam; // TODO: Create an optional map (API path => ReadableName) to allow better function names

/**
 * Count of the row in Archive Table.
 * The endpoint returns the count of the rows in Archived TDM table matching the search param.
 * @param Authorization string OAuth2 token as Bearer type
 * @param tdmTableId string TDM Table Id whose archived row count needs to be fetched
 * @param searchParam string Text used to limit results
 */
async function GetRowsArchiveCountTableidSearchByTdmTableIdBySearchParam (tdmtableid: string, searchparam: string) {

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
    url: `${config.apiServerUrl}${basePath}/rows/archive/count/tableid/search/{tdmTableId}/{searchParam}`
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
exports.GetRowsArchiveCountTableidSearchByTdmTableIdBySearchParam = GetRowsArchiveCountTableidSearchByTdmTableIdBySearchParam; // TODO: Create an optional map (API path => ReadableName) to allow better function names
