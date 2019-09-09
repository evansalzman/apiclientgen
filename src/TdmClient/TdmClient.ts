import requestPromise from 'request-promise';
import * as log from 'winston';

export class TdmClient {

  public apiServerUrl: string;

  constructor (apiServerUrl: string) {
    this.apiServerUrl = apiServerUrl;
  }

  /**
   * List of TDM Tables
   * The TDM Tables endpoint returns information about the TDM Tables.
   * The list is limited to tables that the requester can access.
   * @param searchText string Text used to limit results
   * @param sortOrder string Results are ordered by this column number list
   * @param startRow integer The first row to show, used for paging
   * @param pageSize integer The number of rows to return, used for paging
   */
  public async GetTdmtables (authorization: string, searchText?: string, sortOrder?: string, startRow?: number, pageSize?: number) {

    const logMessagePrefix = 'TdmClient.GetTdmtables() ';

    const accessToken: string = '';

    const options = {
      headers: {
        'Authorization': `${authorization}`,
        'Accept': 'application/json',
        'User-Agent': 'automated-testing-request',
        'X-Conversation-Id': 'automated-testing-request-id'
      },
      json: true,
      method: 'GET',
      url: `${this.apiServerUrl}/tdmtables`
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
  /**
   * Add new TDM Table
   * Allows authorized user to add new TDM Table definition.
   * @param body undefined Minimal TDM Table Definition
   */
  public async PostTdmtables (authorization: string, body: undefined) {

    const logMessagePrefix = 'TdmClient.PostTdmtables() ';

    const options = {
      body,
      headers: {
        'Authorization': `${authorization}`,
        'User-Agent': 'automated-testing-request',
        'X-Conversation-Id': 'automated-testing-request-id'
      },
      json: true,
      method: 'POST',
      url: `${this.apiServerUrl}/tdmtables`
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
  /**
   * Retrieves an existing TDM table
   * Allows authorized user to retrieve TDM Table definitions by Id.
   * @param tdmTableId string TDM Table ID to retrieve
   */
  public async GetTdmtablesByTdmTableId (tdmTableId: string, authorization: string) {

    const logMessagePrefix = 'TdmClient.GetTdmtablesByTdmTableId() ';

    const accessToken: string = '';

    const options = {
      headers: {
        'Authorization': `${authorization}`,
        'Accept': 'application/json',
        'User-Agent': 'automated-testing-request',
        'X-Conversation-Id': 'automated-testing-request-id'
      },
      json: true,
      method: 'GET',
      url: `${this.apiServerUrl}/tdmtables/${tdmTableId}`
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
  /**
   * Retrieves an existing TDM table
   * Allows authorized user to retrieve TDM Table definitions by Table Name.
   * @param tdmTableName string TDM Table Name to retrieve
   */
  public async GetTdmtablesTablenameByTdmTableName (tdmTableName: string, authorization: string) {

    const logMessagePrefix = 'TdmClient.GetTdmtablesTablenameByTdmTableName() ';

    const accessToken: string = '';

    const options = {
      headers: {
        'Authorization': `${authorization}`,
        'Accept': 'application/json',
        'User-Agent': 'automated-testing-request',
        'X-Conversation-Id': 'automated-testing-request-id'
      },
      json: true,
      method: 'GET',
      url: `${this.apiServerUrl}/tdmtables/tablename/${tdmTableName}`
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
  /**
   * Retrieves a TDM table id using the table name
   * Allows authorized user to retrieve TDM Table ID using the Table Name.
   * @param tdmTableName string TDM Table Name to retrieve
   */
  public async GetTdmtablesIdByTdmTableName (tdmTableName: string, authorization: string) {

    const logMessagePrefix = 'TdmClient.GetTdmtablesIdByTdmTableName() ';

    const accessToken: string = '';

    const options = {
      headers: {
        'Authorization': `${authorization}`,
        'Accept': 'application/json',
        'User-Agent': 'automated-testing-request',
        'X-Conversation-Id': 'automated-testing-request-id'
      },
      json: true,
      method: 'GET',
      url: `${this.apiServerUrl}/tdmtables/id/${tdmTableName}`
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
  /**
   * Retrieves a TDM table name using the table ID
   * Allows authorized user to retrieve TDM Table Name using the Table ID.
   * @param tdmTableId string TDM Table ID to retrieve
   */
  public async GetTdmtablesNameByTdmTableId (tdmTableId: string, authorization: string) {

    const logMessagePrefix = 'TdmClient.GetTdmtablesNameByTdmTableId() ';

    const accessToken: string = '';

    const options = {
      headers: {
        'Authorization': `${authorization}`,
        'Accept': 'application/json',
        'User-Agent': 'automated-testing-request',
        'X-Conversation-Id': 'automated-testing-request-id'
      },
      json: true,
      method: 'GET',
      url: `${this.apiServerUrl}/tdmtables/name/${tdmTableId}`
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
  /**
   * List of Columns
   * The TDM columns endpoint returns information about the columns definitions.
   * The list is limited to columns in the provided table.
   * @param tdmTableId string TDM Table ID using these columns
   * @param searchText string Text used to limit results
   * @param sortOrder string Results are ordered by this column number list
   * @param startRow integer The first row to show, used for paging
   * @param pageSize integer The number of rows to return, used for paging
   */
  public async GetColumnsTableidByTdmTableId (tdmTableId: string, authorization: string, searchText?: string, sortOrder?: string, startRow?: number, pageSize?: number) {

    const logMessagePrefix = 'TdmClient.GetColumnsTableidByTdmTableId() ';

    const accessToken: string = '';

    const options = {
      headers: {
        'Authorization': `${authorization}`,
        'Accept': 'application/json',
        'User-Agent': 'automated-testing-request',
        'X-Conversation-Id': 'automated-testing-request-id'
      },
      json: true,
      method: 'GET',
      url: `${this.apiServerUrl}/columns/tableid/${tdmTableId}`
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
  /**
   * Add new Column
   * Allows authorized user to add new Column definition.
   * @param tdmTableId string TDM Table ID using these columns
   * @param body undefined Column Definition
   */
  public async PostColumnsTableidByTdmTableId (tdmTableId: string, authorization: string, body: undefined) {

    const logMessagePrefix = 'TdmClient.PostColumnsTableidByTdmTableId() ';

    const options = {
      body,
      headers: {
        'Authorization': `${authorization}`,
        'User-Agent': 'automated-testing-request',
        'X-Conversation-Id': 'automated-testing-request-id'
      },
      json: true,
      method: 'POST',
      url: `${this.apiServerUrl}/columns/tableid/${tdmTableId}`
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
  /**
   * List of Columns
   * The TDM columns endpoint returns information about the columns definitions.
   * The list is limited to columns in the provided table.
   * @param tdmTableName string TDM Table Name using these columns
   * @param searchText string Text used to limit results
   * @param sortOrder string Results are ordered by this column number list
   * @param startRow integer The first row to show, used for paging
   * @param pageSize integer The number of rows to return, used for paging
   */
  public async GetColumnsTablenameByTdmTableName (tdmTableName: string, authorization: string, searchText?: string, sortOrder?: string, startRow?: number, pageSize?: number) {

    const logMessagePrefix = 'TdmClient.GetColumnsTablenameByTdmTableName() ';

    const accessToken: string = '';

    const options = {
      headers: {
        'Authorization': `${authorization}`,
        'Accept': 'application/json',
        'User-Agent': 'automated-testing-request',
        'X-Conversation-Id': 'automated-testing-request-id'
      },
      json: true,
      method: 'GET',
      url: `${this.apiServerUrl}/columns/tablename/${tdmTableName}`
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
  /**
   * Add new Column
   * Allows authorized user to add new Column definition.
   * @param tdmTableName string TDM Table Name using these columns
   * @param body undefined Column Definition
   */
  public async PostColumnsTablenameByTdmTableName (tdmTableName: string, authorization: string, body: undefined) {

    const logMessagePrefix = 'TdmClient.PostColumnsTablenameByTdmTableName() ';

    const options = {
      body,
      headers: {
        'Authorization': `${authorization}`,
        'User-Agent': 'automated-testing-request',
        'X-Conversation-Id': 'automated-testing-request-id'
      },
      json: true,
      method: 'POST',
      url: `${this.apiServerUrl}/columns/tablename/${tdmTableName}`
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
  /**
   * Retrieves an existing Column
   * Allows authorized user to retrieve Column definitions by Id.
   * @param columnId string Column ID to retrieve
   */
  public async GetColumnsByColumnId (columnId: string, authorization: string) {

    const logMessagePrefix = 'TdmClient.GetColumnsByColumnId() ';

    const accessToken: string = '';

    const options = {
      headers: {
        'Authorization': `${authorization}`,
        'Accept': 'application/json',
        'User-Agent': 'automated-testing-request',
        'X-Conversation-Id': 'automated-testing-request-id'
      },
      json: true,
      method: 'GET',
      url: `${this.apiServerUrl}/columns/${columnId}`
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
  /**
   * List of Column Types
   * The TDM column types endpoint returns information about the columns types.
   */
  public async GetColumntypes (authorization: string) {

    const logMessagePrefix = 'TdmClient.GetColumntypes() ';

    const accessToken: string = '';

    const options = {
      headers: {
        'Authorization': `${authorization}`,
        'Accept': 'application/json',
        'User-Agent': 'automated-testing-request',
        'X-Conversation-Id': 'automated-testing-request-id'
      },
      json: true,
      method: 'GET',
      url: `${this.apiServerUrl}/columntypes`
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
  /**
   * List of Rows
   * The TDM rows endpoint returns the tables rows.
   * The list is limited by the request parameters.
   * @param tdmTableId string TDM Table ID having these rows
   * @param searchText string Text used to limit results
   * @param sortOrder string Results are ordered by this column number list
   * @param startRow integer The first row to show, used for paging
   * @param pageSize integer The number of rows to return, used for paging
   * @param includeInActiveColumns boolean If in-active columns should be included with row information
   */
  public async GetRowsTableidByTdmTableId (tdmTableId: string, authorization: string, searchText?: string, sortOrder?: string, startRow?: number, pageSize?: number, includeInActiveColumns?: boolean) {

    const logMessagePrefix = 'TdmClient.GetRowsTableidByTdmTableId() ';

    const accessToken: string = '';

    const options = {
      headers: {
        'Authorization': `${authorization}`,
        'Accept': 'application/json',
        'User-Agent': 'automated-testing-request',
        'X-Conversation-Id': 'automated-testing-request-id'
      },
      json: true,
      method: 'GET',
      url: `${this.apiServerUrl}/rows/tableid/${tdmTableId}`
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
  /**
   * Add new Row
   * Allows authorized user to add new Row.
   * @param tdmTableId string TDM Table ID to add row
   * @param body undefined Row Information
   */
  public async PostRowsTableidByTdmTableId (tdmTableId: string, authorization: string, body: undefined) {

    const logMessagePrefix = 'TdmClient.PostRowsTableidByTdmTableId() ';

    const options = {
      body,
      headers: {
        'Authorization': `${authorization}`,
        'User-Agent': 'automated-testing-request',
        'X-Conversation-Id': 'automated-testing-request-id'
      },
      json: true,
      method: 'POST',
      url: `${this.apiServerUrl}/rows/tableid/${tdmTableId}`
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
  /**
   * List of Rows
   * The TDM rows endpoint returns the tables rows.
   * The list is limited by the request parameters.
   * @param tdmTableId string TDM Table ID having these rows
   * @param searchParam string WHERE clause used to limit results
   * @param sortOrder string Results are ordered by this column number list
   * @param startRow integer The first row to show, used for paging
   * @param pageSize integer The number of rows to return, used for paging
   * @param includeInActiveColumns boolean If in-active columns should be included with row information
   */
  public async GetRowsTableidSearchByTdmTableIdBySearchParam (tdmTableId: string, searchParam: string, authorization: string, sortOrder?: string, startRow?: number, pageSize?: number, includeInActiveColumns?: boolean) {

    const logMessagePrefix = 'TdmClient.GetRowsTableidSearchByTdmTableIdBySearchParam() ';

    const accessToken: string = '';

    const options = {
      headers: {
        'Authorization': `${authorization}`,
        'Accept': 'application/json',
        'User-Agent': 'automated-testing-request',
        'X-Conversation-Id': 'automated-testing-request-id'
      },
      json: true,
      method: 'GET',
      url: `${this.apiServerUrl}/rows/tableid/search/${tdmTableId}/${searchParam}`
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
  /**
   * List of Rows
   * The TDM rows endpoint returns the tables rows.
   * The list is limited by the request parameters.
   * @param tdmTableName string TDM Table name having these rows
   * @param searchText string Text used to limit results
   * @param sortOrder string Results are ordered by this column number list
   * @param startRow integer The first row to show, used for paging
   * @param pageSize integer The number of rows to return, used for paging
   * @param includeInActiveColumns boolean If in-active columns should be included with row information
   */
  public async GetRowsTablenameByTdmTableName (tdmTableName: string, authorization: string, searchText?: string, sortOrder?: string, startRow?: number, pageSize?: number, includeInActiveColumns?: boolean) {

    const logMessagePrefix = 'TdmClient.GetRowsTablenameByTdmTableName() ';

    const accessToken: string = '';

    const options = {
      headers: {
        'Authorization': `${authorization}`,
        'Accept': 'application/json',
        'User-Agent': 'automated-testing-request',
        'X-Conversation-Id': 'automated-testing-request-id'
      },
      json: true,
      method: 'GET',
      url: `${this.apiServerUrl}/rows/tablename/${tdmTableName}`
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
  /**
   * Add new Row
   * Allows authorized user to add new Row.
   * @param tdmTableName string TDM Table name to add row
   * @param body undefined Row Information
   */
  public async PostRowsTablenameByTdmTableName (tdmTableName: string, authorization: string, body: undefined) {

    const logMessagePrefix = 'TdmClient.PostRowsTablenameByTdmTableName() ';

    const options = {
      body,
      headers: {
        'Authorization': `${authorization}`,
        'User-Agent': 'automated-testing-request',
        'X-Conversation-Id': 'automated-testing-request-id'
      },
      json: true,
      method: 'POST',
      url: `${this.apiServerUrl}/rows/tablename/${tdmTableName}`
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
  /**
   * List of Rows
   * The TDM rows endpoint returns the tables rows.
   * The list is limited by the request parameters.
   * @param tdmTableName string TDM Table Name having these rows
   * @param searchParam string WHERE clause used to limit results
   * @param sortOrder string Results are ordered by this column number list
   * @param startRow integer The first row to show, used for paging
   * @param pageSize integer The number of rows to return, used for paging
   * @param includeInActiveColumns boolean If in-active columns should be included with row information
   */
  public async GetRowsTablenameSearchByTdmTableNameBySearchParam (tdmTableName: string, searchParam: string, authorization: string, sortOrder?: string, startRow?: number, pageSize?: number, includeInActiveColumns?: boolean) {

    const logMessagePrefix = 'TdmClient.GetRowsTablenameSearchByTdmTableNameBySearchParam() ';

    const accessToken: string = '';

    const options = {
      headers: {
        'Authorization': `${authorization}`,
        'Accept': 'application/json',
        'User-Agent': 'automated-testing-request',
        'X-Conversation-Id': 'automated-testing-request-id'
      },
      json: true,
      method: 'GET',
      url: `${this.apiServerUrl}/rows/tablename/search/${tdmTableName}/${searchParam}`
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
  /**
   * Retrieve a single Row
   * The TDM rows endpoint returns the requested tables row.
   * @param tdmTableId string TDM Table ID having this row
   * @param rowId string Row ID to retrieve
   * @param includeInActiveColumns boolean If in-active columns should be included with row information
   */
  public async GetRowsTableidByTdmTableIdByRowId (tdmTableId: string, rowId: string, authorization: string, includeInActiveColumns?: boolean) {

    const logMessagePrefix = 'TdmClient.GetRowsTableidByTdmTableIdByRowId() ';

    const accessToken: string = '';

    const options = {
      headers: {
        'Authorization': `${authorization}`,
        'Accept': 'application/json',
        'User-Agent': 'automated-testing-request',
        'X-Conversation-Id': 'automated-testing-request-id'
      },
      json: true,
      method: 'GET',
      url: `${this.apiServerUrl}/rows/tableid/${tdmTableId}/${rowId}`
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
  /**
   * Count of the row in TDM Table.
   * The endpoint returns the count of the rows in TDM table matching the search param.
   * @param tdmTableName string TDM Table Name whose row count needs to be fetched
   * @param searchParam string Text used to limit results
   */
  public async GetRowsCountTablenameSearchByTdmTableNameBySearchParam (tdmTableName: string, searchParam: string, authorization: string) {

    const logMessagePrefix = 'TdmClient.GetRowsCountTablenameSearchByTdmTableNameBySearchParam() ';

    const accessToken: string = '';

    const options = {
      headers: {
        'Authorization': `${authorization}`,
        'Accept': 'application/json',
        'User-Agent': 'automated-testing-request',
        'X-Conversation-Id': 'automated-testing-request-id'
      },
      json: true,
      method: 'GET',
      url: `${this.apiServerUrl}/rows/count/tablename/search/${tdmTableName}/${searchParam}`
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
  /**
   * Count of the row in TDM Table.
   * The endpoint returns the count of the rows in TDM table matching the search param.
   * @param tdmTableId string TDM Table Id whose row count needs to be fetched
   * @param searchParam string Text used to limit results
   */
  public async GetRowsCountTableidSearchByTdmTableIdBySearchParam (tdmTableId: string, searchParam: string, authorization: string) {

    const logMessagePrefix = 'TdmClient.GetRowsCountTableidSearchByTdmTableIdBySearchParam() ';

    const accessToken: string = '';

    const options = {
      headers: {
        'Authorization': `${authorization}`,
        'Accept': 'application/json',
        'User-Agent': 'automated-testing-request',
        'X-Conversation-Id': 'automated-testing-request-id'
      },
      json: true,
      method: 'GET',
      url: `${this.apiServerUrl}/rows/count/tableid/search/${tdmTableId}/${searchParam}`
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
  /**
   * Count of the row in Archive Table.
   * The endpoint returns the count of the rows in Archived TDM table matching the search param.
   * @param tdmTableName string TDM Table Name whose archived row count needs to be fetched
   * @param searchParam string Text used to limit results
   */
  public async GetRowsArchiveCountTablenameSearchByTdmTableNameBySearchParam (tdmTableName: string, searchParam: string, authorization: string) {

    const logMessagePrefix = 'TdmClient.GetRowsArchiveCountTablenameSearchByTdmTableNameBySearchParam() ';

    const accessToken: string = '';

    const options = {
      headers: {
        'Authorization': `${authorization}`,
        'Accept': 'application/json',
        'User-Agent': 'automated-testing-request',
        'X-Conversation-Id': 'automated-testing-request-id'
      },
      json: true,
      method: 'GET',
      url: `${this.apiServerUrl}/rows/archive/count/tablename/search/${tdmTableName}/${searchParam}`
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
  /**
   * Count of the row in Archive Table.
   * The endpoint returns the count of the rows in Archived TDM table matching the search param.
   * @param tdmTableId string TDM Table Id whose archived row count needs to be fetched
   * @param searchParam string Text used to limit results
   */
  public async GetRowsArchiveCountTableidSearchByTdmTableIdBySearchParam (tdmTableId: string, searchParam: string, authorization: string) {

    const logMessagePrefix = 'TdmClient.GetRowsArchiveCountTableidSearchByTdmTableIdBySearchParam() ';

    const accessToken: string = '';

    const options = {
      headers: {
        'Authorization': `${authorization}`,
        'Accept': 'application/json',
        'User-Agent': 'automated-testing-request',
        'X-Conversation-Id': 'automated-testing-request-id'
      },
      json: true,
      method: 'GET',
      url: `${this.apiServerUrl}/rows/archive/count/tableid/search/${tdmTableId}/${searchParam}`
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




}