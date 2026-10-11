//<--------------- switch case --------------->
//calculator

let n1=10
let n2=20
let operator="*"
switch (operator){
   case "+":
      console.log("add : ",n1+n2);
      break;
   case "-":
      console.log("sub : ",n1-n2);
      break;
   case "*":
      console.log("multiply : ",n1*n2);
      break;
   case "/":
      console.log("division : ",n1/n2);
      break;
   case "%":
      console.log("modulo : ",n1%n2);
      break;
   default:
      console.log("Invalid operator");
      
}



// traffic signal lights

let color="Green"
switch (color){
    case "red":
        console.log("stop the vehicle");
        break;
    case "yellow":
        console.log("get ready to start");
        break;
    case "green":
        console.log("go...");
        break;
    default:
        console.log("traffic signal error X");
        
}



// days in a week
 let day=1
 switch (day){
    case 0:
        console.log("sunday");
        break;
     case 1:
        console.log("monday");
        break;
     case 2:
        console.log("tuesday");
        break;
     case 3:
        console.log("wednesday");
        break;
     case 4:
        console.log("thursday");
        break;
     case 5:
        console.log("friday");
        break;
     case 6:
        console.log("saturday");
        break;
    default:
        console.log("not a day in week");
        
 }

