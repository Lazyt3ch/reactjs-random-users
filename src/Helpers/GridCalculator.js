import isBadData from "./BadDataChecker.js";

const getGridColumnsFormula = (results2D) => {
  if (isBadData(results2D) || isBadData(results2D[0])) {
    return "";
  }

  return results2D[0]
    .map( _ => "minmax(min-content, max-content)" )
    .join(" ");
};

export default getGridColumnsFormula;