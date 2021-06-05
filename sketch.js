var tower,tower2;
var player,playerImg;
var wal1,wal2,wal3,wal4,wal5,wal6;
var ob1,ob2,ob3,ob4,ob5;
var oob1,oob2,oob3,oob4,oob5;
var wasd,wasd2;
var tel,tel2,tel3;
var tob1,tob2,tob3;
var b,b2,b3;
var mo1,mo2;
var ta1,ta2,ta4,ta3
var to1,to2,to3;
var la1,la2 ,la3,la4,la5,la6
var lo1;

function preload(){
tower2=loadImage("tower.png")
wasd=loadImage("wasd.png")
playerImg=loadImage("runner.png")
}

function setup(){
createCanvas(1500,1000)
tower=createSprite(802,495,22,22)
tower.addImage("ssjojso",tower2)
tower.scale=2
wasd2=createSprite(202,495,22,22)
wasd2.addImage("ssjojso",wasd)

//player=createSprite(900,955,16,16)
player=createSprite(606,676,17,17)
player.addImage("ssjojso",playerImg)
player.scale=0.09
wal1=createSprite(802,980,500,17)
wal2=createSprite(802,840,500,15)
wal3=createSprite(802,714,500,15)
wal4=createSprite(802,519,500,15)
ob1=createSprite(812,920,13,13)
ob2=createSprite(722,920,13,13)
wal5=createSprite(1042,619,15,900)
wal6=createSprite(542,619,15,900)
ob3=createSprite(850,970,20,15)
ob4=createSprite(765,970,20,15)
ob5=createSprite(685,970,20,15)
tel=createSprite(600,920,40,100)
tel2=createSprite(980,780,40,130)
tel3=createSprite(580,560,40,40)
oob1=createSprite(650,780,15,15)
oob2=createSprite(750,780,15,15)
oob3=createSprite(850,780,15,15)
oob4=createSprite(950,780,15,15)
oob5=createSprite(600,820,15,15)
tob1=createSprite(760,700,12,12)
tob2=createSprite(690,700,12,12)
tob3=createSprite(830,700,16,16)
b=createSprite(946,676,17,17)
b1=createSprite(986,647,17,17)
b2=createSprite(916,600,17,17)
ta1=createSprite(820,605,90,17)
ta2=createSprite(678,607,60,15)
to1=createSprite(850,590,7,15)
to2=createSprite(788,590,7,15)
to3=createSprite(680,590,8,15)

la1=createSprite(605,475,10,8)
la2=createSprite(669,475,10,8)
la3=createSprite(735,475,10,8)
la4=createSprite(795,475,10,8)
la5=createSprite(830,450,10,8)
la6=createSprite(855,425,10,8)

lo1=createSprite(780,495,400,8)

ob1.velocityY=-3.5
ob2.velocityY=-3
oob1.velocityY=3
oob2.velocityY=-3
oob3.velocityY=3
oob4.velocityY=-3
oob5.velocityX=-3

ob1.shapeColor="black"
ob2.shapeColor="black"
oob1.shapeColor="black"
oob2.shapeColor="black"
oob3.shapeColor="black"
oob4.shapeColor="black"
oob5.shapeColor="black"

}




function draw(){
  background("white")
 player.collide(wal1)
 player.collide(wal2)
 player.collide(wal3)
 player.collide(wal4)
 player.collide(wal5)
 player.collide(wal6)
 player.collide(b)
 player.collide(b1)
 player.collide(b2)
 player.collide(ta2)
 player.collide(la1)
 player.collide(la2)
 player.collide(la3)
 player.collide(ta1)
 player.collide(la4)
 player.collide(ta2)
 player.collide(la5)
 player.collide(la6)

wal1.visible=false
wal2.visible=false
wal3.visible=false
wal4.visible=false
wal5.visible=false
wal6.visible=false
ob3.visible=false
ob4.visible=false
ob5.visible=false
tel.visible=false
tel2.visible=false
b.visible=false
b1.visible=false
b2.visible=false
tob1.visible=false
tob2.visible=false
tob3.visible=false


ta1.visible=false
ta2.visible=false
to3.visble=false
to1.visible=false
to2.visible=false
tel3.visible=false

la1.visible=false
la2.visible=false
lo1.visible=false
la3.visible=false

la5.visible=false
la4.visible=false
if (keyDown("w")){
  player.velocityY=-10
}
if (keyDown("a")){
  player.x=player.x-3
}
if (keyDown("d")){
  player.x=player.x+3
}

if (player.isTouching(ob1)){
  player.x=900
  player.y=955
}

if (player.isTouching(ob2)){
  player.x=900
  player.y=955
}

if (player.isTouching(ob4)){
  player.x=900
  player.y=955
}
if (player.isTouching(ob3)){
  player.x=900
  player.y=955
}

if (player.isTouching(tel)){
  player.x=600
  player.y=805
}
if (player.isTouching(tel2)){
  player.x=590
  player.y=600
}
if (player.isTouching(oob1)){
  player.x=900
  player.y=955
}
if (player.isTouching(oob2)){
  player.x=900
  player.y=955
}
if (player.isTouching(oob3)){
  player.x=900
  player.y=955
}
if (player.isTouching(oob4)){
  player.x=900
  player.y=955
}
if (player.isTouching(oob5)){
  player.x=900
  player.y=955
}
if (player.isTouching(tob1)){
  player.x=900
  player.y=955
}
if (player.isTouching(tob2)){
  player.x=900
  player.y=955
}
if (player.isTouching(oob5)){
  player.x=900
  player.y=955
}


if (player.isTouching(tob3)){
  player.x=900
  player.y=955
}
if (player.isTouching(tob2)){
  player.x=900
  player.y=955
}
if (player.isTouching(tob1)){
  player.x=900
  player.y=955
}
if (player.isTouching(to1)){
  player.x=900
  player.y=955
}
if (player.isTouching(to2)){
  player.x=900
  player.y=955
}
if (player.isTouching(to3)){
  player.x=900
  player.y=955
}
if (player.isTouching(tel3)){
  player.x=605
  player.y=475
}
if (player.isTouching(lo1)){
  player.x=605
  player.y=475
}

player.velocityY=player.velocityY+1.3;

ob1.bounceOff(wal2)
ob1.bounceOff(wal1)
ob2.bounceOff(wal2)
ob2.bounceOff(wal1)
oob2.bounceOff(wal2)
oob2.bounceOff(wal3)
oob1.bounceOff(wal2)
oob1.bounceOff(wal3)
oob3.bounceOff(wal2)
oob3.bounceOff(wal3)
oob4.bounceOff(wal2)
oob4.bounceOff(wal3)
oob5.bounceOff(wal5)
oob5.bounceOff(wal6)

drawSprites();
}