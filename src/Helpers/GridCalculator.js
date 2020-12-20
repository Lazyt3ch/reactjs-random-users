import isBadData from "./BadDataChecker.js";

// Reserve some horizontal space to prevent overflow
const maxTotalWidth = 90; 

const getColumnWidths = results => {
  if (isBadData(results)) {
    return [];
  }

  // let columnWidths = new Array(results[0].length).fill(0);

  // Let 1% be the minimum allowed column width
  let columnWidths = new Array(results[0].length).fill(1); 

  results.forEach( rowArr => {
    rowArr.forEach( (cellStr, cellIdx) => {
      let columnWidth = columnWidths[cellIdx] || 1;
      let cellStrLen = typeof cellStr === "string" ? cellStr.length : 1;
      // columnWidths[cellIdx] = Math.max(columnWidths[cellIdx], cellStr.length);
      columnWidths[cellIdx] = Math.max(columnWidth, cellStrLen);
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

  // const gridColumnsFormula = columnWidths.map( (w, idx) => 
  //   `minmax(${validProperties[idx].length}rem, ${w}%)` )
  //   .join(" ");

  const gridColumnsFormulaArr = columnWidths.map( (w, idx) => {
    const property = validProperties[idx];
    if (property === undefined) {
      console.log("undefined property detected!");
      console.log("columnWidths =", columnWidths);
      console.log("validProperties =", validProperties);
      console.log("w =", w);
      console.log("idx =", idx);
    }
    const minLen = (property === undefined || typeof property !== "string")
      ? 0.5 // Arbitrary value
      : property.length;

    return `minmax(${minLen}rem, ${w}%)`;
  });

  const gridColumnsFormula = gridColumnsFormulaArr.join(" ");

  return gridColumnsFormula;
};

export default getGridColumnsFormula;