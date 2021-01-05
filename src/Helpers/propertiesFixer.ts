import constants from "../constants";

const {allPropertiesString} = constants;

const fixProperties = (properties: string[]): string[] => {
  const allProperties = getAllProperties();
  return properties
    .map( p => p.toLowerCase() )
    .filter( p => allProperties.includes(p) );
};

const getAllProperties = (): string[] => {
  return allPropertiesString
    .trim()
    .toLowerCase()
    .split(/\s+/);
}

const getValidProperties = (statuses: [string, boolean][]): string[] => {
  if (!statuses.length) {
      return [];
  }

  const selectedProperties = statuses
    .filter( ([_, value]) => value)
    .map( ([key, _]) => key );
  
  return fixProperties(selectedProperties);
};

const getUpdatedStatuses = (allProperties: string[], status: boolean): [string, boolean][] => {
  return allProperties.map( property => [property, status] );
};

export default fixProperties;
export {getAllProperties, getValidProperties, getUpdatedStatuses};
