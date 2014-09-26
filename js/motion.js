var Camelot = require('camelot'),
    Motion = require('motion').Motion,
    fs = require('fs'),
    gm = require('gm'),
    hasMotion,
    motion = new Motion(),
    camelot = new Camelot({
      'device': '/dev/video0',
      'rotate': '180',
      'flip': 'v',
      'controls': {
        'brightness': 1,
        'saturation': 50,
        'contrast': 15
      }
    }
  );

camelot.on('frame', function (image) {
  // Turn image buffer into array of RGB values;
  // pass in current image and previous image.
  var colors = gm(image).depth();
  console.log(colors);
  hasMotion = motion.detect(image);
});

camelot.on('error', function (err) {
  console.log(err);
});

camelot.grab({
  'title' : 'Camelot',
  'font' : 'Arial:24',
  'frequency' : 1
});

if (hasMotion) {
  console.log('########### motion! ##################');
}