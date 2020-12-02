const constants = {
  numResultsLowerLimit: 1,
  numResultsUpperLimit: 1000,
  numResultsDefault: 50,
  allPropertiesString: `
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
  `,
  propertyPieces = {
    name: ["title", "first", "last"],
    gender: [],
    coordinates: ["latitude", "longitude"],
  
  },
  
}

export default constants;