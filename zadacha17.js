// https://www.codewars.com/kata/55c45be3b2079eccff00010f/train/javascript
function order(words){
let nomera=[0,1,2,3,4,5,6,7,8,9]
let slova=words.split(' ')
let itog=new Array (slova.length)
for (let i=0;i<slova.length;i++){
  for(let k=0;k<slova[i].length;k++){
    if (nomera.includes(parseInt(slova[i][k]))){
      itog[parseInt(slova[i][k])-1]=slova[i]
      break
    }
  }
}
console.log(itog.join(' '))
}
order ('')