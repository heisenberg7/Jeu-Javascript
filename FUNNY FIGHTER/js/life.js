function Life()
{
    this.x = canvas.width-200;
    this.y = 35;
    this.w = 48;
    this.h = 64;
    this.image = IM.getInstance('img/life');
}
function LifesManager()
{
	this.lifes = [];
	this.init = function()
	{
	    var i = 3;
	    while (i--) {
	        var life = new Life();
			this.lifes.push(life);
	    }
	}
	this.render = function()
	{
	    for (var i = 0, c = this.lifes.length; i < c; i++) {
	        var l = this.lifes[i];
	        IM.drawImage(ctx, l.image, l.x+(l.w*i), l.y);
	    }
	}
}