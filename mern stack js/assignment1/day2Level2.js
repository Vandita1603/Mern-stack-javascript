// 1. Using console.log() print out the following statement:
// The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
let quote = "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."
console.log(quote)


// 2.Using console.log() print out the following quote by Mother Teresa:
//  "Love is not patronizing and charity isn't about pity, it is about love.Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
let quote2= "Love is not patronizing and charity isn't about pity, it is about love.Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
console.log(quote2)


// 3.Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
let a = '10'
let b=10
console.log(a===b)
console.log(a==b)



//4. Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
let num=9.8
console.log(num==10)
console.log(Math.round(9.8))


//5. Check if 'on' is found in both python and jargon
let jg = 'jargon'
let py = 'python'
console.log(jg.includes('on'), py.includes("on")) 


//6. I hope this course is not full of jargon. Check if jargon is in the sentence.
let str2 = 'I hope this course is not full of jargon.'
console.log(str2.includes("jargon"))


//  7. Generate a random number between 0 and 100 inclusively.
let randomNum = Math.random() // generates 0 to 0.999
let numBtnZeroAndHundred = randomNum * 100

console.log(numBtnZeroAndHundred) 


// 8. Generate a random number between 50 and 100 inclusively.
console.log(Math.floor(Math.random()*(100-50))+50)

// 9. Generate a random number between 0 and 255 inclusively.
console.log(Math.floor(Math.random()*255))

// 10. Access the 'JavaScript' string characters using a random number.
let chars = 'Javascript'
let result = ''
// for(let i=0; i<length; i++){
//     result = chars.charAt(Math.floor(Math.random()*chars.length))
// }
result = chars.charAt(Math.floor(Math.random()*chars.length))
console.log(result)


// 11. Use console.log() and escape characters to print the following pattern.
// 1 1 1 1 1
// 2 1 2 4 8
// 3 1 3 9 27
// 4 1 4 16 64
// 5 1 5 25 125
console.log("1 1 1 1 1 \n2 1 2 4 8 \n3 1 3 9 27 \n4 1 4 16 64 \n5 1 5 25 125 \n")
// console.log("2 1 2 4 8 \n")
// console.log("3 1 3 9 27 \n")
// console.log("4 1 4 16 64 \n")
// console.log("5 1 5 25 125 \n")


// 12. Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'
let str1 = 'You cannot end a sentence with because because because is a conjunction'

console.log(str1.substring(str1.indexOf('because'),str1.lastIndexOf(' is'))) 