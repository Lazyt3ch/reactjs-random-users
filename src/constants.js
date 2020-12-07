const constants = {
  numResultsLowerLimit: 1,
  numResultsUpperLimit: 1000,
  numResultsDefault: 5,
  allPropertiesUnorderedString: `
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
  allPropertiesString: `
    name
    gender
    dob
    nat
    location
    phone
    cell
    email
    login
    registered
    id
    picture
  `,
  propertyPieces: {
    gender: null,
    name: {
      title: null, 
      first: null, 
      last: null,
    },
    location: {
      street: {
        number: null,
        name: null,
      },
      city: null,
      state: null,
      country: null,
      postcode: null,
      coordinates: {
        latitude: null, 
        longitude: null,
      },
    },
    email: null,
    login: {
      uuid: null,
      username: null,
      password: null,
      salt: null,
      md5: null,
      sha1: null,
      sha256: null,      
    },
    dob: {
      date: null,
      age: null,
    },
    registered: {
      date: null,
      age: null,
    },
    phone: null,
    cell: null,
    id: {
      name: null,
      value: null,
    },
    picture: {
      large: null,
      medium: null,
      thumbnail: null,
    },
    nat: null,
  },
 
};

export default constants;