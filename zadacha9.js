// https://www.codewars.com/kata/58712dfa5c538b6fc7000569/train/javascript
function countRedBeads(n) {
if (n===0 || n===1){
  console.log(0)
}
if(n===2){
  console.log(2)
}
console.log((n-1)*2)
}
countRedBeads(8)