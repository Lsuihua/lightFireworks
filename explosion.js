class Explosion{
  constructor(options){
    /**
     * 随机大小
     */
    this.r = Math.random() * 2 +1;
    this.x = options.x;
    this.y = options.y;
    this.dx = Math.random() * 1 - 0.5;
    this.dy = Math.random() * 1 - 0.5;
    this.dr = Math.random() * 0.01;
    this.color = options.color;
    this.etimer = null;
    
    game.explosionList.push(this);

    this.animate();
  }

  update(){
    this.x += this.dx;
    this.y += this.dy;
    this.r -= this.dr;

    if(this.r <= 0 || this.x < 0 || this.x > game.width || this.y < 0 || this.y > game.height){
      this.destroy();
    }
  }

  destroy(){
    game.explosionList.map((item,index,arr) => {
      if(item == this){
        arr.splice(index,1);
        clearInterval(this.etimer);
        this.etimer = null;
      }
    })
  }
  
  render(){
    game.ctx.save();
    game.ctx.beginPath();
    game.ctx.fillStyle = this.color;
    game.ctx.arc(this.x,this.y,this.r,0,Math.PI*2,false);
    game.ctx.closePath();
    game.ctx.fill();
    game.ctx.restore();
  }

  animate(){
    this.etimer = setInterval(() => {
      // game.ctx.clearRect(0,0,game.width,game.height);
      for(let i =0;i<game.explosionList.length;i++){
        game.explosionList[i].update();
        game.explosionList[i] && game.explosionList[i].render();
      }
    },20)
  }
  
}