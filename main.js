canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

bgimage="KesVC.jpg";
carswidth=20;
carsheight=10;
car2img="car1 (1).png";
car1img="car1.png";
car1_x=10;
car1_y=10;
car2_x=20;
car2_y=30;

function add(){
    bgimage_Tag=new Image();
    bgimage_Tag.onload=upload_bg;
    bgimage_Tag.src=bgimage;

    car2img_Tag=new Image();
    car2img_Tag.onload=upload_car2;
    car2img_Tag.src=car2img

    car1img_Tag=new Image();
    car1img_Tag.onload=upload_car1;
    car1img_Tag.src=car1img;
}

function w(){
    if(car1_y>=0){
        car1_y=car1_y-10;
        upload_bg();
        upload_car1();upload_car2();
    }
}
function upload_bg(){
    ctx.drawImage(bgimage_Tag,0,0,canvas.width,canvas.height);
}
function upload_car2(){
    ctx.drawImage(car2img_Tag,car2_x,car2_y,carswidth,carsheight);
}

function upload_car1(){
    ctx.drawImage(car1img_Tag,car1_x,car1_y,carswidth,carsheight);
}
function s(){
    if(car1_y<600){
    car1_y=car1_y+10;
    upload_bg();
    upload_car1();upload_car2();
    }
}

function a(){
    if(car1_x>=0){
        car1_x=car1_x-10;
        upload_bg();
        upload_car1();upload_car2();
    }
}
function d(){
    if(car1_x<=900){
        car1_x=car1_x+10;
        upload_bg();
        upload_car1();upload_car2();
    }
}
function upa(){
    if(car2_y>0){
        car2_y=car2_y-10;
        upload_bg();
        upload_car2();upload_car1();
    }
}
function downa(){
    if(car2_y<600){
        car2_y=car2_y+10;
        upload_bg();
        upload_car2();upload_car1();
    }
}
function lefta(){
    if(car2_x>=0){
        car2_x=car2_x-10;
        upload_bg();
        upload_car2();upload_car1();
    }
}
function righta(){
    if(car2_x<900){
        car2_x=car2_x+10;
        upload_bg();
        upload_car2();upload_car1();
    }                                                                                                                                                                                                                                                                                                                                                                               
}
window.addEventListener("keydown",keydowns)
function keydowns(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (keyPressed == '87')
    {
        w();
        console.log("up car1");
    }
    if (keyPressed == '83')
    {
        s();
        console.log("down car1")
    }
    if (keyPressed == '65')
    {
        a();
        console.log("left car1")
    }
    if (keyPressed == '68')
    {
        d();
        console.log("right car1")
    }
    if (keyPressed == '38')
    {
        upa();
        console.log("up car2")
    }
    if (keyPressed == '40')
    {
        downa();
        console.log("down car2")
    }
    if (keyPressed == '37')
    {
        lefta();
        console.log("left car2");
    }
    if (keyPressed == '39')
    {
        righta();
        console.log("right car2");
    }
}

