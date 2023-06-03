
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

const lookAndSay = str => { 
    let result = "";
    let count = 1;
    for(let i = 0; i < str.length; i++) {
        if(str[i] === str[i + 1]) {
            count++;
        } else {
            result += count + str[i];
            count = 1;
        }
    }
    return result;
}

console.log(lookAndSay("1211"))
//➞ "111221"
console.log(lookAndSay("111221"))
// // ➞ "312211"
// lookAndSay("31131211131221") 
// //➞ "13211311123113112211"


// const flatAll = (arr) =>
//   arr.flat().reduce((ar, element) => {
//     if (Array.isArray(element)) {
//       return flatAll([...ar, ...element]);
//     }
//     if (typeof element !== 'number') return ar;
//     ar.push(element);
//     return ar;
//   }, []);

// const hashMap = {
//   sum: (...arr) => flatAll(arr).reduce((a, b) => a + b),
//   subtraction: (...arr) => flatAll(arr).reduce((a, b) => a - b),
//   multiplication: (...arr) => flatAll(arr).reduce((a, b) => a * b),
//   division: (a, b) => (b !== 0 ? a / b : new Error("Can't divide by zero")),
// };
// console.log(hashMap.sum([5, [5, [5, [5, [5]]]]])); // 25

// //Generate a random ID
// const bigString =
//   'abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';

// const getRamdomChar = (bigStr) =>
//   bigStr[Math.floor(Math.random() * bigStr.length)];

// const getNRandom = (num, str = '') =>
//   num <= 0 ? str : getNRandom(num - 1, str + getRamdomChar(bigString));

// const getNstringsNTimes = (nChars, numStrings, arr) => {
//     console.log(arr)
//   arr.push(getNRandom(nChars)); // xy12
//   if (numStrings <= 1) return arr.join('-'); // xyz0-123z-...-str6
//   return getNstringsNTimes(nChars, numStrings - 1, arr);
// };

// const generateId = (nChars = 4, numStrings = 4) =>
//   getNstringsNTimes(nChars, numStrings, []);

// console.log(getNstringsNTimes(2, 5)); // z1-yq-jy-5v-r5

// let Person = function(firstAndLast) {
//   // console.log(firstAndLast)
//   let nameArr = firstAndLast.split(" ");
//   // console.log(nameArr)
//   let first = nameArr[0];
//   let last = nameArr[1];

//   this.getFirstName = () => {
//     return first;
//   }
//   this.getLastName = () => {
//     return last;
//   }
//   this.getFullName = () => {
//     return first + " " + last;
//   };
//   this.setFirstName = (x) => {
//     first = x;
//   }
//   this.setLastName = (y) => {
//     last = y;
//   }
//   this.setFullName = (str) => {
//     let firstt = str.split(' ')[0];
//     let lastt = str.split(' ')[1];
//     first = firstt;
//     last = lastt;
//   }
// }

// let bob = new Person('Bob Ross')
// console.log(Object.keys(bob).length)
// console.log(bob instanceof Person)
// console.log(bob.firstName)
// console.log(bob.lastName)
// console.log(bob.getFirstName())
// console.log(bob.getLastName())
// console.log(bob.getFullName())
// console.log(bob.setFirstName("Haskell"))
// console.log(bob.getFullName())
// console.log(bob.setLastName("Curry"))
// console.log(bob.getFullName())
// console.log(bob.setFullName("Haskell Curry"))
// console.log(bob.getFullName())
// console.log(bob.getFirstName())
// console.log(bob.getLastName())

//create two functions that covert to camelcase or snakecase

// const toCamelCase = (str) => {
//   return str.replace(/(_[a-z])/g, match => {
//     return match.slice(1).toUpperCase()
//   })
// }

// const toSnakeCase = (str) => {
//   return str.replace(/([A-Z])/g, match => {
//     return '_' + match.toLowerCase();
//   })
// }


// console.log(toCamelCase("hello_edabit"))// ➞ "helloEdabit"
// console.log(toSnakeCase("helloEdabit"))// ➞ "hello_edabit"
// toCamelCase("is_modal_open")// ➞ "isModalOpen"
// toSnakeCase("getColor") //➞ "get_color"

// const largestGap = arr => {
//   let sorted = arr.sort((a, b) => a - b);
//   let largest = 0;
//   for (let i = 0; i < sorted.length - 1; i++) {
//     let diff = sorted[i + 1] - sorted[i];
//     if (diff > largest) {
//       largest = diff;
//     }
//   }
//   return largest;
// }

// console.log(largestGap([9, 4, 26, 26, 0, 0, 5, 20, 6, 25, 5]))
// ➞ 11
// After sorting get [0, 0, 4, 5, 5, 6, 9, 20, 25, 26, 26]
// Largest gap of 11 between 9 and 20

// largestGap([14, 13, 7, 1, 4, 12, 3, 7, 7, 12, 11, 5, 7]) //➞ 4
// // After sorting get [1, 3, 4, 5, 7, 7, 7, 7, 11, 12, 12, 13, 14]
// // Largest gap of 4 between 7 and 11

// largestGap([13, 3, 8, 5, 5, 2, 13, 6, 14, 2, 11, 4, 10, 8, 1, 9])// ➞ 2
// After sorting get [1, 2, 2, 3, 4, 5, 5, 6, 8, 8, 9, 10, 11, 13, 13, 14]
// Largest gap of 2 between 6 and 8

// const primeDivisors = n => {
//   let factors = [];
//   let i = 2;
//   while(n > 1) {
//     if(n % i === 0) {
//       n = n / i;
//       factors.push(i)
//     } else {
//       i++;
//     }
//   }
//   let res = [];
//   for(let i = 0; i < factors.length; i++) {
//     if(!res.includes(factors[i])) {
//       res.push(factors[i])
//     }
//   }
//   return res;
// }

// // console.log(primeDivisors(27)) //➞ [3]
// console.log(primeDivisors(99)) //➞ [3, 11]
// primeDivisors(3457)// ➞ [3457]

// const findZip = str => {
//   let first = str.indexOf('zip');
//   let second = str.indexOf('zip', first + 1);
//   return second;
// }

// console.log(findZip("all zip files are zipped"))// ➞ 18
// findZip("all zip files are compressed")// ➞ -1

// const triArea = (base, height) => {
//   return (base * height) / 2;
// }

// triArea(3, 2)// ➞ 3
// triArea(7, 4)// ➞ 14
// console.log(triArea(10, 10))// ➞ 50


// const timeToFinish = (full, part) => {
//  let fullLength = full.split(" ").join("").length;
//  console.log(fullLength)
//   let partLength = part.split(" ").join("").length;
//   return (fullLength - partLength) * 0.5;
// }

// console.log(timeToFinish(
//   "And so brings my conclusion to its conclusion.",
//   "And so brings my conclusion to its conclus"
// )) //➞ 2
// console.log(timeToFinish(
//   "As a result, my point is still valid.",
//   "As a result, my"
// ))// ➞ 9

// console.log(timeToFinish(
//   "Thank you for reading my essay.",
//   "T"
// ))// ➞ 12.5

// const zipIt = (women, men) => {
//     if(women.length === men.length) {
//         return women.map((woman, i) => [woman, men[i]]);
//     }
//     return `sizes don't match`
// }

// console.log(zipIt(["Elise", "Mary"], ["John", "Rick"]))
//  //➞ [["Elise", "John"], ["Mary", "Rick"]]
// console.log(zipIt(["Ana", "Amy", "Lisa"], ["Bob", "Josh"]))
//  //➞ "sizes don't match"
// zipIt(["Ana", "Amy", "Lisa"], ["Bob", "Josh", "Tim"])
// ➞ [["Ana", "Bob"], ["Amy", "Josh"],["Lisa", "Tim"]]

// const findDuplicates = arr => {
//     const sortedArray = arr.slice().sort()
//     const duplicates = [];

//     for(let i = 0; i < sortedArray.length - 1; i++) {
//         if(sortedArray[i + 1] === sortedArray[i]) {
//             duplicates.push(sortedArray[i])
//         }
//     }
//     return duplicates;
// }

// console.log(findDuplicates([1, 2, 4, 4, 3, 3, 1, 5, 3, "5"]))// ➞ [1, 3, 4]
// console.log(findDuplicates([0, 1, 2, 3, 4, 5]))// ➞ []
// console.log(findDuplicates(["A", "B", "C", "A", "B", "Z"]))// ➞ ["A", "B"]

console.log("I'm working")