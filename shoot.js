class Shoot{
  constructor(options){
    this.sx = Math.floor(Math.random() * game.width*0.6 + game.width*0.2);
    this.sy = game.height;
    this.ex = Math.floor(Math.random() * game.width*0.6 + game.width*0.2);
    this.ey = Math.floor(Math.random() * game.height*0.2 + game.height*0.2);
    
    this.dx = Math.floor(Math.random() * 6 - 3);
    this.dy = Math.floor(Math.random() * 3 + 3);
    this.r =  Math.floor(Math.random() * 5) + 5;
    this.color = `rgba(${Math.random() * 256},${Math.random() * 256},${Math.random() * 256},${Math.random()* 0.4 + 0.6})`
    this.timer = null;

    game.shootList.push(this);
    this.start();
  }

  update(){
    this.sy -= this.dy;

    if(this.sy < this.ey){
      // 到达终点  爆炸
      return this.destroy();
    }
  }

  destroy(){
    console.log("销毁")
    game.shootList.map((item,index,arr) => {
      if(item == this){
        arr.splice(index,1);
        clearInterval(this.timer);
        this.tiemr = null;
      }
    })
  }

  render(){
    game.ctx.save();
    game.ctx.shadowBlur = 10;
    game.ctx.shadowColor = '#ffffff';
    game.ctx.beginPath();
    game.ctx.fillStyle = this.color;
    game.ctx.arc(this.sx,this.sy,this.r,0,Math.PI*2,false);
    game.ctx.closePath();
    game.ctx.fill();
    game.ctx.restore();
  }

  animate(){
    game.ctx.clearRect(0,0,game.width,game.height);
    for(let i=0;i<game.shootList.length;i++){
      game.shootList[i] && game.shootList[i].update();
      game.shootList[i] && game.shootList[i].render();
    }
  }

  start(){
    this.timer = setInterval(()=>{
      this.animate();
    },20)
  }
}