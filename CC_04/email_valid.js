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