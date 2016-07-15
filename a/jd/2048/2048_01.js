
//#创建一个game对象
var game = {
	//1:score保存玩家分数
	score:0,
	//2:保存玩家二维数组
	data:null,
	//3:保存游戏行数 4
	RN:4,
	//4:保存游戏列数 4
	CN:4,
	//5:游戏开始方法
	start:function(){
	  //5.0 清除分数
	  this.score = 0;	
	  //5.1 依据空组 this.data
	  this.data = [];
	  //5.2 循环行 0 3 
	  for(var r=0;r<this.RN;r++){
	  //5.3 为每一行添加空数组 [[],[],[],[]]
      this.data.push([]);
	  //5.4 循环列 0 3  [[],[],[],[]]
	  for(var c=0;c<this.CN;c++){
	   //5.5 为每一列赋值 0 [[0,0,0,0],[0,0,0,0],[0,0,0,0],[]]
	   this.data[r][c] = 0;
	   }
	  }
	  //5.6 产生一个随机数
	  this.randomNum();
	  //5.7 产生一个随机数
	  this.randomNum();
	  //5.8 依据数组更新网页
	  this.updateView();
	  //console.log(this.data.join(";"));

      //######面向对象技巧::预留this
      var self = this;//this==game  self==game

	  //5.9 监听键盘
	  document.onkeydown=function(){
	  	//5.10 获取事件对象
	  	var e = window.event || arguments[0];
	  	//5.11 获取按键
	  	var code = e.keyCode;
	  	//5.12 判断按不同键调用不同方法
	  	switch(code){
	  		case 37:self.moveLeft();break;     //向左操作
	  		//case 39:this.moveRight();break;  //向右操作
	  		//case 38:this.moveUp();break;     //向上操作
	  		//case 40:this.moveDown();break;   //向下操作
	  	}
	  }
	
	},
	//6:游戏结束方法
	gameOver:function(){},
	//7:产生一个随机数方法
	randomNum:function(){
	  //7.1 产生一个随机数 2 或  4
	  var num = Math.random()<0.5?2:4;
	  //7.2 无限循环  
	  while(true){
	  //7.3 随机产生行位置  0-3  Math.random()*4
	  var row = parseInt(Math.random()*this.RN);
	  //7.4 随机产生列位置  0-4
	  var col = parseInt(Math.random()*this.CN);
	  //7.5 依据产生行与列判断如果当前元素为0
	  if(this.data[row][col]==0){
	  //7.6 将新产生数值赋当位置
	    this.data[row][col] = num;
	  //7.7 退出循环
	    break;
	  }
	  }	
	},
	//8:依据数组更新网页方法
	updateView:function(){
	 //8.1 循环数组行	
	 for(var r=0;r<this.RN;r++){
	 //8.2 循环数组列
	 for(var c=0;c<this.CN;c++){
	  //8.3 依据行列下标拼字符串  "c11"
	  var input = "c"+r+c;
	  //8.4 依据字符串获取网页元素
	  var cell = document.getElementById(input);
	  //8.5 将数组值赋网页
	  //    如果元素大于0显示
	  if(this.data[r][c] > 0){
	   //8.6 赋值操作
	   cell.innerHTML = this.data[r][c];
	   //8.7 修改背景颜色 拼字符串  "cell n4"
	   cell.className = "cell n"+this.data[r][c];
	  }
	  
	  }
	 }
	},
	//9:按向左操作键
	moveLeft:function(){
       //9.1 循环四行
       for(var r=0;r<this.RN;r++){
       //9.2 每一行执行相同操作
        this.moveLeftInRow(r);
       }
       //9.3 随机产生一个数字
       this.randomNum();
       //9.4 依据数组更新网页
       this.updateView();    
	},
	//10:向左操作一行完整操作
	moveLeftInRow:function(r){
      //10.1 循环 当前元素 c 0开始 <this.CN-1 
      for(var c=0;c<this.CN-1;c++){
       //10.2 找下一个不为0元素位置 单写一个方法
       var nextC = this.getNextInRow(r,c);
       //nextC == -1  没找到
       if(nextC == -1){
       	//退出循环
        break;
       }else if(this.data[r][c]==0){
        //10.3 当前元素0 交换
        this.data[r][c] = this.data[r][nextC];
        //下一个不为零元素赋值0
        this.data[r][nextC] = 0;
        c--;//交换后当前元素位置不变!
       }else if(this.data[r][c] == this.data[r][nextC]){
        //当前元素值*2
        this.data[r][c] = this.data[r][c]*2;
        //下一个不为零元素清零
        this.data[r][nextC] = 0;
        //加分
        this.score = this.data[r][c];
       }
       //10.4:当前元不为0 相等 * 2 = 0
      }
	},
	//向右查找第一个不为零元素列位置
	//返回-1没找到... 
	getNextInRow:function(r,c){
       
	}
};

//#调用game对象start方法
game.start();