import constants from "../constants.js";

const getAllProperties = constants => {
  const {allPropertiesString} = constants;
  return allPropertiesString.trim().toLowerCase().split(/[\s+]/);
}

const fixProperties = (properties) => {
  const allProperties = getAllProperties(constants);
  return properties
    .map( p => p.toLowerCase() )
    .filter( p => allProperties.includes(p) );
};

export {getAllProperties};
export default fixProperties;
