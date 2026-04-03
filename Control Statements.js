// Control statements are used to control the flow of execution in a program based on certain conditions.

let hungry= true;
let hasfood = false;// && operator is used to check if both conditions are true

if(hungry && hasfood){
    console.log("Eat food");
}
else {
     console.log("Order food")
}
// || operator is used to check if at least one condition is true
let issunday =false;
let isholiday= true;
 if (issunday || isholiday){
    console.log("Day OFF")

}
else{
    console.log("Go to work")
}

// if-else if-else statement is used to check multiple conditions
let score = 88
if(score>=50){
    console.log("pass");
}
else if(score>=80){
    console.log("merit ");

}
else if(score>=90){
    
}
// Ternary operator is a shorthand for if-else statement. Use Ternary operator when there is one simple condition with multiple outcomes. It is written as condition ? expressionIfTrue : expressionIfFalse
let isLoggedIn= true
let message = isLoggedIn ? " welcomeBack" : "Please log in";
console.log(message)

//Switch
let day= "sunday";
 switch(day){
    case "monday": 
    console.log("MOMO");
    break;
    case "Tuesday":
    console.log("Sekuwa");
    break;
    case "wednesday":
    console.log("Chowmein");
     break;
    case "Thursday":
        console.log("Kebabs");
        break;
    case "Friday":
      console.log("Burger");
      break;
    case "Saturday":
        console.log("Mattar Paneer");
        break;
    case "sunday":
        console.log("Choila");
        break;
        
        default:
            console.log(`${day} is not valid`);
        
        
 }
 