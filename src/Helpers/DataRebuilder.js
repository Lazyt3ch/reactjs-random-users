const removeTrailingCommaSpace = str => {
  return str.endsWith(", ") ? str.slice(0, -2) : str;
};

const addTrailingCommaSpace = str => {
  return str.endsWith(", ") ? str : `${str}, `;
};

const getRebuiltData = userObj => {
  console.log("userObj =", userObj);
  const builtObj = {};
  let builtStr = "";

  if (typeof userObj !== 'object') {
    return builtObj;
  }

  const extractData = (currentObj, level=1) => {
      let hitBottom = false;

    Object.entries(currentObj).forEach( ([key, value]) => {
      if (typeof value === 'object') {
        builtStr = `${builtStr.length ? addTrailingCommaSpace(builtStr) : ""}${key}: (`;
        extractData(value, level + 1);
      } else {
        builtStr = `${builtStr}${key}: ${value}, `;
        hitBottom = true;
      }
    });

    if (hitBottom) {
      if (level > 1) {
        builtStr = `${removeTrailingCommaSpace(builtStr)}${")".repeat(level - 1)}, `;
      }
    }
    
    return builtStr;
  }

  Object.entries(userObj).forEach( ([key, value]) => {
    builtObj[key] = typeof value === 'object' 
      ? removeTrailingCommaSpace(extractData(value))
      : value;
  });
  
  console.log("builtObj =", builtObj);

  return builtObj;
}

const buildResults = results => {
  const rebuiltResults = results.map( userObj => getRebuiltData(userObj) );
  return rebuiltResults;
};

export default buildResults;