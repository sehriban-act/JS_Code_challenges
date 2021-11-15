
function checkTcNo(){
  var num = document.getElementById("tcNo").value;//34444185856;
var myArr = String(num).split("").map((num)=>{
  return Number(num);
});
  
console.log(myArr);
var every_odd = (arr, odd) => arr.filter((e, i) => i % odd === odd - 1);//cift siradakini
console.log(every_odd(myArr, 2));
const every_even = (arr, even) => arr.filter((e, i) => i % even === even - 2);//tek siradakini
console.log(every_even(myArr, 2));
var sum = 0; 
for (let i = 0; i < every_odd(myArr, 2).length-1; i++) {
    sum += every_odd(myArr, 2)[i];
}
console.log(sum);
var sum1=0;
for (let i = 0; i < every_even(myArr, 2).length-1; i++) {
    sum1 += every_even(myArr, 2)[i];
}
console.log(sum1);
let tenth_num =((sum1*7)-sum)%10;
console.log(tenth_num);
let eleventh_num=(sum1+sum+tenth_num)%10;
console.log(eleventh_num);
let text=document.querySelector("#demo");
    if (myArr[0]!==0 && myArr.length===11 && tenth_num && eleventh_num  ) {
    //    return true;
    text.innerHTML=" tebrikler Girdiginiz Numara gecerli bir TC numarasidir";
    
    } else {
    // return false;
    
    text.innerHTML="Girdiginiz Numara gecerli bir TC numarasi degildir";

}
}

let checkButton=document.getElementsByTagName("input")[1];
checkButton.addEventListener("click", checkTcNo);
console.log(checkButton);
