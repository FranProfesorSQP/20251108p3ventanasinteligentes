let ruido = 0
led.enable(false)
pins.servoWritePin(AnalogPin.P1, 0)
basic.forever(function () {
    ruido = smarthome.ReadNoise(AnalogPin.P10)
    if (ruido > 70) {
        pins.servoWritePin(AnalogPin.P1, 0)
        basic.pause(200)
    } else {
        pins.servoWritePin(AnalogPin.P1, 100)
        basic.pause(200)
    }
})
