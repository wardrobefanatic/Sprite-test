let saveCanvas;

function setup(){
  saveCanvas =  createGraphics(height, height);
}

function keyPressed() {
  if (key == 's') {
    let c = get(width/2-height/2,0, height, height);
    saveCanvas.image(c, 0, 0);
    save(saveCanvas, frameCount+".png");
  }
}

//https://p5js.org/reference/#/p5.Image/get
//https://discourse.processing.org/t/p5-js-save-only-part-of-the-canvas/7286/2