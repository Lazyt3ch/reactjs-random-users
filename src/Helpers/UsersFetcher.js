import fixProperties from "/PropertiesFixer.js";
import fixNumResults from "/NumResultsFixer.js";

const usersFetcher = (numResults, properties, propertiesIncluded=true) => {
  const baseUrlSlash = "https://randomuser.me/api/";

  const numResultsToUse = fixNumResults(numResults);
  const numResultsSubstr = `results=${numResultsToUse}`;

  const propertiesToUse = fixProperties(properties);
  const propertiesSubstr = properties.length
    ? propertiesSubstr = `${propertiesIncluded ? "inc" : "exc"}=${properties.join(",")}`
    : "";

};

export default usersFetcher;