const sass = require('sass');
const fs = require('fs');

// Standard compilation
const result = sass.compile('index.sass', {
  loadPaths: ['node_modules']
});
fs.writeFileSync('dist/bulma-quickview.css', result.css);

// Minified (compressed) compilation
const compressedResult = sass.compile('index.sass', {
  loadPaths: ['node_modules'],
  style: 'compressed'
});
fs.writeFileSync('dist/bulma-quickview.min.css', compressedResult.css);

console.log('CSS compiled successfully!');