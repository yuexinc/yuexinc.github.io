let video;
let poseNet;
let noseX = 0;
let noseY = 0;
let eyelX = 0;
let eyelY = 0;
let elbowX = 0;
let elbowY = 0;

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.hide();
  //console.log(ml5);
  poseNet = ml5.poseNet(video, modelReady);
  poseNet.on('pose', gotPoses);
}

function gotPoses(poses){
  //console.log(poses);
  if (poses.length >0){
  let nX = poses[0].pose.keypoints[0].position.x;
  let nY = poses[0].pose.keypoints[0].position.y;
  let eX = poses[0].pose.keypoints[1].position.x;
  let eY = poses[0].pose.keypoints[1].position.y;
  let elX = poses[0].pose.keypoints[8].position.x;
  let elY = poses[0].pose.keypoints[8].position.y;
  noseX = lerp(noseX, nX, 0.1);
  noseY = lerp(noseY, nY, 0.1);
  eyelX = lerp(eyelX, eX, 0.1);
  eyelY = lerp(eyelY, eY, 0.1);
  elbowX = lerp(elbowX, elX, 0.2);
  elbowY = lerp(elbowY, elY, 0.2);
     }
}

function modelReady(){
  console.log('model ready');
}

function draw() {
  //background(220);
  image(video, 0, 0);
  filter(POSTERIZE, 3);
  
  let d = dist(noseX, noseY-20, eyelX, eyelY);
  noStroke();
  fill('PINK');
  ellipse(noseX, noseY, 250); //face
  fill(219,112,147);
  triangle(noseX, noseY, noseX-75, noseY-75, noseX-200, noseY-10);//upper bead
  fill(250,100,120);
  triangle(noseX, noseY, noseX-75, noseY+75, noseX-200, noseY-10);//lower bead
  fill(0,255,255);
  ellipse(eyelX, eyelY, 50);//eye
  fill(random(0,255),0,0);
  triangle(elbowX, elbowY-400-80, elbowX-10, elbowY-290-60, elbowX+10, elbowY-290-60);
  triangle(elbowX+20, elbowY-400-50-80, elbowX-10+20, elbowY-290-60, elbowX+10+20, elbowY-290-60);
  triangle(elbowX+40, elbowY-400-50-80, elbowX-10+40, elbowY-290-60, elbowX+10+40, elbowY-290-60);
}