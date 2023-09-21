//https://www.codewars.com/kata/59c5f4e9d751df43cf000035/train/javascript
function solve(s){
const glasnie=['a','e','i','o','u','y'] 
let schet=[]
for(let i=0;i<s.length;i++){
    for (let k=0;k<glasnie.length;k++){
        if (s[i]===glasnie[k]){
            schet.push(s[i])
        }
}
   }
   console.log(schet)
}
solve("aabeeee")