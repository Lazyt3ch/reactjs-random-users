

const getRebuiltData = userObj => {
  console.log("userObj =", userObj);
  // let builtArr = [];
  const builtObj = {};

  if (typeof userObj !== 'object') {
    return builtObj;
  }

  const extractData = (currentObj, level=0, subArr=[]) => {
    let hitBottom = false;

    Object.entries(currentObj).forEach( ([key, value]) => {
      if (typeof value === 'object') {
        subArr.push(`${key}: (`);
        // builtArr.push(`${key}`);
        extractData(value, level + 1);
      } else {
        // builtArr.push(`${key}: ${value} ${")".repeat(level)}`);
        subArr.push(`${key}: ${value}`);
        hitBottom = true;
      }
    });

    if (hitBottom) {
      // builtArr.push( ")" );
      subArr.push( ")".repeat(level) );
      return subArr;
    }
  }

  Object.entries(userObj).forEach( ([key, value]) => {
    builtObj[key] = typeof value === 'object' ? extractData(value) : value;
  });
  
  // extractData(userObj);
  console.log("builtObj =", builtObj);
  return builtObj;
}

const buildResults = results => {
  const rebuiltResults = results.map( userObj => getRebuiltData(userObj) );
  return rebuiltResults;
};

export default buildResults;