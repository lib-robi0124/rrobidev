let number = parseInt(prompt("enter a number for temp to be convert"));
let userChoisTemperature = prompt("Please enter C for celsius (to F) or F for farenheit (to C)");

if (!isNaN(number)){
    if (userChoisTemperature === "C"){
       function Fahrenheit(number){
        let result = number * 1.8 + 32;
         return result;
        }
        alert(`C convert to F is: ${Fahrenheit(number)}`);
    }  
        
else if(userChoisTemperature === "F"){
        function celsius(number){
        let result = (5/9) * (number-32);
        return result;
        }
    alert(`F convert to C is: ${celsius(number)}`);
    }
 else {
   alert("You've entered an invalid input!");
}
}