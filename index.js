const button = document.getElementById("check-btn");
const result = document.getElementById("result")

function check(){
   const textinput = document.getElementById("text-input");
   const value = textinput.value;
   const nanValue = value.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
   const reverse = nanValue.split("").reverse().join('');


   if (reverse === nanValue && nanValue !== ""){
    result.innerHTML = `<strong>${value}</strong> is a palindrome`
   }
   else if (value === ""){
    alert("Please input a value")
   }
   else {
    result.innerHTML = `<strong>${value}</strong> is not a palindrome`
   }

   textinput.value = '';
 
}

