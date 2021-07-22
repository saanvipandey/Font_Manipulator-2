function setup()
{
    video = createCapture(VIDEO);
    video.size(350, 350);
    video.position(100, 160);

    canvas = createCanvas(550, 330);
    canvas.position(570, 165);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}


function modelLoaded()
{
    console.log('PoseNet Is Initialized');
}

function gotPoses()
{

}