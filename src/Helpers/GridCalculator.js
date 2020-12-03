const getColumnWidths = results => {
  let columnWidths = new Array(results[0].length).fill(0);

  results.forEach( rowArr => {
    rowArr.forEach( (cellStr, cellIdx) => {
      columnWidths[cellIdx] = Math.max(columnWidths[cellIdx], cellStr.length);
    });
  });

  console.log("columnWidths =", columnWidths);
  return columnWidths;
}

export default getColumnWidths;