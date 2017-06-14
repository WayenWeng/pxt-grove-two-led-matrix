{
    let matrix = Grove_Two_Led_Matrix.create(GROVE_TWO_LED_MATRIX.DEF_I2C_ADDR);
    
    matrix.turnOnLedFlash();
    basic.pause(3000);
    matrix.turnOffLedFlash();
    
    while(true)
    {       
        // matrix.displayBar(1, 1000);
        // basic.pause(1000);
        // matrix.displayBar(18, 1000);
        // basic.pause(1000);
        
        // matrix.displayEmoji(EMOJI_TYPE.FACE, 1000);
        // basic.pause(1000);
        // matrix.displayEmoji(EMOJI_TYPE.SAD, 1000);
        // basic.pause(1000);
        
        // matrix.displayNumber(0, 1000);
        // basic.pause(1000);
        // matrix.displayNumber(-1234, 3000);
        // basic.pause(3000);

        matrix.displayStrings("Hello World", 6000, false);
        basic.pause(6000);
        
        // matrix.displayCustom([0x01,0x00,0x00,0x00,0x00], 2000);
        // basic.pause(2000);
        // matrix.displayCustom([0x01,0x01,0x01,0x01,0x01], 2000);
        // basic.pause(2000);
        // matrix.displayCustom([0x02,0x02,0x02,0x02,0x02], 2000);
        // basic.pause(2000);
    }
}
