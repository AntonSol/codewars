// https://www.codewars.com/kata/5526fc09a1bbd946250002dc/train/javascript
function findOutlier(integers){
chet=[]
nechet=[]
  for (let k=0;k<integers.length;k++){
  if (Math.abs(integers[k])%2===0){
    chet.push(integers[k])
  }else nechet.push(integers[k])
}
if(chet.length>nechet.length){
  console.log(nechet)
} else console.log(chet)
}


findOutlier([176629776,-121360562,-155074508,12821086,-122702998,75486424,-145169944,-177560920,-83711796,-179266010,25506394,125949495,150338586,-7887778,129915728,-152207150,159693298,-12948104,-146901528,125558736,-78390278])