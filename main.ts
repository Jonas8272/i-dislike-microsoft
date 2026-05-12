function checkGoal () {
    if (count == 20) {
        basic.showString("Great!")
        basic.showIcon(IconNames.Heart)
        basic.pause(500)
        basic.showNumber(count)
    }
}
// Reset
input.onButtonPressed(Button.A, function () {
    basic.showString("Done! XD")
    count = 0
    started = false
    basic.clearScreen()
})
// Manual Count
input.onButtonPressed(Button.B, function () {
    started = true
    count += 1
    lastShake = input.runningTime()
    basic.showNumber(count)
    checkGoal()
})
// Shake Count
input.onGesture(Gesture.Shake, function () {
    if (!(started)) {
        started = true
        count = 0
    }
    count += 1
    lastShake = input.runningTime()
    basic.showNumber(count)
    checkGoal()
})
let lastShake = 0
let started = false
let count = 0
basic.showString("Hello! XD")
basic.forever(function () {
    if (!(started)) {
        basic.showIcon(IconNames.SmallDiamond)
    } else {
        // If no shake for 3 seconds
        if (input.runningTime() - lastShake > 3000) {
            basic.showIcon(IconNames.Asleep)
        }
    }
    basic.pause(100)
})
