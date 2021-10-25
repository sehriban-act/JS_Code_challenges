const randomNumber=()=>Math.round(Math.random()*49);
const lotteryNumbers=()=>`${randomNumber()},${randomNumber()},${randomNumber()},${randomNumber()},${randomNumber()},${randomNumber()}`;
console.log(lotteryNumbers());
document.getElementsByTagName("p").innerHtml=lotteryNumbers();
            