// https://editor.p5js.org/jht9629-nyu/sketches/6VM5IMP4m
// p5moLibrary Heavenly3D

// https://github.com/molab-itp/p5moLibrary/tree/main/src/demos/Heavenly3D

let my = {};

my.imageNames = ['The_Celestial_Zoo.png', 'Manju.jpg', 'sun.jpg', 'Da_Vinci.jpg', 'plenty.jpeg'];

function preload() {
  my.version = '?v=7';
  my.backgImgIndex = 0;
  my.backgImgs = [];
  my.panScale = 3;

  let path = 'https://molab-itp.github.io/p5moLibrary/src/assets/';
  // on mobile device, switch to lower rez graphics
  if (windowWidth <= 600) {
    path = 'https://molab-itp.github.io/p5moLibrary/src/assets-lowrez/';
  }
  console.log('path', path);
  // https://molab-itp.github.io/p5moLibrary/src/assets/moon.jpg

  my.earthImg = loadImage(path + 'world-ultra.jpg');
  my.moonImg = loadImage(path + 'moon.jpg');
  //
  // my.backgImgs.push(loadImage(path + 'The_Celestial_Zoo.png'));
  // my.backgImgs.push(loadImage(path + 'Manju.jpg'));
  // my.backgImgs.push(loadImage(path + 'sun.jpg'));
  // my.backgImgs.push(loadImage(path + 'Da_Vinci.jpg'));
  // my.backgImgs.push(loadImage(path + 'plenty.jpeg'));
  for (let name of my.imageNames) {
    my.backgImgs.push(loadImage(path + name));
  }
}

function setup() {
  //
  createCanvas(windowWidth, windowHeight - 90);

  my.width = width;
  my.height = height;

  init_pan();

  ui_init();

  make_earth();

  make_moon();

  make_camBody();

  setFocus(my.camBody);
  // setFocus(my.earth);
}

function draw() {
  background(0);
  draw_backgImg();
  ui_init_update();
}

// --

function init_pan() {
  my.panX = 0;
  my.panY = 0;
}

function setFocus(body) {
  console.log('setFocus', body.label);
  // if (my.focusBody && my.focusBody != body) {
  //   my.focusBody.setDir(dirStop);
  // }
  my.focusBody = body;
  my.focusBody.setDir(dirLeft);
}

// --

// https://editor.p5js.org/jht9629-nyu/sketches/K_xe4i5md
// PlanetEarth

// https://editor.p5js.org/jht9629-nyu/sketches/SJtBwJIcU
// CC 58 - Earthquake Visualization 3D

// https://github.com/dmojdehi/SwiftGlobe.git
//  demo/assests/world-large.jpg
//  demo/assests/world-ultra.jpg
//  demo/assests/world.jpg

// https://editor.p5js.org/Bixbite/sketches/H1-rxu1sm
// CTC 8 - Solar System 3D by Bixbite
//  demo/assests/assets/moon.jpg
//  demo/assests/assets/venus.jpg
//  demo/assests/assets/phobos.jpg
//  demo/assests/assets/deimos.jpg
//  demo/assests/assets/sun.jpg

// https://en.wikipedia.org/wiki/Astronomical_object
//  demo/assests/assets/The_Celestial_Zoo.png
//  demo/assests/assets/Observable_Universe.png

// https://thecodingtrain.com/challenges/9-solar-system-3d-textures
// https://editor.p5js.org/codingtrain/sketches/SD8a6k6A

// https://en.wikipedia.org/wiki/Vitruvian_Man
// https://upload.wikimedia.org/wikipedia/commons/2/22/Da_Vinci_Vitruve_Luc_Viatour.jpg
//  demo/Heavenly3D/assets/Da_Vinci.jpg

// Manju.jpg
// https://en.wikipedia.org/wiki/Mandala
// https://en.wikipedia.org/wiki/File:Manjuvajramandala_con_43_divinit%C3%A0_-_Unknown_-_Google_Cultural_Institute.jpg
// File:Manjuvajramandala con 43 divinità - Unknown - Google Cultural Institute.jpg
