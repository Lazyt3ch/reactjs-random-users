interface Constants {
  usersPerPage: number;
  numResultsLowerLimit: number;
  numResultsUpperLimit: number;
  numResultsDefault: number;
  allPropertiesString: string;
}

const constants: Constants = {
  usersPerPage: 50,

  numResultsLowerLimit: 1,

  // Limit the number of results as otherwise the users view page rendering may become 
  // very slow when switching from page to page with lots of results displayed at once.
  // Alternatively, implement pagination (say, 50 users per page, or less).
  // numResultsUpperLimit: 100, 
  numResultsUpperLimit: 1000, // Implemented pagination
  
  numResultsDefault: 20,
  // allPropertiesUnorderedString: `
  //   gender
  //   name
  //   location
  //   email
  //   login
  //   registered
  //   dob
  //   phone
  //   cell
  //   id
  //   picture
  //   nat
  // `,
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
  // // The data below is provided as a reference only.
  // propertyPieces: {
  //   gender: null,
  //   name: {
  //     title: null, 
  //     first: null, 
  //     last: null,
  //   },
  //   location: {
  //     street: {
  //       number: null,
  //       name: null,
  //     },
  //     city: null,
  //     state: null,
  //     country: null,
  //     postcode: null,
  //     coordinates: {
  //       latitude: null, 
  //       longitude: null,
  //     },
  //   },
  //   email: null,
  //   login: {
  //     uuid: null,
  //     username: null,
  //     password: null,
  //     salt: null,
  //     md5: null,
  //     sha1: null,
  //     sha256: null,      
  //   },
  //   dob: {
  //     date: null,
  //     age: null,
  //   },
  //   registered: {
  //     date: null,
  //     age: null,
  //   },
  //   phone: null,
  //   cell: null,
  //   id: {
  //     name: null,
  //     value: null,
  //   },
  //   picture: {
  //     large: null,
  //     medium: null,
  //     thumbnail: null,
  //   },
  //   nat: null,
  // },
 
};

export default constants;