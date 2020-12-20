import isBadData from "./BadDataChecker.js";

const getGridColumnsFormula = (results2D) => {
  if (isBadData(results2D) || isBadData(results2D[0])) {
    return "";
  }

  return `repeat( ${results2D[0].length}, minmax(min-content, max-content) )`;
};

export default getGridColumnsFormula;