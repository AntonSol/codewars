function stray(numbers) {
  let x=  numbers.filter((el, i, arr) => arr.indexOf(el) === arr.lastIndexOf(el))
console.log(x)
  }
  stray([1, 1, 2])