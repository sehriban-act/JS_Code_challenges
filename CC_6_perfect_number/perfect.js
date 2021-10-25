console.log("js is running");
let a=0;
let number=document.querySelector('#number');
function perfectNumber(number) {
    for (let i=1;1<=number/2;i++) {
        if (number%i===0) {
           a+=i;
        }
    }
    if( a===number && a!==0 ){
        console.log(`${number()} is a perfect Number `);
        
    }
    console.log(`${number()} is a perfect Number `);  
    }
    
    let checkBtn=document.querySelector('#check_btn');
    checkBtn.addEventListener('click',perfectNumber);
//ssource https://www.w3resource.com/javascript-exercises/javascript-function-exercise-12.php