
// const redundant = str => () => str

// const redundant = str => {
//     const value = () => str
//  return value
// }


// const f1 = redundant("apple")
// console.log(f1())// ➞ "apple"

// const f2 = redundant("pear")
// f2()// ➞ "pear"

// const f3 = redundant("")
// f3()// ➞ ""

// const sevenBoom = arr => {
//    return arr.join('').indexOf('7') >= 0 ? "Boom!" : "There is no 7 in the array";  
// }
// const sevenBoom = arr => {
//     return arr.join().includes('7') ? "Boom!" : "There is no 7 in the array"
// }

// console.log(sevenBoom([1, 2, 3, 4, 5, 6, 7])) //➞ "Boom!"
// // 7 contains the number seven.

// console.log(sevenBoom([8, 6, 33, 100])) //➞ "there is no 7 in the array"
// // None of the items contain 7 within them.

// console.log(sevenBoom([2, 55, 60, 97, 86]))// ➞ "Boom!"
// 97 contains the number seven.

// const filterArray = (arr, filter) => {
//     return arr.filter(filter.find(v => typeof v === "function"));
// }
// const filterArray = (arr, filter) => {
//    let func = filter.filter(ele => typeof ele == "function");
//    return arr.filter(num => func[0](num))
// }

// console.log(filterArray([1, 2, 3, 4], [1, 2, (num) => num % 2 === 0])) 
// //➞ [2 , 4]

//  filterArray([1, 2, 3, 4, 5], [1, 2, (num) => num % 2 === 1,"eon","epoch"]) 
//  //➞ [1, 3, 5]

//  console.log(filterArray(["apple", "kiwi"], [2, (txt) => txt.indexOf("a") > -1])) 
 //➞ ["apple"]

// const floatSum = (a, b) => {
//   return parseFloat((a + b).toPrecision(20));
// }

//  console.log(floatSum(0.3, 0.7))
//  // ➞ 1

// floatSum(0.35, 0.75) 
// //➞ 1.1

// console.log(floatSum(1.234, 5.6789)) 
//➞ 6.9129

// const oddishOrEvenish = num => {
//     let arr = num.toString().split('');
//     return arr.reduce((acc, cur) => acc +parseInt(cur), 0) % 2 === 0 ? "Evenish" : "Oddish";
// }

// function oddishOrEvenish(num) {
// 	return [...String(num)].map(Number).reduce((a,v) => a + v) % 2 ? 'Oddish' : 'Evenish'
// }

// console.log(oddishOrEvenish(43))
// //➞ "Oddish"
// // 4 + 3 = 7
// // 7 % 2 = 1

// console.log(oddishOrEvenish(373))
// //➞ "Oddish"
// // 3 + 7 + 3 = 13
// // 13 % 2 = 1

// console.log(oddishOrEvenish(4433))
 //➞ "Evenish"
// 4 + 4 + 3 + 3 = 14
// 14 % 2 = 0

// new Promise((resolve, reject) => {
//     console.log("Initial")
//     resolve;
// })
// .then(() => {
//     throw new Error("Something Failed");
//     console.log('Do this');
// })
// .catch(() => {
//     console.log("Do that")
// })
// .then(() => {
//     console.log("Do this, no matter what happened before");    
// })

// const doSomething = (isGoingtoResolve = true) => {
//     return new Promise((resolve, reject) => {
//         if(isGoingtoResolve) {
//             resolve("something")
//         } else {
//             reject("something else")
//         }
//     }).then(response => {
//         console.log("in my function", response)
//         return response
//     }).catch(error => {
//         console.log("in my function", error)
//     })
// }

// doSomething().then(response => {
//     console.log("in my main call", response)
// })

// const closestPalindrome = num => {
//  const check = n => String(n).split("").reverse().join("") == n
//  let i = 0;
//  let result = [];

//  while(!result.some(check)) {
//     result = [num - i, num + i]
//     i++;
//  }
//  return result.find(check)
// }

//console.log(closestPalindrome(887))
// ➞ 888
//console.log(closestPalindrome(100))
// ➞ 99
// 99 and 101 are equally distant, so we return the smaller palindrome.
//console.log(closestPalindrome(888))
// ➞ 888
// console.log(closestPalindrome(27))
// ➞ 22 

// const lookAndSay = str => { 
//     let result = "";
//     let count = 1;
//     for(let i = 0; i < str.length; i++) {
//         if(str[i] === str[i + 1]) {
//             count++;
//         } else {
//             result += count + str[i];
//             count = 1;
//         }
//     }
//     return result;
// }

// console.log(lookAndSay("1211"))
// //➞ "111221"
// console.log(lookAndSay("111221"))
// // ➞ "312211"
// lookAndSay("31131211131221") 
// //➞ "13211311123113112211"


const flatAll = (arr) =>
  arr.flat().reduce((ar, element) => {
    if (Array.isArray(element)) {
      return flatAll([...ar, ...element]);
    }
    if (typeof element !== 'number') return ar;
    ar.push(element);
    return ar;
  }, []);

const hashMap = {
  sum: (...arr) => flatAll(arr).reduce((a, b) => a + b),
  subtraction: (...arr) => flatAll(arr).reduce((a, b) => a - b),
  multiplication: (...arr) => flatAll(arr).reduce((a, b) => a * b),
  division: (a, b) => (b !== 0 ? a / b : new Error("Can't divide by zero")),
};
console.log(hashMap.sum([5, [5, [5, [5, [5]]]]])); // 25

//Generate a random ID
const bigString =
  'abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const getRamdomChar = (bigStr) =>
  bigStr[Math.floor(Math.random() * bigStr.length)];

const getNRandom = (num, str = '') =>
  num <= 0 ? str : getNRandom(num - 1, str + getRamdomChar(bigString));

const getNstringsNTimes = (nChars, numStrings, arr) => {
    console.log(arr)
  arr.push(getNRandom(nChars)); // xy12
  if (numStrings <= 1) return arr.join('-'); // xyz0-123z-...-str6
  return getNstringsNTimes(nChars, numStrings - 1, arr);
};

const generateId = (nChars = 4, numStrings = 4) =>
  getNstringsNTimes(nChars, numStrings, []);

console.log(getNstringsNTimes(2, 5)); // z1-yq-jy-5v-r5