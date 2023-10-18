// https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec/train/javascript
function persistence(num) {

if(num<10){
  return 0
}
let arrayNumber=(''+num).split('').map(Number)
let x=0
for(;arrayNumber.length>1;){
peremennya=arrayNumber.reduce((acc, rec)=>acc*rec)
arrayNumber=(''+peremennya).split('').map(Number);x++}

console.log(x)
}


persistence(39)