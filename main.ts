input.onGesture(Gesture.ScreenDown, function () {
    number = 0
})
input.onGesture(Gesture.Shake, function () {
    number = randint(1, 6)
})
let number = 0
number = 0
basic.forever(function () {
    if (number > 0) {
        basic.showNumber(number)
    } else {
        basic.clearScreen()
    }
})
