const removeTrailingCommaSpace = str => {
  return str.endsWith(", ") ? str.slice(0, -2) : str;
};

const addTrailingCommaSpace = str => {
  return str.endsWith(", ") ? str : `${str}, `;
};

const getRebuiltData = userObj => {
  console.log("userObj =", userObj);
  // let builtArr = [];
  const builtObj = {};
  let builtStr = "";

  if (typeof userObj !== 'object') {
    return builtObj;
  }

  // const extractData = (currentObj, level=1, subArr=[]) => {
  // const extractData = (currentObj, level=1, builtStr="") => {
  const extractData = (currentObj, level=1) => {
      let hitBottom = false;

    Object.entries(currentObj).forEach( ([key, value]) => {
      console.log("key, value =", key, value)

      if (typeof value === 'object') {
        // subArr.push( `${key}: (` );
        // extractData(value, level + 1, subArr);
        builtStr = `${builtStr.length ? addTrailingCommaSpace(builtStr) : ""}${key}: (`;
        console.log("builtStr =", builtStr)
        // extractData(value, level + 1, `${builtStr.length ? builtStr + ", " : ""}${key}: (` );
        // extractData(value, level + 1, builtStr);
        extractData(value, level + 1);
      } else {
        // subArr.push( `${key}: ${value}` );
        builtStr = `${builtStr}${key}: ${value}, `;
        console.log("builtStr =", builtStr)
        hitBottom = true;
      }
    });

    if (hitBottom) {
      if (level > 1) {
        // subArr.push( ")".repeat(level - 1) );
        builtStr = `${removeTrailingCommaSpace(builtStr)}${")".repeat(level - 1)}, `;
      }
    }
    
    // return subArr;
    return builtStr;
  }

  Object.entries(userObj).forEach( ([key, value]) => {
    builtObj[key] = typeof value === 'object' 
      ? removeTrailingCommaSpace(extractData(value))
      : value;
  });
  
  // extractData(userObj);
  console.log("builtObj =", builtObj);

  // for (const part of builtObj)


  return builtObj;
}

const buildResults = results => {
  const rebuiltResults = results.map( userObj => getRebuiltData(userObj) );
  return rebuiltResults;
};

export default buildResults;