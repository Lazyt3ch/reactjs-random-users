const removeTrailingCommaSpace = str => {
  return str.endsWith(", ") ? str.slice(0, -2) : str;
};

const addTrailingCommaSpace = str => {
  return str.endsWith(", ") ? str : `${str}, `;
};

// const getRebuiltData = (userObj, addTags) => {
const getRebuiltData = (userObj, addTags) => {
  // console.log("userObj =", userObj);
  const builtObj = {};
  let builtStr;

  if (typeof userObj !== 'object') {
    return builtObj;
  }

  // const tagger = (str, tag) => {
  //   return tag.length ? `<${tag}>${str}</${tag}>` : str;
  //   // return tag.length ? `&lt;${tag}&gt;${str}&lt;/${tag}&gt;` : str;
  // }

  // const tagger = str => {
  //   return <span>{str}</span>;
  // }  

  const extractData = (currentObj, level=1) => {
    let hitBottom = false;

    Object.entries(currentObj).forEach( ([key, value]) => {
      if (value !== null && typeof value === 'object') {
        builtStr = `${builtStr.length ? addTrailingCommaSpace(builtStr) : ""}${key}: (`;
        // builtStr = `${builtStr.length ? addTrailingCommaSpace(builtStr) : ""}
        //   + ${tagger(key)}: (`;
        extractData(value, level + 1);
      } else {
        // <undefined> will replace an empry string, and <null> will replace a null value
        builtStr = `${builtStr}${key.length ? key : "<undefined>"}: ${value ? value: "<null>"}, `;
        // builtStr += tagger((key.length ? key : "<undefined>"))
        //   + `: ${value ? value: "<null>"}, `;
        hitBottom = true;
      }
    });

    if (hitBottom) {
      if (level > 1) {
        builtStr = `${removeTrailingCommaSpace(builtStr)}${")".repeat(level - 1)}, `;
      }
    }
    
    return builtStr;
    // return <div>builtStr</div>;
  }

  Object.entries(userObj).forEach( ([key, value]) => {
    builtStr = "";
    builtObj[key] = typeof value === 'object' 
      ? removeTrailingCommaSpace(extractData(value))
      : value;
  });
  
  console.log("builtObj =", builtObj);
  return builtObj;
}

// const buildResults = (results, validProperties, addTags=false) => {
const buildResults = (results, validProperties) => {
    const rebuiltResults = results.map( userObj => getRebuiltData(userObj) );
  // return rebuiltResults;
  const results2D = [validProperties]; // Row 0 contains property headers
  console.log("results2D =", results2D);

  let rowArr;
  
  for (const rowObj of rebuiltResults) {
    rowArr = [];
    for (const p of validProperties) {
      rowArr.push(rowObj[p]);
    }
    results2D.push(rowArr);
  }

  console.log("results2D =", results2D);
  return results2D;
};

export default buildResults;