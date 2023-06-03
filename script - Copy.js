// console.log('Hello World')

const binarySearch = (arr, target) => {
    let left = 0;
    // let right = arr.length - 1;

    while(left <= right) {
        let mid = Math.floor((left + right) / 2);
   console.log(mid)
        //Check if the middle element is the target
if(arr[mid] === target) {
    return mid; //Target found, return the index
} else if(arr[mid] < target) {
    left = mid + 1; //Target is greater, serach the right half
} else {
    right = mid - 1; //Target is smaller, search the left half
}
    }
    return -1; //Target not found
} 

console.log(binarySearch()) // Enter your params here
//Example usage:
const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15];
const target = 9;
const resultIndex = binarySearch(sortedArray, target);

if (resultIndex !== -1) {
    console.log(`Target ${target} found at index ${resultIndex}`);
  } else {
    console.log(`Target ${target} not found in the array`);
}

function fibnonacci(n) {
    if(n <= 1) {
        return n;
    }else {
        return fibnonacci(n - 1) + fibnonacci(n - 2);
    }
}
console.log(fibonacci(5)); //Output: 5 (0, 1, 1, 2, 3, 5)