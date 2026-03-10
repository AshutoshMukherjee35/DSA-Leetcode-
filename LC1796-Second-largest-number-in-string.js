
// Given an alphanumeric string s, return the second largest numerical digit that appears in s, or -1 if it does not exist.

// An alphanumeric string is a string consisting of lowercase English letters and digits.

// Example 1:

// Input: s = "dfa12321afd"
// Output: 2
// Explanation: The digits that appear in s are [1, 2, 3]. The second largest digit is 2.
// Example 2:

// Input: s = "abc1111"
// Output: -1
// Explanation: The digits that appear in s are [1]. There is no second largest digit.


var secondHighest = function(s) {
    var digits = s.match(/\d/g)
    if(!digits) return -1;
    console.log(digits)
    let numArray = digits.map(Number);
    if(!numArray) return -1;
    let firstLargest = -Infinity;
    let secondLargest = -Infinity;
    for(let i = 0; i < numArray.length; i++) {
        if(numArray[i] > firstLargest) {
            secondLargest = firstLargest;
            firstLargest = numArray[i];
        } else if(numArray[i] > secondLargest && numArray[i] !== firstLargest) {
                secondLargest = numArray[i];
        }
        
    }
   
    if(secondLargest!==firstLargest && secondLargest !== -Infinity) {
    return secondLargest;
    } else {
        return -1;
    }
};