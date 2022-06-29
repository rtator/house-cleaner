controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . 1 1 1 1 . . . . . . 
        . . . . 1 1 1 1 1 1 1 1 . 1 1 . 
        . . . 1 1 1 1 1 1 1 1 1 1 . . 1 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . 1 1 1 f f f f f f 1 1 1 . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f f 
        . . f e e d d d d d d e f f e e 
        . . . f e e 4 4 4 4 f f e f f . 
        . . . . f 2 2 f f f e f f e . . 
        . . . . f f f e e f f f . . . . 
        . 4 f 4 f e e f f 4 4 f . . . . 
        . f 4 f e f f f f f f . . . . . 
        . 4 f 4 . f f . . f f . . . . . 
        `,img`
        . . . . . . 1 1 1 1 . . . . . . 
        . . . . 1 1 1 1 1 1 1 1 . 1 1 . 
        . . . 1 1 1 1 1 1 1 1 1 1 . . 1 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . 1 1 1 f f f f f f 1 1 1 . . 
        . . f f f f e e e e f f f f f f 
        . f f e f b f 4 4 f b f f f e e 
        . f e e 4 1 f d d f f f e e f . 
        . . f e e d d d f f e e f f . . 
        . . . f e e f f e e f f f . . . 
        . . . . f f e e f f 2 f . . . . 
        . . . . f e f f 2 2 2 f . . . . 
        . . 4 f 4 f 4 5 5 4 4 f . . . . 
        . . f 4 f f f f f f f . . . . . 
        . . 4 f 4 f f . . f f . . . . . 
        `],
    200,
    false
    )
    pause(500)
    mySprite.setImage(img`
        . . . . . . 1 1 1 1 . . . . . . 
        . . . . 1 1 1 1 1 1 1 1 . 1 1 . 
        . . . 1 1 1 1 1 1 1 1 1 1 . . 1 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . 1 1 1 f f f f f f 1 1 1 . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `)
})
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . 1 1 1 1 . . . . . . 
    . . . . 1 1 1 1 1 1 1 1 . 1 1 . 
    . . . 1 1 1 1 1 1 1 1 1 1 . . 1 
    . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
    . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
    . . 1 1 1 f f f f f f 1 1 1 . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
scene.cameraFollowSprite(mySprite)
controller.moveSprite(mySprite)
tiles.setCurrentTilemap(tilemap`level1`)
