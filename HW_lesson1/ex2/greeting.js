const arr = [1, 2, 3, 4, 5, 7]
const arr2 = [6, 7, 8, 5, 3, 3]

// console.log(arr.length > arr2.length)
if (arr.length > arr2.length) {
    console.log(arr + " > " + arr2)
} else if (arr.length < arr2.length) {
    console.log(arr + " < " + arr2)
} else {
    console.log(arr + " = " + arr2)
}