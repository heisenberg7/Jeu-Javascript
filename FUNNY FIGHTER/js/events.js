function Events()
{
	this.events = [];
	
	this.addEvent = function(posX, posY, img){
		this.image = IM.getInstance(img);
		this.events.push({
			x : posX,
			y : posY,
			w : 50,
			h : 38
		});
	}

	this.update = function(){
	}
	
	this.render = function(){
		for(var i=0; i<this.events.length; i++){
			IM.drawImage(ctx, this.image, this.events[i].x, this.events[i].y);
		}
	}
}