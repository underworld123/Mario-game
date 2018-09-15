Quintus.gemComponent = function(Q) {
	Q.Sprite.extend("Gem" ,{
     init: function(p) {
			this._super(p ,{
				sheet: "bullet",
			});

			this.on("hit.sprite", function(col) {
				if(col.obj.isA("Player")) {
					if(a==5){
					Q.audio.play("playerwin.mp3");
					alert("You Win!");
					a=0;
					this.destroy();
					Q.stageScene("level1"); }
					else{
						a=a+1;
						Q.audio.play("playerwin.mp3");
					    this.destroy();}
				}
			});
		}
	});
}