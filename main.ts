music.play(music.stringPlayable("C5 E B B B E A G ", 120), music.PlaybackMode.InBackground)
music.rest(music.beat(BeatFraction.Quarter))
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . 4 . . . . . . . . 
    . . . . 4 . 4 5 4 . 4 . . . . . 
    . . . 4 5 4 4 2 4 4 5 4 . . . . 
    . . . 4 2 4 a a a 4 2 4 . . . . 
    . . . 4 a a a 7 a a a 4 . . . . 
    . . . a a 5 5 7 7 9 a 4 . . . . 
    . . . a 5 5 5 7 7 9 a a . . . . 
    . . . a 5 5 5 7 7 9 9 a . . . . 
    . . . a 5 5 5 7 7 9 9 a . . . . 
    . . . a 5 5 5 7 7 9 9 a . . . . 
    . . . a 5 5 5 7 7 9 9 a . . . . 
    . . . a a a a a a a a a . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
if (true) {
    mySprite.sayText("Hello host", 2000, true)
} else {
    music.play(music.melodyPlayable(music.powerDown), music.PlaybackMode.UntilDone)
}
game.onUpdate(function () {
    tiles.setCurrentTilemap(tilemap`level3`)
    scene.cameraFollowSprite(mySprite)
    controller.moveSprite(mySprite, 100, 100)
})
