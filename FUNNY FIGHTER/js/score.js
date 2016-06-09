function Score()
{
	this.points = 0;
	
	this.addPoints = function(points)
	{
		this.points += points;
	}
	
	this.render = function()
	{
		ctx.fillStyle = 'white';
		ctx.font="30px Verdana";
		ctx.fillText('SCORE : '+this.points, 80, 75);
	}
}