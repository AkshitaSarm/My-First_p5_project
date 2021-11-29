function preload(){

}

function setup(){
   canvas= createCanvas (500, 400);
   canvas.position(110, 250);
   video= createCapture(VIDEO);
   video.hide();
   tint_color= " ";
}

function draw(){
    image(video, 75, 50, 350, 300);

    stroke(0, 255, 255);
    fill(0, 255, 255);
    circle(50, 50, 50);
    circle(450, 50, 50);
    circle(50, 350, 50);
    circle(450, 350, 50);

    stroke(40, 103, 153);
    fill(40, 103, 153);
    rect(63, 27, 375, 25);
    rect(63, 347, 375, 25);
    rect(27, 63, 25, 275);
    rect(448, 63, 25, 275);
}

function take_snapshot(){
    save('Img_with_Frame.png');
}
