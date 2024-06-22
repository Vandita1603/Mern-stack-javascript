// . Declare a variable named challenge and assign it to an initial value 'World Of JavaScript'.
let challenge='World Of Javascript'

// Print the string on the browser console using console.log()
console.log("challeneg :- ", challenge)

// Print the length of the string on the browser console using console.log()
console.log(challenge.length) 

// Change all the string characters to capital letters using toUpperCase() method
console.log(challenge.toUpperCase()) 

// Change all the string characters to lowercase letters using toLowerCase() method
console.log(challenge.toLowerCase()) 


// Cut (slice) out the first word of the string using substr() or substring() method
console.log(challenge.substring(0,5)) 

// Slice out the phrase World Of JavaScript from World Of JavaScript.
console.log(challenge.substring()) 

//  Check if the string contains a word Script using includes() method
console.log(challenge.includes('script'))

// Split the string into an array using split() method
console.log(challenge.split()) 

// Split the string World Of JavaScript at the space using split() method
console.log(challenge.split(' ')) 


// 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
let string = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' 
console.log(string.split(','))


// Change World Of JavaScript to Welcome to World Of Python using replace() method.
console.log(challenge.replace('World Of Javascript', 'Welcome to World Of Python'))
// console.log(challenge)


// What is character at index 15 in 'World Of JavaScript' string? Use charAt() method.
console.log(challenge.charAt(15)) 

// What is the character code of J in 'World Of JavaScript' string using charCodeAt()
console.log("Character at given index is : ",challenge.charAt(9)) 
console.log("Character code of J is :-",challenge.charCodeAt(9)) 

// Use indexOf to determine the position of the first occurrence of a in World Of JavaScript
console.log("Position of the first occurrence of a ",challenge.indexOf('a')) 


// Use lastIndexOf to determine the position of the last occurrence of a in World Of JavaScript.
console.log("Position of the last occurrence of a ",challenge.lastIndexOf('a')) 

// Use indexOf to Ind the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let sentence ='You cannot end a sentence with because because because is a conjunction'
console.log("Position of the first occurrence of because", sentence.indexOf('because')) 

// Use lastIndexOf to Ind the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log("Position of the last occurrence of because", sentence.lastIndexOf('because')) 



// Use search to Ind the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log("Search the position of the first occurrence of because", sentence.search('because')) 


// Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' World Of JavaScript '.
let string1 = ' World Of JavaScript '
console.log(string1)
console.log(string1.trim(' '))


// Use startsWith() method with the string World Of JavaScript and make the result true
console.log(string1.startsWith(' World'))

// Use endsWith() method with the string World Of JavaScript and make the result true
console.log(string1.endsWith('JavaScript ')) 

// Use match() method to Ind all the a’s in World Of JavaScript
console.log(string1.match('a'))

// Use concat() and merge 'Welcome to World of' and 'JavaScript' to a single string, 'World Of JavaScript'
let string2 = 'Welcome to world of'
console.log(string2.concat("JavaScript"))

// Use repeat() method to print World Of JavaScript 2 times
console.log(string1.repeat(2)) 