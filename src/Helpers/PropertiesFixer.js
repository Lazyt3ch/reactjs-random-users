import constants from "../constants.js";

const fixProperties = (properties) => {
  const {validPropertiesAsString} = constants;
  const validProperties = validPropertiesAsString.trim().toLowerCase().split(/[\s+]/);
  return properties
    .map( p => p.toLowerCase() )
    .filter( p => validProperties.includes(p) );
};

export default fixProperties;