// Reserve some horizontal space to prevent overflow
const maxTotalWidth = 90; 

const getColumnWidths = results => {
  if (!results || !results.length) {
    return null;
  }

  let columnWidths = new Array(results[0].length).fill(0);

  results.forEach( rowArr => {
    rowArr.forEach( (cellStr, cellIdx) => {
      columnWidths[cellIdx] = Math.max(columnWidths[cellIdx], cellStr.length);
    });
  });

  // console.log("columnWidths =", columnWidths);

  columnWidths.forEach( (w, idx, arr) => 
    // arr[idx] = Math.max(1, Math.log(w)) );
    arr[idx] = Math.max(1, Math.sqrt(w)) );
  
  const sumOfWidths = columnWidths.reduce( (acc, w) => acc + w, 0 );
  columnWidths.forEach( (w, idx, arr) => 
    arr[idx] = Math.max(1, Math.floor(maxTotalWidth * w / sumOfWidths)) );

  // console.log("columnWidths =", columnWidths);
  return columnWidths;
};

const getGridColumnsFormula = (results2D, validProperties) => {
  if (!results2D || !results2D.length) {
    return "";
  }

  if (!validProperties || !validProperties.length) {
    return "";
  }

  let columnWidths;

  try {
    columnWidths = getColumnWidths(results2D);
  } catch (err) {
    return "";
  }

  if (!columnWidths || !columnWidths.length) {
    return "";
  }

  const gridColumnsFormula = columnWidths.map( (w, idx) => 
    `minmax(${validProperties[idx].length}rem, ${w}%)` )
    .join(" ");
  // console.log("gridColumnsFormula =", gridColumnsFormula);
  return gridColumnsFormula;
};

export default getGridColumnsFormula;