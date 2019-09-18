# API Client Generator

Given a url to a swagger.json doc, this will build a full API client module in NodeJS, including a default set of project files (packages.json, tsconfig, tslint, eslint, .gitigore, etc)

The produced API's package.json will require minor customization: name, github url.

## See it work now

Do an `npm i`
Then `node GenerateTdmAuthAndTdmTablesClient.js`
Then...look in the 'out' directory.

## Example

GenerateTdmAuthAndTdmTablesClient.js is an (slightly complex) example of a script to build an API client. It includes 2 APIs, and uses a callback to correct a badly defined object.
