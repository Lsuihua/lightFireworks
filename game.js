class Game{
  constructor(param){
    this.canvas = document.getElementById(param.canvasId);
    this.ctx = this.canvas.getContext('2d');

    this.width = this.canvas.width = window.innerWidth;
    this.height = this.canvas.height = window.innerHeight;

    // 发射盒子
    this.shootList = [];
    // 烟花盒子
    this.explosionList = [];

    this.timer = null;
    this.epTimer = null;

  }

  start(){
    setInterval(() => {
      var shoot = new Shoot();
      if(this.timer) return;
      shoot.start()
    },2000)
  }
}