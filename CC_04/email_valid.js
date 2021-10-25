function ValidateEmailAddress(emailString) {
    // check for @ sign
    var atSymbol = emailString.indexOf("@");
    if(atSymbol < 1) return false;
    
    var dot = emailString.indexOf(".");
    if(dot <= atSymbol + 2) return false;
    
    // check that the dot is not at the end
    if (dot === emailString.length - 1) return false;
    
    return true;
}

function CheckEmail(emailString)
{
   //get result as true/false
   var Result= ValidateEmailAddress(emailString);
	
	 if(Result)
	 {
	     document.getElementById("output").innerHTML="Valid Email Id";
   }
	 else
	 {
		document.getElementById("output").innerHTML="NOT a Valid Email Id";
	 }
}
//source https://qawithexperts.com/article/javascript/email-validation-using-javascript-with-or-without-regex/317

//------another solution----
// const input = document.querySelector('input');
// const button = document.querySelector('button');
// const result = document.querySelector('output');
// button.addEventListener('click', () => {
//   const email = input.value;
//   if (!email.includes('@')) {
//     result.textContent = `${email} is invalid`;
//     return;
//   }

//   const extension = email.split('@')[1].split('.')[1];
//   if (extension == undefined || extension.length == 0 || extension.length > 3) {
//     result.textContent = `${email} is invalid`;
//     return;
//   }

//   result.textContent = `${email} is valid`;
// });
