/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let result = strs[0];
    
    strs.forEach(str => {
        let min = Math.min(str.length, result.length);
        let count = 0;
        for (let i = 0; i < min; i++) {
            if (str[i] === result[i]) {
                count += 1;
            }
            else {
                break;
            }
        }
        result = str.substring(0, count);
    });

    return result;
};
