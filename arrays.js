chocolateBars =["snickers", "hundred grand","kitkat", "skittles"]

function addElementToBeginningOfArray(arr,ele){
  
arr.unshift(ele)

return arr
  
}

function destructivelyAddElementToBeginningOfArray(arr, ele){
  
var yup = [ele, ...arr];

return yup
  
}