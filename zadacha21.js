// https://www.codewars.com/kata/5715eaedb436cf5606000381/train/javascript
function positiveSum(arr) {
  if (arr.length === 0) {
    return 0;
  }

  let x = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      x = x + arr[i];
    }
  } 
  return x;
}
positiveSum([1,-4,7,12])