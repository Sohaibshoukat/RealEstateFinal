import React from "react";

function convertUnits(inputValue, inputUnit) {
  // Define conversion factors
  const marlaToSqft = 272.25;
  const marlaToSquareYards = 30.25;
  const marlaToKanal = 0.0625;

  const sqftToMarla = 1 / marlaToSqft;
  const sqftToSquareYards = 1 / 9;
  const sqftToKanal = sqftToMarla * marlaToKanal;

  const squareYardsToMarla = 1 / marlaToSquareYards;
  const squareYardsToSqft = 9;
  const squareYardsToKanal = squareYardsToMarla * marlaToKanal;

  const kanalToMarla = 1 / marlaToKanal;
  const kanalToSqft = kanalToMarla * marlaToSqft;
  const kanalToSquareYards = kanalToMarla * marlaToSquareYards;

  let result = [];

  switch (inputUnit) {
    case "Marla":
      result.push(inputValue);
      result.push((inputValue * marlaToSqft).toFixed(2));
      result.push((inputValue * marlaToSquareYards).toFixed(2));
      result.push((inputValue * marlaToKanal).toFixed(2));
      break;
    case "sqft":
      result.push((inputValue * sqftToMarla).toFixed(2));
      result.push("");
      result.push((inputValue * sqftToSquareYards).toFixed(2));
      result.push((inputValue * sqftToKanal).toFixed(2));
      break;
    case "Square Yards":
      result.push((inputValue * squareYardsToMarla).toFixed(2));
      result.push((inputValue * squareYardsToSqft).toFixed(2));
      result.push("");
      result.push((inputValue * squareYardsToKanal).toFixed(2));
      break;
    case "Kanal":
      result.push((inputValue * kanalToMarla).toFixed(2));
      result.push((inputValue * kanalToSqft).toFixed(2));
      result.push((inputValue * kanalToSquareYards).toFixed(2));
      result.push("");
      break;
    default:
      return result;
  }

  return result;
}

function UnitConverter({ value, inputUnit }) {
  const result = convertUnits(parseFloat(value), inputUnit);

  return result;
}

export default UnitConverter;
