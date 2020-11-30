const fixProperties = (properties) => {
  const validPropertiesAsOneString = `
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

  const validProperties = validPropertiesAsOneString.trim().split(/[\s+]/);
  const propertiesToUse = properties.filter( p => validProperties.includes(p) );
  return propertiesToUse;
};

export default fixProperties;