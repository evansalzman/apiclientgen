const apiclientget = require ('./dist/apiclientget');

async function LoadSwaggerJsonTEST () {
  await apiclientget.LoadSwaggerJson ('https://stage.tdmtables.wdprapps.disney.com/docs/TDMTables-V1-user.json');
}
LoadSwaggerJsonTEST ();

async function GenerateClientCallsTEST () {
  apiclientget.GenerateClientCalls ();

  const loadJsonResponse = await apiclientget.LoadSwaggerJson ('https://stage.tdmtables.wdprapps.disney.com/docs/TDMTables-V1-user.json');
  console.log (`DEBUG -- TEST loadJsonResponse ${require ('util').inspect (loadJsonResponse, {
    colors: true,
    depth: 2
  })}`);

  const functions = await apiclientget.GenerateClientCalls ();
  console.log (`DEBUG -- TEST functions ${functions}`);
}
GenerateClientCallsTEST ();
