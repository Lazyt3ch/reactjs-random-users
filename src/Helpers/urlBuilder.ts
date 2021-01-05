import fixProperties from "./propertiesFixer";
import fixNumResults from "./numResultsFixer";

const buildUrl = (numResults: number, properties: string[], isInclude=true): string => {
  const baseUrlSlash = "https://randomuser.me/api/";
  const urlParams = [];

  const numResultsToUse = fixNumResults(numResults);
  const numResultsSubstr = `results=${numResultsToUse}`;
  urlParams.push(numResultsSubstr);

  const propertiesToUse = fixProperties(properties);
  const propertiesSubstr = propertiesToUse.length
    ? `${isInclude ? "inc" : "exc"}=${propertiesToUse.join(",")}`
    : "";
  urlParams.push(propertiesSubstr);

  let completeUrl = baseUrlSlash;
  if (urlParams.length) {
    completeUrl += `?${urlParams.join("&")}`;
  }

  return completeUrl;  
};

export default buildUrl;

