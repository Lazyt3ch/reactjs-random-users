import fixProperties from "/PropertiesFixer.js";
import fixNumResults from "/NumResultsFixer.js";

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

  const completeUrl = urlParams.length
    ? `${baseUrlSlash}?${urlParams.join("&")}`
    : baseUrlSlash;

  return completeUrl;  
};

export default buildUrl;

