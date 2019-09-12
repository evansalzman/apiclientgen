import { TdmAuthClient } from '../dist/out/TdmAuthClient/TdmAuthClient';
import { IAddUpdateColumnRequest, TdmTablesClient } from '../dist/out/TdmTablesClient/TdmTablesClient';

const basePathAuth: string = 'https://stage.tdmauth.wdprapps.disney.com/v1';
const basePath: string = 'https://stage.tdmtables.wdprapps.disney.com/rest/v1';

const tdm = new TdmTablesClient (basePath);
const tdmAuth = new TdmAuthClient (basePathAuth);

async function testModule () {
  const authResponse = await tdmAuth.PostToken_oauth2 (process.env.GQE_TEST_TDOD_USERNAME, process.env.GQE_TEST_TDOD_PASSWORD);
  console.log (`DEBUG -- authResponse ${require ('util').inspect (authResponse, {colors: true, depth: 2})}`);

  const resultGetTdmTables = await tdm.GetTdmtables (`Bearer ${authResponse.accessToken}`);
  //console.log (`DEBUG -- TODO: remove resultGetTdmTables ${require ('util').inspect (resultGetTdmTables, {colors: true, depth: 2})}`);
  for (const table of resultGetTdmTables.tdmTableDefns) {
    console.log (`DEBUG -- TODO: remove table.tdmTableName ${require ('util').inspect (table.tdmTableName, {colors: true, depth: 2})}`);
  }

  // TODO: Get a list of tickets
  // TODO: Create a new table
  // TODO: Post add a row to the table
  //const postResult = await tdm.PostTdmtables ('192', 'Bearer ${accessToken}', body);
  //console.log (`DEBUG -- postResult ${require ('util').inspect (postResult, {colors: true, depth: 2})}`);
}

testModule ();
