const sharp = require('sharp');
const fs = require('fs');
const directory = './catalog/static/compressed_images/';

fs.readdirSync(directory).forEach(file => {
  sharp(`${directory}/${file}`)
    .resize(200, 100)
    .toFile(`${directory}/${file}-small.jpg`);
  });