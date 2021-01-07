import isBadData from "./badDataChecker";

const getGridColumnsFormula = (results2D: string[][]): string => {
  if (isBadData(results2D) || isBadData(results2D[0])) {
    return "";
  }

  return `repeat( ${results2D[0].length}, minmax(min-content, max-content) )`;
};

export default getGridColumnsFormula;