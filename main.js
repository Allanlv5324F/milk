song = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;

function setup()
{
    canvas = createCanvas(600,500);
    canvas.center();
    canvas.position(400,250);
    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on("pose", gotposes);
}

function modelLoaded()
{
    console.log("Posenet is on!");
}

function gotposes(results)
{
    if (results.length > 0)
    {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristXY = results[0].pose.leftWrist.y;
        console.log("leftx = " + leftWristX + "lefty = " + leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristXY = results[0].pose.rightWrist.y;
        console.log("rightx = " + rightWristX + "righty = " + rightWristY);
    }
}

function preload()
{
    song = loadSound("music2.mp3");    
}

function draw()
{
    image(video, 0,0,600,500)
}

function play()
{
    song.play();
    console.log("Song is playing !!!")
}

function stop()
{
    song.stop();
}

function pause()
{
    song.pause();
}