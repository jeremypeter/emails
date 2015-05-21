var path = require('path');
var minifyRegex = /<\/body>/g;

module.exports = {

  // Files to watch
  fileGlob: ['src/**/template.html'],
  
  // Destination folder to send test fixture for our tests
  testPath: './_gulp-tasks/tests/fixtures',

  // Test files to watch 
  testFiles: ['./_gulp-tasks/tests/**/email.html', './_gulp-tasks/tests/**/*.js'],
  
  // Destination file to write production code to
  dest: 'email.html',

  // Base directory for browser sync
  base: './',

  // minify based on regex and use options from https://www.npmjs.org/package/html-minifier
  minify: {
    regex: minifyRegex,
    options: { removeComments: true, removeAttributeQuotes: true, collapseWhitespace: true, minifyCSS: true, conservativeCollapse: true }
  },

  // HTML hint rules based on https://github.com/yaniswang/HTMLHint/wiki/Rules
  hint: {
    'tag-pair': true, 
    'spec-char-escape': true, 
    'doctype-first': false 
  },

  // Modify HTML in template.html before email.html gets created
  modifyHtml: function(html){
    return html;
  }
};