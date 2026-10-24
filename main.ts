//% color=#0fbc11 icon="\uf2db" block="HTX_bil"
namespace HTX_bil {
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
        pins.analogWritePin(AnalogPinPin.P12, speed)
        pins.digitalWritePin(DigitalPin.P13, 0)
        pins.digitalWritePin(digitalPin.P2, 1)
    }

    /**
     * Run motor A backward with given speed (0-1023)
     */
    //% block="Motor A baglæns med speed %speed"
    //% speed.min=0 speed.max=1023
    export function motorABackward(speed: number): void {
        pins.digitalWritePin(DigitalPin.P12, 0)
        pins.analogWritePin(AnalogPin.P13, speed)
        pins.digitalWritePin(digitalPin.P2, 1)
    }

    /**
     * Stop motor A
     */
    //% block="Stop motor A"
    export function stopMotorA(): void {
        pins.digitalWritePin(DigitalPin.P12, 0)
        pins.digitalWritePin(DigitalPin.P13, 0)
        pins.digitalWritePin(DigitalPin.P2, 0)
    }

    /**
     * Run motor B fremad med given speed (0-1023)
     */
    //% block="Motor B fremad med speed %speed"
    //% speed.min=0 speed.max=1023
    export function motorBForward(speed: number): void {
        pins.analogWritePin(AnalogPin.P14, speed)
        pins.digitalWritePin(DigitalPin.P15, 0)
        pins.digitalWritePin(DigitalPin.P8, 1)
    }

    /**
     * Run motor B backward with given speed (0-1023)
     */
    //% block="Motor B baglæns med speed %speed"
    //% speed.min=0 speed.max=1023
    export function motorBBackward(speed: number): void {
        pins.digitalWritePin(DigitalPin.P14, 0)
        pins.analogWritePin(AnalogPin.P15, speed)
        pins.digitalWritePin(DigitalPin.P8, 1)
    }

    /**
     * Stop motor B
     */
    //% block="Stop motor B"
    export function stopMotorB(): void {
        pins.digitalWritePin(DigitalPin.P14, 0)
        pins.digitalWritePin(DigitalPin.P15, 0)
        pins.analogWritePin(DigitalPin.P8, 0)
    }

    /**
     * Stop both motors
     */
    //% block="Stop begge motorer"
    export function stopBothMotors(): void {
        // Stop motor A
        pins.digitalWritePin(DigitalPin.P12, 0)
        pins.digitalWritePin(DigitalPin.P13, 0)
        pins.digitalWritePin(DigitalPin.P2, 0)
        // Stop motor B
        pins.digitalWritePin(DigitalPin.P14, 0)
        pins.digitalWritePin(DigitalPin.P15, 0)
        pins.digitalWritePin(DigitalPin.P8, 0)
    }

    

    /**
     * Run both motors forward with given speeds (0-1023)
     */
    //% block="Begge motorer fremad med speeds %speed1 and %speed2"
    //% speed1.min=0 speed1.max=1023
    //% speed2.min=0 speed2.max=1023
    export function motorsForwardTwoSpeeds(speed1: number, speed2: number): void {
        // Motor A forward
        pins.analogWritePin(AnalogPin.P12, speed1)
        pins.digitalWritePin(DigitalPin.P13, 0)
        pins.digitalWritePin(DigitalPin.P2, 1 )
        // Motor B forward
        pins.analogWritePin(AnalogPin.P14, speed2)
        pins.digitalWritePin(DigitalPin.P15, 0)
        pins.digitalWritePin(DigitalPin.P8, 1)
    }

    /**
     * Run both motors forward with same speed (0-1023)
     */
    //% block="Begge motorer fremad med speed %speed"
    //% speed.min=0 speed.max=1023
    export function motorsForwardSameSpeed(speed: number): void {
        // Motor A forward
        pins.analogWritePin(DigitalPin.P12, speed)
        pins.digitalWritePin(DigitalPin.P13, 0)
        pins.digitalWritePin(AnalogPin.P2, 1)
        // Motor B forward
        pins.analogWritePin(DigitalPin.P14, speed)
        pins.digitalWritePin(DigitalPin.P15, 0)
        pins.digitalWritePin(AnalogPin.P8, 1)
    }

    /**
     * Run both motors backward with same speed (0-1023)
     */
    //% block="Begge motorer baglæns med speed %speed"
    //% speed.min=0 speed.max=1023
    export function motorsBackwardSameSpeed(speed: number): void {
        // Motor A backward
        pins.digitalWritePin(DigitalPin.P12, 0)
        pins.analoglWritePin(DigitalPin.P13, speed)
        pins.digitalWritePin(AnalogPin.P2, 1)
        // Motor B backward
        pins.digitalWritePin(DigitalPin.P14, 0)
        pins.analogWritePin(DigitalPin.P15, speed)
        pins.digitalWritePin(AnalogPin.P8, 1)
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
        pins.analogWritePin(DigitalPin.P13, speed1)
        pins.digitalWritePin(AnalogPin.P2, 1)
        // Motor B backward
        pins.digitalWritePin(DigitalPin.P14, 0)
        pins.analogWritePin(DigitalPin.P15, speed2)
        pins.digitalWritePin(AnalogPin.P8, 1)
    }

}
