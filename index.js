const apiclientget = require ('./dist/apiclientget');

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

async function GenerateModule () {

  const loadJsonResponse = await apiclientget.LoadSwaggerJson ('https://stage.tdmtables.wdprapps.disney.com/docs/TDMTables-V1-user.json');
  const functionsString = await apiclientget.GenerateClientCalls (loadJsonResponse, 'TdmClient'); // TODO: make the client lib name a passed in param
  // const functionStringModified = functionsString.replace (/YourTokenHere/g, '${accessToken}');
  await apiclientget.GenerateModule (functionsString, 'TdmClient');

}
GenerateModule ();
