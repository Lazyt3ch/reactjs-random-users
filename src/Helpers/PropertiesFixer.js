import constants from "../constants.js";

const fixProperties = (properties) => {
  const allProperties = getAllProperties(constants);
  return properties
    .map( p => p.toLowerCase() )
    .filter( p => allProperties.includes(p) );
};

const getAllProperties = constants => {
  const {allPropertiesString} = constants;
  const allProperties = allPropertiesString
    .trim()
    .toLowerCase()
    .split(/\s+/)
    .sort();
  return allProperties;
}

const getValidProperties = statusesString => {
  if (statusesString.length < 5) {
    return [];
  }

  const selectedProperties = Object.entries(JSON.parse(statusesString))
    .filter( ([_, value]) => value === true )
    .map( ([key, value]) => key );
  
  return fixProperties(selectedProperties);
};

export default fixProperties;
export {getAllProperties, getValidProperties};
