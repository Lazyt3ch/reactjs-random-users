const removeTrailingCommaSpace = str => {
  return str.endsWith(", ") ? str.slice(0, -2) : str;
};

const getRebuiltData = userObj => {
  console.log("userObj =", userObj);
  // let builtArr = [];
  const builtObj = {};
  // const builtStr = "";

  if (typeof userObj !== 'object') {
    return builtObj;
  }

  // const extractData = (currentObj, level=1, subArr=[]) => {
  const extractData = (currentObj, level=1, builtStr="") => {
      let hitBottom = false;

    Object.entries(currentObj).forEach( ([key, value]) => {
      // console.log("key, value =", key, value)

      if (typeof value === 'object') {
        // subArr.push( `${key}: (` );
        // extractData(value, level + 1, subArr);
        extractData(value, level + 1, `${builtStr.length ? builtStr + ", " : ""}${key}: (` );
      } else {
        // subArr.push( `${key}: ${value}` );
        builtStr += `${key}: ${value}, `;
        hitBottom = true;
      }
    });

    if (hitBottom) {
      if (level > 1) {
        // subArr.push( ")".repeat(level - 1) );
        builtStr = `${removeTrailingCommaSpace(builtStr)}${")".repeat(level - 1)}`;
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