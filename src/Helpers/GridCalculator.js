import isBadData from "./BadDataChecker.js";

// Reserve some horizontal space to prevent overflow
const maxTotalWidth = 90; 

const getColumnWidths = results => {
  if (isBadData(results)) {
    return [];
  }

  // Let 1% be the minimum allowed column width
  let absWidths = new Array(results[0].length).fill(1); 

  results.forEach( rowArr => {
    rowArr.forEach( (cellStr, cellIdx) => {
      let width = absWidths[cellIdx] || 1;
      let cellStrLen = typeof cellStr === "string" ? cellStr.length : 1;
      absWidths[cellIdx] = Math.max(width, cellStrLen);
    });
  });

  const relWidths = absWidths.map( (w, idx) => Math.max(1, Math.sqrt(w)) );
  
  const sumOfWidths = relWidths.reduce( (acc, w) => acc + w, 0 );

  relWidths.forEach( (w, idx, arr) => 
    arr[idx] = Math.max(1, Math.floor(maxTotalWidth * w / sumOfWidths)) );

  const columnWidths = absWidths.map( (absWidth, idx) => 
    ({abs: absWidth, rel: relWidths[idx]}) );

  return columnWidths;
};

const getGridColumnsFormula = (results2D) => {
  if (isBadData(results2D)) {
      return "";
  }

  let columnWidths;

  try {
    columnWidths = getColumnWidths(results2D);
  } catch (err) {
    return "";
  }

  const gridColumnsFormulaArr = columnWidths.map( (width, idx) => {
    // console.log("columnWidths =", columnWidths);
    // const absWidth = width["abs"];
    const relWidth = width["rel"];
    return `minmax(${relWidth}%, max-content)`;  
  });

  const gridColumnsFormula = gridColumnsFormulaArr.join(" ");  
  return gridColumnsFormula;
};

export default getGridColumnsFormula;