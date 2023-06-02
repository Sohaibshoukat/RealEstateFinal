import React from "react";

function convertCurrency(inputValue, inputCurrency) {
  // Define conversion rates
  const pkrToDirham = 0.023;  // Conversion rate from PKR to Dirham
  const pkrToRiyal = 0.025;   // Conversion rate from PKR to Riyal
  const pkrToUKDollar = 0.008;  // Conversion rate from PKR to UK Dollar
  const pkrToUSDollar = 0.01;   // Conversion rate from PKR to USA Dollar

  let result = [];

  switch (inputCurrency) {
    case "PKR":
      result.push(inputValue);
      result.push((inputValue * pkrToDirham).toFixed(2));
      result.push((inputValue * pkrToRiyal).toFixed(2));
      result.push((inputValue * pkrToUKDollar).toFixed(2));
      result.push((inputValue * pkrToUSDollar).toFixed(2));
      break;
    case "Dirham":
      result.push((inputValue / pkrToDirham).toFixed(2));
      result.push(inputValue);
      result.push((inputValue * (pkrToRiyal / pkrToDirham)).toFixed(2));
      result.push((inputValue * (pkrToUKDollar / pkrToDirham)).toFixed(2));
      result.push((inputValue * (pkrToUSDollar / pkrToDirham)).toFixed(2));
      break;
    case "Riyal":
      result.push((inputValue / pkrToRiyal).toFixed(2));
      result.push((inputValue * (pkrToDirham / pkrToRiyal)).toFixed(2));
      result.push(inputValue);
      result.push((inputValue * (pkrToUKDollar / pkrToRiyal)).toFixed(2));
      result.push((inputValue * (pkrToUSDollar / pkrToRiyal)).toFixed(2));
      break;
    case "UK Dollar":
      result.push((inputValue / pkrToUKDollar).toFixed(2));
      result.push((inputValue * (pkrToDirham / pkrToUKDollar)).toFixed(2));
      result.push((inputValue * (pkrToRiyal / pkrToUKDollar)).toFixed(2));
      result.push(inputValue);
      result.push((inputValue * (pkrToUSDollar / pkrToUKDollar)).toFixed(2));
      break;
    case "USA Dollar":
      result.push((inputValue / pkrToUSDollar).toFixed(2));
      result.push((inputValue * (pkrToDirham / pkrToUSDollar)).toFixed(2));
      result.push((inputValue * (pkrToRiyal / pkrToUSDollar)).toFixed(2));
      result.push((inputValue * (pkrToUKDollar / pkrToUSDollar)).toFixed(2));
      result.push(inputValue);
      break;
    default:
      return result;
  }

  return result;
}

function CurrencyConverter({ value, inputCurrency }) {
  const result = convertCurrency(parseFloat(value), inputCurrency); 

  console.log(result)
  return result;
}

export default CurrencyConverter;
