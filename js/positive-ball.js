class PositiveBall {
  constructor(ctx, column, velY) {
    this.ctx = ctx;
    // this.size = 35
    this.posY = 0;
    this.posX = column - 75;
    this.velY = velY * 2;
    this.points = 20;
    this.width = 150;
    this.height = 150;
    this.collided = false;
  }

  draw() {
    this.ctx.fillStyle = "blue";
    this.ctx.fillRect(this.posX, this.posY, this.width, this.height);
    this.move();
  }

  move() {
    this.posY += this.velY;
  }
}

// METER BONUS - BOLAS CON EFECTOS POSITIVOS
