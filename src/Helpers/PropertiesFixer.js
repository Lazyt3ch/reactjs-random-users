const fixProperties = (properties) => {
  const validPropertiesAsString = `
    gender
    name
    location
    email
    login
    registered
    dob
    phone
    cell
    id
    picture
    nat
  `;

  const validProperties = validPropertiesAsString.trim().split(/[\s+]/);
  return properties.filter( p => validProperties.includes(p) );
};

export default fixProperties;