window.addEventListener("load",function() {
//body
var Q = window.Q = new Quintus()
.include("Sprites , Scenes , 2D , UI , Touch , TMX , Input, Audio")
.include("playerComponent , enemyComponent,enemy2Component,enemy3Component , beeComponent, gemComponent,bugComponent ")
.setup({
    width: 320,
    height: 240,
    scaleToFit : true 
})
.controls(true).touch();

Q.enableSound();
Q.setImageSmoothing(false);

Q.scene("level1",function(stage)
{
      var player;
      a=0;
      Q.stageTMX("coins.tmx" , stage);
      player = Q("Player").first();
      stage.add("viewport").follow(player , {x:true, y: true});
});

Q.loadTMX("coins.tmx, sprites.png, sprites.json, playerwin.mp3, playerdie.mp3, playerjump.mp3" , function()
{
      Q.compileSheets("sprites.png","sprites.json");
      Q.stageScene("level1");
})

});