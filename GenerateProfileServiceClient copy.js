'use strict';

/**
 * This script will create a Profile service client.
 */

const acw = require ('./dist/apiclientwriter');

const apiSwaggerUrl = './roomCheckinSwagger.json';
// const apiSwaggerUrl = 'https://drive.google.com/file/d/1NVKUTNArJDOMkVuAlGzo2OGHCWta1ntj/view'; // not served properly
const clientModuleName = 'RoomCheckinServiceClient';

async function CreateClient () {

  const writeResponse = await acw.Write (apiSwaggerUrl, clientModuleName);
  console.log (`TODO: DEBUG -- writeResponse ${require ('util').inspect (writeResponse, {
    colors: true,
    depth: 2
  })}`);
}

CreateClient ();
