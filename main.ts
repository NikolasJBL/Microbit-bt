basic.forever(function () {
	
})

//% color=190 weight=100 icon="\uf293" block="Bluetooth"
namespace bluetooth {
    /**
     * Enable Bluetooth on the micro:bit.
     */
    //% block="enable Bluetooth" blockExternalInputs=true color="#00FF00"
    export function enableBluetooth(): void {
        control.enableBluetooth();
    }
}
