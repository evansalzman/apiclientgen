const apiclientget = require ('./dist/apiclientget');

async function LoadSwaggerJsonTEST () {
  await apiclientget.LoadSwaggerJson ('https://stage.tdmtables.wdprapps.disney.com/docs/TDMTables-V1-user.json');
}
LoadSwaggerJsonTEST ();

async function GenerateClientCallsTEST () {
  apiclientget.GenerateClientCalls ();
  await apiclientget.LoadSwaggerJson ('https://stage.tdmtables.wdprapps.disney.com/docs/TDMTables-V1-user.json');
  apiclientget.GenerateClientCalls ();
}
GenerateClientCallsTEST ();
