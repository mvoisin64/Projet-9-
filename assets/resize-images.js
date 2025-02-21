const sharp = require('sharp');
const fs = require('fs');
const directory = 'assets/images 4/gallery/portraits';

fs.readdirSync(directory).forEach(file => {
  sharp(`${directory}/${file}`)
    .resize(2000) // width, height
    .toFile(`${directory}/${file}-2000.avif`);
  });
  
  