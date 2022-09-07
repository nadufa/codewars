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



//TASK... DON'T WORK

// string = "hello world my name nadufa"
// arr = string.split(' ')
// console.log(arr)

// //['hello', 'world', 'my', 'name', 'nadufa']

// let underArr = []
// let temp = ""

// for (i = 0; i < arr.length; i++) {
//     underArr = arr[i].split('')
//     temp = underArr[0]
//     underArr[0] = temp.toUpperCase
//     arr[i] = underArr.join('')
// }

// string = arr.join(' ')

// console.log(string)

//TASK DON'T WORK

// n = 6279
// arr = [6, 2, 7, 9]
// newArr
// console.log(arr)

// function getMaxOfArray(numArray) {
//     return Math.max.apply(null, numArray);
// }

// for (let i = 0; i < arr.length; i++) {
//     newArr.push(getMaxOfArray(arr))
//     console.log(newArr)
// }

// function descendingOrder(n) {

// }


// 6279
// arr = [6, 2, 7, 9]
// arr
//
//
//
//


//TASK 7

// data = [
//     [59, 12],
//     [55, -1],
//     [12, -2],
//     [12, 12]
// ]

// console.log("data = " + data)

// function openOrSenior(data) {
//     let result = []
//     let param1 = true
//     let param2 = true
//     for (let i = 0; i < data.length; i++) {
//         for (let j = 0; j < 2; j++) {
//             if (j == 0) {
//                 if (data[i][j] >= 55) {
//                     param1 = true
//                 } else {
//                     param1 = false
//                 }
//             } else {
//                 if (data[i][j] > 7) {
//                     param2 = true
//                 } else {
//                     param2 = false
//                 }
//             }
//         }
//         if (param1 == true && param2 == true) {
//             result.push('Senior')
//         } else {
//             result.push('Open')
//         }

//     }
//     console.log(result)
// }
// openOrSenior(data)







//  07.09.2022






//TASK 1

// numbers = [10, 100, 7, 1000]

// function sumTwoSmallestNumbers(numbers) {  
//     let indexOfMin = 0
//     let sum = 0

//     for (let i = 0; i < 2; i++) {
//         indexOfMin = numbers.indexOf(Math.min(...numbers))
//         sum += numbers[indexOfMin]
//         numbers.splice(indexOfMin, 1)
//     }

//     console.log(sum)
// }





//TASK



//TASK



//TASK