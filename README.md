# RAML to PDF

[![Downloads](https://img.shields.io/npm/dm/raml2pdf-cli.svg)](https://www.npmjs.com/package/raml2pdf-cli)
[![NPM version](http://img.shields.io/npm/v/raml2pdf-cli.svg)](https://www.npmjs.org/package/raml2pdf-cli)
[![js-standard-style](https://img.shields.io/badge/code%20style-airbnb-blue.svg?style=flat)](https://github.com/airbnb/javascript)


A simple RAML to PDF documentation generator, written for Node.js. It a command line version of
[raml2pdf](https://github.com/our-bts/raml2pdf) and was inspired by [raml2html](https://github.com/raml2html/raml2html) and [raml2md](https://github.com/raml2html/raml2md).

## Install

```
npm i -g raml2pdf-cli
```

## Usage

```
raml2pdf-cli --help
raml2pdf-cli example.raml example.pdf
```

## Example output

Please see https://rawgit.com/cheindl/raml2pdf-cli/master/examples/example.pdf for a live example.

## RAML version support

Currently `RAML 0.8` version is fully supported.

## Contributing
raml2pdf-cli is an open source project and your contribution is very much appreciated.

1. Check for open issues or open a fresh issue to start a discussion around a feature idea or a bug.
2. Fork the repository on Github and make your changes on the **develop** branch (or branch off of it).
   Please retain the [code style](https://github.com/airbnb/javascript) that is used in the project and `npm run lint` before committing. 
3. Add an example of the new feature to example.raml (if applicable)
4. Send a pull request (with the **develop** branch as the target).

If your pull request is merged feel free to ask for push access. We want to get more maintainers! If you do
have push access, please still work on feature branches and create pull requests, which then get reviewed.
You can also review other people's pull requests and be involved in that way.

## License
raml2html is available under the MIT license. See the LICENSE file for more info.