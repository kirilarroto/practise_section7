namespace SpriteKind {
    export const Door = SpriteKind.create()
    export const Key = SpriteKind.create()
    export const _Bomb = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind._Bomb, function (sprite, otherSprite) {
    otherSprite.destroy()
    KillAllSkull()
})
function KillAllSkull () {
    for (let index = 0; index < 4; index++) {
        list.pop().destroy()
    }
}
/**
 * 请实现killAllSkull方法，实现主角拿到炸弹后消灭所有敌人
 */
let list: Sprite[] = []
let HeroA = sprites.create(img`
    ......ffff..............
    ....fff22fff............
    ...fff2222fff...........
    ..fffeeeeeefff..........
    ..ffe222222eef..........
    ..fe2ffffff2ef..........
    ..ffffeeeeffff......ccc.
    .ffefbf44fbfeff....cddc.
    .ffefbf44fbfeff...cddc..
    .fee4dddddd4eef.ccddc...
    fdfeeddddd4eeffecddc....
    fbffee4444ee4fddccc.....
    fbf4f222222f1edde.......
    fcf.f222222f44ee........
    .ff.f445544f............
    ....ffffffff............
    .....ff..ff.............
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Player)
controller.moveSprite(HeroA)
for (let index = 0; index < 4; index++) {
    list.unshift(sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f11111111f.......
        ......fd11111111df......
        ......fd11111111df......
        ......fddd1111dddf......
        ......fbdbfddfbdbf......
        ......fcdcf11fcdcf......
        .......fb111111bf.......
        ......fffcdb1bdffff.....
        ....fc111cbfbfc111cf....
        ....f1b1b1ffff1b1b1f....
        ....fbfbffffffbfbfbf....
        .........ffffff.........
        ...........fff..........
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.Enemy))
    list[0].setPosition(randint(10, 150), randint(10, 120))
}
let Bomb = sprites.create(img`
    ........................
    ........................
    .............44444......
    ............4....4......
    ...........4.....4......
    ..........44............
    ........ccccccc.........
    .......ccccccccc........
    ......ccccccccccc.......
    ......ccccccccccc.......
    .....ccccccccccccc......
    .....ccccccccccccc......
    .....ccccccccccccc......
    ......ccccccccccc.......
    ......ccccccccccc.......
    .......ccccccccc........
    ........ccccccc.........
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind._Bomb)
Bomb.setPosition(randint(10, 150), randint(10, 120))
