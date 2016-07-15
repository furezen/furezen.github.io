
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
	  		case 39:self.moveRight();break;    //向右操作
	  		case 38:self.moveUp();break;     //向上操作
	  		case 40:self.moveDown();break;   //向下操作
	  	}
	  }
	
	},
	//6:游戏结束方法
	//返回true  表示游戏结束
	//返回false 表示游戏没结束
	gameOver:function(){
	 //循环遍历 行 列	
	 for(var r=0;r<this.RN;r++){
      for(var c=0;c<this.CN;c++){
         //1:如果有一个数字为0  
         if(this.data[r][c]==0){
         	return false;
         }
         //2:一行一行相邻元素比较相同
         if(r<this.RN-1&&
         	this.data[r][c]==this.data[r+1][c]){
            return false;
         }
         //3:一列一列相邻无素比较相同
         if(c<this.CN-1&&
         	this.data[r][c]==this.data[r][c+1]){
         	return false;
         }
         return true;
      }
	 }	
	},

	//7:产生一个随机数方法
	randomNum:function(){

	  //7.0 判断数组是否进满的
	  //如果数组全满===true return不再执行方法后继内容
	  if(this.isFull()){
	  	return;
	  }	
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
	  }else{
	   //8.8 清除网页元素内容	
	   cell.innerHTML = "";
	   //8.9 添加样 100 100 
	   cell.className = "cell"; 
	  }
	  }
	 }

	 //8.10 更新分数 
	 //获取分数div
	 var scoreDiv = document.getElementById("score");
	 //8.10  将分数赋值 div内容
	 scoreDiv.innerHTML = this.score;
	},
	//9:按向左操作键
	moveLeft:function(){
	  //9.1 循环行 0 - 3
	  for(var r=0;r<this.RN;r++){
	  //9.2 操作每一行 
	   this.moveLeftInRow(r);
	  }
	  //9.3 产生一个随机数
	  this.randomNum();
	  //9.4 依据数组更新网页  
	  this.updateView();
	},
	//10:向左操作[一行]完整操作
	moveLeftInRow:function(r){
      //10.1 创建循环c 0---this.CN-1
      for(var c=0;c<this.CN-1;c++){
      //10.2 创建变量 nextC ?调用方法
      var nextC = this.getNextInRow(r,c);
      //10.3 如果nextC == -1 退出循环
      if(nextC == -1){break;}
      //10.4 当前元素为 0 交换
      else if(this.data[r][c]==0){
      	//将下一个不为零元素内容赋值当前元素
      	this.data[r][c] = this.data[r][nextC];
      	//下一个不为零元素赋值0
      	this.data[r][nextC] = 0;
      	c--;//c不要向前移动
      	////10.5 当前元素与nextC元素相同 *2 0
      }else if(this.data[r][c] == this.data[r][nextC]){
      	//当前元素数值 *2
        this.data[r][c] = parseInt(this.data[r][c]) * 2;
        //下一个元素值赋0
        this.data[r][nextC] = 0;
        //分数赋值当前元素值
        this.score += parseInt(this.data[r][c]);
      }
      
      }
	},
	//11:向右查找第一个不为零元素列位置
	//返回-1没找到... 
	getNextInRow:function(r,c){
     //11.1 循环c之后查找 this.CN
     for(var nextC=c+1;nextC<this.CN;nextC++){
      //11.2 如果你找到不为0数 
      if(this.data[r][nextC]!=0){
       //11.3 返回列下标
       return nextC;
      }
     }
     //11.4 返回 -1
     return -1;
	},
	//12:isFull
	//功能:判断数组this.data 是否全满
	//所有元素都不为0  
	//全满  true
	//不满  false
	isFull:function(){
     //12.1:循环行
     for(var r=0;r<this.RN;r++){
     //12.2:循环列
     for(var c=0;c<this.CN;c++){
      //12.3:遍历数组的每一个元素 
      if(this.data[r][c]==0){
      	//12.4:如果元素值==0 return false
      	return false;
       }
      }
     }
     //12.5:二层循环外    return true
     return true;
	},
	//13  按向右操作键  11:42---11:45
	moveRight:function(){
	  //13.1循环行 0 - 3
	  for(var r=0;r<this.RN;r++){
	  //13.2 操作每一行 
	   this.moveRightInRow(r);
	  }
	  //13.3 产生一个随机数
	  this.randomNum();
	  //13.4 依据数组更新网页
	  this.updateView();
	},
	//14: 向右操作[一行]完整操作 参考向左 11:49--11:59
	moveRightInRow:function(r){
      //14.1  循环创建变量 c 当前元素 this.CN-1
      for(var c=this.CN-1;c>0;c--){
       //14.2  创建nextC    ?调用方法
       var nextC = this.getPrevInRow(r,c);
       //14.3  判断如果nextC == -1 
       if(nextC==-1){break;}
       //14.4  退出循环
       else if(this.data[r][c]==0){
       //14.5  当前元素等于0
       this.data[r][c]=this.data[r][nextC];
       //14.6  交换
       this.data[r][nextC] = 0;
       c++;
       //14.7  当前元素与前一个元素相同       
       }else if(this.data[r][c]==this.data[r][nextC]){
       //14.8  当前元素* 2
        this.data[r][c] = parseInt(this.data[r][c])*2;
       //14.9  下一个元素 = 0
        this.data[r][nextC] = 0;
       //14.10 分数相加 循环结束
        this.score += parseInt(this.data[r][c]);
       }
       
      }
	},
	//15
	//功能:找到 nextC
	getPrevInRow:function(r,c){
     //15.1 向前查找 nextC  循环
     for(var nextC=c-1;nextC>=0;nextC--){
      //15.2 如果当前元素不为0
      if(this.data[r][nextC] != 0){
      	return nextC;
      }
      //15.3 返回当前 nextC
     }
     //15.4 在循环外部 返回-1
     return -1;
	},
	//16: 用户按向上键
	moveUp:function(){
     //16.1 遍历所有列
     for(var c=0;c<this.CN;c++){
      //16.2 对每一列操作
      this.moveUpInCol(c);    	
     }

     //16.3 生成随机数 
     this.randomNum();
     //16.4 依据数组更新网页
     this.updateView();
	},//17:专门处理向上操作一行
	 //   移动
	moveUpInCol:function(){
      //17.1 循环创建变量 r
      for(var r=0;r<this.RN-1;r++){
      //17.2 创建变量     nextR
      var nextR = this.nextUpNextR(r,c);
      //17.3 nextR == -1 没找到退出循环
      if(nextR == -1){
      	break;
      //17.4 当前元素为0
      }else if(this.data[r][c]==0){
       this.data[r][c]=this.data[nextR][c];
       this.data[nextR][c] = 0;
       r--;
      }else if(this.data[r][c]==this.data[nextR][c]){
      this.data[r][c] = parseInt(this.data[r][c])*2;
      this.data[nextR][c] = 0;
       //17.5 当前元素与下一个元素相同
      this.score += parseInt(this.data[r][c]); 
      }
      }
	},
	//17向上操作
	nextUpNextR:function(r,c){
		for(var nextR = r+1 ;nextR<this.RN;nextR++){
			if (this.data[nextR][c]!=0) {
				return nextR;
			}
			alert("ssss");
		}
		return -1;
	},
	//18向下操作
	moveDown:function(){
		for(var c=0;c<this.CN;c++){
			this.moveDownInCol(c);
		}
		this.randomNum();
		this.updateView();
	},
	moveDownInCol:function(c){
		for(var r = this.RN-1;r>0;r--){
			//nextR 下一个不为0元素的行号；
			var nextR = this.moveDownNextR(r,c);
			if (nextR==-1) {
				break;
			}else if (this.data[r][c]==0) {
				this.data[r][c] = this.data[nextR][c];
				this.data[nextR][c] = 0;
				r++;

			}else if (this.data[r][c]==this.data[nextR][c]) {
				this.data[r][c]= parseInt(this.data[r][c])*2;
				this.data[nextR][c]=0;
				this.score += parseInt(this.data[r][c]);
			}
		}
	},
	moveDownNextR:function(r,c){
		for(var nextR = r-1 ; nextR>=0;nextR--){
			if (this.data[nextR]!=0) {
				return nextR;
			}
		}
	}
};

//#调用game对象start方法
game.start();