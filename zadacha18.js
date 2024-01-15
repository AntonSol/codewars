// https://www.codewars.com/kata/541c8630095125aba6000c00/train/javascript
function digitalRoot(n) {
  let numStr=n.toString()
  let sum=0;
  for (let digit of numStr){
	sum+=parseInt(digit)
  }
  if (sum>=10){
	return digitalRoot(sum)
  }else {
	return sum
  }

}
digitalRoot(942)