//% color=#0fbc11 icon="\uf2db" block="L298LiteDK"
namespace L298LiteDK {
    //% block="Aktivér L298 Lite DK (slå LED-display fra)"
    export function init(): void {
        led.enable(false)
    }
    /**
     * Run motor A forward with given speed (0-1023)
     */
    //% block="Motor A fremad med speed %speed"
    //% speed.min=0 speed.max=1023
    export function motorAForward(speed: number): void {
        pins.digitalWritePin(DigitalPin.P12, 1)
        pins.digitalWritePin(DigitalPin.P13, 0)
        pins.analogWritePin(AnalogPin.P2, speed)
    }

    /**
     * Run motor A backward with given speed (0-1023)
     */
    //% block="Motor A baglæns med speed %speed"
    //% speed.min=0 speed.max=1023
    export function motorABackward(speed: number): void {
        pins.digitalWritePin(DigitalPin.P12, 0)
        pins.digitalWritePin(DigitalPin.P13, 1)
        pins.analogWritePin(AnalogPin.P2, speed)
    }

    /**
     * Stop motor A
     */
    //% block="Stop motor A"
    export function stopMotorA(): void {
        pins.digitalWritePin(DigitalPin.P12, 0)
        pins.digitalWritePin(DigitalPin.P13, 0)
        pins.analogWritePin(AnalogPin.P2, 0)
    }

    /**
     * Run motor B fremad med given speed (0-1023)
     */
    //% block="Motor B fremad med speed %speed"
    //% speed.min=0 speed.max=1023
    export function motorBForward(speed: number): void {
        pins.digitalWritePin(DigitalPin.P14, 1)
        pins.digitalWritePin(DigitalPin.P15, 0)
        pins.analogWritePin(AnalogPin.P8, speed)
    }

    /**
     * Run motor B backward with given speed (0-1023)
     */
    //% block="Motor B baglæns med speed %speed"
    //% speed.min=0 speed.max=1023
    export function motorBBackward(speed: number): void {
        pins.digitalWritePin(DigitalPin.P14, 0)
        pins.digitalWritePin(DigitalPin.P15, 1)
        pins.analogWritePin(AnalogPin.P8, speed)
    }

    /**
     * Stop motor B
     */
    //% block="Stop motor B"
    export function stopMotorB(): void {
        pins.digitalWritePin(DigitalPin.P14, 0)
        pins.digitalWritePin(DigitalPin.P15, 0)
        pins.analogWritePin(AnalogPin.P8, 0)
    }

    /**
     * Stop both motors
     */
    //% block="Stop begge motorer"
    export function stopBothMotors(): void {
        // Stop motor A
        pins.digitalWritePin(DigitalPin.P12, 0)
        pins.digitalWritePin(DigitalPin.P13, 0)
        pins.analogWritePin(AnalogPin.P2, 0)
        // Stop motor B
        pins.digitalWritePin(DigitalPin.P14, 0)
        pins.digitalWritePin(DigitalPin.P15, 0)
        pins.analogWritePin(AnalogPin.P8, 0)
    }

    

    /**
     * Run both motors forward with given speeds (0-1023)
     */
    //% block="Begge motorer fremad med speeds %speed1 and %speed2"
    //% speed1.min=0 speed1.max=1023
    //% speed2.min=0 speed2.max=1023
    export function motorsForwardTwoSpeeds(speed1: number, speed2: number): void {
        // Motor A forward
        pins.digitalWritePin(DigitalPin.P12, 1)
        pins.digitalWritePin(DigitalPin.P13, 0)
        pins.analogWritePin(AnalogPin.P2, speed1)
        // Motor B forward
        pins.digitalWritePin(DigitalPin.P14, 1)
        pins.digitalWritePin(DigitalPin.P15, 0)
        pins.analogWritePin(AnalogPin.P8, speed2)
    }

    /**
     * Run both motors forward with same speed (0-1023)
     */
    //% block="Begge motorer fremad med speed %speed"
    //% speed.min=0 speed.max=1023
    export function motorsForwardSameSpeed(speed: number): void {
        // Motor A forward
        pins.digitalWritePin(DigitalPin.P12, 1)
        pins.digitalWritePin(DigitalPin.P13, 0)
        pins.analogWritePin(AnalogPin.P2, speed)
        // Motor B forward
        pins.digitalWritePin(DigitalPin.P14, 1)
        pins.digitalWritePin(DigitalPin.P15, 0)
        pins.analogWritePin(AnalogPin.P8, speed)
    }

    /**
     * Run both motors backward with same speed (0-1023)
     */
    //% block="Begge motorer baglæns med speed %speed"
    //% speed.min=0 speed.max=1023
    export function motorsBackwardSameSpeed(speed: number): void {
        // Motor A backward
        pins.digitalWritePin(DigitalPin.P12, 0)
        pins.digitalWritePin(DigitalPin.P13, 1)
        pins.analogWritePin(AnalogPin.P2, speed)
        // Motor B backward
        pins.digitalWritePin(DigitalPin.P14, 0)
        pins.digitalWritePin(DigitalPin.P15, 1)
        pins.analogWritePin(AnalogPin.P8, speed)
    }

    /**
     * Run both motors baglæns med speeds (0-1023)
     */
    //% block="Begge motorer baglæns med speeds %speed1 and %speed2"
    //% speed1.min=0 speed1.max=1023
    //% speed2.min=0 speed2.max=1023
    export function motorsBackwardTwoSpeeds(speed1: number, speed2: number): void {
        // Motor A backward
        pins.digitalWritePin(DigitalPin.P12, 0)
        pins.digitalWritePin(DigitalPin.P13, 1)
        pins.analogWritePin(AnalogPin.P2, speed1)
        // Motor B backward
        pins.digitalWritePin(DigitalPin.P14, 0)
        pins.digitalWritePin(DigitalPin.P15, 1)
        pins.analogWritePin(AnalogPin.P8,speed2)
    }

}
