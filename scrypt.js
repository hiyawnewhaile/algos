/* 
  Given an array of strings
  return the number of times each string occurs (a frequency / hash table)
*/

const arr1 = ["a", "a", "a"];
const expected1 = {
  a: 3,
};

const arr2 = ["a", "b", "a", "c", "B", "c", "c", "d"];
const expected2 = {
  a: 2,
  b: 1,
  c: 3,
  B: 1,
  d: 1,
};

const arr3 = [];
const expected3 = {};

/**
 * Builds a frequency table based on the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<string>} arr
 * @returns {Object<string, number>} A frequency table where the keys are items
 *    from the given arr and the values are the amnt of times that item occurs.
 */
function makeFrequencyTable(arr) {
    var freqTable = {}
    for(var str of arr){
        if(!freqTable[str]){
            freqTable[str] = 1
        }
        else{
            freqTable[str]++
        }
    }
    console.log(freqTable);
    }

makeFrequencyTable(["a", "b", "a", "c", "B", "c", "c", "d"])

/*****************************************************************************/

/* 
Given a non-empty array of odd length containing ints where every int but one
has a matching pair (another int that is the same)
return the only int that has no matching pair.
*/

const nums1 = [1];
const expected1 = 1;

const nums2 = [5, 4, 5];
const expected2 = 4;

const nums3 = [5, 4, 3, 4, 3, 4, 5];
const expected3 = 4; // there is a pair of 4s but one 4 has no pair.

const nums4 = [5, 2, 6, 2, 3, 1, 6, 3, 2, 5, 2];
const expected4 = 1;

function makeFrequencyTable(arr) {
    var freqTable = {}
    for(var str of arr){
        if(!freqTable[str]){
            freqTable[str] = 1
        }
        else{
            freqTable[str]++
        }
    }
    console.log(freqTable);
    }

function oddOccurrencesInArray(nums) {
    const freqTable=makeFrequencyTable(nums)

    for (var key in freqTable){
        if (freqTable[key]%2 !=0){
            console.log(key)
        }
    }
}

oddOccurrencesInArray([5, 4, 3, 4, 3, 4, 5])

console.log(oddOccurrencesInArray(nums1), "should equal", expected1);
console.log(oddOccurrencesInArray(nums2), "should equal", expected2);
console.log(oddOccurrencesInArray(nums3), "should equal", expected3);
console.log(oddOccurrencesInArray(nums4), "should equal", expected4);

/*************************************************************************************** */

/* 
  Given a string,
  return a new string with the duplicates excluded
  Bonus: Keep only the last instance of each character.
*/

const str1 = "abcABC";
const expected1 = "abcABC";

const str2 = "helloo";
const expected2 = "helo";

const str3 = "";
const expected3 = "";

const str4 = "aa";
const expected4 = "a";

/**
 * De-dupes the given string.
 * @param {string} str A string that may contain duplicates.
 * @returns {string} The given string with any duplicate characters removed.
 */
function stringDedupe(str) {
    var result=""
    for(var i=0; i<str.length; i++){
        if(str[i]!=str[i+1]){
            result+=str[i]
        }
    }
    str=result
    console.log(str)
}

stringDedupe(str1)
stringDedupe(str2)
stringDedupe(str3)
stringDedupe(str4)

/*******************************/

/* 
  Given a string containing space separated words
  Reverse each word in the string.
  If you need to, use .split to start, then try to do it without.
*/

const str1 = "hello";
const expected1 = "olleh";

const str2 = "hello world";
const expected2 = "olleh dlrow";
// console.log(str2.split(" "))

const str3 = "abc def ghi";
const expected3 = "cba fed ihg";


/**
 * Reverses the letters in each words in the given space separated
 * string of words. Does NOT reverse the order of the words themselves.
 * @param {string} str Contains space separated words.
 * @returns {string} The given string with each word's letters reversed.
 */
function reverseWords(str) {
    var result=""
    var arr=str.split(" ")
    for(var j=0; j<arr.length; j++){
        for(var i=arr[j].length-1; i>=0; i--){
            result+=arr[j][i]
        }
        result+=" "
    }
    arr=result
    console.log(arr)
}

reverseWords(str1)
reverseWords(str2)
reverseWords(str3)


/***********************************/

/* 
  Reverse Word Order
  Given a string of words (with spaces)
  return a new string with words in reverse sequence.
*/

const str1 = "This is a test";
const expected1 = "test a is This";

const str2 = "hello";
const expected2 = "hello";

const str3 = "   This  is a   test  ";
const expected3 = "test a is This";

/**
 * Reverses the order of the words but not the words themselves form the given
 * string of space separated words.
 * @param {string} wordsStr A string containing space separated words.
 * @returns {string} The given string with the word order reversed but the words
 *    themselves are not reversed.
 */
function reverseWordOrder(wordsStr) {
    result=""
    arr=wordsStr.split(" ")
    for(var i=arr.length-1; i>=0; i--){
        if(arr[i]!=""){
        result+=arr[i]
        result+=" "
        }
    }
    wordsStr=result
    console.log(wordsStr)
    return wordsStr
}

reverseWordOrder(str1)
reverseWordOrder(str2)
reverseWordOrder(str3)

/* 
  String: Rotate String
  Create a standalone function that accepts a string and an integer,
  and rotates the characters in the string to the right by that given
  integer amount.
*/

const str = "Hello World";

const rotateAmnt1 = 0;
const expected1 = "Hello World";

const rotateAmnt2 = 1;
const expected2 = "dHello Worl";

const rotateAmnt3 = 2;
const expected3 = "ldHello Wor";

const rotateAmnt4 = 4;
const expected4 = "orldHello W";

const rotateAmnt5 = 13;
const expected5 = "ldHello Wor";
/* 
Explanation: this is 2 more than the length so it ends up being the same
as rotating it 2 characters because after rotating every letter it gets back
to the original position.
*/

/**
 * Rotates a given string's characters to the right by the given amount,
 * wrapping characters to the beginning.
 * @param {string} str
 * @param {number} amnt The amount of characters in the given str to rotate to the
 *    right.
 * @returns {string} The string rotated by the given amount.
 */

function rotateStr(str, amnt) {
    for(;amnt;amnt--){
    var x=str.split("")
    var y
        y=x.pop()
        y+=x.join("")
        str=y
    }
    console.log(str)
    return str
}

rotateStr(str,0)
rotateStr(str,1)
rotateStr(str,2)
rotateStr(str,3)
rotateStr(str,4)
rotateStr(str,13)

/*****************************************************************************/
/* 
  Create the function isRotation(str1,str2) that
  returns whether the second string is a rotation of the first.
*/

const strA1 = "ABCD";
const strB1 = "CDAB";
// Explanation: if you start from A in the 2nd string, the letters are in the same order, just rotated
const expect1 = true;

const strA2 = "ABCD";
const strB2 = "CDBA";
// Explanation: all same letters in 2nd string, but out of order
const expect2 = false;

const strA3 = "ABCD";
const strB3 = "BCDAB";
// Explanation: same letters in correct order but there is an extra letter.
const expect3 = false;

/**
 * Determines whether the second string is a rotated version of the first.
 * @param {string} s1
 * @param {string} s2
 * @returns {boolean} Whether the second string is a rotated version of the 1st.
 */

function isRotation(s1, s2) {
    for(var i=0; i<s2.length; i++){
        if(s1==s2){
            console.log("true")
            return "true"
        }
        s2 = rotateStr(s2, 1)
    }
    console.log("false")
    return "false"
}

isRotation(strA1, strB1)
isRotation(strA2, strB2)
isRotation(strA3, strB3)


/* 
  Given an array of integers
  return the first integer from the array that is not repeated anywhere else
  If there are multiple non-repeated integers in the array,
  the "first" one will be the one with the lowest index.
*/

const nums1 = [3, 5, 4, 3, 4, 6, 5];
const expected1 = 6;

const nums2 = [3, 5, 5];
const expected2 = 3;

const nums3 = [3, 3, 5];
const expected3 = 5;

const nums4 = [5];
const expected4 = 5;

const nums5 = [];
const expected5 = null;

const nums6 = [3,2,2,1,4,4,5]

/**
 * Finds the first int from the given array that has no duplicates. I.e., the
 *    item at the lowest index that doesn't appear again in the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {number|null} The first int value from the given array that has no
 *    dupes or null if there is none.
 */
function firstNonRepeated(nums) {
    var freqTable = {}
    if(nums.length==0){
        console.log(null)
        return null
    }
    for(var i of nums){
        if(!freqTable[i]){
            freqTable[i] = 1
        }
        else{
            freqTable[i]++
        }
    }
    for(var j of nums){ /* j of nums  instead of j in freqTable to make sure that we return the first occurance within the array */
        if(freqTable[j]==1){
            console.log(j)
            return j
        }
    }
    }

firstNonRepeated(nums1)
firstNonRepeated(nums2)
firstNonRepeated(nums3)
firstNonRepeated(nums4)
firstNonRepeated(nums5)
firstNonRepeated(nums6)



function index(arr){
    x=""
    for(var i=0; i<arr.length; i++){
        if( arr[i+1] == arr[i]+1){
            x
        }

    }
}