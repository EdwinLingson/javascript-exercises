const removeFromArray = function(array,...val) {
    val.forEach(element => 
        {const index = array.indexOf(element);
        if(index>-1)  array.splice(index,1);});
    
    return array;
};
// Do not edit below this line
module.exports = removeFromArray;
