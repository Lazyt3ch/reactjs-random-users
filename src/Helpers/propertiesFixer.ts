import constants from "../constants.js";

const fixProperties = (properties) => {
  const allProperties = getAllProperties(constants: Constants);
  return properties
    .map( p => p.toLowerCase() )
    .filter( p => allProperties.includes(p) );
};

const getAllProperties = (constants: object) => {
  const {allPropertiesString}: {allPropertiesString: string;} = constants;
  
  const allProperties = allPropertiesString
    .trim()
    .toLowerCase()
    .split(/\s+/);
    
  return allProperties;
}

const getValidProperties = statuses => {
  if (!Object.keys(statuses).length) {
    return [];
  }

  const selectedProperties = Object.entries(statuses)
    .filter( ([_, value]) => value === true )
    .map( ([key, value]) => key );
  
  return fixProperties(selectedProperties);
};

const getUpdatedStatuses = (status, allProperties) => {
  const statusProperties = allProperties.reduce( (acc, property) => 
    ({...acc, [property]: status}), {});

  return statusProperties;
};

export default fixProperties;
export {getAllProperties, getValidProperties, getUpdatedStatuses};
