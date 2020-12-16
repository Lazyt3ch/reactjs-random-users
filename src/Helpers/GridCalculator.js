import isBadData from "./BadDataChecker.js";

// Reserve some horizontal space to prevent overflow
const maxTotalWidth = 90; 

const getColumnWidths = results => {
  if (isBadData(results)) {
    return [];
  }

  let columnWidths = new Array(results[0].length).fill(0);

  results.forEach( rowArr => {
    rowArr.forEach( (cellStr, cellIdx) => {
      columnWidths[cellIdx] = Math.max(columnWidths[cellIdx], cellStr.length);
    });
  });

  columnWidths.forEach( (w, idx, arr) => 
    arr[idx] = Math.max(1, Math.sqrt(w)) );
  
  const sumOfWidths = columnWidths.reduce( (acc, w) => acc + w, 0 );
  columnWidths.forEach( (w, idx, arr) => 
    arr[idx] = Math.max(1, Math.floor(maxTotalWidth * w / sumOfWidths)) );

  return columnWidths;
};

const getGridColumnsFormula = (results2D, validProperties) => {
  if (isBadData(results2D, validProperties)) {
    return "";
  }

  let columnWidths;

  try {
    columnWidths = getColumnWidths(results2D);
  } catch (err) {
    return "";
  }

  if (isBadData(columnWidths)) {
    return "";
  }

  const gridColumnsFormula = columnWidths.map( (w, idx) => 
    `minmax(${validProperties[idx].length}rem, ${w}%)` )
    .join(" ");
  return gridColumnsFormula;
};

export default getGridColumnsFormula;