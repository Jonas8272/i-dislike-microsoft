input.onButtonPressed(Button.A, function () {
    basic.showString("Love u ")
    // Displays a big smiling face
    basic.showIcon(IconNames.Heart)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("Hello!XD")
})
input.onGesture(Gesture.Shake, function () {
    music.play(music.createSoundExpression(WaveShape.Noise, 500, 499, 255, 0, 750, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
})
basic.forever(function () {
	
})
