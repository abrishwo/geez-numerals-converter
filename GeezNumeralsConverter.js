class GeezNumeralsConverter {
    constructor() {
        this.geezNumerals = {
            1: '፩', 2: '፪', 3: '፫', 4: '፬', 5: '፭', 6: '፮', 7: '፯', 8: '፰', 9: '፱',
            10: '፲', 20: '፳', 30: '፴', 40: '፵', 50: '፶', 60: '፷', 70: '፸', 80: '፹', 90: '፺',
            100: '፻', 10000: '፼'
        };
    }


// arabic numbers to geez numbers
 intToGeez(num) {

    if (num === 0) return '፩';

    let result = '';

    const powers = [
        { value: 10000, geez: '፼' },  // 10,000
        { value: 1000, geez: '፲' },   // 1,000
        { value: 100, geez: '፻' },    // 100
        { value: 10, geez: '፲' },     // 10
    ];

    for (const { value, geez } of powers) {
        if (num >= value) {
            const quotient = Math.floor(num / value);
            if (quotient > 1) {
                result += intToGeez(quotient);
            }
            result += geez;
            num %= value;
        }
    }

    if (num > 0) {
        result += this.geezNumerals[num];
    }

    return result;
}


     geezToInt(geezNum) {
        let result = 0;
        let temp = 0;
    
        for (const char of geezNum) {
            if (char in this.geezNumerals) {
                const value = this.geezNumerals[char];
                if (value === 100 || value === 10000) {
                    temp = (temp === 0 ? 1 : temp) * value;
                } else {
                    temp += value;
                }
            }
    
            if (temp >= 100 && char !== '፻' && char !== '፼') {
                result += temp;
                temp = 0;
            }
        }
        result += temp;
    
        return result;
    };
    
}

export default GeezNumeralsConverter;
