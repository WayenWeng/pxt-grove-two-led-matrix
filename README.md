# Grove Two Led Matrix

A PXT packet for Seeed Studio Grove Two Led Matrix

## Basic usage

```blocks
// Create a module driver, specify the i2c address
let matrix = Grove_Two_Led_Matrix.create(GROVE_TWO_LED_MATRIX.DEF_I2C_ADDR);

// Display string
while(true)
{
    matrix.displayStrings("Hello World", 6000, false);
    basic.pause(6000);
}
```
More operation

Use ``getDeviceVID()`` to get vendor ID of device.

Use ``getDevicePID()`` to get product ID of device.

Use ``changeDeviceAddress()`` to change i2c address of device.

Use ``defaultDeviceAddress()`` to restore the i2c address of device to default.

Use ``turnOnLedFlash()`` to trun on the indicator LED flash mode.

Use ``turnOffLedFlash()`` to trun off the indicator LED flash mode.

Use ``enableAutoSleep()`` to enable device auto sleep mode.

Use ``disableAutoSleep()`` to disable device auto sleep mode.

Use ``displayBar()`` to display the LED bar mode on LED matrix.

Use ``displayEmoji()`` to display emoji mode on LED matrix.

Use ``displayNumber()`` to display number mode on LED matrix.

Use ``displayCustom()`` to display user-defined pictures on LED matrix.

Use ``stopDisplay()`` to display nothing on LED Matrix.

## License

MIT

## Supported targets

* for PXT/microbit
(The metadata above is needed for package search.)

