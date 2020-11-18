class Explosion{
  constructor(options){
    /**
     * 随机大小
     */
    this.r = Math.random() * 2 +1;
    this.x = options.x;
    this.y = options.y;
    this.dx = Math.random() *4 - 2;
    this.dy = Math.random() *4 - 2;
  }
  
  
}