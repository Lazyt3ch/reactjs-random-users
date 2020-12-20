import isBadData from "./BadDataChecker.js";

// Reserve some horizontal space to prevent overflow
const maxTotalWidth = 90; 

const getColumnWidths = results => {
  if (isBadData(results)) {
    return [];
  }

  // let columnWidths = new Array(results[0].length).fill(0);

  // Let 1% be the minimum allowed column width
  let absWidths = new Array(results[0].length).fill(1); 

  results.forEach( rowArr => {
    rowArr.forEach( (cellStr, cellIdx) => {
      let width = absWidths[cellIdx] || 1;
      let cellStrLen = typeof cellStr === "string" ? cellStr.length : 1;
      // columnWidths[cellIdx] = Math.max(columnWidths[cellIdx], cellStr.length);
      absWidths[cellIdx] = Math.max(width, cellStrLen);
    });
  });

  // const relWidths = new Array(results[0].length).fill(0)
  //   .map( x => [] );

  // absWidths.forEach( (w, idx) => 
  //   relWidths[idx] = Math.max(1, Math.sqrt(w)) );

  const relWidths = absWidths.map( (w, idx) => Math.max(1, Math.sqrt(w)) );
  
  // const sumOfWidths = columnWidths.reduce( (acc, w) => acc + w, 0 );
  const sumOfWidths = relWidths.reduce( (acc, w) => acc + w, 0 );

  // columnWidths.forEach( (w, idx, arr) => 
  //   arr[idx] = Math.max(1, Math.floor(maxTotalWidth * w / sumOfWidths)) );

  relWidths.forEach( (w, idx, arr) => 
    arr[idx] = Math.max(1, Math.floor(maxTotalWidth * w / sumOfWidths)) );

  // const columnWidths = {
  //   abs: absWidths,
  //   rel: relWidths,
  // }

  const columnWidths = absWidths.map( (absWidth, idx) => 
    ({abs: absWidth, rel: relWidths[idx]})
  );

  return columnWidths;
};

// const getGridColumnsFormula = (results2D, validProperties) => {
const getGridColumnsFormula = (results2D) => {
  // if (isBadData(results2D, validProperties)) {
  if (isBadData(results2D)) {
      return "";
  }

  let columnWidths;

  try {
    columnWidths = getColumnWidths(results2D);
  } catch (err) {
    return "";
  }

  // if (isBadData(columnWidths)) {
  //   return "";
  // }

  // const gridColumnsFormula = columnWidths.map( (w, idx) => 
  //   `minmax(${validProperties[idx].length}rem, ${w}%)` )
  //   .join(" ");

  const gridColumnsFormulaArr = columnWidths.map( (width, idx) => {
    console.log("columnWidths =", columnWidths);
    // const property = validProperties[idx];
    // if (property === undefined) {
    //   console.log("undefined property detected!");
    //   console.log("columnWidths =", columnWidths);
    //   console.log("validProperties =", validProperties);
    //   console.log("w =", w);
    //   console.log("idx =", idx);
    // }
    // const minLen = (property === undefined || typeof property !== "string")
    //   ? 0.5 // Arbitrary value
    //   : property.length;

    // return `minmax(${minLen}rem, ${w}%)`;

    // return `minmax(1rem, ${w}%)`;  // The min width is arbitrary
    // return `minmax(${w}%, ${columnWidths[idx] * 0.25}rem)`;  // The min width is arbitrary
    // return `minmax(0, ${w}%)`;  // The min width is arbitrary
    const absWidth = width["abs"];
    const relWidth = width["rel"];
    console.log("absWidth, relWidth =", absWidth, relWidth);
    // return `minmax(${absWidth}rem, ${relWidth}%)`;
    // return `minmax(${relWidth}%, ${absWidth * 0.3}rem)`;
    // return `minmax(${relWidth}%, max-content)`;
    // return `minmax(10%, max-content)`;

    // if (idx < columnWidths.length - 1) {
    //   return `minmax(${relWidth}%, max-content)`;
    //   // return `minmax(${relWidth}vw, max-content)`;
    // } else {
    //   // return `minmax(${relWidth}%, 100%)`;
    //   return `1fr`;
    // }

    return `minmax(${relWidth}%, max-content)`;
    

  });

  const gridColumnsFormula = gridColumnsFormulaArr.join(" ");

  
  return gridColumnsFormula;
};

export default getGridColumnsFormula;