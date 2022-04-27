let temp: string;
while (true) {
    temp = "" + input.temperature()
    if (input.temperature() > 30) {
        basic.showIcon(IconNames.Sad)
        basic.showString(temp)
    } else if (input.temperature() >= 20 && input.temperature() <= 30) {
        basic.showIcon(IconNames.Confused)
        basic.showString(temp)
    } else {
        basic.showIcon(IconNames.Happy)
        basic.showString(temp)
    }
    
}
