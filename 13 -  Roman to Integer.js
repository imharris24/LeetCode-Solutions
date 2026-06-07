/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let result = 0;
    for (i = 0; i < s.length; i++) {
        // check for IV, XL, CD
        if (s[i] === 'I' && s[i+1] === 'V') {
            result -= 1;
        }
        else if (s[i] === 'X' && s[i+1] === 'L') {
            result -= 10
        }
        else if (s[i] === 'C' && s[i+1] === 'D') {
            result -= 100;
        }
        else if (s[i] === 'I' && s[i+1] === 'X') {
            result -= 1;
        }
        else if (s[i] === 'X' && s[i+1] === 'C') {
            result -= 10;
        }
        else if (s[i] === 'C' && s[i+1] === 'M') {
            result -= 100;
        }
        else {
            switch (s[i]) {
                case 'I':
                    result += 1;
                    break;
                case 'V': 
                    result += 5;
                    break;
                case 'X':
                    result += 10;
                    break;
                case 'L':
                    result += 50;
                    break;
                case 'C':
                    result += 100;
                    break;
                case 'D':
                    result += 500;
                    break;
                case 'M':
                    result += 1000;
                    break;
            }
        }
    }
    return result;
};
