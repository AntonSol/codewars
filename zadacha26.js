// https://www.codewars.com/kata/5264d2b162488dc400000001/train/javascript
function spinWords(string) {
  array = string.split(" ");
  complid = [];
  for (i = 0; i < array.length; i++) {
    if (array[i].length < 5) {
      complid.push(array[i]);
    } else {
      complid.push(array[i].split("").reverse().join(""));
    }
  }
  return complid.join(" ");
}
spinWords("Hey fellow warriors");
