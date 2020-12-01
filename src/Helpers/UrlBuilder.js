import fixProperties from "./PropertiesFixer.js";
import fixNumResults from "./NumResultsFixer.js";

const buildUrl = (numResults, properties, isToInclude) => {
  const baseUrlSlash = "https://randomuser.me/api/";
  const urlParams = [];

  const numResultsToUse = fixNumResults(numResults);
  const numResultsSubstr = `results=${numResultsToUse}`;
  urlParams.push(numResultsSubstr);

  const propertiesToUse = fixProperties(properties);
  const propertiesSubstr = propertiesToUse.length
    ? `${isToInclude ? "inc" : "exc"}=${propertiesToUse.join(",")}`
    : "";
  urlParams.push(propertiesSubstr);

  let completeUrl = baseUrlSlash;
  if (urlParams.length) {
    completeUrl += `?${urlParams.join("&")}`;
  }

  return completeUrl;  
};

export default buildUrl;

