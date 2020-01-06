# API Client Generator

Check this code out using --recurse-submodules in order to include the scripts directory `git clone --recurse-submodules {repo url}`
Edit the url entry in .gitmodules to your own repo of scripts if you'd like to maintain them this way. It's convenient for multi-team contributions, allowing more access to the scripts that to the apiclientgen repo. For smaller implementations (one team?), this is probably not needed, simply save your script directly in the repo.

Given a url to a swagger.json doc, this will build a full API client module in NodeJS, including a default set of project files (packages.json, tsconfig, tslint, eslint, .gitigore, etc)

The produced API's package.json will require minor customization: name, github url. 

The clients generated by this tool are built assuming that they will be distributed as an NPM modules that can be installed via `npm -i {APIClientName}` so expected to be moved and committed to their own Git repo and published/used as NPM modules. The generated API client code can also be simply scavenged via copy/paste for other puposes (templates for further work? maybe just cherrypick a limited number of calls needed? etc)

## See it work now

Assuming there are scripts already checked in:

- Grab this repo `git clone --recurse-submodules {repo url}`
- Do an `npm i` to install dependencies
- Then `node scripts/{scriptname}.js`
- Now have a look in the 'out' directory

## APIClientGen Use

### APIClientGen Callbacks

## Example

GenerateTdmAuthAndTdmTablesClient.js is an (slightly complex) example of a script to build an API client. It includes 2 APIs, and uses a callback to correct a badly defined object.
