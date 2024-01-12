// https://www.codewars.com/kata/541c8630095125aba6000c00/train/javascript
function digitalRoot(n) {
  let res = []
	let base = 10
	let currNum = Math.abs(n)
	do {
		let baseShiftedNum = Math.floor(currNum / base)
		let diff = currNum - baseShiftedNum * base
		res.unshift(diff)
		currNum = baseShiftedNum
	} while (currNum > 0)
	console.log(res)
if(res.length>1){
  
}

}
digitalRoot(942)