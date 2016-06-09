function Enemy()
{
    this.x = 100;
    this.y = 200;
    this.w = 40;
    this.h = 34;
    this.speed = 3;
    this.image = null;
	this.name = null;
	this.fall = false;
}

function EnemiesManager()
{
    // Contiendra toutes les instances de Enemy()
    this.enemies = [];
	this.objects = ['', 'img/bomb', 'img/bomb', 'img/coffre', 'img/carte', 'img/food', 'img/bomb']
    
    // Création des ennemis
    this.init = function()
    {
        var i = 12;
		var offset = 80*i;
        while (i--) {
            var e = new Enemy();
			var instanceName = this.objects[Math.floor((Math.random()*6)+1)];
            e.image = IM.getInstance(instanceName);
			e.x = (80*i)-(offset);
			switch(instanceName){
				case 'img/bomb':
					e.name = 'bomb';
					break;
				case 'img/coffre':
					e.name = 'coffre';
					break;
				case 'img/carte':
					e.name = 'carte';
					break;
				case 'img/food':
					e.name = 'food';
					break;
			}
			
            this.enemies.push( e );
        }
    }
    
    this.update = function()
    {
        for (var i = 0, c = this.enemies.length; i < c; i++) {
            var e = this.enemies[i];

            e.x += e.speed;
			if(e.x>canvas.width){
				e.x = -40;
				this.enemies.shift();
				this.enemies.push(e);
            	this.enemies[0].x += this.enemies[0].speed;
			}
			if(e.x>player.x-35 && e.x<player.x-30 && e.name=='bomb'){
				var rand = Math.floor((Math.random()*2)+1);
				if(rand==1){
					e.fall = true;
				}
			}
			if(e.fall){
				e.y += e.speed;
				//collision bomb-player
				if(e.x>player.x && e.x<(player.x+player.w) && e.y>player.y && e.y<(player.y+player.h)){
					e.image = IM.getInstance('img/explosion');
					playing = false;
				}
				if(e.y>canvas.height){
					e.fall=false;
				}
			}
        }
    }
    
    this.render = function()
    {
        //ctx.clearRect(0,0,canvas.width,canvas.height);
        for (var i = 0, c = this.enemies.length; i < c; i++) {
            
            var e = this.enemies[i];
            IM.drawImage(ctx, e.image, e.x, e.y);

        }
    }
}