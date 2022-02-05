function preload()
{
 img = loadImage('https://cdn.pixabay.com/photo/2017/09/20/00/28/ford-mustang-2767124_1280.png');
 img = loadImage('https://cdn.pixabay.com/photo/2020/09/06/07/37/car-5548242_1280.jpg');
}
function setup(){
    canvas = createCanvas(400, 400);
    canvas.position(590, 390);
    video = createCapture(VIDEO);
    video.hide();
    tint_color = "";
}
function draw(){
    image(video, 0, 0, 640, 480);
    tint(tint_color);
    circle(300, 263, 20);
    rect(30, 20, 55, 20);
}
function take_snapshot(){
    save('you_made_an_image!_thats_good');
}