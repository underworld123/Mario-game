Quintus.playerComponent = function(Q) {
  Q.Sprite.extend("Player", {
  	init: function(p){    
  		this._super(p ,{ 
  			sheet : "player",
  			jumpSpeed: -400,
  			speed: 200
  		});
      this.add("2d, platformerControls");
      console.log("player");

      var that= this;

      this.on("jump", function() {
        if(!this.p.isJumping && that.p.vy < 0) {
          that.p.isJumping = true;
          Q.audio.play("jump.mp3");
        }
      });

      this.on("bump.bottom", function() {
       that.p.isJumping = false;
      });
  	 
    }
  });
}