const converters = {
    toCelsius(tempF) {
      return ((tempF - 32) * 5) / 9;
    },
    toFahrenheit(tempC) {
      return ((tempC * 9 / 5) + 32);
    },
  };
  
  function tryConvert(temperature, conversion) {
    const input = parseFloat(temperature);
  
    if (Number.isNaN(input)) {
      return "";
    }
// Bracket notation to dynamically access a key based
// on the value of conversion
    
    const output = converters[conversion](input);
    const rounded = Math.round(output * 1000) / 1000;
  
    return rounded.toString();
  }

  export default tryConvert;