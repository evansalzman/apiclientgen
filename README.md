# API Client Generator

Given a url to a swagger.json doc, this will build a full API client module in NodeJS, including a default set of project files (packages.json, tsconfig, tslint, eslint, .gitigore, etc)

The produced API's package.json will require minor customization: name, github url. 

The clients generated by this tool are built assuming that they will be distributed as an NPM modules that can be installed via `npm -i {APIClientName}` Clearly, the generated clients can be simply scavanged via copy/paste for other puposes (templates for further work? maybe just cherrypick a limited number of calls needed? etc)

## See it work now

Do an `npm i`
Then `node GenerateTdmAuthAndTdmTablesClient.js`
Then...look in the 'out' directory.

## APIClientGen Use

### APIClientGen Callbacks

## Example

GenerateTdmAuthAndTdmTablesClient.js is an (slightly complex) example of a script to build an API client. It includes 2 APIs, and uses a callback to correct a badly defined object.
