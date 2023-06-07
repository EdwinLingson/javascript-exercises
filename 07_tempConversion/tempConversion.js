const convertToCelsius = function(f) {
  c = (f-32) *5/9;
  return Math.round(c * 10) / 10;
};

const convertToFahrenheit = function(c) {
  f = 9/5*(c) +32;
  return Math.round(f * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
