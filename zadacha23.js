// https://www.codewars.com/kata/582887f7d04efdaae3000090
function findSenior(list) {
    if (list.length === 1) return;
  
    list.sort((a, b) => b.age - a.age);
  
    let oldMen = list[0];
    let resultArray = [oldMen];
  
    for (let index = 1; index < list.length; index++) {
      if (oldMen.age === list[index].age) {
        resultArray.push(list[index]);
      } else return resultArray;
    }
  }