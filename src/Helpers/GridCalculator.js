import isBadData from "./BadDataChecker.js";

// Reserve some horizontal space to prevent overflow
const maxTotalWidth = 90; 

const getColumnWidths = results => {
  if (isBadData(results)) {
    return [];
  }
  console.log("Grid Calculator: results =", results);
  console.log("Grid Calculator: results.length =", results.length);
  console.log("Grid Calculator: results[0].length =", results[0].length);

  let columnWidths = new Array(results[0].length).fill(0);
  console.log("Grid Calculator: columnWidths =", columnWidths);

  results.forEach( rowArr => {
    console.log("Grid Calculator: rowArr =", rowArr);
    rowArr.forEach( (cellStr, cellIdx) => {
      console.log("Grid Calculator: cellStr, cellIdx =", cellStr, cellIdx);
      console.log("Grid Calculator: columnWidths[cellIdx] =", columnWidths[cellIdx]);
      columnWidths[cellIdx] = Math.max(columnWidths[cellIdx], cellStr.length);
    });
  });

  columnWidths.forEach( (w, idx, arr) => 
    arr[idx] = Math.max(1, Math.sqrt(w)) );
  console.log("Grid Calculator: columnWidths =", columnWidths);
  
  const sumOfWidths = columnWidths.reduce( (acc, w) => acc + w, 0 );
  console.log("Grid Calculator: sumOfWidths =", sumOfWidths);
  columnWidths.forEach( (w, idx, arr) => 
    arr[idx] = Math.max(1, Math.floor(maxTotalWidth * w / sumOfWidths)) );
  console.log("Grid Calculator: columnWidths =", columnWidths);

  return columnWidths;
};

const getGridColumnsFormula = (results2D, validProperties) => {
  console.log("Grid Calculator: getGridColumnsFormula: validProperties =", validProperties);
  console.log("Grid Calculator: getGridColumnsFormula: validProperties.length =", validProperties.length);

  if (isBadData(results2D, validProperties)) {
    return "";
  }

  let columnWidths;

  try {
    columnWidths = getColumnWidths(results2D);
    console.log("Grid Calculator: getGridColumnsFormula: columnWidths =", columnWidths);
  } catch (err) {
    console.log("Grid Calculator: getGridColumnsFormula: ERR");
    return "";
  }

  if (isBadData(columnWidths)) {
    return "";
  }

  // const gridColumnsFormula = columnWidths.map( (w, idx) => 
  //   `minmax(${validProperties[idx].length}rem, ${w}%)` )
  //   .join(" ");

  const formulaArr = columnWidths.map( (w, idx) => {
    const property = validProperties[idx];
    const len = property.length;
    console.log("w, idx, property, len =", w, idx, property, len);
    return `minmax(${len}rem, ${w}%)`; 
  });

  console.log("formulaArr =", formulaArr);

  const gridColumnsFormula = formulaArr.join(" ");  

  console.log("Grid Calculator: getGridColumnsFormula: gridColumnsFormula =", gridColumnsFormula);

  return gridColumnsFormula;
};

export default getGridColumnsFormula;