const getUserDataString = userObj => {
  // const rebuiltArr = [];
  let builtStr = "";

  const buildString = currentObj => {
    let inner;
    Object.keys(currentObj).forEach( key => {
      inner = currentObj[key];
      if (typeof inner === 'object') {
        buildString(inner);
      } else {
        builtStr += ", " + inner;
      }
    });
  }
  
  buildString(userObj);
  return builtStr;
}

const buildResults = results => {
  const rebuiltResults = results.map( userObj => getUserDataString(userObj) );
  return rebuiltResults;
};

export default buildResults;