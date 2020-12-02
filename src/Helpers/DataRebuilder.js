import constants from "../constants.js";

const getUserDataString = (userObj) => {
  const userData = {};
  const pieces = {
    name: ["title", "first", "last"],
  };
  for (const [key] of Object.entries)) {
    switch (key) {
      case 'name':
        pieces = ;
        userData[key] = `${name.title} ${name.first} ${name.last}`;
        break;
    }

  }
};

const rebuildResults = results => {
  const rebuiltResults = results.map( userObj => getUserDataString(userObj) );
  return rebuiltResults;
};

export default rebuildResults;