chocolateBars =["snickers", "hundred grand","kitkat", "skittles"]

function addElementToBeginningOfArray(array,element){
  
var yup = [element, ...array];

return yup
  
}

function destructivelyAddElementToBeginningOfArray(array, element){
  
array.unshift(element)

return array


}