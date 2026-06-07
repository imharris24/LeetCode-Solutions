/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let array = [];
    let count = 0;
    let maxLength = 0;
    let index = 0;

    for (i = 0; i < s.length; i++) {
        if (!array.includes(s[i])) {
            array.push(s[i]);
        }
        else {
            if (maxLength < array.length) {
                maxLength = array.length;
            }
            index = array.indexOf(s[i]);
            array = array.slice(index + 1);
            array.push(s[i])
        }
    }
    if (array.length > maxLength) {
    maxLength = array.length;
}
    return maxLength;
};
