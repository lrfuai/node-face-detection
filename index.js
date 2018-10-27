const camera = require('./camera');
const faces = require('./faces');


const path = 'tmp_img.jpg';

camera.takePhoto(path);

const face = faces.getFirstFace(path).catch(console.error).then(console.log);