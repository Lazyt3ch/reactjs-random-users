const removeTrailingCommaSpace = str => {
  return str.endsWith(", ") ? str.slice(0, -2) : str;
};

const addTrailingCommaSpace = str => {
  return str.endsWith(", ") ? str : `${str}, `;
};

const getBriefItem = item => {
  // Simply removes any text fragments like "name: "
  const briefItem = item.replace(/[a-z]+:\s/g, "");
  return briefItem;
};

const getBriefResults = results2D => {
  const briefResults = [ results2D[0] ]; // Row 0 contains property names, preserving them as is
  let briefRowArr;

  results2D.forEach( (rowArr, idx) => {
    if (idx > 0) {
      briefRowArr = [];

      rowArr.forEach( item => {
        briefRowArr.push(getBriefItem(item));
      });

      briefResults.push( briefRowArr.slice() ); // Always push a copy of the array!
    }
  });

  return briefResults;
};

const getRebuiltData = (userObj, addTags) => {
  // Now using brackets instead of parentheses as subproperty grouping characters,
  // because parentheses sometimes occur in retrieved users data
  const builtObj = {};
  let builtStr;

  if (typeof userObj !== 'object') {
    return builtObj;
  }

  const extractData = (currentObj, level=1) => {
    let hitBottom = false;

    Object.entries(currentObj).forEach( ([key, value]) => {
      if (value !== null && typeof value === 'object') {
        builtStr = `${builtStr.length ? addTrailingCommaSpace(builtStr) : ""}${key}: [`;
        extractData(value, level + 1);
      } else {
        // <undefined> will replace an empry string, and <null> will replace a null value
        builtStr = `${builtStr}${key.length ? key : "<undefined>"}: ${value ? value: "<null>"}, `;
        hitBottom = true;
      }
    });

    if (hitBottom) {
      if (level > 1) {
        builtStr = `${removeTrailingCommaSpace(builtStr)}${"]".repeat(level - 1)}, `;
      }
    }
    
    return builtStr;
  }

  Object.entries(userObj).forEach( ([key, value]) => {
    builtStr = "";
    builtObj[key] = typeof value === 'object' 
      ? removeTrailingCommaSpace(extractData(value))
      : value;
  });
  
  return builtObj;
}

const getRebuiltResults = (results, validProperties) => {
  const rebuiltResults = results.map( userObj => getRebuiltData(userObj) );

  // Row 0 contains property names (it's like a table header)
  const results2D = [validProperties]; 

  let rowArr;
  
  for (const rowObj of rebuiltResults) {
    rowArr = [];

    for (const p of validProperties) {
      rowArr.push(rowObj[p]);
    }

    results2D.push(rowArr);
  }

  return results2D;
};

export default getRebuiltResults;
export {getBriefResults};