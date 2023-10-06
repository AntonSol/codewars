// https://www.codewars.com/kata/54ba84be607a92aa900000f1/solutions/javascript?filter=me&sort=best_practice&invalids=false
function isIsogram(str){
    let mass =str.toLowerCase().split('')
    const findDuplicates = mass => mass.filter((item, index) => mass.indexOf(item) !== index)
    const duplicates = findDuplicates(mass);
    if (duplicates.length>0){
        return false
    }else{
        return true
    }
    }