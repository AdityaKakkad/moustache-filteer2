noseX = 0;
noseY = 0;

function preload() {
  moustache = loadImage('https://i.postimg.cc/NfKzZLXn/moustache.png');
}

function setup() {
  canvas = createCanvas(640, 480);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(640,480);
  video.hide();
  poseNet = ml5.poseNet(video,modelloaded);
poseNet.on('pose',gotPoses);
}

function draw() {
  image(video,0,0,640,480);
}

function modelloaded(){
  console.log("Some Random Beardo:PoseNet is Initialised");
}

function gotPoses(results){
  if(results.length>0){
      console.log(results);
      noseX = results[0].pose.nose.x-15;
      noseY = results[0].pose.nose.y-10;
  }
}
