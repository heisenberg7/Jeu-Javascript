function Shoot()
{
	this.shots = [];
	
	this.addShot = function(posX, posY){
		this.image = IM.getInstance('img/bullet');
		this.shots.push({
			x : posX,
			y : posY,
			sWidth : 40,
			sHeight : 100,
			speed : 6
		});
	}
	
	this.update = function(){
		for (var i in this.shots) {
			var s = this.shots[i];
			
			for (var j in enemies.enemies) {
				var e = enemies.enemies[j];
				if(s.x>e.x && s.x<(e.x+e.w) && s.y>e.y && s.y<e.y+(e.h)){
					switch(enemies.enemies[j].name){
						case 'bomb':
							score.addPoints(-30);
							img = 'img/explosion';
							playSound("sounds/feu");
							break;
						case 'coffre':
							score.addPoints(50);
							img = 'img/50';
							playSound("sounds/caisse");
							break;
						case 'carte':
							score.addPoints(15);
							img = 'img/15';
							break;
						case 'food':
							score.addPoints(25);
							img = 'img/25';
							break;
					}
					//e.image=IM.getInstance('img/explosion');
					enemies.enemies.splice(j, 1);//On supprime la shot
					this.shots.splice(i, 1);//On supprime la shot
					events.addEvent(e.x, e.y, img);
				}
			}
		}
	}
	
	this.render = function(){
		for(var i=0; i<this.shots.length; i++){
			this.shots[i].y -= this.shots[i].speed;
			IM.drawImage(ctx, this.image, this.shots[i].x, this.shots[i].y);
		}
	}
}