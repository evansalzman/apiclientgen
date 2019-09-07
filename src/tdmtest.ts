import { TdmClient } from './TdmClient/TdmClient';

const basePath: string = 'https://stage.tdmtables.wdprapps.disney.com';
const apiUri: string = '/rest/v1';
const accessToken: string = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzY29wZSI6WyJwcm9maWxlIl0sImlzcyI6InRkbS53ZHcuZGlzbmV5LmNvbSIsInRkbVVzZXJSb2xlcyI6WyJST0xFX1RETV9UQUJMRV9VU0VSIiwiUk9MRV9FWFRfVE9LRU5fVVNSIiwiUk9MRV9URE9EX1dPUktGTE9XX0FETUlOIl0sImV4cCI6MTU2NzgzMTM3MCwiaWF0IjoxNTY3ODA5NzcwLCJ1c2VybmFtZSI6ImYtYXV0b2Z4In0.PCfLJFshH2lS7UB4Ap87VKSXmx8LsDSdKzWR66iDCJM';

const tdm = new TdmClient (`${basePath}${apiUri}`);

async function testModule () {
  const result = await tdm.GetTdmtables (`Bearer ${accessToken}`);
  console.log (`DEBUG -- result ${require ('util').inspect (result, {colors: true, depth: 2})}`);
}

testModule ();
