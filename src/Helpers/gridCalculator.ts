import isNonEmptyArray from "./badDataChecker";

const getGridColumnsFormula = (results2D: string[][]): string => {
  if (!isNonEmptyArray(results2D) || !isNonEmptyArray(results2D[0])) {
    return "";
  }

  return `repeat( ${results2D[0].length}, minmax(min-content, max-content) )`;
};

export default getGridColumnsFormula;