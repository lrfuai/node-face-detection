const NodeWebcam = require( "node-webcam" )

const Webcam = NodeWebcam.create({
  width: 1280,
  height: 720,
  delay: 0,
  quality: 100,
  // [jpeg, png] support varies
  // Webcam.OutputTypes
  output: "jpeg",
  device: false,
  // [buffer, base64]
  // Webcam.CallbackReturnTypes
  callbackReturn: "location",
  verbose: false
});


const takePhoto = async (path) => {
  return new Promise((resolve,reject) => {
    Webcam.capture( path, {}, ( err, data ) => {
      err ? reject(err) : resolve(data);
    });
  });
};

module.exports = {
  takePhoto: async (path) => await takePhoto(path)
};