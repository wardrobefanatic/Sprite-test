//Adapted from Allison Parrish

let spr1;
let spr2;
var socket;

function setup() {

  socket = io.connect('http://localhost:3000');
  socket.on('mouse', newDrawing)

  //Create base canvas
  createCanvas(windowWidth, windowHeight);
  //Create a sprite, parameters: position of the sprite, width and height.
  spr1 = createSprite(width / 2, height / 2, 100, 100);
  //Sprite has a number of attributes and methods that allow us to change sprite properties.
  spr1.shapeColor = color(0);
  spr2 = createSprite(0, 0, 50, 50);
  spr2.shapeColor = color(128);
  background(50);

}

function newDrawing(data) {
  //message to other comp on grey box
  spr2.velocity.x = (data.dx - spr2.position.x) * 0.2;
  spr2.velocity.y = (data.dy - spr2.position.y) * 0.2;
  spr2.displace(spr1);
  drawSprites();
}

function mouseDragged() {

  //message to other comp
  console.log('Sending: ' + mouseX + ',' + mouseY);
  var data = {
    dx: mouseX,
    dy: mouseY
  }
  socket.emit('mouse', data);
  spr2.velocity.x = (mouseX - spr2.position.x) * 0.2;
  spr2.velocity.y = (mouseY - spr2.position.y) * 0.2;
  spr2.displace(spr1);
  drawSprites();
}