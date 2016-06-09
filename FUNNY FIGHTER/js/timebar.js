function TimeBar()
{
	this.x = 0;
	this.y = 120;
	this.w = canvas.width;
	this.h = 15;
	var r = 50;
	var g = 180;
	
	this.tempsTotal = config.ROUND_TIME;
	this.tempsActuel = config.ROUND_TIME;
	
	this.update = function()
	{
		if (undefined !== TIMING && this.w > 0)
		{
			this.tempsActuel = this.tempsTotal - TIMING;
			//console.log(this.tempsActuel);
			this.w = (this.tempsActuel * canvas.width) / this.tempsTotal;
		}
		
		if (this.w <= 0)
		{
			//console.log('fini');
			//lifes.lifes.shift();
			playing = false;
		}
	}
	
	this.render = function()
	{
		if(this.w>canvas.width/3){
			ctx.fillStyle = 'rgb('+r+++',180,0)';
		}else{
			ctx.fillStyle = 'rgb('+r+++','+g--+',0)';
		}
		ctx.fillRect(this.x, this.y, this.w, this.h);
		ctx.strokeStyle = '#ffffff';
		ctx.strokeRect(this.x, this.y, this.w, this.h);
		if(playing==false){
			ctx.fillStyle = 'black';
			ctx.fillRect(canvas.width/2-100, canvas.height/2-40, 200, 80);
			ctx.fillStyle = 'white';
			ctx.font="25px Verdana";
			ctx.fillText('GAME OVER !', canvas.width/2-100+15, canvas.height/2-40+45);
		}
	}
}