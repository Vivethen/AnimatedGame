if (score > 15000){
    //Spooky forest boss
    fill(255, 255, 255);
    ellipse(boss,189,400,400);
    fill(255, 0, 0);
    ellipse(boss + -115, 189, 50, 50);
    ellipse(boss + 0, 189, 50, 50);
    fill(0, 0, 0);
    ellipse(boss + -61, 261, 183, 33);
    ellipse(boss + -28, 274, 40, 40);
    ellipse(boss + -61, 279, 40, 40);
    ellipse(boss + -99, 274, 40, 40);
    ellipse(boss + -132, 273, 30, 30);
    ellipse(boss + 5, 273, 30, 30);
    if (boss <= 400){
        boss = 400;
        fill(0, 17, 87);
        ellipse(borbX,borbY,40,40);
        borbX -= 3;
        if (borbX <= 0){
            borbX = 400;
            borbY = random(0,400);
        }
    }
    if (spaceSpeed > 1){
        borbX = 500;
    }
    boss -= 1.5;

if (z >= 200){
  bosslives -= 1;
        }

if( x >= 200){
    drawScene1();
}
if (bosslives <= 100){
      fill(random(50,350),random(50,350), random(50,350));
     ellipse(boss + -115, 189, 50, 50);
    ellipse(boss + 0, 189, 50, 50);
}
if (bosslives >= 0){

fill(255, 255, 255);
text("Papa Gaspucci", 21, 86);
}
    }
     if (score > 45000){
    //Ocean city boss
   fill(99, 128, 181);
   rect(boss + -146, 101, 175, 357);
   ellipse(boss + -44, 108, 202,185);
   rect(boss + -226, 237, 85, 24);
   rect(boss + -226, 215, 27, 24);
   rect(boss + -226, 287, 85, 24);
   rect(boss + -226, 310, 27, 24);
   fill(0, 0, 0);
   ellipse(boss + -72, 182, 146, 41);
   ellipse(boss + -70, 274, 70, 70);
   
   fill(255, 0, 0);
   ellipse(boss + -70, 274, 44, 44);
   rect(boss + -68, 287, 23, 9);
   rect(boss + -98, 287, 23, 9);
   fill(0, 0, 0);
   ellipse(boss + -70, 279, -18, 40);
   
   fill(255, 0, 0);
   ellipse(boss + -72, 182, 14, 25); 
   ellipse(boss + -97, 182, 14, 25);  
   ellipse(boss + -47, 182, 14, 25);  
   ellipse(boss + -22, 182, 14, 25); 
   ellipse(boss + -123, 182, 14, 25); 
   fill(0, 0, 0);
   ellipse(boss + -72, 173, 116, 25); 
   ellipse(boss + -61, 75, 70, 70);
    
    if (boss <= 400){
        boss = 400;
        fill(0, 17, 87);
        ellipse(borbX,borbY,40,40);
        borbX -= 3;
        if (borbX <= 0){
            borbX = 400;
            borbY = random(0,400);
        }
    }
    if (spaceSpeed > 1){
        borbX = 500;
    }
    boss -= 1.5;

if (z === 200){
  bosslives -= 1;
        }

if( x >= 200){
    drawScene1();
}


if (bosslives >= 0){

fill(0, 200, 255);
text("The Ocean Obelisk", 21, 86);
}
if (bosslives <= 180){
   fill(230, 255, 0);
   rect(boss + -158, 261, 15, 27);
   rect(boss + -66, 45, 10, 27);
   ellipse(boss + -60, 86, 13, 13);
}
if (bosslives <= 150){
   fill(255, 209, 5);
   rect(boss + -173, 261, 15, 27);
   rect(boss + -66, 45, 10, 27);
   ellipse(boss + -60, 86, 13, 13);

}
if (bosslives <= 130){
   fill(247, 165, 72);
   rect(boss + -187, 261, 15, 27);
   rect(boss + -66, 45, 10, 27);
   ellipse(boss + -60, 86, 13, 13);

}
if (bosslives <= 100){
   fill(255, 81, 0);
   rect(boss + -201, 261, 15, 27);
   rect(boss + -66, 45, 10, 27);
   ellipse(boss + -60, 86, 13, 13);

}
if (bosslives <= 70){
   fill(255, 0, 0);
   rect(boss + -215, 261, 15, 27);
   rect(boss + -66, 45, 10, 27);
   ellipse(boss + -60, 86, 13, 13);

}
if (bosslives <= 40){
  fill(random(50,350),random(50,350), random(50,350));
   rect(boss + -226, 261, 13, 27);
   rect(boss + -66, 45, 10, 27);
   ellipse(boss + -60, 86, 13, 13);

}
if (bosslives <= 180 && bosslives >= 0){
   fill(random(50,350),random(50,350), random(50,350));
   text("CHARGING CANNON", 103, 261);
}
    }


}
  if (score > 85000){
    //Sandy desert boss
   fill(46, 38, 38);
   ellipse(boss + -97, 216, 65, 65); 
   ellipse(boss + -7, 215, 65, 65); 
   ellipse(boss + -67, 216, 65, 65); 
   ellipse(boss + -31, 216, 65, 65); 
   fill(250, 250, 250);
   ellipse(boss + -51, 181, 100, 100);
   fill(0, 255, 34);
   ellipse(boss + -70, 181, 50, 50);
   fill(0, 0, 0);
   ellipse(boss + -81, 181, 20, 20);
   
    if (boss <= 400){
        boss = 400;
        fill(0, 17, 87);
        ellipse(borbX,borbY,40,40);
        borbX -= 3;
        if (borbX <= 0){
            borbX = 400;
            borbY = random(0,400);
        }
    }
    if (spaceSpeed > 1){
        borbX = 500;
    }
    boss -= 1.5;

if (z === 200){
  bosslives -= 0.5;
        }

if( x >= 200){
    drawScene1();

}
if (bosslives >= 0){

fill(255, 106, 0);
text("The eye of the storm", 21, 86);
}
if (bosslives <= 300 && bosslives >= 250){
   fill(random(50,350),random(50,350), random(50,350));
   text("EyE sToRm AtTaCk", 114, 124);
}


if (bosslives <= 250 && bosslives >= 200) {
   fill(255, 247, 0);
   ellipse(boss + -70, 181, 50, 50);
   fill(0, 0, 0);
   ellipse(boss + -81, 181, 20, 20);
   fill(random(50,350),random(50,350), random(50,350));
   text("EyE sToRm AtTaCk", 114, 124);
}
if (bosslives <= 200 && bosslives >= 150 ){
   fill(255, 145, 0);
   ellipse(boss + -70, 181, 50, 50);
   fill(0, 0, 0);
   ellipse(boss + -81, 181, 20, 20);
 fill(random(50,350),random(50,350), random(50,350));
   text("VoLtAgE gRaSp", 60, 124);
  

}
if (bosslives <= 190  && bosslives >= 110){
   fill(230, 255, 0);
   rect(boss + -56, 250, 10, 46);
   

}
if (bosslives <= 170 && bosslives >= 110){
    fill(230, 255, 0);
    rect(boss + -157, 292, 111, 10);
   
   

}
if (bosslives <= 150  && bosslives >= 110){
   fill(64, 54, 54);
   ellipse(boss + -160, 224, 50, 50);
      fill(230, 255, 0);
     rect(boss + -167, 248, 10, 54);
   
 
   
}
if (bosslives <= 130  && bosslives >= 110){
     fill(230, 255, 0);
   rect(boss + -275, 218, 100, 10);
   rect(boss + -275, 241, 100, 10);
   rect(boss + -275, 196, 100, 10);
   rect(boss + -275, 200, 10, 47);
   rect(boss + -185, 200, 10, 47);

} 
if (bosslives <= 130 && bosslives >= 110 && x  >= -300 ) {
  x = 150;
  y = 200;

}

if (bosslives <= 150 && bosslives >= 110){
   fill(255, 34, 0);
   ellipse(boss + -70, 181, 50, 50);
   fill(0, 0, 0);
   ellipse(boss + -81, 181, 20, 20);
   fill(random(50,350),random(50,350), random(50,350));
   text("VoLtAgE gRaSp", 60, 124);

}

if (bosslives <= 100 && bosslives >= 0){
   fill(random(50,350),random(50,350), random(50,350));
   ellipse(boss + -70, 181, 50, 50);
   fill(0, 0, 0);
   ellipse(boss + -81, 181, 20, 20);
    fill(255, 0, 0);
    rect(boss + -21, 174, 20, 6);
    rect(boss + -22, 174, 6, 20);
    rect(boss + -28, 155, 20, 6);
    rect(boss + -33, 141, 6, 20);
    rect(boss + -42, 188, 20, 6);
    rect(boss + -51, 131, 6, 20);
    rect(boss + -68, 145, 20, 6);
    rect(boss + -71, 220, 36, 6);
    rect(boss + -41, 201, 6, 20);
     rect(boss + -41, 200, 32, 6);
  fill(random(50,350),random(50,350), random(50,350));
   text("StOrM dIsSiPaTiNg...", 60, 124);
}
  
if (borbX <= 500 && bosslives >= 0){
   fill(255, 255, 255);
   ellipse(borbX, borbY , 44, 44);
   fill(0, 251, 255);
   ellipse(borbX + -7, borbY , 24, 24);
    fill(0, 0, 0);
     ellipse(borbX + -7, borbY , 14, 14);
}

    }
        
    
}
    
