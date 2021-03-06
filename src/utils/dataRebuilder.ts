interface DeepObj {
  [key: string]: string | DeepObj;
}

interface FlatObj {
  [key: string]: string;
}

const getRebuiltData = (userObj: DeepObj): FlatObj => {
  // Using brackets instead of parentheses as subproperty grouping characters,
  // because parentheses sometimes are present in retrieved users data

  const removeTrailingCommaSpace = (str: string): string => {
    return str.endsWith(", ") ? str.slice(0, -2) : str;
  };
  
  const addTrailingCommaSpace = (str: string): string => {
    return str.endsWith(", ") ? str : `${str}, `;
  };
  
  let builtStr: string;

  if (userObj === null) {
    return {};
  }

  const extractData = (currentObj: DeepObj, level=1): string => {
    let hitBottom = false;

    Object.entries(currentObj).forEach( ([key, value]) => {
      if (value === null) {
        // A null will be replaced with with <null> 
        builtStr = `${builtStr}${key}: ${value ? value: '<null>'}, `;
        hitBottom = true;
      } else if (typeof value === "string") {
        // An empty string will be replaced with <"">
        builtStr = `${builtStr}${key}: ${value ? value: '<"">'}, `;
        hitBottom = true;
      } else if (value !== null && typeof value === 'object') {
        builtStr = `${builtStr.length ? addTrailingCommaSpace(builtStr) : ""}${key}: [`;
        extractData(value, level + 1);
      } 
    });

    if (hitBottom) {
      if (level > 1) {
        builtStr = `${removeTrailingCommaSpace(builtStr)}${"]".repeat(level - 1)}, `;
      }
    }
    
    return builtStr;
  }

  const builtObj: FlatObj = {};

  Object.entries(userObj).forEach( ([key, value]) => {
    builtStr = "";

    builtObj[key] = (typeof value === 'string')
      ? value
      : removeTrailingCommaSpace(extractData(value));
  });
  
  return builtObj;
}

const getRebuiltResults = (results: DeepObj[], validProperties: string[]): string[][] => {
  const rebuiltResults = results.map( userObj => getRebuiltData(userObj) );

  // Row 0 contains property names (it's like a table header)
  const results2D = [validProperties]; 

  let rowArr: string[];
  
  for (const rowObj of rebuiltResults) {
    rowArr = [];

    for (const p of validProperties) {
      if (rowObj !== undefined && rowObj !== null) {
        rowArr.push(rowObj[p]);
      }
    }

    results2D.push(rowArr);
  }

  return results2D;
};

export default getRebuiltResults;
export type {DeepObj};
