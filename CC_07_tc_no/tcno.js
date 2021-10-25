console.log('js is running');
  

  //sayiyi arraye cevirme
  //source https://www.geeksforgeeks.org/how-to-convert-a-number-into-array-in-javascript/
// Here we typecasting the num
// Splitting the num, so that
// we got an array of strings
// Then use map function to
// convert the array of strings
// into array of numbers
var num = document.getElementById("tcNo").value;//34444185856;
var myArr = String(num).split("").map((num)=>{
  return Number(num);
});
  
console.log(myArr);

//Write a JavaScript program to get every nth element in a given array.
//source https://www.w3resource.com/javascript-exercises/fundamental/javascript-fundamental-exercise-21.php
const every_odd = (arr, odd) => arr.filter((e, i) => i % odd === odd - 1);//cift siradakini
console.log(every_odd(myArr, 2));
const every_even = (arr, even) => arr.filter((e, i) => i % even === even - 2);//tek siradakini
console.log(every_even(myArr, 2));


//arraydeki sayilarin toplami
//kaynak :https://www.delftstack.com/howto/javascript/javascript-sum-of-array/


let sum = 0;
 
for (let i = 0; i < every_odd(myArr, 2).length-1; i++) {
    sum += every_odd(myArr, 2)[i];
}
console.log(sum);

let sum1=0;
for (let i = 0; i < every_even(myArr, 2).length-1; i++) {
    sum1 += every_even(myArr, 2)[i];
}
console.log(sum1);

let tenth_num=((sum1*7)-sum)%10;
console.log(tenth_num);
let eleventh_num=(sum1+sum+tenth_num)%10;
console.log(eleventh_num);
let text=document.querySelector("#demo");
function checkTcNo(){
    if (myArr[0]!==0 && myArr.length===11 && tenth_num && eleventh_num  ) {
    //    return true;
    text.innerHTML=" tebrikler Girdiginiz Numara gecerli bir TC numarasidir";
    
    } else 
    // return false;
    
    text.innerHTML="Girdiginiz Numara gecerli bir TC numarasi degildir";
}
console.log(checkTcNo());
let checkButton=document.getElementsByTagName("input")[1];
checkButton.addEventListener("click", checkTcNo);
console.log(checkButton);
console.log(text);
// text.innerHTML=checkTcNo();