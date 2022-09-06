//TASK

// const beast = "cat"
// const dish = "milk"

// function feast(a, b) {
//     console.log("beast = " + beast)
//     console.log("dish = " + dish)

//     const arr1 = beast.split('');
//     const arr2 = dish.split('');
//     console.log("arr1 = " + arr1)
//     console.log("arr2 = " + arr2)

//     const firstLetter1 = arr1[0]
//     const firstLetter2 = arr2[0]
//     console.log("firstLetter1 = " + firstLetter1)
//     console.log("firstLetter2 = " + firstLetter2)

//     console.log("arr1.lenght = " + arr1.length)
//     console.log("arr2.lenght = " + arr2.length)

//     const lastLetter1 = arr1[arr1.length - 1];
//     const lastLetter2 = arr2[arr2.length - 1];
//     console.log("lastLetter1 = " + lastLetter1)
//     console.log("lastLetter2 = " + lastLetter2)

//     if (firstLetter1 == firstLetter2 && lastLetter1 == lastLetter2) {
//         console.log("true");
//     } else {
//         console.log("false");
//     }
// }

// feast(beast, dish)






// 06.09.2022





//TASK1

// arr = [0, 1, 2, 3, 4, 5]
// arrLength = arr.length

// function removeEveryOther(arr) {
//     for (let i = 1; arrLength > (i - 1); i++) {
//         arr.splice(i, 1)
//         arrLength -= 1
//     }
//     console.log(arr);
// }

// removeEveryOther(arr)

// console.log(1)

//0 [0, 1, 2, 3, 4, 5]
//1 [0, 2, 3, 4, 5]
//2 [0, 2, 4, 5]
//3 [0, 2, 4]


//TASK2

// let string = "h1 i 500 so0"
// console.log(string)

// let arr = string.split('')
// console.log(arr)

// for (let i = 0; i <= arr.length; i++) {
//     switch (arr[i]) {
//         case "1":
//             arr[i] = "I"
//             break
//         case "5":
//             arr[i] = "S"
//             break
//         case "0":
//             arr[i] = "O"
//             break

//         default:
//             break;
//     }
// }
// console.log(arr)
// string = arr.join('')
// console.log(string)

//TASK 3

// s = "sdiuesg! !!! svc! !skdjbs"

// function removeExclamationMarks(s) {
//     let arr = s.split('')
//     for (let i = 0; i <= arr.length; i++) {
//         if (arr[i] == "!") {
//             delete arr[i]
//         }
//     }
//     s = arr.join('')
//     console.log(s);
// }

// removeExclamationMarks(s)

//TASK 4

// array = [0, 1, 2]
// console.log(array.length)

// function find_average(array) {
//     if (array.length > 0) {
//         let productSum = 0
//         let divisor = 0
//         for (let i = 0; i < array.length; i++) {
//             productSum += array[i]
//             divisor++
//         }
//         let result = productSum / divisor
//         console.log("sum = " + productSum)
//         console.log("givisor = " + divisor)
//         console.log(result);
//     } else {
//         console.log(0)
//     }

// }

// find_average(array)

//TASK 5

// a = 4
// b = 3

// console.log("a = " + a)
// console.log("b = " + b)

// // 1 2 3 ===== 6

// function getSum(a, b) {
//     if (a == b) {
//         console.log("a == b")
//         console.log(a)
//     }
//     if (a > b) {
//         console.log("a > b")
//         let temp = a
//         a = b
//         b = temp
//         console.log("now a = " + a)
//         console.log("now b = " + b)
//     }
//     if (b > a) {
//         let sum = b
//         while (a < b) {
//             sum += a
//             a++
//         }
//         console.log("sum = " + sum)
//     }

// }

// getSum(a, b)




//TASK6

// const reverseSeq = n => {
//     arr = []
//     while(n >= 1){
//       arr.push(n)
//       n--
//     }
//     return arr;
//   };



//TASK



//TASK



//TASK



//TASK



//TASK



//TASK



//TASK