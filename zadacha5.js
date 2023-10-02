// https://www.codewars.com/kata/539ee3b6757843632d00026b/solutions/javascript?filter=me&sort=best_practice&invalids=false
var capitals = function (word) {
  let result=[]
  let wordCopi=word.toUpperCase()
  
  let i=0
  let j=0
  for (let k=0;k<word.length;k++) {
        if (word[i] === wordCopi[j]) {
          result.push(i)}i++;j++
      }
    
  
  
  
  
  return result;
  
  };