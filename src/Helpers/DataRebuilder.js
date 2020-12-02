const getUserDataString = userObj => {
  // const rebuiltArr = [];
  // let builtStr = "";
  let builtArr = [];

  const extractData = currentObj => {
    let inner;
    Object.keys(currentObj).forEach( key => {
      inner = currentObj[key];
      if (typeof inner === 'object') {
        extractData(inner);
      } else {
        // builtStr += ", " + inner;
        // builtStr += `, ${key}: ${inner}`;
        builtArr.push(`${key}: ${inner}`);
      }
    });
  }
  
  extractData(userObj);
  // return builtStr;
  return builtArr;
}

const buildResults = results => {
  const rebuiltResults = results.map( userObj => getUserDataString(userObj) );
  return rebuiltResults;
};

export default buildResults;