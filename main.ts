basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
        basic.clearScreen()
        basic.pause(200)
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.B)) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    }
    basic.clearScreen()
    basic.pause(200)
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.AB)) {
        basic.showLeds(`
            . . # . .
            . # . # .
            # # # # #
            . # . # .
            . . # . .
            `)
    }
    basic.clearScreen()
    basic.pause(200)
})
