Quintus.enemyComponent = function(Q){
	Q.Sprite.extend("Enemy" , {
		init: function(p) {
			this._super(p ,{
				vx: -40,
				defaultDirection: "left",
				sheet: "ghost"
			});
			console.log("enemy");
			this.add("2d, aiBounce");
			this.on("bump.top", function(col) {
				if(col.obj.isA("Player")) {
					this.destroy();

					Q.audio.play("playerwin.mp3");

					col.obj.p.vy -= 200;
				}
			});
           this.on("bump.left , bump.right , bump.bottom" , function(col){
           	if(col.obj.isA("Player")){
           		Q.stageScene("level1");
           		a=0;
           		Q.audio.play("playerdie.mp3");
           		
           		alert("You died!");
           	}
           });
		}
	});
}