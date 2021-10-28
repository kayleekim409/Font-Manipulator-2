function setup() {
    video = createCapture(VIDEO);
    video.size(300, 300);
    poseNet.ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
    canvas = createCanvas(550, 550);
    canvas.position(560, 150);
}