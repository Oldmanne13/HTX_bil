
 //% color=#0fbc11 icon="\uf2db" block="HTX_bil"
namespace HTX_bil {

    //% block="Aktivér HTX_Bil (slå LED-display fra)"
    export function init(): void {
        led.enable(false)
    }

    /**
     * Motor A fremad (0-1023)
     */
    //% block="Motor A fremad med speed %speed"
    //% speed.min=0 speed.max=1023
    export function motorAForward(speed: number): void {
        pins.digitalWritePin(DigitalPin.P13, 0)
        pins.analogWritePin(AnalogPin.P12, speed)
        pins.digitalWritePin(DigitalPin.P2, 1)
    }

    /**
     * Motor A baglæns (0-1023)
     */
    //% block="Motor A baglæns med speed %speed"
    //% speed.min=0 speed.max=1023
    export function motorABackward(speed: number): void {
        pins.digitalWritePin(DigitalPin.P12, 0)
        pins.analogWritePin(AnalogPin.P13, speed)
        pins.digitalWritePin(DigitalPin.P2, 1)
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
     * Motor B fremad (0-1023)
     */
    //% block="Motor B fremad med speed %speed"
    //% speed.min=0 speed.max=1023
    export function motorBForward(speed: number): void {
        pins.digitalWritePin(DigitalPin.P15, 0)
        pins.analogWritePin(AnalogPin.P14, speed)
        pins.digitalWritePin(DigitalPin.P8, 1)
    }

    /**
     * Motor B baglæns (0-1023)
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
        pins.digitalWritePin(DigitalPin.P8, 0)
    }

    /**
     * Stop begge motorer
     */
    //% block="Stop begge motorer"
    export function stopBothMotors(): void {
        stopMotorA()
        stopMotorB()
    }

    /**
     * Begge motorer fremad med to hastigheder
     */
    //% block="Begge motorer fremad med speeds %speed1 and %speed2"
    //% speed1.min=0 speed1.max=1023
    //% speed2.min=0 speed2.max=1023
    export function motorsForwardTwoSpeeds(
        speed1: number,
        speed2: number
    ): void {
        motorAForward(speed1)
        motorBForward(speed2)
    }

    /**
     * Begge motorer fremad med samme hastighed
     */
    //% block="Begge motorer fremad med speed %speed"
    //% speed.min=0 speed.max=1023
    export function motorsForwardSameSpeed(speed: number): void {
        motorAForward(speed)
        motorBForward(speed)
    }

    /**
     * Begge motorer baglæns med samme hastighed
     */
    //% block="Begge motorer baglæns med speed %speed"
    //% speed.min=0 speed.max=1023
    export function motorsBackwardSameSpeed(speed: number): void {
        motorABackward(speed)
        motorBBackward(speed)
    }

    /**
     * Begge motorer baglæns med to hastigheder
     */
    //% block="Begge motorer baglæns med speeds %speed1 and %speed2"
    //% speed1.min=0 speed1.max=1023
    //% speed2.min=0 speed2.max=1023
    export function motorsBackwardTwoSpeeds(
        speed1: number,
        speed2: number
    ): void {
        motorABackward(speed1)
        motorBBackward(speed2)
    }
}
