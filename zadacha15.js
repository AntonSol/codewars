// https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec/train/javascript
function persistence(num) {
let peremennya=0
  let arrayNumber=(''+num).split('').map(Number)
for (let i=0;i<arrayNumber.length;i++){
peremennya=arrayNumber[i]*arrayNumber[i+1]
}
console.log(peremennya)
}


persistence(999)