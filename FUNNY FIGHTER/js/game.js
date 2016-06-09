function Game()
{
	this.init = function(){
		IM.add('img/pirate.png');
		IM.add('img/life.png');
		IM.add('img/bullet.png');
		IM.add('img/bomb.png');
		IM.add('img/coffre.png');
		IM.add('img/carte.png');
		IM.add('img/food.png');
		IM.add('img/explosion.png');
		IM.add('img/50.png');
		IM.add('img/25.png');
		IM.add('img/15.png');
		IM.add('img/empty.png');
		IM.loadAll(function(){
			player.init();
			lifes.init();
			enemies.init();
			run();
		});
	}
	
	this.update = function(){
		IM.update();
		player.update();
		shoot.update();
		enemies.update();
		events.update();
		timebar.update();
	}
	
	this.render = function(){
		player.render();
		lifes.render();
		shoot.render();
		enemies.render();
		events.render();
		timebar.render();
		score.render();
	}
}