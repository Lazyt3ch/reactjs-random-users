import constants, {Constants} from "../constants";

const fixProperties = (properties: string[]) => {
  const allProperties = getAllProperties(constants);
  return properties
    .map( p => p.toLowerCase() )
    .filter( p => allProperties.includes(p) );
};

const getAllProperties = (constants: Constants): string[] => {
  const {allPropertiesString} = constants;
  return allPropertiesString
    .trim()
    .toLowerCase()
    .split(/\s+/);
}

interface Statuses {
  
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
