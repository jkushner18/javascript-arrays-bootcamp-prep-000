chocolateBars =["snickers", "hundred grand","kitkat", "skittles"]

function addElementtoBeginningofArray(arr,ele){
  
arr.unshift(ele)

return arr
  
}

function destructivelyAddElementtoBeginningofArray(arr, ele){
  
var yup = [ele, ...arr];

return yup
  
}