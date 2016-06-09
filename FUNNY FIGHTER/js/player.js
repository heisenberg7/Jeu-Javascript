function Player()
{	
	this.x = config.SCREEN_WIDTH / 2;
	this.y = config.SCREEN_HEIGHT - 110;
	this.w = 48;
	this.h = 64;
	this.speed = 3;
	this.life = 3;
	this.image = null;
	this.shotAllow = true;
	
	this.init = function(){
		this.image = IM.getInstance('img/pirate');
		this.image.animation = new IIG.Animation({
			sWidth : 48,
			sHeight : 64,
			sx : 48,
			sy : 64*2,
			animByFrame : 7,
			alternate : true
		});
		
	}
	
	this.update = function(){
		if(keyboard.up){
			this.image.animation.pauseAnimation = true;
			this.image.animation.sx = 48;
			this.image.animation.sy = 64*2;
		}else{
			this.image.animation.pauseAnimation = false;
		}
		
	    if (keyboard.left){
			this.image.animation.sy = this.image.animation.sHeight*3;
			if(player.x>60){
	        	player.x -= player.speed;
			}
		}
	
	    if (keyboard.right){
			this.image.animation.sy = this.image.animation.sHeight;
			if(player.x+48<canvas.width-30){
	        	player.x += player.speed;
			}
		}
	    if (keyboard.space){
			if(this.shotAllow){
				shoot.addShot(player.x+(player.w/2),player.y);
				this.shotAllow=false;
			}
		}
	}
	
	this.render = function(){
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		IM.drawImage(ctx, this.image, this.x, this.y);
	}
}