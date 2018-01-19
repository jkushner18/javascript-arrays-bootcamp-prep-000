choclateBars =["snickers", "hundred grand","kitkat", "skittles"]

function addElementtoBeginningofArray(arr,ele){
  
arr.unshift(ele)

return arr
  
}

function destructivelyAddElementtoBeginningofArray(arr, ele){
  
new = [ele,...arr];

return new
  
}