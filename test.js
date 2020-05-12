/* === 

Available parts are:
0   nose
1	leftEye
2	rightEye
3	leftEar
4	rightEar
5	leftShoulder
6	rightShoulder
7	leftElbow
8	rightElbow
9	leftWrist
10	rightWrist
11	leftHip
12	rightHip
13	leftKnee
14	rightKnee
15	leftAnkle
16	rightAnkle
=== */

let video;
let poseNet;
let poses = [];
let noseImage;
//let leftEyeImage;
//let rightEyeImage;
//let landscapeImage;

//preload the images for your emoji creator
function preload() {
    noseImage = loadImage("https://assets.editor.p5js.org/5d89dba0eafad7001edc07dd/2bd21729-11a5-46ea-9f34-e890f8e5f594.png");
    landscapeImage = loadImage("https://assets.editor.p5js.org/5d89dba0eafad7001edc07dd/b1081011-45e7-4d0b-a329-c23ce0ed7e73.png");
}

function setup() {
    createCanvas(480, 480);
    video = createCapture(VIDEO);
    video.size(width, height);
    image(landscapeImage, 10, 10, 480, 480);

    // Create a new poseNet method with a single detection
    poseNet = ml5.poseNet(video, modelReady);
    // This sets up an event that fills the global variable "poses"
    // with an array every time new poses are detected
    poseNet.on('pose', function (results) {
        poses = results;
    });
    // Hide the video element, and just show the canvas
    video.hide();

}

function modelReady() {
    select('#status').html('Model Loaded');
}


function draw() {

    imageMode(CORNER);

    if (poses.length > 0) {
        let pose = poses[0].pose;
        let nose = pose['nose'];
        image(noseImage, nose.x, nose.y, 20, 20);
        image(landscapeImage, 10, 10, 480, 480);
    }
}

