// https://www.codewars.com/kata/5264d2b162488dc400000001/train/javascript
function spinWords(string) {
  let result = [];
  let massString = string.split(" ");
  for (let i = 0; i < massString.length; i++) {
    if (massString[i].length >= 5) {
      for (let k = massString[i].length - 1; k >= 0; k--) {
        let reversed = "";
        reversed += massString[i][k];
        result.push(reversed);
        console.log(reversed);
      }
    } else {
      result.push(massString[i]);
    }
  }
  console.log(result);
}
spinWords("Hey fellow warriors");
