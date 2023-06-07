const sumAll = function(start, end) {
    if(start<0 || end <0) return "ERROR";
    if(typeof start !='number' || typeof end != "number") return "ERROR";
const n1 = (start *(start+1))/2;
const n2 = (end *(end+1))/2;
smallest = start<end?start:end;
return Math.abs(n2 -n1)+smallest;
};

// Do not edit below this line
module.exports = sumAll;
