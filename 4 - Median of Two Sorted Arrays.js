/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    let array = [];
    let i = 0, j = 0;

    // merge sort
    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] < nums2[j]) {
            array.push(nums1[i]);
            i++;
        }
        else {
            array.push(nums2[j])
            j++;
        }
    }
    if (i >= nums1.length) {
        array = [...array, ...nums2.slice(j)];
    }
    else {
        array = [...array, ...nums1.slice(i)];
    }

    // for odd 
    if (array.length % 2 === 1) {
        return array[(array.length - 1) / 2];
    }
    // for even
    else {
        return (array[array.length / 2 - 1] + array[array.length / 2]) / 2;
    }

    return 0;
};
