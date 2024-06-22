// const userName = prompt("Please enter your name:")

// if(userName!==null && userName.trim()!==""){
//     alert(`Hello, ${userName}!`);

// }else{
//     alert("You didn't enter a valid name");
// }

let userGrade = prompt("Please enter your marks:")

if(userGrade>80 || userGrade==100){
    alert(`Your marks is, ${userGrade} , grade is A`);

}
else if(userGrade>65 || userGrade<=80){
    alert(`Your marks is, ${userGrade} , grade is B`);

}
else if(userGrade>45 || userGrade<=65){
    alert(`Your marks is, ${userGrade} , grade is C`);

}
else if(userGrade>30 || userGrade<=45){
    alert(`Your marks is, ${userGrade} , grade is D`);

}

else{
    alert("You are fail");
}