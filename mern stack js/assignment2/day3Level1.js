// 1. Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
let firstName = 'Vandita'
let lastName = 'Bharti'
let country = 'India'
let city = 'kanpur'
let age = 20
let isMarried = false
let year = 2024

console.log("Type of firstname :",typeof(firstName))
console.log("Type of lastName :",typeof(lastName))
console.log("Type of country :",typeof(country))
console.log("Type of city :",typeof(city))
console.log("Type of age :",typeof(age))
console.log("Type of isMarried :",typeof(isMarried))
console.log("Type of year :",typeof(year))


// 2. Check if type of '10' is equal to 10
console.log(10 == '10') 


// 3. Check if parseInt('9.8') is equal to 10
console.log(parseInt('9.8') == 10) 

// 4. Boolean value is either true or false.
        // 1. Write three JavaScript statement which provide truthy value.


        //  --> Truthy values
            // >All numbers(positive and negative) are truthy except zero
            // >All strings are truthy except an empty string ('')
            // >The boolean true

        // 2. Write three JavaScript statement which provide falsy value.

        //--->Falsy Case
            // 0
            // 0n
            //null
            //undefined
            //NaN
            //false
            //"",'',`` empty string


// 5. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
            // 1. 4 > 3     TRUE
            console.log('4 > 3', 4 > 3)
            // 2. 4 >= 3        TRUE 
            console.log('4 >= 3', 4 >= 3)
            // 3. 4 < 3     FALSE
            console.log('4 < 3', 4 < 3)
            // 4. 4 <= 3        FALSE
            console.log('4 <= 3', 4 <= 3)
            // 5. 4 == 4        TRUE
            console.log('4 == 4', 4 == 4)
            // 6. 4 === 4       TRUE
            console.log('4 === 4', 4 === 4)
            // 7. 4 != 4        FALSE
            console.log('4 != 4', 4 != 4)
            // 8. 4 !== 4       FALSE
            console.log('4 !== 4', 4 !== 4)
            // 9. 4 != '4'      FALSE
            console.log('4 != "4" ',  4 != '4')
            // 10. 4 == '4'     TRUE
            console.log(' 4 == "4" ', 4 == '4')
            // 11. 4 === '4'        FALSE
            console.log(' 4 === "4" ', 4 === '4')
            // 12. Ind the length of python and jargon and make a falsy comparison statement.
            let py= 'python'
            console.log('length pf python is:',py.length)
            let jg = 'jargon'
            console.log('length pf jargon is:',jg.length)



// 6. Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()
            // 1. 4 > 3 && 10 < 12      TURE
            console.log(' 4 > 3 && 10 < 12 ', 4 > 3 && 10 < 12 );
            // 2. 4 > 3 && 10 > 12      FALSE
            console.log('4 > 3 && 10 > 12', 4 > 3 && 10 > 12);
            // 3. 4 > 3 || 10 < 12      TRUE
            console.log('4 > 3 || 10 < 12',4 > 3 || 10 < 12);
            // 4. 4 > 3 || 10 > 12      TRUE
            console.log('4 > 3 || 10 > 12 ',4 > 3 || 10 > 12 );
            // 5. !(4 > 3)              FALSE
            console.log('!(4 > 3)',!(4 > 3));
            // 6. !(4 < 3)              TRUE
            console.log('!(4 < 3)',!(4 < 3));
            // 7. !(false)              true
            console.log('!(false)',!(false));
            // 8. !(4 > 3 && 10 < 12)   FALSE
            console.log('!(4 > 3 && 10 < 12)',!(4 > 3 && 10 < 12));
            // 9. !(4 > 3 && 10 > 12)   true
            console.log('!(4 > 3 && 10 > 12)',!(4 > 3 && 10 > 12));
            // 10. !(4 === '4')         TRUE
            console.log('!(4 === "4")',!(4 === '4'));
            // 11. There is no 'on' in both dragon and python           FALSE
            
// 7. Use the Date object to do the following activities
//             1. What is the year today?
//             2. What is the month today as a number?
//             3. What is the date today?
//             4. What is the day today as a number?
//             5. What is the hours now?
//             6. What is the minutes now?
//             7. Ind out the numbers of seconds elapsed from January 1, 1970 to now.
            