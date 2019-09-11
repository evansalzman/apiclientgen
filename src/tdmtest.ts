import { IAddUpdateColumnRequest, TdmClient } from './TdmClient/TdmClient';

const basePath: string = 'https://stage.tdmtables.wdprapps.disney.com';
const apiUri: string = '/rest/v1';

const tdm = new TdmClient (`${basePath}${apiUri}`);

async function testModule () {
  const result = await tdm.GetTdmtables (`Bearer \${accessToken}`);
  const body: IAddUpdateColumnRequest = {
    active: true,
    columnName: '',
    columnType: '',
    indexed: false,
    order: 1,
    required: false,
    unique: false
  };
  console.log (`DEBUG -- result ${require ('util').inspect (result, {colors: true, depth: 2})}`);
  // TODO: Get a list of tickets
  // TODO: Create a new table
  // TODO: Post add a row to the table
  // TODO: create a TDOD client in order to get an AUTH request created.
  //const postResult = await tdm.PostTdmtables ('192', 'Bearer ${accessToken}', body);
  //console.log (`DEBUG -- postResult ${require ('util').inspect (postResult, {colors: true, depth: 2})}`);
}

testModule ();
