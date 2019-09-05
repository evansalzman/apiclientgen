const apiclientget = require ('./dist/apiclientget');
const fs = require ('fs');

// async function LoadSwaggerJsonTEST () {
//   await apiclientget.LoadSwaggerJson ('https://stage.tdmtables.wdprapps.disney.com/docs/TDMTables-V1-user.json');
// }
// LoadSwaggerJsonTEST ();

// async function GenerateClientCallsTEST () {

//   const loadJsonResponse = await apiclientget.LoadSwaggerJson ('https://stage.tdmtables.wdprapps.disney.com/docs/TDMTables-V1-user.json');
//   const functions = await apiclientget.GenerateClientCalls (loadJsonResponse, 'TdmTablesClient'); // TODO: make the client lib name a passed in param
//   console.log (`DEBUG -- TEST functions ${functions}`);
// }
// GenerateClientCallsTEST ();

async function GenerateModuleTEST () {

  const loadJsonResponse = await apiclientget.LoadSwaggerJson ('https://stage.tdmtables.wdprapps.disney.com/docs/TDMTables-V1-user.json');
  const functionsString = await apiclientget.GenerateClientCalls (loadJsonResponse, 'TdmTablesClient'); // TODO: make the client lib name a passed in param
  const moduleString = await apiclientget.GenerateModule (functionsString, 'TdmClient');
}
GenerateModuleTEST ();
