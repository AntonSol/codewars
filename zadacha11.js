// https://www.codewars.com/kata/523f5d21c841566fde000009/train/javascript
function arrayDiff(a, b) {
let mass=[]
  for(let i=0;i<b.length;i++){
  for(let k=0;k<a.length;k++){
    if (i!=b[k]){mass.push(a[k])}
  }
}
  console.log(mass)
}

arrayDiff([1,1,2,2,3,4],[1,3])