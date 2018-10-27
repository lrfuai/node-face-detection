/**
 * this code is part of some javascript experiments with face recognition and face detection,
 * built on top of openCV
 * https://opencv.org/
 */
const cv = require('opencv4nodejs'); // openCV

const size = 120;
// CascadeClassifier class is used to detect faces in a video stream or image.
const classifier = new cv.CascadeClassifier(cv.HAAR_FRONTALFACE_DEFAULT);


/**
 * get the first face from a give image
 * @param path
 * @returns {*}
 */
const getFirstFace = (path) => {
  return new Promise((resolve,reject) => {
    cv.imreadAsync(path, (err, img) => {
      if (err) return reject(err);
      
      const detectedFaces = classifier.detectMultiScale(img);
      if (!detectedFaces.length) reject('no faces found');
  
      // prediction should be done on greyscale images of the same sizes
      return resolve(img.getRegion(detectedFaces[0]).bgrToGray().resize(size, size));
    });
  });
};

module.exports= {
  getFirstFace: async (path) => await getFirstFace(path)
};