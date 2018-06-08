function preload() {
  soundFormats('ogg');
  mySound = loadSound('https://raw.githubusercontent.com/TheHalfinStream/Group-Game-Repo/master/sicc.ogg');
}




function setup() {
  createCanvas(400, 400);
	noStroke();
	 mySound.setVolume(0.9);
  mySound.loop();
}

function draw() {

}

var score = 0;
var lives = 3;
var a = Math.random(5, 395);
var b = Math.random(5, 395);
var c = Math.random(5, 395);
var d = Math.random(5, 395);
var e = Math.random(5, 395);
var f = Math.random(5, 395);
var w = 0;
var ww = 0;
var www = 0;
var wwww = 0;
var wwwww = 0;
var carX = -5000;
var carY = Math.random(50,350);
var fighterjetX = -2500;
var fighterjetY = Math.random(50,350);
var speedSterX = 0;
var speedSterY = Math.random(-50,-450);
var ob = 0;
var H1 = 0.00;
var H2 = 40.897;
var H3 = H2*2;
var H4 = H2*3;
var H5 = H2*4;
var H6 = H2*5;
var H7 = H2*6;
var H8 = H2*7;
var H9 = H2*8;
var H10 = H2*9;
var heightH1 = Math.random(-60, -150);
var heightH2 = Math.random(-60, -150);
var heightH3 = Math.random(-60, -150);
var heightH4 = Math.random(-60, -150);
var heightH5 = Math.random(-60, -150);
var heightH6 = Math.random(-60, -150);
var heightH7 = Math.random(-60, -150);
var heightH8 = Math.random(-60, -150);
var heightH9 = Math.random(-60, -150);
var heightH10 = Math.random(-60, -150);
var spaceSpeed = 0;
var starPower = 0;
var sun = 430;
var x = 81;
var y = 312;
var z = 81;
var shooterX = 400;
var shooterY = Math.random(50,350);
var zz = shooterX;
var v = y;
var currentScene = 1;
var zize = function (xx,yy) {
    zize.x = xx;
    zize.y = yy;
};


var drawCharacter = function(){
var player = new rect(x+81,y+312,40,40);
};

draw = function() {
    var currentScene;

var drawScene1 = function(){
    currentScene = 1;
    background(29, 227, 187);
if (score > 10000){
    background(89, 75, 13);
    }
if (score > 25000){
    background(64, 74, 143);
    }
if (score > 50000){
    background(184, 181, 108);
    }
if (score >100000){
    background(29, 30, 51);
    }
fill(255, 255, 255);
textSize(22);
textAlign(CENTER, CENTER);
text("Reload the page to try again", -41, 146, 480, 200);
textSize(30);
text("Game Over", -41, -50, 480, 200);
textSize(25);
text("You died to an enemy", -41, -10, 480, 200);
textSize(30);
fill(0, 0, 0);
text("Score: " + score, 200, 350);
if (score > 10000){
    fill(191, 90, 191);
     rect(58, 134, 300, 51);
    fill(251, 255, 8);
    textSize(22);
    textAlign(CENTER, CENTER);
    text("Achievement: Spooky Forest!", 207, 159);
    }
    if (score > 25000){
    fill(191, 90, 191);
    rect(58, 134, 300, 51);
    fill(251, 255, 8);
    textSize(22);
    textAlign(CENTER, CENTER);
    text("Achievement: Ocean City!", 207, 159);
    }
    if (score > 50000){
    fill(191, 90, 191);
   rect(58, 134, 300, 51);
    fill(251, 255, 8);
    textSize(22);
    textAlign(CENTER, CENTER);
    text("Achievement: Sandy Desert!", 207, 159);
    }
if (score > 100000){
    fill(191, 90, 191);
    rect(58, 134, 300, 51);
    fill(251, 255, 8);
    textSize(22);
    textAlign(CENTER, CENTER);
    text("Achievement: Endless Space!", 207, 159);
    textSize(30);
    fill(66, 212, 202);
    text("Score: " + score, 200, 350);
    }

fill(47, 255, 0);
rect(50,227,300,50);
fill(0, 0, 0);
textSize(25);
text("Click To Try Again!", 205,250);
if (mouseIsPressed && mouseX > 50 && mouseY > 227 && mouseX < 300 && mouseY < 277) { 
currentScene = 3;
     }
};
var drawScene2 = function(){
    currentScene = 2;
    background(29, 227, 187);

if (score > 10000){
    background(89, 75, 13);
    }
if (score > 25000){
    background(64, 74, 143);
    }
if (score > 50000){
    background(184, 181, 108);
    }
if (score >100000){
    background(29, 30, 51);
    }
fill(255, 255, 255);
textSize(22);
textAlign(CENTER, CENTER);
text("Reload the page to try again", -41, 146, 480, 200);
textSize(30);
text("Game Over", -41, -50, 480, 200);
textSize(25);
text("You died to the border", -41, -10, 480, 200);
textSize(30);
fill(0, 0, 0);
text("Score: " + score, 200, 350);

if (score > 10000){
    fill(191, 90, 191);
    rect(58, 134, 300, 51);
    fill(251, 255, 8);
    textSize(22);
    textAlign(CENTER, CENTER);
    text("Achievement: Spooky Forest!", 207, 159);
    }
if (score > 25000){
    fill(191, 90, 191);
    rect(58, 134, 300, 51);
    fill(251, 255, 8);
    textSize(22);
    textAlign(CENTER, CENTER);
    text("Achievement: Ocean City!", 207, 159);
    }
    if (score > 50000){
    fill(191, 90, 191);
    rect(58, 134, 300, 51);
    fill(251, 255, 8);
    textSize(22);
    textAlign(CENTER, CENTER);
    text("Achievement: Sandy Desert!", 207, 159);
    }
if (score > 100000){
    fill(191, 90, 191);
    rect(58, 134, 300, 51);
    fill(251, 255, 8);
    textSize(22);
    textAlign(CENTER, CENTER);
    text("Achievement: Endless Space!", 207, 159);
    textSize(30);
    fill(66, 212, 202);
    text("Score: " + score, 200, 350);
    }

fill(47, 255, 0);
rect(50,227,300,50);
fill(0, 0, 0);
textSize(25);
text("Click To Try Again!", 205,250);
if (mouseIsPressed && mouseX > 50 && mouseY > 227 && mouseX < 300 && mouseY < 277) { 
currentScene = 3;
     }
};
var drawScene3 = function(){
    currentScene = 3;

};


//background
background(235, 191, 235);
fill(0, 179, 255);
rect(0,0,400,150);
fill(251, 255, 0);
ellipse(sun,10,60,60);
fill(33, 30, 30);
rect(H1,170,35,heightH1);
rect(H2,170,35,heightH2);
rect(H3,170,35,heightH3);
rect(H4,170,35,heightH4);
rect(H5,170,35,heightH5);
rect(H6,170,35,heightH6);
rect(H7,170,35,heightH7);
rect(H8,170,35,heightH8);
rect(H9,170,35,heightH9);
rect(H10,170,35,heightH10);
rect(5, 195, 399, 166);
fill(230, 255, 0);
rect(H1*1.3, 268 ,44, 11);
rect(H3*1.3, 268 ,44, 11);
rect(H5*1.3, 268 ,44, 11);
rect(H7*1.3, 268 ,44, 11);
rect(H9*1.3, 268 ,44, 11);

//score
textSize(30);
fill(0, 0, 0);
text("Score: " + score, 100, 30);
score++;
//lives
text("Lives: " + lives, 280, 30);

 //Enemies
fill(34, 191, 61);
rect(w,a,20,20);
rect(ww,b,20,20);
rect(www,c,20,20);

if (score > 10000){
    background(89, 75, 13);
    fill(6, 32, 43);
    rect(0,0,400,150);
    fill(217, 217, 210);
    ellipse(sun,10,60,60);

 fill(133, 110, 70);
rect(H2, 70, 50, 75);
rect(H4, 70, 50, 75);
rect(H6, 70, 50, 75);
rect(H8, 70, 50, 75);
rect(H10, 70, 50, 75);
rect(H1, 255, 50, 75);
rect(H3, 170, 50, 75);
rect(H5, 160, 50, 75);
rect(H7, 250, 50, 75);
rect(H9, 190, 50, 75);
	fill(98, 186, 78);
ellipse(H2 + 25, 70, 60, 60);
ellipse(H4 + 25, 70, 60, 60);
ellipse(H6 + 25, 70, 60, 60);
ellipse(H8 + 25, 70, 60, 60);
ellipse(H10 + 25, 70, 60, 60);
ellipse(H1 + 25, 255, 60, 60);
ellipse(H3 + 25, 170, 60, 60);
ellipse(H5 + 25, 160, 60, 60);
ellipse(H7 + 25, 250, 60, 60);
ellipse(H9 + 25, 190, 60, 60);
 fill(random(50,350),random(50,350), random(50,350));
 ellipse(H1 + x, y, 30 ,30);
 ellipse(H3 + x, y + 200, 30 ,30);    
 ellipse(H6 + x, y + -200, 30 ,30);
fill(random(50,350),random(50,350), random(50,350));
 ellipse(H1 + -8 + x, y, 5, 5);
 ellipse(H1 + 8 + x, y, 5, 5);
 ellipse(H1 + x, y + 5, 7, 16);

 ellipse(H3 + -12 + x, y + 200, 5, 5);
 ellipse(H3 + 12 + x, y + 200, 5, 5);
 ellipse(H3 + x, y + 205, 16, 16);

 ellipse(H6 + -12 + x, y + -200, 5, 5);
 ellipse(H6 + 12 + x, y + -200, 5, 5);
 ellipse(H6 + x, y + -200 + 5, 22, 5);

    fill(143, 34, 189);
    rect(w,a,20,20);
    rect(ww,b,20,20);
    rect(www,c,20,20);

    fill(201, 54, 201);
    text("Score: " + score, 100, 30);
    text("Lives: " + lives, 280, 30);
    }

    
if (score > 25000){
    background(64, 74, 143);
    fill(12, 111, 150);
    rect(0,0,400,150);
    fill(245, 245, 98);
    ellipse(sun,10,60,60);
    fill(153, 115, 115);
    rect(H1,170,35,heightH1);
    rect(H3,170,35,heightH3);
    rect(H5,170,35,heightH5);
    rect(H7,170,35,heightH7);
    rect(H9,170,35,heightH9);
    fill(0, 0, 0);
    ellipse(H1 + 17, 138, 25, 25);
    ellipse(H3 + 17, 138, 25, 25);    
    ellipse(H5 + 17, 138, 25, 25);
    ellipse(H7 + 17, 138, 25, 25);
    ellipse(H9 + 17, 138, 25, 25);
    fill(153, 115, 115);
    rect(H1, 127, 10, heightH1 + 14);
    rect(H3, 127, 10, heightH3 + 14);
    rect(H5, 127, 10, heightH5 + 14);
    rect(H7, 127, 10, heightH7 + 14);
    rect(H9, 127, 10, heightH9 + 14);
    fill(171, 220, 255);
    ellipse(H4, H2, 20, 20);
    ellipse(H6, H4, 20, 20);
    ellipse(H4, H6, 20, 20);
    ellipse(H8, H10, 20, 20);
    ellipse(H10, H8, 20, 20);
    fill(222, 192, 22);
    rect(w,a,20,20);
    rect(ww,b,20,20);
    rect(www,c,20,20);
    
    fill(199, 79, 55);
    text("Score: " + score, 100, 30);
    text("Lives: " + lives, 280, 30);
}
if (score > 50000){
    background(184, 181, 108);
    fill(0, 179, 255);
    rect(0,0,400,150);
    fill(251, 255, 0);
    ellipse(sun,10,60,60);
    
    fill(59, 56, 45);
    ellipse(H1,367,70,30);
    ellipse(H4,255,70,30);
    ellipse(H3,190,70,30);
    ellipse(H5,377,70,30);
    ellipse(H7,263,70,30);
    ellipse(H8,314,70,30);
    ellipse(H10,239,70,30);
 
 fill(58, 191, 46);
 rect(H1,170,35,heightH1);   
 ellipse(H1 + 16, 66, 40, -19 + heightH1);
 rect(H3,170,35,heightH3); 
 ellipse(H3 + 16, 66, 40, -40 + heightH3);
 rect(H5,170,35,heightH5);
 ellipse(H5 + 16, 66, 40, -40 + heightH5);
 rect(H7,170,35,heightH7);
 ellipse(H7 + 16, 66, 40, -40 + heightH7);
 rect(H9,170,35,heightH9);
 ellipse(H9 + 16, 66, 40, -40 + heightH9);

    fill(0, 0, 0);
    ellipse(H1 + 6, 119, 10, 10);
    ellipse(H1 + 26, 119, 10, 10);
    ellipse(H1 + 16, 142, 9, 23);
    ellipse(H3 + 6, 119, 10, 10);
    ellipse(H3 + 26, 119, 10, 10);
    ellipse(H3 + 16, 142, 9, 23);
    ellipse(H5 + 6, 119, 10, 10);
    ellipse(H5 + 26, 119, 10, 10);
    ellipse(H5 + 16, 142, 9, 23);
    ellipse(H7 + 6, 119, 10, 10);
    ellipse(H7 + 26, 119, 10, 10);
    ellipse(H7 + 16, 142, 9, 23);
    ellipse(H9 + 6, 119, 10, 10);
    ellipse(H9 + 26, 119, 10, 10);
    ellipse(H9 + 16, 142, 9, 23);
    fill(255, 255, 255);
    ellipse(H4, H2, 5, 5);
    ellipse(H6, H4, 5, 5);
    ellipse(H4, H6, 5, 5);
    ellipse(H8, H10, 5, 5);
    
    fill(222, 22, 162);
    rect(w,a,20,20);
    rect(ww,b,20,20);
    rect(www,c,20,20);
    
    fill(0, 0, 0);
    text("Score: " + score, 100, 30);
    text("Lives: " + lives, 280, 30);
    }
    if (score > 100000){
    ellipse(H3 + 15, 261, 131, 43);
    background(0, 0, 0);
    fill(255, 230, 5);
    ellipse(sun,10,60,60);
    fill(0, 77, 255);
    ellipse(211, 385, 562, 500);
    //city Island
    fill(235, 191, 235);
    ellipse(H1, 332, 131, 43);
    fill(0, 0, 0);
    rect(H1 + -22, 299, 11, 20);
    rect(H1 + -9, 289, 11, 30);
    rect(H1 + 17, 289, 11, 30);
    rect(H1 + 5, 281, 11, 38);
    rect(H1 + 31, 299, 11, 20);
    rect(H1 + -34, 290, 11, 30);
    rect(H1 + -46, 300, 11, 20);
    fill(89, 70, 70);
    rect(H1 + -66, 325, 132, 14);
    fill(228, 240, 0);
    rect(H1 + 0, 330, 10, 3);
    rect(H1 + 19, 330, 10, 3);
    rect(H1 + 37, 330, 10, 3);
    rect(H1 + -18, 330, 10, 3);
    rect(H1 + -36, 330, 10, 3);
    rect(H1 + -53, 330, 10, 3);
    rect(H1 + 54, 330, 10, 3);
    
    //Spooky forest
    fill(12, 34, 230);
    ellipse(H3 + 9, 258, 120, 31);
    fill(41, 99, 38);
    ellipse(H6, 298, 147, 43);
    fill(97, 70, 34);
    rect(H6 + 0, 266, 5, 20); 
    rect(H6 + 18, 269, 5, 20); 
    rect(H6 + 10, 269, 5, 20); 
    rect(H6 + 29, 269, 5, 20); 
    rect(H6 + 23, 261, 5, 20); 
    rect(H6 + 18, 269, 5, 20); 
    rect(H6 + -26, 269, 5, 20); 
    rect(H6 + -35, 269, 5, 20); 
    rect(H6 + -15, 271, 5, 20); 
    rect(H6 + -7, 267, 5, 20); 
    rect(H6 + 40, 269, 5, 20); 
    rect(H6 + 48, 269, 5, 21); 
    rect(H6 + -48, 269, 5, 20); 
    rect(H6 + -59, 272, 5, 20); 
    ellipse(H6, 298, 136, 21);
    fill(41, 99, 38);
    ellipse(H6 + 3, 266, 20, 20); 
    ellipse(H6 + 22, 262, 20, 20); 
    ellipse(H6 + 20, 266, 20, 20); 
    ellipse(H6 + 32, 266, 20, 20);
    ellipse(H6 + 43, 266, 20, 20);
    ellipse(H6 + 49, 266, 20, 20);
    ellipse(H6 + -11, 266, 20, 20);
    ellipse(H6 + -24, 270, 20, 20);
    ellipse(H6 + -46, 268, 20, 20);
    ellipse(H6 + -57, 272, 20, 20);
    ellipse(H6 + -36, 265, 20, 20);
    fill(255, 255, 255);
    ellipse(H6 + 48, 266, 5, 5); 
    ellipse(H6 + 23, 281, 5, 5); 
    ellipse(H6 + -11, 275, 5, 5); 
    ellipse(H6 + -36, 266, 5, 5); 
    ellipse(H6 + -1, 295, 10, 10); 
    fill(255, 0, 0);
    ellipse(H6 + -4, 294, 3, 3); 
    ellipse(H6 + 2, 294, 3, 3); 
    
    //Ocean city
    fill(87, 99, 91);
    rect(H3 + 0, 222, 9, 36);
    rect(H3 + 12, 226, 9, 29);
    rect(H3 + -11, 237, 9, 19);
    rect(H3 + 25, 237, 9, 19);
    rect(H3 + 37, 222, 9, 35);
    rect(H3 + -24, 222, 9, 35);
    
    rect(H3 + 37, 219, 3, 30);
    rect(H3 + 25, 232, 3, 8);
    rect(H3 + 12, 219, 3, 30);
    rect(H3 + 37, 219, 3, 30);
    rect(H3 + 37, 219, 3, 30);
    rect(H3 + 37, 219, 3, 30);
    rect(H3 + 0, 218, 3, 30);
    rect(H3 + -12, 232, 3, 6);
    rect(H3 + -24, 218, 3, 30);
    
    fill(0, 0, 0);
    ellipse(H3 + 41, 231, 5, 5);
    ellipse(H3 + 30, 244, 5, 5);
    ellipse(H3 + 17, 234, 5, 5);
    ellipse(H3 + 5, 231, 5, 5);
    ellipse(H3 + -6, 243, 5, 5);
    ellipse(H3 + -19, 231, 5, 5);
    fill(0, 162, 255);
    ellipse(H3 + 54, 231, 4, 4);
    ellipse(H3 + 3, 250, 4, 4);
    ellipse(H3 + 24, 237, 4, 4);
    ellipse(H3 + -32, 225, 4, 4);
    ellipse(H3 + -16, 237, 4, 4);
    ellipse(H3 + 24, 237, 4, 4);
    ellipse(H3 + 39, 250, 4, 4);
    ellipse(H3 + 3, 234, 4, 4);
    
    //Dry Dry Desert
   fill(213, 224, 4);
   ellipse(H8 + -6 , 376, 131, 36);
   fill(34, 176, 2);
   rect(H8 + -9, 344, 11, 22);
   rect(H8 + 5, 340, 11, 23);
   rect(H8 + 19, 330, 11, 38); 
   rect(H8 + 33, 346, 11, 28); 
   rect(H8 + -23, 336, 11, 28); 
   rect(H8 + -38, 342, 11, 28); 
   rect(H8 + -53, 354, 11, 16); 
   rect(H8 + -66, 346, 11, 28);  
   
   ellipse(H8 + 39, 344, 11, 28);
   ellipse(H8 + 25, 328, 11, 28); 
   ellipse(H8 + 10.5, 344, 11, 28);
   ellipse(H8 + -3, 344, 11, 28);
   ellipse(H8 + -17.5, 333, 11, 28); 
   ellipse(H8 + -32, 344, 11, 28); 
   ellipse(H8 + -47, 351, 11, 28); 
   ellipse(H8 + -60.5, 344, 11, 28); 
    
    fill(82, 17, 17);
    ellipse(H8 + 39, 377, 19, 7);
    ellipse(H8 + 1, 371, 19, 7);
    ellipse(H8 + 18, 380, 19, 7);
    ellipse(H8 + -55, 380, 19, 7);
    ellipse(H8 + -19, 387, 19, 7);
    ellipse(H8 + -34, 374, 19, 7);
    ellipse(H8 + -4, 380, 19, 7);
    ellipse(H8 + 8, 389, 19, 7);

    //Clouds
    fill(255, 255, 255);
    ellipse(H1 - 20, heightH1 + 397, 142, 42);
    ellipse(H3 - 20, heightH3 + 507, 97, 42);
    ellipse(H5 - 20, heightH5 + 329, 173, 42);
    ellipse(H7 - 20, heightH7 + 455, 103, 42);
    ellipse(H10 - 20, heightH10 + 254, 137, 42);
    
    //stars
    fill(252, 246, 58);
    ellipse(sun + 150,90,5,5);
    ellipse(sun + 550,30,5,5);
    ellipse(sun + 420,80,5,5);
    ellipse(sun + 180,50,5,5);
    ellipse(sun + 60,10,5,5);
    ellipse(sun - 150,90,5,5);
    ellipse(sun - 650,35,5,5);
    ellipse(sun - 320,45,5,5);
    ellipse(sun - 80,10,5,5);
    ellipse(sun - 160,80,5,5);
    ellipse(sun + 107,74,5,5);
    ellipse(sun + 543,43,5,5);
    ellipse(sun + 399,63,5,5);
    ellipse(sun + 202,18,5,5);
    ellipse(sun + 30,75,5,5);
    ellipse(sun - 133,95,5,5);
    ellipse(sun - 688,69,5,5);
    ellipse(sun - 356,65,5,5);
    ellipse(sun - 67,33,5,5);
    ellipse(sun - 135,98,5,5);
    ellipse(sun + 187,45,5,5);
    ellipse(sun + 478,57,5,5);
    ellipse(sun + 393,102,5,5);
    ellipse(sun + 136,17,5,5);
    ellipse(sun + 76,59,5,5);
    ellipse(sun - 186,76,5,5);
    ellipse(sun - 616,73,5,5);
    ellipse(sun - 275,24,5,5);
    ellipse(sun - 60,70,5,5);
    ellipse(sun - 200,109,5,5);
    ellipse(sun + 147,72,5,5);
    ellipse(sun + 697,17,5,5);
    ellipse(sun + 471,88,5,5);
    ellipse(sun - 362,40,5,5);
    ellipse(sun - 313,33,5,5);
    ellipse(sun - 401,77,5,5);
    ellipse(sun - 650,25,5,5);
    ellipse(sun - 320,62,5,5);
    ellipse(sun - 279,12,5,5);
    ellipse(sun - 398,95,5,5);
    ellipse(sun + 147,72,5,5);
    ellipse(sun + 697,17,5,5);
    ellipse(sun + 390,88,5,5);
    ellipse(sun + 42,72,5,5);
    ellipse(sun + 11,46,5,5);
    ellipse(sun + 20,74,5,5);
    ellipse(sun - 10,115,5,5);
    ellipse(sun - 16,91,5,5);
    ellipse(sun - 2,101,5,5);
    ellipse(sun - 11,98,5,5);
    
    fill(222, 162, 22);
    rect(w,a,20,20);
    rect(ww,b,20,20);
    rect(www,c,20,20);
    
    fill(0, 255, 230);
    text("Score: " + score, 100, 30);
    text("Lives: " + lives, 280, 30);
    }



    //Main Character
fill(70, 79, 212);
rect(x,y,40,40);

    //Main Character Gun Bullet
fill(110, 92, 92);
rect(z + 9, v + 8.2,25,10);

    //Main Character Gun
fill(10, 28, 61);
rect(x + 9, y + 8,10,25);
rect(x + 9, y + 8,25,10);

if (lives === 2){
        fill(88, 232, 148);
        rect(x,y,40,40);
        fill(110, 92, 92);
        rect(z + 9, v + 8.2,25,10);
        fill(10, 28, 61);
        rect(x + 9, y + 8,10,25);
        rect(x + 9, y + 8,25,10);
    }
    if (lives === 1){
        fill(230, 102, 87);
        rect(x,y,40,40);
        fill(110, 92, 92);
        rect(z + 9, v + 8.2,25,10);
        fill(10, 28, 61);
        rect(x + 9, y + 8,10,25);
        rect(x + 9, y + 8,25,10);
    }

//The Magic Shooter
if (score >15000){
fill(179, 0, 255);
rect(shooterX,shooterY - 10,40,40);
fill(161, 23, 23);
rect(zz,shooterY + 2,25,10);
fill(179, 0, 255);
rect(shooterX - 15,shooterY,30,15);
zz -= 2.5;
shooterX--;
if (zz < -150){
    zz = shooterX;
    shooterY = random(50,350);
}
if (shooterX < 270){
    shooterX = 270;
}
}
//Border
fill(255, 0, 0);
rect(-10,0,25,400);


    //Power-Ups
//car
fill(222, 168, 69);
ellipse(carX,carY,50,20);
fill(0, 0, 0);
ellipse(carX + 15,carY + 5,20,20);
ellipse(carX - 15,carY + 5,20,20);
//Fighter Jet
fill(255, 128, 0);
ellipse(fighterjetX - 20,fighterjetY + 10, 30, 15);
ellipse(fighterjetX - 20,fighterjetY - 10, 30, 15);
fill(0, 0, 0);
ellipse(fighterjetX,fighterjetY,70,30);
fill(fighterjetX + 132, 21, 21);
ellipse(fighterjetX + 25,fighterjetY,20,18);
fill(0, 0, 0);
rect(fighterjetX + 5,fighterjetY - 10,20,19);
// Star Power
fill(random(50,350),random(50,350), random(50,350));
ellipse(speedSterX, speedSterY,20,20);
fill(random(50,350),random(50,350), random(50,350));
ellipse(speedSterX,speedSterY,starPower,starPower);



    if (keyIsPressed && keyCode === 38) {
        y -= 4;
    } 
    if (keyIsPressed && keyCode === 40) {
        y += 4;
    } 
    if (keyIsPressed && keyCode === 37) {
        x -= 4;
    } 
    if (keyIsPressed && keyCode === 39) {
        x += 4;
    } 
    if (keyIsPressed && keyCode === 37) {
        z -= 4;
    } 
    if (keyIsPressed && keyCode === 39) {
        z += 4;
    } 
    if (keyIsPressed && keyCode === 38) {
        v -= 4;
    } 
    if (keyIsPressed && keyCode === 40) {
        v += 4;
    } 
    if (score > 1000){
    fill(34, 191, 61);
    rect(wwww,d,20,20);
    if (wwww < -5) {
        wwww = 400;
        d = random(5, 395);
    }
        if (d < y + 40 && d > y - 20 && wwww < x + 40 && wwww > x - 20 && lives === 3) {
        lives = 2;
        wwww = 400;
    }
    if (d < y + 40 && d > y - 20 && wwww < x + 40 && wwww > x - 20 && lives === 2) {
        lives = 1;
        wwww = 400;
    }
    if (d < y + 40 && d > y - 20 && wwww < x + 40 && wwww > x - 20 && lives === 1) {
        drawScene1();
    }
    if (d < y + 45 && d > y - 25 && wwww < x + 45 && wwww > x - 25 && starPower > 0) {
         d = -800;
        fill(255, 0, 0);
        score += 1500;
    }
    if (d < v + 20 && d > v - 10 && wwww < z + 20 && wwww > z - 20) {
        d = -800;
        fill(255, 0, 0);
        score += 750;
    }
    if (spaceSpeed >= wwww && d) {
        d = -800;
        fill(0, 0, 255);
        text("Score: " + score, 100, 30);
        text("Lives: " + lives, 280, 30);
        score += 10;
    }
    }
    if (score > 50000){
    fill(34, 191, 61);
    rect(wwwww,e,20,20);
    if (wwwww < -5) {
        wwwww = 400;
        e = random(5, 395);
    }
    if (e < y + 40 && e > y - 20 && wwwww < x + 40 && wwwww > x - 20 && lives === 3) {
        lives = 2;
        wwwww = 400;
    }
    if (e < y + 40 && e > y - 20 && wwwww < x + 40 && wwwww > x - 20 && lives === 2) {
        lives = 1;
        wwwww = 400;
    }
    if (e < y + 40 && e > y - 20 && wwwww < x + 40 && wwwww > x - 20 && lives === 1) {
        drawScene1();
    }
    if (e < y + 45 && e > y - 25 && wwwww < x + 45 && wwwww > x - 25 && starPower > 0) {
         e = -800;
        fill(255, 0, 0);
        score += 1000;
    }
    if (e < v + 20 && e > v - 10 && wwwww < z + 20 && wwwww > z - 20) {
        e = -800;
        fill(255, 0, 0);
        score += 100;
    }
     if (spaceSpeed >= wwwww && e) {
        e = -800;
        fill(0, 0, 255);
        text("Score: " + score, 100, 30);
        text("Lives: " + lives, 280, 30);
        score += 10;
    }
    }
    if (score > 10000){
    fill(143, 34, 189);
    rect(wwww,d,20,20);
    }
if (score > 25000){
    fill(222, 192, 22);
    rect(wwww,d,20,20);
    }
if (score > 50000){
    fill(222, 22, 162);
    rect(wwww,d,20,20);
    rect(wwwww,e,20,20);
    }
if (score > 100000){
    fill(222, 162, 22);
    rect(wwww,d,20,20);
    rect(wwwww,e,20,20);
    }
    if (z > 400) {
        z = x;
    } 
    if (w < -5) {
        w = 400;
        a =random(5, 395);
    }
    if (ww < -5) {
        ww= 400;
        b = random(5, 395);
    }
    if (www < -5) {
        www = 400;
        c = random(5, 395);
    }
    if (H1 < -10) {
        H1 = 400;
        heightH1 = random(-60, -150);
    }
    if (H2 < -10) {
        H2 = 400;
        heightH2 = random(-60, -150);
    }
    if (H3 < -10) {
        H3 = 400;
        heightH3 = random(-60, -150);
    }
    if (H4 < -10) {
        H4 = 400;
        heightH4 = random(-60, -150);
    }
    if (H5 < -10) {
        H5 = 400;
        heightH5 = random(-60, -150);
    }
    if (H6 < -10) {
        H6 = 400;
        heightH6 = random(-60, -150);
    }
    if (H7 < -10) {
        H7 = 400;
        heightH7 = random(-60, -150);
    }
    if (H8 < -10) {
        H8 = 400;
        heightH8 = random(-60, -150);
    }
    if (H9 < -10) {
        H9 = 400;
        heightH9 = random(-60, -150);
    }
    if (H10 < -10) {
        H10 = 400;
        heightH10 = random(-60, -150);
    }
    if (sun < -30) {
        sun = 430;
    }
    if (ob < -50) {
        ob = 400;
        f = random(5, 395);
        zize = random(5, 100);
    }
    if (x < 15) {
        drawScene2();
    }
    if (x > 360) {
        x = 360;
    }
    if (y < 0) {
        y = 0;
    }
    if (y > 360) {
        y = 360;
    }
    if (v < 0) {
        v = 0;
    }
    if (v > 360) {
        v = 360;
    }
    if (z > x){
        z += 7;
    if (keyIsPressed && keyCode === 37) {
        z += 4;
    } 
    if (keyIsPressed && keyCode === 39) {
        z -= 4;
    } 
    }
    if (carX > 200){
        carX -= 2;
    }
    if (carX > 500){
        carX = -1500;
        carY = random(0,395);
    }
    if (fighterjetX > 150){
        fighterjetX++;
        if (fighterjetX > 300){
        fighterjetX += 3;
        }
    }
    if (fighterjetX > 500){
        fighterjetX = -1000;
        fighterjetY = random(0,395);
    }
     if (mouseIsPressed){
        //reditcal
        z += 0.000001;
       fill(255, 255, 255);
       rect(mouseX + 17, mouseY + 2, -9, -5);
       rect(mouseX + -8, mouseY + 2, -9, -5);
       rect(mouseX +  -3, mouseY + -18, 5, 10);
       rect(mouseX + -3, mouseY + 7, 5, 10);
       ellipse(mouseX + 0, mouseY + 0, 10, 10);
    
    
    }
    if (carY < y + 50 && carY > y - 20 && carX < x + 30 && carX > x - 20) {
        carY = y + 40;
        carX = x + 16;
        if (carX === x + 16 && carY === y + 40){
    if (z > x){
        z += 2;
    }
    if (keyIsPressed && keyCode === 40) {
        y += 2;
    } 
    if (keyIsPressed && keyCode === 38) {
        y -= 2;
    }
    if (keyIsPressed && keyCode === 37) {
        x -= 2;
    } 
    if (keyIsPressed && keyCode === 39) {
        x += 2;
    } 
    if (keyIsPressed && keyCode === 37) {
        z -= 2;
    } 
    if (keyIsPressed && keyCode === 39) {
        z += 2;
    } 
    if (keyIsPressed && keyCode === 38) {
        v -= 2;
    } 
    if (keyIsPressed && keyCode === 40) {
        v += 2;
        }
        }
    }
    
    if (score > 2000){
    fill(34, 191, 61);
    ellipse(speedSterX, speedSterY,20,20);
    speedSterX -= 15;
    if (speedSterX < -5) {
        speedSterX = 400;
        speedSterY = random (-50, 450);
    }
    if (speedSterY < y + 40 && speedSterY > y && speedSterX < x + 40 && speedSterX > x - 40) {
        speedSterX = x + 20;
        speedSterY = y + 20;
        if (speedSterX === x + 20 && speedSterY === y + 20){
            if (keyIsPressed && keyCode === 17 && starPower === 0) {
                    starPower++;
                }
                if (starPower >= 1 && starPower <= 60){
                    starPower+= 1;
                    starPower-= 0.5;
                }
                if (starPower === 60){
                    starPower = 0;
                    speedSterX = - 1500;
                    speedSterY = random(5,350);
                }
                if (currentScene === 1){
                    starPower = 0;
                    speedSterX = - 1500;
                    speedSterY = random(5,350);
            }
                if (currentScene === 2){
                    starPower = 0;
                    speedSterX = - 1500;
                    speedSterY = random(5,350);
            }
        }
    }
    }
    
    fill(0, 0, 0);
    ellipse(200,200,spaceSpeed,spaceSpeed);
    
    if (fighterjetY < y + 50 && fighterjetY > y - 20 && fighterjetX < x + 30 && fighterjetX > x - 20) {
        fighterjetY = y + 40;
        fighterjetX = x + 16;
        if (fighterjetX === x + 16 && fighterjetY === y + 40){
            if (keyIsPressed && keyCode === 17) {
                spaceSpeed++;
                }
                if (spaceSpeed >= 1 && spaceSpeed <= 560){
                spaceSpeed++;
                zz = -1000;
		if (score < 25000){
                   spaceSpeed += 3;
                }
                if (spaceSpeed === 560){
                    spaceSpeed = 0;
                    fighterjetX = - 1500;
                    fighterjetY = random(5,350);
                if (currentScene === 1){
                    spaceSpeed = 0;
                    fighterjetX = - 1500;
                    fighterjetY = random(5,350);
                    if (keyIsPressed && keyCode === 17) {
                    spaceSpeed--;
                }
            }
                if (currentScene === 2){
                    spaceSpeed = 0;
                    fighterjetX = - 1500;
                    fighterjetY = random(5,350);
                    if (keyIsPressed && keyCode === 17) {
                    spaceSpeed--;
                }
            }
            }
            }
        }
    }
    if (a < y + 40 && a > y - 20 && w < x + 40 && w > x - 20 && lives === 3) {
        lives = 2;
        w = 400;
    }
    if (a < y + 40 && a > y - 20 && w < x + 40 && w > x - 20 && lives === 2) {
        lives = 1;
        w = 400;
    }
    if (a < y + 40 && a > y - 20 && w < x + 40 && w > x - 20 && lives === 1) {
        drawScene1();
    }
    if (b < y + 40 && b > y - 20 && ww < x + 40 && ww > x - 20 && lives === 3) {
        lives = 2;
        ww = 400;
    }
    if (b < y + 40 && b > y - 20 && ww < x + 40 && ww > x - 20 && lives === 2) {
        lives = 1;
        ww = 400;
    }
    if (b < y + 40 && b > y - 20 && ww < x + 40 && ww > x - 20 && lives === 1) {
        drawScene1();
    }
    if (c < y + 40 && c > y - 20 && www < x + 40 && www > x - 20 && lives === 3) {
        lives = 2;
        www = 400;
    }
    if (c < y + 40 && c > y - 20 && www < x + 40 && www > x - 20 && lives === 2) {
        lives = 1;
        www = 400;
    }
    if (c < y + 40 && c > y - 20 && www < x + 40 && www > x - 20 && lives === 1) {
        drawScene1();
    }
    if (y < shooterY + 15 && y > shooterY - 25 && x < zz + 40 && x > zz - 40) {
        drawScene1();
    }
    if (v < shooterY + 15 && v > shooterY - 25 && z < shooterX + 40 && z > shooterX - 40) {
        z = x;
    }
    if (shooterY < y + 40 && shooterY > y - 20 && shooterX < x + 40 && shooterX > x - 20) {
        shooterX = 1000;
        score += 5000;
    }
    if (a < y + 45 && a > y - 25 && w < x + 45 && w > x - 25 && starPower > 0) {
        a = -800;
        fill(255, 0, 0);
        score += 1000;
    }
    if (b < y + 45 && b > y - 25 && ww < x + 45 && ww > x - 25 && starPower > 0) {
        b = -800;
        fill(255, 0, 0);
        score += 2000;
    }
    if (c < y + 45 && c >  - 25 && www < x + 45 && www > x - 25 && starPower > 0) {
        c = -800;
        fill(255, 0, 0);
        score += 5000;
    }
    
    if (y < shooterY + 15 && y > shooterY - 25 && x < zz + 40 && x > zz - 40 && starPower > 0) {
        zz = -150;
        fill(255, 0, 0);
        score += 1000;
    }
    if (a < v + 20 && a > v - 10 && w < z + 20 && w > z - 20) {
        a = -800;
        fill(255, 0, 0);
        score += 100;
    }
    if (b < v + 20 && b > v - 10 && ww < z + 20 && ww > z - 20) {
        b = -800;
        fill(255, 0, 0);
        score += 200;
    }
    if (c < v + 20 && c > v - 10 && www < z + 20 && www > z - 20) {
        c = -800;
        fill(255, 0, 0);
        score += 500;
    }
    
    
    if (spaceSpeed >= w && a) {
        a = -800;
        fill(0, 0, 255);
        text("Score: " + score, 100, 30);
        text("Lives: " + lives, 280, 30);
        score += 10;
    }
    if (spaceSpeed >= ww && b) {
        b = -800;
        fill(0, 0, 255);
        text("Score: " + score, 100, 30);
        text("Lives: " + lives, 280, 30);
        score += 10;
    }
    if (spaceSpeed >= www && c) {
        c = -800;
        fill(0, 0, 255);
        text("Score: " + score, 100, 30);
        text("Lives: " + lives, 280, 30);
        score += 10;
    }
    if (spaceSpeed >= shooterX && shooterY) {
        shooterX = 1000;
        fill(0, 0, 255);
        text("Score: " + score, 100, 30);
        text("Lives: " + lives, 280, 30);
        score += 1000;
    }
    if ( score === 5000){
        carX = -100;
        fighterjetX = -5000;
    }
    if (lives === 0){
        currentScene = 1;
    }
    
    if (currentScene === 1){
        w = x;
        ww = x;
        www = x;
        wwww = x;
        wwwww = x;
        a = y;
        b = y;
        c = y;
        d = y;
        e = y;
        z = -400;
        z -= 1;
        v = 0;
        score--;
    }
    if (currentScene === 2){
        x = 0;
        w = x + 200;
        ww = x + 200;
        www = x + 200;
        wwww = x + 200;
        wwwww = x + 200;
        a = y;
        b = y;
        c = y;
        d = y;
        e = y;
        z = -400;
        z -= 1;
        v = 0;
        speedSterX = -100;
        speedSterX += 15;
        score--;
    }
	if (currentScene === 3){
score = 0;
lives = 3;
a = Math.random(5, 395);
b = Math.random(5, 395);
c = Math.random(5, 395);
d = Math.random(5, 395);
e = Math.random(5, 395);
f = Math.random(5, 395);
w = 0;
ww = 0;
www = 0;
wwww = 0;
wwwww = 0;
carX = -5000;
carY = Math.random(50,350);
fighterjetX = -2500;
fighterjetY = Math.random(50,350);
speedSterX = 0;
speedSterY = Math.random(-50,-450);
ob = 0;
H1 = 0.00;
H2 = 40.897;
H3 = H2*2;
H4 = H2*3;
H5 = H2*4;
H6 = H2*5;
H7 = H2*6;
H8 = H2*7;
H9 = H2*8;
H10 = H2*9;
heightH1 = Math.random(-60, -150);
heightH2 = Math.random(-60, -150);
heightH3 = Math.random(-60, -150);
heightH4 = Math.random(-60, -150);
heightH5 = Math.random(-60, -150);
heightH6 = Math.random(-60, -150);
heightH7 = Math.random(-60, -150);
heightH8 = Math.random(-60, -150);
heightH9 = Math.random(-60, -150);
heightH10 = Math.random(-60, -150);
spaceSpeed = 0;
starPower = 0;
sun = 430;
x = 81;
y = 312;
z = 81;
shooterX = 400;
shooterY = Math.random(50,350);
zz = shooterX;
v = y;
zize = function (xx,yy) {
    zize.x = xx;
    zize.y = yy;
};

    }
    
w -= 3;
ww -= 4;
www -= 5;
wwww -= 5.5;
wwwww -= 6;
carX += 5;
fighterjetX += 2;
ob -= 3.5;
H1 -= 2.75;
H2 -= 2.75;
H3 -= 2.75;
H4 -= 2.75;
H5 -= 2.75;
H6 -= 2.75;
H7 -= 2.75;
H8 -= 2.75;
H9 -= 2.75;
H10 -= 2.75;
sun -= 0.5;
};

mouseClicked = function(){
  if (currentScene === 1) {
  }
};

//Creators
//Vivethen Balachandiran - Coding
//Sam Vrontos - Coding
//Alon Halfin - Music
//Katy...
