// https://www.codewars.com/kata/514b92a657cdc65150000006/train/javascript
function solution(number){
  if (number<=0){return 0}
    let summa=[]
  for (let k=3;k<number;k+=3){
    summa.push(k)
  } 
  for (let k=5;k<number;k+=5){
    summa.push(k)
  } 
  let summa2=[...new Set(summa)]
  let itog=0
  for (let k=0;k<summa2.length;k++){
    itog=itog+summa2[k]
  }
  return itog
  }