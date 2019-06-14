///var ctx=gameCanvas.getContext('2d');
		//var imgBullet1=new Image();
	   // imgBullet1.src='img/background.png';
		//imgBullet1.onload=function(){
		//     ctx.drawImage(imgBullet1,0,0);
	   // } 
/******************************
     游戏中的全局变量
********************************/
  var canvasWidth=480;  //画布的宽
  var canvasHeight=650;

  var score=0;  //当期的积分
  var lives=3;   //玩家剩余的命数
  
  var canvas=document.getElementById('gameCanvas');
  canvas.width=canvasWidth;
  canvas.height=canvasHeight;
  var ctx=canvas.getContext('2d');

  const PHASE_DOWNLOADING=1;
  const PHASE_READY=2;
  const PHASE_STARTING=3;
  const PHASE_PLAY=4;
  const PHASE_PAUSE=5;
  const PHASE_GAMEOVER=6;
  var cur_phase=PHASE_DOWNLOADING;        //游戏当前
  
/******************************
     阶段1:PHASE_DOWNLODSING
********************************/
  var progress=0; //当前已经加载的进度
  ctx.lineWidth=8;
  ctx.strokeStyle="#aaa";
  ctx.fillStyle="#aaa";
  ctx.font='40px SimHei';
  function drawProgress(){//绘制圆形进度条
      
	  //console.log('当前进度'+progress);
	  ctx.clearRect(0,0,canvasWidth,canvasHeight);
	  ctx.beginPath();
	  var startAngle=-90*Math.PI/180;
	  var endAngle=(-90+360*progress/100)*Math.PI/180;
	  ctx.arc(canvasWidth/2,canvasHeight/2,60,startAngle,endAngle)
	  ctx.stroke();//对路径进行描边


	  var txt=progress+"%";
	  var txtWidth=ctx.measureText(txt).width;
	  ctx.fillText(txt,canvasWidth/2-txtWidth/2,canvasHeight/2+10);
	  if(progress>=100){
	      cur_phase=PHASE_READY;
		 Sky=new Sky(imgBackground);
		  startEngine();//启动引擎
	  }

  }
  var imgBackground=new Image();
  var imgBullet1=new Image();
  var imgsEnemy1=[new Image(),new Image(),new Image(),new Image(),new Image()];
  var imgsEnemy2=[new Image(),new Image(),new Image(),new Image(),new Image()];
  var imgsEnemy3=[new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image()];
  var imgsGameLoading=[new Image(),new Image(),new Image(),new Image()];
  var imgGamePause=new Image();
  var imgsHero=[new Image(),new Image(),new Image(),new Image(),new Image(),new Image()];
  var imgStart=new Image();

 downloadResource();
function downloadResource(){
  imgBackground.src='img/background.png';
  imgBackground.onload=function(){
      progress+=4;
	  drawProgress();
  }
  imgBullet1.src='img/bullet1.png';
  imgBullet1.onload=function(){
      progress+=3;
	  drawProgress();
  }
  imgsEnemy1[0].src='img/enemy1.png';
  imgsEnemy1[0].onload=function(){
      progress+=3;
	  drawProgress();
  }
  imgsEnemy1[1].src='img/enemy1_down1.png';
  imgsEnemy1[1].onload=function(){
      progress+=3;
	  drawProgress();
  }
  imgsEnemy1[2].src='img/enemy1_down2.png';
  imgsEnemy1[2].onload=function(){
      progress+=3;
	  drawProgress();
  }
  imgsEnemy1[3].src='img/enemy1_down3.png';
  imgsEnemy1[3].onload=function(){
      progress+=3;
	  drawProgress();
  }
  imgsEnemy1[4].src='img/enemy1_down4.png';
  imgsEnemy1[4].onload=function(){
      progress+=3;
	  drawProgress();
  }
  imgsEnemy2[0].src='img/enemy2.png';
  imgsEnemy2[0].onload=function(){
      progress+=3;
	  drawProgress();
  }
  imgsEnemy2[1].src='img/enemy2_down1.png';
  imgsEnemy2[1].onload=function(){
      progress+=3;
	  drawProgress();
  }
  imgsEnemy2[2].src='img/enemy2_down2.png';
  imgsEnemy2[2].onload=function(){
      progress+=3;
	  drawProgress();
  }
  imgsEnemy2[3].src='img/enemy2_down3.png';
  imgsEnemy2[3].onload=function(){
      progress+=3;
	  drawProgress();
  }
  imgsEnemy2[4].src='img/enemy2_down4.png';
  imgsEnemy2[4].onload=function(){
      progress+=3;
	  drawProgress();
  }
  imgsEnemy3[0].src='img/enemy3_n1.png';
  imgsEnemy3[0].onload=function(){
      progress+=3;
	  drawProgress();
  }
  imgsEnemy3[1].src='img/enemy3_n2.png';
  imgsEnemy3[1].onload=function(){
      progress+=3;
	  drawProgress();
  }
  imgsEnemy3[2].src='img/enemy3_hit.png';
  imgsEnemy3[2].onload=function(){
      progress+=3;
	  drawProgress();
  }
  imgsEnemy3[3].src='img/enemy3_down1.png';
  imgsEnemy3[3].onload=function(){
      progress+=3;
	  drawProgress();
  }
  imgsEnemy3[4].src='img/enemy3_down2.png';
  imgsEnemy3[4].onload=function(){
      progress+=3;
	  drawProgress();
  }
  imgsEnemy3[5].src='img/enemy3_down3.png';
  imgsEnemy3[5].onload=function(){
      progress+=3;
	  drawProgress();
  }
  imgsEnemy3[6].src='img/enemy3_down4.png';
  imgsEnemy3[6].onload=function(){
      progress+=3;
	  drawProgress();
  }
  imgsEnemy3[7].src='img/enemy3_down5.png';
  imgsEnemy3[7].onload=function(){
      progress+=3;
	  drawProgress();
  }
  imgsEnemy3[8].src='img/enemy3_down6.png';
  imgsEnemy3[8].onload=function(){
      progress+=3;
	  drawProgress();
  }
  imgsGameLoading[0].src='img/game_loading1.png';
  imgsGameLoading[0].onload=function(){
      progress+=3;
	  drawProgress();
  }
  imgsGameLoading[1].src='img/game_loading2.png';
  imgsGameLoading[1].onload=function(){
      progress+=3;
	  drawProgress();
  }
  imgsGameLoading[2].src='img/game_loading3.png';
  imgsGameLoading[2].onload=function(){
      progress+=3;
	  drawProgress();
  }
  imgsGameLoading[3].src='img/game_loading4.png';
  imgsGameLoading[3].onload=function(){
      progress+=3;
	  drawProgress();
  }
  imgGamePause.src='img/game_pause_nor.png';
  imgGamePause.onload=function(){
      progress+=3;
	  drawProgress();
  }
  imgsHero[0].src='img/hero1.png';
  imgsHero[0].onload=function(){
      progress+=3;
	  drawProgress();
  }
  imgsHero[1].src='img/hero2.png';
  imgsHero[1].onload=function(){
      progress+=3;
	  drawProgress();
  }
  imgsHero[2].src='img/hero_blowup_n1.png';
  imgsHero[2].onload=function(){
      progress+=3;
	  drawProgress();
  }
  imgsHero[3].src='img/hero_blowup_n2.png';
  imgsHero[3].onload=function(){
      progress+=3;
	  drawProgress();
  }
  imgsHero[4].src='img/hero_blowup_n3.png';
  imgsHero[4].onload=function(){
      progress+=3;
	  drawProgress();
  }
  imgsHero[5].src='img/hero_blowup_n4.png';
  imgsHero[5].onload=function(){
      progress+=3;
	  drawProgress();
  }
  imgStart.src='img/start.png';
  imgStart.onload=function(){
      progress+=3;
	  drawProgress();
  }
}
/******************************
     阶段2:PHASE_READY
********************************/
function Sky(img){//一张背景图，绘出两份
     this.x1=0;
	 this.y1=0;
	 this.x2=0;
	 this.y2=-img.height;
	 this.draw=function(){
	     ctx.drawImage(img,this.x1,this.y1);
	     ctx.drawImage(img,this.x2,this.y2);
	 }
	 this.move=function(){
	     this.y1++;
		 this.y2++;
		 if(this.y1>=canvasHeight){//第一幅已经移出画布
		     this.y1=this.y2-img.height;
		 }
		 if(this.y2>=canvasHeight){
		     this.y2=this.y1-img.height;
		 }
	 }
}
//绘制LOGO
function drawLogo(){
     ctx.drawImage(imgStart,canvasWidth/2-imgStart.width/2,
		           canvasHeight/2-imgStart.height/2);
}
//为画布添加单击事件监听函数

canvas.addEventListener('click',function(){
      if(cur_phase===PHASE_READY){
	     cur_phase=PHASE_STARTING;
		 runningPlane=new RunningPlane(imgsGameLoading);//创建奔跑的小飞机
	  }
},false)
/******************************
     阶段3:PHASE_STARTING
********************************/
var runningPlane=null;
//奔跑的小飞机的构造方法
function RunningPlane(imgsGameLoading){
     this.x=0;
	 this.y=canvasHeight-imgsGameLoading[0].height;
	 this.index=0;

	 this.draw=function(){//绘制奔跑的小飞机
	     ctx.drawImage(imgsGameLoading[this.index],this.x,this.y);
	 }
	 this.moveCount=0;
	 this.move=function(){
		 this.moveCount++;
		 if(this.moveCount%6===0){
	        this.index++;
		    if(this.index===imgsGameLoading.length){
		     //进入下一个阶段：游戏进行中
			 cur_phase=PHASE_PLAY;
			 hero=new Hero(imgsHero);//创建英雄飞机
			 bulletList=new BulletList();//子弹列表
			 enemyList=new EnemyList();//敌人列表
		     }
		 }
	 }
}

/******************************
     阶段4:PHASE_PLAY
********************************/

/*我方的英雄和子弹*/
var hero=null;
var bulletList=null;
function Hero(imgs){
	 this.width=imgs[0].width;
	 this.height=imgs[0].height;
     this.x=canvasWidth/2-imgs[0].width/2;
	 this.y=canvasHeight-imgs[0].height;
	 this.index=0;//当前要绘制那张图片
	 this.crashed=false;//当前是否被撞毁

	 this.draw=function(){
	     ctx.drawImage(imgs[this.index],this.x,this.y);
	 }
	 this.moveCount=0;
	 this.move=function(){
	     if(!this.crashed){//当前尚未被撞毁
		     if(this.index===0){
			     this.index=1
			 }else if(this.index===1){
				     this.index=0;
				 }
		 }
		 this.moveCount++;
		 if(this.moveCount%5===0){
		     var bullet=new Bullet(imgBullet1);
		      bulletList.add(bullet);
		 }
         if(this.crashed&&this.moveCount%2===0){
		     if(this.index===0 || this.index===1){
			      this.index=2;
			 }
			 else{
			    this.index++;
				if(this.index===imgs.length-1){
				     lives--;
					 if(lives>0){//回到画布下方
					     this.x=canvasWidth/2-this.width/2;
						 this.y=canvasHeight-imgs[0].height;
						 this.index=0;
						 this.crashed=false;
					 }else{//游戏结束
					     cur_phase=PHASE_GAMEOVER;
					 }
				}
			 }
		 }
	 }
	 //绑定鼠标移动事件，让英雄随着鼠标而移动
	 canvas.addEventListener('mousemove',function(event){
	     var x=event.offsetX-imgs[0].width/2;
		 var y=event.offsetY-imgs[0].height/2;
		 hero.x=x;
		 hero.y=y;
	 },false)
}
function Bullet(img){
	 this.width=img.width;
	 this.height=img.height;
     this.x=hero.x+(imgsHero[0].width/2-img.width/2);
     this.y=hero.y-img.height;
     this.removable=false;//子弹可以从画布上移出吗

	 this.draw=function(){
	     ctx.drawImage(img,this.x,this.y);
	 }
	 this.move=function(){
	     this.y-=18;//子弹的飞行速度
		 if(this.y<=-img.height){
		     this.removable=true;//可以删除了
		 }
	 }
}
function BulletList(){
     this.list=[];//保存着当前需要绘制的所有子弹
	 this.add=function(bullet){//向列表中添加子弹
	      this.list.push(bullet);
	 }
	 this.draw=function(){
	     for(var i=0;i<this.list.length;i++){
		      this.list[i].draw();//绘制每一个子弹
		 }
	 }
	 this.move=function(){
	     for(var i=0;i<this.list.length;i++){
		      this.list[i].move();
			  if(this.list[i].removable){
			      this.list.splice(i,1);//删除子弹
				  i--;//注意此处的--
			  }
		 }
	 }
}

/*敌机列表*/
var enemyList=null;
function Enemy1(imgs){
	 this.width=imgs[0].width;
	 this.height=imgs[0].height;
	 this.x=Math.random()*(canvasWidth-this.width);
	 this.y=-this.height;
	 this.index=0;//当前绘制的图片的下标
	 this.blood=1;//敌机的血格数
	 this.removable=false;//当前敌机可以被删除吗
	 this.score=10;//击落后我方英雄得分
	 this.crashed=false;//被撞毁了吗

	 this.draw=function(){
	     ctx.drawImage(imgs[this.index],this.x,this.y);
	 }
	 this.moveCount=0;
	 this.move=function(){
		 this.moveCount++;
	     this.y+=6;//敌机向下移动的速度;
		 if(this.y>=canvasHeight){
		     this.removable=true;
		 }
		 //开始撞毁程序
		 if(this.crashed && this.moveCount%3===0){
		     this.index++;
			 if(this.index===imgs.length-1){
			     this.removable=true;
			 }
		 }
	 }
}
function Enemy2(imgs){
     this.width=imgs[0].width;
	 this.height=imgs[0].height;
	 this.x=Math.random()*(canvasWidth-this.width);
	 this.y=-this.height;
	 this.index=0;//当前绘制的图片的下标
	 this.blood=4;//敌机的血格数
	 this.removable=false;//当前敌机可以被删除吗
	 this.score=50;//击落后我方英雄得分
	 this.crashed=false;//被撞毁了吗

	 this.draw=function(){
	     ctx.drawImage(imgs[this.index],this.x,this.y);
	 }
	 this.moveCount=0;
	 this.move=function(){
		 this.moveCount++;
	     this.y+=3;//敌机向下移动的速度;
		 if(this.y>=canvasHeight){
		     this.removable=true;
		 }
		 if(this.crashed && this.moveCount%3===0){
		     this.index++;
			 if(this.index===imgs.length-1){
			     this.removable=true;
			 }
		 }
	 }
}
function Enemy3(imgs){
     this.width=imgs[0].width;
	 this.height=imgs[0].height;
	 this.x=Math.random()*(canvasWidth-this.width);
	 this.y=-this.height;
	 this.index=0;//当前绘制的图片的下标
	 this.blood=10;//敌机的血格数
	 this.removable=false;//当前敌机可以被删除吗
	 this.score=150;//击落后我方英雄得分
	 this.crashed=false;//被撞毁了吗

	 this.draw=function(){
	     ctx.drawImage(imgs[this.index],this.x,this.y);
	 }
	 this.moveCount=0;
	 this.move=function(){
		 this.moveCount++;
	     this.y+=2;//敌机向下移动的速度;
		 if(this.y>=canvasHeight){
		     this.removable=true;
		 }
		 //if(this.moveCount%2===0){
		 if(!this.crashed){
		     if(this.index===0){
			     this.index=1
			 }else if(this.index===1){
				     this.index=0;
				}
		 }else{//开始撞毁
				     if(this.index===0 || this.index===1){
					     this.index=3;
					 }else{
					    this.index++;
					 }
					 if(this.index===imgs.length-1){this.removable=true;}
				 }
		 
	 }
}
function EnemyList(){
     this.list=[];//保存当前所有的敌机
	 this.add=function(enemy){
	     this.list.push(enemy);
	 }
	 this.draw=function(){
	     for(var i=0;i<this.list.length;i++){
		     this.list[i].draw();
		 }
	 }
	 this.move=function(){
         /*********************试着随机生成敌机************/
         var num=Math.floor(Math.random()*300);
		 if(num<6){//创建小号敌机
		     this.add(new Enemy1(imgsEnemy1));
		 }else if(num<9){//创建中号敌机
		     this.add(new Enemy2(imgsEnemy2));
		 }else if(num<10){//创建大号敌机
		     this.add(new Enemy3(imgsEnemy3));
		 }
		 /*************************************************/

         /*********************敌机与我方子弹的碰撞检验************/
		 for(var i=0;i<this.list.length;i++){
		     var enemy=this.list[i];//一个敌机
             for(var j=0;j<bulletList.list.length;j++){
			     var bullet=bulletList.list[j];//一个子弹
				 if(enemy.x+enemy.width>=bullet.x
					 &&bullet.x+bullet.width>=enemy.x
					 &&enemy.y+enemy.height>=bullet.y
					 &&bullet.y+bullet.height>=enemy.y){
				     bullet.removable=true;
					 enemy.blood--;//血格减一
				     if(enemy.blood<=0){
						 enemy.crashed=true;//开始撞毁
				     }
					 score+=enemy.score;
				 }
			 }
		 }
		 /*************************************************/

		  /*********************敌机与我方英雄的碰撞检验************/
		 for(var i=0;i<this.list.length;i++){
		     var enemy=this.list[i];//一个敌机
				 if(enemy.x+enemy.width>=hero.x
					 &&hero.x+hero.width>=enemy.x
					 &&enemy.y+enemy.height>=hero.y
					 &&hero.y+hero.height>=enemy.y){
					 enemy.blood--;//敌机血格减一
				     if(enemy.blood<=0){
						 enemy.crashed=true;//开始撞毁
				     }
					 hero.crashed=true;
				 }
		 }
		 /*************************************************/

		 //移动每一个敌机
	    for(var i=0;i<this.list.length;i++){
			var e=this.list[i];
		     e.move();
			 if(e.removable){
			     this.list.splice(i,1);
				 i--;
			 }
		}
	 }
}
//绘制得分  命数统计
function drawStat(){
	 ctx.font='20px SimHei';
     ctx.fillStyle="#111";
     var txtScore='SCORE:'+score;
	 ctx.fillText(txtScore,5,25);

	 var txtLives='LIVES:'+lives;
	 var w=ctx.measureText(txtLives).width;
	 ctx.fillText(txtLives,canvasWidth-w-5,25);
}

//若鼠标离开画布，游戏暂停
canvas.addEventListener('mouseout',function(){
     if(cur_phase===PHASE_PLAY){
	     cur_phase=PHASE_PAUSE;
	 }
},false);
//若鼠标进入画布，游戏开始
canvas.addEventListener('mouseover',function(){
     if(cur_phase===PHASE_PAUSE){
	     cur_phase=PHASE_PLAY;
	 }
},false);
/******************************
     阶段5:PHASE_PAUSE
********************************/
function drawPause(){
      ctx.drawImage(imgGamePause,canvasWidth/2-imgGamePause.width/2,canvasHeight/2-imgGamePause.height/2);
}
/******************************
     阶段6:PHASE_GAMEOVER
********************************/
function drawOver(){
	 ctx.font='90px SimHei';
	 var txt='GAME OVER';
	 var w=ctx.measureText(txt).width;
      ctx.fillText(txt,canvasWidth/2-w/2,canvasHeight/2);
}
/******************************
     主引擎的速度：每秒绘制24次
********************************/
function startEngine(){
   setInterval(function(){
          Sky.draw();
		  Sky.move();
		  switch(cur_phase){
		     case PHASE_READY:
				 drawLogo();
				 break;
			 case PHASE_STARTING:
				 runningPlane.draw();
			     runningPlane.move();
				 break;
			 case PHASE_PLAY:
				 hero.draw();
			     hero.move();
			     bulletList.draw();
				 bulletList.move();
				 enemyList.draw();
				 enemyList.move();
				 drawStat();
				 break;
			 case PHASE_PAUSE:
				 drawPause();
				 break;
			 case PHASE_GAMEOVER:
				 drawOver();
				 break;
			  }
    },42)
}