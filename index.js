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

// async function GenerateModule () {

//   const swaggerJson = await apiclientget.LoadSwaggerJson ('https://stage.tdmtables.wdprapps.disney.com/docs/TDMTables-V1-user.json');
//   const functionsString = await apiclientget.GenerateClientCalls (swaggerJson, 'TdmClient'); // TODO: make the client lib name a passed in param
//   const interfaceString = await apiclientget.GenerateInterfaces (swaggerJson);
//   await apiclientget.GenerateModule (functionsString, interfaceString, 'TdmClient');

// }
// GenerateModule ();

const tdmAuthApiUrl = 'https://stage.tdmauth.wdprapps.disney.com/docs/TDMAuth-V1.json';
const tdmAuthApiClientName = 'TdmAuthClient';
apiclientget.GenerateApiClientModule (tdmAuthApiUrl, tdmAuthApiClientName);

const tdmTablesApiUrl = 'https://stage.tdmtables.wdprapps.disney.com/docs/TDMTables-V1-user.json';
const tdmTablesApiClientName = 'TdmTablesClient';
apiclientget.GenerateApiClientModule (tdmTablesApiUrl, tdmTablesApiClientName);
