import requestPromise from 'request-promise';
import * as log from 'winston';

export class TdmTablesClient {

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

    const logMessagePrefix = 'TdmTablesClient.GetTdmtables() ';

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
  public async PostTdmtables (authorization: string, body: IAddTdmTableDefnRequest) {

    const logMessagePrefix = 'TdmTablesClient.PostTdmtables() ';

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
   * Deletes an existing TDM table
   * Allows authorized user to delete TDM Table definitions.
   * @param tdmTableId string TDM Table ID to delete
   */
  public async DeleteTdmtablesByTdmTableId (tdmTableId: string, authorization: string) {

    const logMessagePrefix = 'TdmTablesClient.DeleteTdmtablesByTdmTableId() ';

    const accessToken: string = '';

    const options = {
      headers: {
        'Authorization': `${authorization}`,
        'Accept': 'application/json',
        'User-Agent': 'automated-testing-request',
        'X-Conversation-Id': 'automated-testing-request-id'
      },
      json: true,
      method: 'DELETE',
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
   * Updates an existing TDM table
   * Allows authorized user to update TDM Table definitions.
   * @param tdmTableId string TDM Table ID to update
   * @param body undefined Minimal TDM Table Definition
   */
  public async PutTdmtablesByTdmTableId (tdmTableId: string, authorization: string, body: IAddTdmTableDefnRequest) {

    const logMessagePrefix = 'TdmTablesClient.PutTdmtablesByTdmTableId() ';

    const options = {
      body,
      headers: {
        'Authorization': `${authorization}`,
        'User-Agent': 'automated-testing-request',
        'X-Conversation-Id': 'automated-testing-request-id'
      },
      json: true,
      method: 'PUT',
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
   * Allows authorized user to retrieve TDM Table definitions by Id.
   * @param tdmTableId string TDM Table ID to retrieve
   */
  public async GetTdmtablesByTdmTableId (tdmTableId: string, authorization: string) {

    const logMessagePrefix = 'TdmTablesClient.GetTdmtablesByTdmTableId() ';

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

    const logMessagePrefix = 'TdmTablesClient.GetTdmtablesTablenameByTdmTableName() ';

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

    const logMessagePrefix = 'TdmTablesClient.GetTdmtablesIdByTdmTableName() ';

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

    const logMessagePrefix = 'TdmTablesClient.GetTdmtablesNameByTdmTableId() ';

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

    const logMessagePrefix = 'TdmTablesClient.GetColumnsTableidByTdmTableId() ';

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
  public async PostColumnsTableidByTdmTableId (tdmTableId: string, authorization: string, body: IAddUpdateColumnRequest) {

    const logMessagePrefix = 'TdmTablesClient.PostColumnsTableidByTdmTableId() ';

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

    const logMessagePrefix = 'TdmTablesClient.GetColumnsTablenameByTdmTableName() ';

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
  public async PostColumnsTablenameByTdmTableName (tdmTableName: string, authorization: string, body: IAddUpdateColumnRequest) {

    const logMessagePrefix = 'TdmTablesClient.PostColumnsTablenameByTdmTableName() ';

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
   * Deletes an existing Column
   * Allows authorized user to delete Column definitions.
   * @param columnId string Column ID to delete
   */
  public async DeleteColumnsByColumnId (columnId: string, authorization: string) {

    const logMessagePrefix = 'TdmTablesClient.DeleteColumnsByColumnId() ';

    const accessToken: string = '';

    const options = {
      headers: {
        'Authorization': `${authorization}`,
        'Accept': 'application/json',
        'User-Agent': 'automated-testing-request',
        'X-Conversation-Id': 'automated-testing-request-id'
      },
      json: true,
      method: 'DELETE',
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
   * Updates an existing Column
   * Allows authorized user to update Column definitions.
   * @param columnId string Column ID to update
   * @param body undefined Minimal Column Definition
   */
  public async PutColumnsByColumnId (columnId: string, authorization: string, body: IAddUpdateColumnRequest) {

    const logMessagePrefix = 'TdmTablesClient.PutColumnsByColumnId() ';

    const options = {
      body,
      headers: {
        'Authorization': `${authorization}`,
        'User-Agent': 'automated-testing-request',
        'X-Conversation-Id': 'automated-testing-request-id'
      },
      json: true,
      method: 'PUT',
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
   * Retrieves an existing Column
   * Allows authorized user to retrieve Column definitions by Id.
   * @param columnId string Column ID to retrieve
   */
  public async GetColumnsByColumnId (columnId: string, authorization: string) {

    const logMessagePrefix = 'TdmTablesClient.GetColumnsByColumnId() ';

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

    const logMessagePrefix = 'TdmTablesClient.GetColumntypes() ';

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

    const logMessagePrefix = 'TdmTablesClient.GetRowsTableidByTdmTableId() ';

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
  public async PostRowsTableidByTdmTableId (tdmTableId: string, authorization: string, body: ITdmRow) {

    const logMessagePrefix = 'TdmTablesClient.PostRowsTableidByTdmTableId() ';

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
   * Deletes all table rows. (truncate)
   * Allows authorized user to truncate a TDM Table.
   * @param tdmTableId string TDM Table ID having these rows
   */
  public async DeleteRowsTableidByTdmTableId (tdmTableId: string, authorization: string) {

    const logMessagePrefix = 'TdmTablesClient.DeleteRowsTableidByTdmTableId() ';

    const accessToken: string = '';

    const options = {
      headers: {
        'Authorization': `${authorization}`,
        'Accept': 'application/json',
        'User-Agent': 'automated-testing-request',
        'X-Conversation-Id': 'automated-testing-request-id'
      },
      json: true,
      method: 'DELETE',
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

    const logMessagePrefix = 'TdmTablesClient.GetRowsTableidSearchByTdmTableIdBySearchParam() ';

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
   * Deletes table rows Matching Search Criteria
   * Allows authorized user to delete rows from TDM Table based on search criteria.
   * @param tdmTableId string TDM Table ID having these rows
   * @param searchParam string TDM Table ID having these rows
   * @param sortOrder string Results are ordered by this column number list
   * @param startRow integer The first row to show, used for paging
   * @param pageSize integer The number of rows to return, used for paging
   */
  public async DeleteRowsTableidSearchByTdmTableIdBySearchParam (tdmTableId: string, searchParam: string, authorization: string, sortOrder?: string, startRow?: number, pageSize?: number) {

    const logMessagePrefix = 'TdmTablesClient.DeleteRowsTableidSearchByTdmTableIdBySearchParam() ';

    const accessToken: string = '';

    const options = {
      headers: {
        'Authorization': `${authorization}`,
        'Accept': 'application/json',
        'User-Agent': 'automated-testing-request',
        'X-Conversation-Id': 'automated-testing-request-id'
      },
      json: true,
      method: 'DELETE',
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

    const logMessagePrefix = 'TdmTablesClient.GetRowsTablenameByTdmTableName() ';

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
  public async PostRowsTablenameByTdmTableName (tdmTableName: string, authorization: string, body: ITdmRow) {

    const logMessagePrefix = 'TdmTablesClient.PostRowsTablenameByTdmTableName() ';

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

    const logMessagePrefix = 'TdmTablesClient.GetRowsTablenameSearchByTdmTableNameBySearchParam() ';

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
   * Deletes table rows Matching Search Criteria
   * Allows authorized user to delete rows from TDM Table based on search criteria.
   * @param tdmTableName string TDM Table Name having these rows
   * @param searchParam string WHERE clause used to limit results
   * @param sortOrder string Results are ordered by this column number list
   * @param startRow integer The first row to show, used for paging
   * @param pageSize integer The number of rows to return, used for paging
   */
  public async DeleteRowsTablenameSearchByTdmTableNameBySearchParam (tdmTableName: string, searchParam: string, authorization: string, sortOrder?: string, startRow?: number, pageSize?: number) {

    const logMessagePrefix = 'TdmTablesClient.DeleteRowsTablenameSearchByTdmTableNameBySearchParam() ';

    const accessToken: string = '';

    const options = {
      headers: {
        'Authorization': `${authorization}`,
        'Accept': 'application/json',
        'User-Agent': 'automated-testing-request',
        'X-Conversation-Id': 'automated-testing-request-id'
      },
      json: true,
      method: 'DELETE',
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

    const logMessagePrefix = 'TdmTablesClient.GetRowsTableidByTdmTableIdByRowId() ';

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
   * Update a Row
   * The TDM rows endpoint updated the requested tables row.
   * @param tdmTableId string TDM Table ID having this row
   * @param rowId string Row ID to retrieve
   * @param body undefined Updated Row information
   */
  public async PutRowsTableidByTdmTableIdByRowId (tdmTableId: string, rowId: string, authorization: string, body: ITdmRow) {

    const logMessagePrefix = 'TdmTablesClient.PutRowsTableidByTdmTableIdByRowId() ';

    const options = {
      body,
      headers: {
        'Authorization': `${authorization}`,
        'User-Agent': 'automated-testing-request',
        'X-Conversation-Id': 'automated-testing-request-id'
      },
      json: true,
      method: 'PUT',
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
   * Deletes a row.
   * Allows authorized user to delete a single row.
   * @param tdmTableId string TDM Table ID having these rows
   * @param rowId string Row ID to delete
   */
  public async DeleteRowsTableidByTdmTableIdByRowId (tdmTableId: string, rowId: string, authorization: string) {

    const logMessagePrefix = 'TdmTablesClient.DeleteRowsTableidByTdmTableIdByRowId() ';

    const accessToken: string = '';

    const options = {
      headers: {
        'Authorization': `${authorization}`,
        'Accept': 'application/json',
        'User-Agent': 'automated-testing-request',
        'X-Conversation-Id': 'automated-testing-request-id'
      },
      json: true,
      method: 'DELETE',
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

    const logMessagePrefix = 'TdmTablesClient.GetRowsCountTablenameSearchByTdmTableNameBySearchParam() ';

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

    const logMessagePrefix = 'TdmTablesClient.GetRowsCountTableidSearchByTdmTableIdBySearchParam() ';

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
   * Archives a Row
   * The endpoint returns a row which is archived.
   * @param tdmTableId string TDM Table ID whose row will be archived
   */
  public async PutRowsArchiveTableidByTdmTableId (tdmTableId: string, authorization: string) {

    const logMessagePrefix = 'TdmTablesClient.PutRowsArchiveTableidByTdmTableId() ';

    const options = {
      body: '',
      headers: {
        'Authorization': `${authorization}`,
        'User-Agent': 'automated-testing-request',
        'X-Conversation-Id': 'automated-testing-request-id'
      },
      json: true,
      method: 'PUT',
      url: `${this.apiServerUrl}/rows/archive/tableid/${tdmTableId}`
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
   * Deletes an archived row
   * The endpoint returns the count of archived rows deleted
   * @param tdmTableId string TDM Table ID whose archived row will be deleted
   */
  public async DeleteRowsArchiveTableidByTdmTableId (tdmTableId: string, authorization: string) {

    const logMessagePrefix = 'TdmTablesClient.DeleteRowsArchiveTableidByTdmTableId() ';

    const accessToken: string = '';

    const options = {
      headers: {
        'Authorization': `${authorization}`,
        'Accept': 'application/json',
        'User-Agent': 'automated-testing-request',
        'X-Conversation-Id': 'automated-testing-request-id'
      },
      json: true,
      method: 'DELETE',
      url: `${this.apiServerUrl}/rows/archive/tableid/${tdmTableId}`
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
   * Archives a Row
   * The endpoint returns a row which is archived.
   * @param tdmTableName string TDM Table Name whose row will be archived
   */
  public async PutRowsArchiveTablenameByTdmTableName (tdmTableName: string, authorization: string) {

    const logMessagePrefix = 'TdmTablesClient.PutRowsArchiveTablenameByTdmTableName() ';

    const options = {
      body: '',
      headers: {
        'Authorization': `${authorization}`,
        'User-Agent': 'automated-testing-request',
        'X-Conversation-Id': 'automated-testing-request-id'
      },
      json: true,
      method: 'PUT',
      url: `${this.apiServerUrl}/rows/archive/tablename/${tdmTableName}`
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
   * Deletes an archived row
   * The endpoint returns the count of archived rows deleted
   * @param tdmTableName string TDM Table Name whose archived rows will be deleted
   */
  public async DeleteRowsArchiveTablenameByTdmTableName (tdmTableName: string, authorization: string) {

    const logMessagePrefix = 'TdmTablesClient.DeleteRowsArchiveTablenameByTdmTableName() ';

    const accessToken: string = '';

    const options = {
      headers: {
        'Authorization': `${authorization}`,
        'Accept': 'application/json',
        'User-Agent': 'automated-testing-request',
        'X-Conversation-Id': 'automated-testing-request-id'
      },
      json: true,
      method: 'DELETE',
      url: `${this.apiServerUrl}/rows/archive/tablename/${tdmTableName}`
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
   * Archives single row for Mongo database/matching rows for MySQL database.
   * The endpoint returns the rows which are archived.
   * @param tdmTableId string TDM Table ID whose rows wil be archived
   * @param searchParam string Text used to limit results
   */
  public async PutRowsArchiveTableidSearchByTdmTableIdBySearchParam (tdmTableId: string, searchParam: string, authorization: string) {

    const logMessagePrefix = 'TdmTablesClient.PutRowsArchiveTableidSearchByTdmTableIdBySearchParam() ';

    const options = {
      body: '',
      headers: {
        'Authorization': `${authorization}`,
        'User-Agent': 'automated-testing-request',
        'X-Conversation-Id': 'automated-testing-request-id'
      },
      json: true,
      method: 'PUT',
      url: `${this.apiServerUrl}/rows/archive/tableid/search/${tdmTableId}/${searchParam}`
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
   * Archives single row for Mongo database/matching rows for MySQL database.
   * The endpoint returns the rows which are archived.
   * @param tdmTableName string TDM Table Name whose row needs to be archived
   * @param searchParam string Text used to limit results
   */
  public async PutRowsArchiveTablenameSearchByTdmTableNameBySearchParam (tdmTableName: string, searchParam: string, authorization: string) {

    const logMessagePrefix = 'TdmTablesClient.PutRowsArchiveTablenameSearchByTdmTableNameBySearchParam() ';

    const options = {
      body: '',
      headers: {
        'Authorization': `${authorization}`,
        'User-Agent': 'automated-testing-request',
        'X-Conversation-Id': 'automated-testing-request-id'
      },
      json: true,
      method: 'PUT',
      url: `${this.apiServerUrl}/rows/archive/tablename/search/${tdmTableName}/${searchParam}`
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

    const logMessagePrefix = 'TdmTablesClient.GetRowsArchiveCountTablenameSearchByTdmTableNameBySearchParam() ';

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

    const logMessagePrefix = 'TdmTablesClient.GetRowsArchiveCountTableidSearchByTdmTableIdBySearchParam() ';

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
  /**
   * Restores a Row
   * The endpoint returns a row which is restored.
   * @param tdmTableId string TDM Table ID whose row will be restored
   */
  public async PutRowsRestoreTableidByTdmTableId (tdmTableId: string, authorization: string) {

    const logMessagePrefix = 'TdmTablesClient.PutRowsRestoreTableidByTdmTableId() ';

    const options = {
      body: '',
      headers: {
        'Authorization': `${authorization}`,
        'User-Agent': 'automated-testing-request',
        'X-Conversation-Id': 'automated-testing-request-id'
      },
      json: true,
      method: 'PUT',
      url: `${this.apiServerUrl}/rows/restore/tableid/${tdmTableId}`
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
   * Restores a Row
   * The endpoint returns a row which is restored.
   * @param tdmTableName string TDM Table Name whose row will be restored
   */
  public async PutRowsRestoreTablenameByTdmTableName (tdmTableName: string, authorization: string) {

    const logMessagePrefix = 'TdmTablesClient.PutRowsRestoreTablenameByTdmTableName() ';

    const options = {
      body: '',
      headers: {
        'Authorization': `${authorization}`,
        'User-Agent': 'automated-testing-request',
        'X-Conversation-Id': 'automated-testing-request-id'
      },
      json: true,
      method: 'PUT',
      url: `${this.apiServerUrl}/rows/restore/tablename/${tdmTableName}`
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
   * Restores single row for Mongo database/matching rows for MySQL database.
   * The endpoint returns the rows which are restored.
   * @param tdmTableId string TDM Table ID whose row will be restored
   * @param searchParam string Text used to limit results
   */
  public async PutRowsRestoreTableidSearchByTdmTableIdBySearchParam (tdmTableId: string, searchParam: string, authorization: string) {

    const logMessagePrefix = 'TdmTablesClient.PutRowsRestoreTableidSearchByTdmTableIdBySearchParam() ';

    const options = {
      body: '',
      headers: {
        'Authorization': `${authorization}`,
        'User-Agent': 'automated-testing-request',
        'X-Conversation-Id': 'automated-testing-request-id'
      },
      json: true,
      method: 'PUT',
      url: `${this.apiServerUrl}/rows/restore/tableid/search/${tdmTableId}/${searchParam}`
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
   * Restores single row for Mongo database/matching rows for MySQL database.
   * The endpoint returns the rows which are restored.
   * @param tdmTableName string TDM Table Name whose row will be restored
   * @param searchParam string Text used to limit results
   */
  public async PutRowsRestoreTablenameSearchByTdmTableNameBySearchParam (tdmTableName: string, searchParam: string, authorization: string) {

    const logMessagePrefix = 'TdmTablesClient.PutRowsRestoreTablenameSearchByTdmTableNameBySearchParam() ';

    const options = {
      body: '',
      headers: {
        'Authorization': `${authorization}`,
        'User-Agent': 'automated-testing-request',
        'X-Conversation-Id': 'automated-testing-request-id'
      },
      json: true,
      method: 'PUT',
      url: `${this.apiServerUrl}/rows/restore/tablename/search/${tdmTableName}/${searchParam}`
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
   * Consume rows
   * The endpoint returns rows which are then removed from the table.
   * @param tdmTableId string TDM Table ID whose row will be consumed
   * @param searchText string Text used to limit results
   * @param sortOrder string Results are ordered by this column number list
   * @param startRow integer The first row to show, used for paging
   * @param pageSize integer The number of rows to return, used for paging
   * @param includeInActiveColumns boolean If in-active columns should be included with row information
   */
  public async PutRowsConsumeTableidByTdmTableId (tdmTableId: string, authorization: string, searchText?: string, sortOrder?: string, startRow?: number, pageSize?: number, includeInActiveColumns?: boolean) {

    const logMessagePrefix = 'TdmTablesClient.PutRowsConsumeTableidByTdmTableId() ';

    const options = {
      body: '',
      headers: {
        'Authorization': `${authorization}`,
        'User-Agent': 'automated-testing-request',
        'X-Conversation-Id': 'automated-testing-request-id'
      },
      json: true,
      method: 'PUT',
      url: `${this.apiServerUrl}/rows/consume/tableid/${tdmTableId}`
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
   * Consume rows
   * The endpoint returns rows which are then removed from the table.
   * @param tdmTableName string TDM Table Name whose row will be consumed
   * @param searchText string Text used to limit results
   * @param sortOrder string Results are ordered by this column number list
   * @param startRow integer The first row to show, used for paging
   * @param pageSize integer The number of rows to return, used for paging
   * @param includeInActiveColumns boolean If in-active columns should be included with row information
   */
  public async PutRowsConsumeTablenameByTdmTableName (tdmTableName: string, authorization: string, searchText?: string, sortOrder?: string, startRow?: number, pageSize?: number, includeInActiveColumns?: boolean) {

    const logMessagePrefix = 'TdmTablesClient.PutRowsConsumeTablenameByTdmTableName() ';

    const options = {
      body: '',
      headers: {
        'Authorization': `${authorization}`,
        'User-Agent': 'automated-testing-request',
        'X-Conversation-Id': 'automated-testing-request-id'
      },
      json: true,
      method: 'PUT',
      url: `${this.apiServerUrl}/rows/consume/tablename/${tdmTableName}`
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
   * Consume rows matching the provided search parameter.
   * The endpoint returns the matching rows which are then removed from the table.
   * @param tdmTableId string TDM Table ID whose rows wil be consumed
   * @param searchParam string Text used to limit results
   * @param sortOrder string Results are ordered by this column number list
   * @param startRow integer The first row to show, used for paging
   * @param pageSize integer The number of rows to return, used for paging
   * @param includeInActiveColumns boolean If in-active columns should be included with row information
   */
  public async PutRowsConsumeTableidSearchByTdmTableIdBySearchParam (tdmTableId: string, searchParam: string, authorization: string, sortOrder?: string, startRow?: number, pageSize?: number, includeInActiveColumns?: boolean) {

    const logMessagePrefix = 'TdmTablesClient.PutRowsConsumeTableidSearchByTdmTableIdBySearchParam() ';

    const options = {
      body: '',
      headers: {
        'Authorization': `${authorization}`,
        'User-Agent': 'automated-testing-request',
        'X-Conversation-Id': 'automated-testing-request-id'
      },
      json: true,
      method: 'PUT',
      url: `${this.apiServerUrl}/rows/consume/tableid/search/${tdmTableId}/${searchParam}`
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
   * Consume rows matching the provided search parameter.
   * The endpoint returns the matching rows which are then removed from the table.
   * @param tdmTableName string TDM Table Name whose row needs to be consumed
   * @param searchParam string Text used to limit results
   * @param sortOrder string Results are ordered by this column number list
   * @param startRow integer The first row to show, used for paging
   * @param pageSize integer The number of rows to return, used for paging
   * @param includeInActiveColumns boolean If in-active columns should be included with row information
   */
  public async PutRowsConsumeTablenameSearchByTdmTableNameBySearchParam (tdmTableName: string, searchParam: string, authorization: string, sortOrder?: string, startRow?: number, pageSize?: number, includeInActiveColumns?: boolean) {

    const logMessagePrefix = 'TdmTablesClient.PutRowsConsumeTablenameSearchByTdmTableNameBySearchParam() ';

    const options = {
      body: '',
      headers: {
        'Authorization': `${authorization}`,
        'User-Agent': 'automated-testing-request',
        'X-Conversation-Id': 'automated-testing-request-id'
      },
      json: true,
      method: 'PUT',
      url: `${this.apiServerUrl}/rows/consume/tablename/search/${tdmTableName}/${searchParam}`
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

/**
 * ITDMTableDefnResponse
 * @property {number} tdmTableId - Unique table id
 * @property {string} tdmTableOwner - User name of the TDM Table owner
 * @property {string} tdmTableName - Unique table name
 * @property {string} tdmTableDescription - Description of the TDM Table's purpose
 * @property {number} colCount - Number of columns in table
 * @property {number} rowCount - Number of rows in table
 * @property {number} maxColCount - Max allowed number of columns in table
 * @property {number} maxRowCount - Max allowed number of rows in table
 * @property {string} createdDT - Table created date
 * @property {string} updatedDT - Table last updated date
 * @property {string} accessLevel - Current users access level to the TDM Table
 * @property {boolean} publicAccess - If anonymous access is granted to the TDM Table
 * @property {boolean} archiveEnabled - If an archive table is needed
 * @property {boolean} active - If the table is active
 */
export interface ITDMTableDefnResponse {
  tdmTableId: number;
  tdmTableOwner: string;
  tdmTableName: string;
  tdmTableDescription: string;
  colCount: number;
  rowCount: number;
  maxColCount: number;
  maxRowCount: number;
  createdDT: string;
  updatedDT: string;
  accessLevel: string;
  publicAccess: boolean;
  archiveEnabled: boolean;
  active: boolean;
}
/**
 * ITdmAuthToken
 * @property {string} accessToken - OAuth2 access token
 * @property {string} refreshToken - Refresh token
 * @property {string} tokenType - Type of token
 * @property {number} expireSeconds - number of seconds token was valid when created
 */
export interface ITdmAuthToken {
  accessToken: string;
  refreshToken: string;
  tokenType: string;
  expireSeconds: number;
}
/**
 * IAddTdmTableDefnRequest
 * @property {string} tdmTableName - Unique table name
 * @property {string} tdmTableDescription - Description of the TDM Table's purpose
 * @property {string} dbEngine - Database used for table storage (Mongo or MySQL)
 * @property {boolean} publicAccess - If anonymous access is granted to the TDM Table
 * @property {boolean} archiveEnabled - If an archive table is needed
 * @property {boolean} active - If the table is ready for use
 */
export interface IAddTdmTableDefnRequest {
  tdmTableName: string;
  tdmTableDescription: string;
  dbEngine: string;
  publicAccess: boolean;
  archiveEnabled: boolean;
  active: boolean;
}
/**
 * IAddTdmTableDefnResponse
 * @property {number} tdmTableId - Unique table id
 */
export interface IAddTdmTableDefnResponse {
  tdmTableId: number;
}
/**
 * IUpdateTdmTableDefnResponse
 * @property {number} updatedTableCount - Updated table count
 */
export interface IUpdateTdmTableDefnResponse {
  updatedTableCount: number;
}
/**
 * IDeleteTdmTableDefnResponse
 * @property {number} deletedTableCount - Deleted table count
 */
export interface IDeleteTdmTableDefnResponse {
  deletedTableCount: number;
}
/**
 * ITdmTableIdResponse
 * @property {number} tdmTableId - Unique table id
 */
export interface ITdmTableIdResponse {
  tdmTableId: number;
}
/**
 * ITdmTableNameResponse
 * @property {string} tdmTableName - TDM Table Name
 */
export interface ITdmTableNameResponse {
  tdmTableName: string;
}
/**
 * IAddUpdateColumnRequest
 * @property {string} columnName - Column name - unique to table
 * @property {string} columnType - Column database type
 * @property {boolean} unique - If the column is unique
 * @property {boolean} indexed - If the column is indexed
 * @property {boolean} required - If the column is required
 * @property {number} order - Column display order
 * @property {boolean} active - If the column is ready for use
 */
export interface IAddUpdateColumnRequest {
  columnName: string;
  columnType: string;
  unique: boolean;
  indexed: boolean;
  required: boolean;
  order: number;
  active: boolean;
}
/**
 * IAddColumnResponse
 * @property {number} columnId - Unique column id
 */
export interface IAddColumnResponse {
  columnId: number;
}
/**
 * ITdmRow
 * @property {string} [iD] - System autoincrement column, only send for updates
 * @property {string} column1 - User defined column name 1, spaces in column names must be replaces with underscore '_'
 * @property {string} column2 - User defined column name 2, spaces in column names must be replaces with underscore '_'
 */
export interface ITdmRow {
  iD?: string;
  column1: string;
  column2: string;
}
/**
 * IAddRowResponse
 * @property {number} rowId - Row id unique to this table
 */
export interface IAddRowResponse {
  rowId: number;
}
/**
 * IUpdateRowResponse
 * @property {number} updatedRowCount - Updated row count
 */
export interface IUpdateRowResponse {
  updatedRowCount: number;
}
/**
 * IDeletedRowResponse
 * @property {number} deletedRowCount - Deleted row count
 */
export interface IDeletedRowResponse {
  deletedRowCount: number;
}
/**
 * ITruncateTableResponse
 * @property {number} remainingRowCount - Deleted table count
 */
export interface ITruncateTableResponse {
  remainingRowCount: number;
}
/**
 * IUpdateColumnDefnResponse
 * @property {number} updatedColumnCount - Updated column count
 */
export interface IUpdateColumnDefnResponse {
  updatedColumnCount: number;
}
/**
 * IDeleteColumnDefnResponse
 * @property {number} deletedColumnCount - Deleted column count
 */
export interface IDeleteColumnDefnResponse {
  deletedColumnCount: number;
}
/**
 * IColumnDefnResponse
 * @property {number} columnId - Unique Column ID
 * @property {string} columnType - Column data type
 * @property {string} columnName - Unique column name in this table
 * @property {boolean} unique - If the column should be unique in the table
 * @property {boolean} indexed - If the column should be indexed
 * @property {boolean} required - If the column should be required
 * @property {number} order - The column order
 * @property {boolean} active - If the table is ready for use
 */
export interface IColumnDefnResponse {
  columnId: number;
  columnType: string;
  columnName: string;
  unique: boolean;
  indexed: boolean;
  required: boolean;
  order: number;
  active: boolean;
}
/**
 * IColumnTypesResponse
 * @property {number} columnTypeId - Unique column type id
 * @property {string} columnTypeName - Unique column type name
 */
export interface IColumnTypesResponse {
  columnTypeId: number;
  columnTypeName: string;
}
/**
 * IRestoreRowResponse
 * @property {number} restoredCount - Restored record count
 */
export interface IRestoreRowResponse {
  restoredCount: number;
}
/**
 * IDeleteArchivedRowResponse
 * @property {number} deletedCount - Deleted count
 */
export interface IDeleteArchivedRowResponse {
  deletedCount: number;
}
/**
 * IValidationError
 * @property {number} code - undefined
 * @property {string} message - undefined
 * @property {any[]} [fields] - undefined
 */
export interface IValidationError {
  code: number;
  message: string;
  fields?: any[];
}
/**
 * ITdmAppError
 * @property {number} code - undefined
 * @property {string} message - undefined
 */
export interface ITdmAppError {
  code: number;
  message: string;
}
/**
 * IRowCountResponse
 * @property {number} rowCount - Row count
 */
export interface IRowCountResponse {
  rowCount: number;
}
