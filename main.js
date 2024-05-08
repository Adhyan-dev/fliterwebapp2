function preload()
{

}
function setup()
{
  var canvas = createCanvas(400,400);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(400,400);
  video.hide();
  poseNet = ml5.poseNet(video,ModelLoaded);
  poseNet.on('pose',gotposes);

}
function draw()
{
 
}
function takeSnapshot()
{
    save('picture.jpg');
}
function ModelLoaded()
{
  console.log("PoseNet is initialized");
}
function gotposes(results)
{

  if (results.length > 0)
   
  {
    console.log(results);
    console.log("Nose x = ", results[0].pose.nose.x);
    console.log("Nose y = ", results[0].pose.nose.y);
    
  }};