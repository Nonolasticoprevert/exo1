basic.forever(function () {
    basic.showLeds(`
        . . . . .
        # . . . #
        # . . . #
        . . # . .
        . . # . .
        `)
    basic.pause(25)
    basic.showLeds(`
        . # . # .
        # # # # #
        # # # # #
        . # # # .
        . . # . .
        `)
    basic.pause(450)
})
