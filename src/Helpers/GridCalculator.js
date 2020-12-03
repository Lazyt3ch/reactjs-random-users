const getColumnWidths = results => {
  let columnWidths = new Array(results[0].length).fill(0);

  results.forEach( rowArr => {
    rowArr.forEach( (cellStr, cellIdx) => {
      columnWidths[cellIdx] = Math.max(columnWidths[cellIdx], cellStr.length);
    });
  });

  console.log("columnWidths =", columnWidths);

  columnWidths.forEach( (w, idx, arr) => 
    arr[idx] = Math.max(1, Math.log(w)) );
  
  const sumOfWidths = columnWidths.reduce( (acc, w) => acc + w, 0 );
  columnWidths.forEach( (w, idx, arr) => 
    arr[idx] = Math.max(1, Math.floor(100 * w / sumOfWidths)) );

  console.log("columnWidths =", columnWidths);
  return columnWidths;
}

export default getColumnWidths;