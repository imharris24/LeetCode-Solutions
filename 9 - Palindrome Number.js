/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let str = String(x);
    let condition = true;

    for (i = 0, j = str.length - 1; i < str.length/2; i++, j--) {
        if (str[i] !== str[j]) {
            condition = false;
        }
    }

    return condition;
};
