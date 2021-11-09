function setup() {
    video = createCapture(VIDEO);
    video.size(300, 300);
    var poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
    canvas = createCanvas(550, 550);
    canvas.position(560, 150);
}
function gotPoses(results) {
    if (length > 0) {
        console.log(results);
    }
}
function modelLoaded() {
    console.log("Model is loaded");
}