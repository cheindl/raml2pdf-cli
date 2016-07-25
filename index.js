'use strict';

var config = {
  mainTemplate: '' + __dirname + '/lib/template.nunjucks',
  templatePath: '' + __dirname + '/lib/'
};

module.exports = config;

if (require.main === module) {
  console.log('This script is meant to be used as a configuration. You probably want to run bin/raml2pdf-cli if you\'re looking for a CLI.');
  process.exit(1);
}
