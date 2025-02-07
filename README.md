# ⚠️ Modifications to `json-schema-viewer` by ~julrich ⚠️

This is a fork of `json-schema-viewer` (https://github.com/atlassian-labs/json-schema-viewer) that was modified to be usable outside of the original, closed context of the app itself.
For this purpose the following files (mainly related to packaging / bundling) were modified:

* `LICENSE`: added a line for the modifications made
* `.babelrc`: added some plugins related to building 
* `.gitignore`: removed `schema.ts` from ignored files
* `package.json`: updated author, license (was still set to `MIT`, should've been `Apache-2.0`) and package org name. Updated and added dependencies for `Rollup`
* `rollup.config.json`: new file, configuration for `Rollup`
* `src/index.ts`: added exports for parts needed when used externally
* `src/schema.ts`: now committed to repo, was ignored by `.gitignore` before
* `tsconfig.json`: pretty aggressively refactored TypeScript configuration to get the build running. Probably less destructive changes would suffice, but untested for now
* `yarn.lock`: commited updated dependencies 

No actual code / logic (unrelated to bundling) has been altered.
If of interest (to others, or the authors of the original project), this could probably be cleaned up and pushed upstream... just let me know!

For a complete overview of the changes made, have a look at:
https://github.com/kickstartDS/json-schema-viewer/pull/1

# json-schema-viewer

[![Atlassian license](https://img.shields.io/badge/license-Apache%202.0-blue.svg?style=flat-square)](LICENSE) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](CONTRIBUTING.md)

Welcome to JSON Schema Viewer!

Try it out today at: https://json-schema.app

JSON Schema is awesome. It lets you define and validate the schema for your JSON object and is used to define many many JSON structures. 
For example schemas, please see: https://www.schemastore.org/json/ 

However, as great as the format is, without familiarity, it is often very difficult to read JSON Schema and understand exactly what JSON 
is allowed by the schema. Well, fear not! JSON Schema Viewer to the rescue: just paste a link to your JSON Schema and it will be 
rendered beautifully, comprehensively and with examples describing the JSON you should expect at evely level of the hierarchy.

## Usage

To run this project locally:

1. Run `yarn` to install the dependencies.
1. (Optional, automatically runs on install) Run `yarn gen-schema` to generate source from schema.
1. Run `yarn start` to start Webpack Dev server

Now open: http://localhost:8080 to see the site and develop it live.

## Deployment

To publish new SPA website resources to this AWS stack (this is the most common operation you will perform):

``` shell
nix-shell -p awscli2
yarn build-and-upload
```

To deploy this project in a way that updates the AWS Configuration via Cloud Formation:

``` shell
nix-shell -p awscli2
yarn build-and-deploy
```

## Documentation

This project is a React SPA that is designed to be deployed to AWS CloudFront. It implements a Schema Explorer for JSON Schema and does not build an abstraction
layer between JSON Schema and the UI layer. We currently support JSON Schema Draft 07 in the code.

## Tests

There are currently no tests for this project. Instead, we use and browse the react storybooks to ensure that the schema is being rendered correctly.

## Contributions

Contributions to json-schema-viewer are welcome! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for details. 

## License

Copyright (c) 2021 Atlassian and others.
Apache 2.0 licensed, see [LICENSE](LICENSE) file.

<br/> 

[![With ❤️ from Atlassian](https://raw.githubusercontent.com/atlassian-internal/oss-assets/master/banner-cheers.png)](https://www.atlassian.com)
