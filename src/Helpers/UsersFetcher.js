import paramsFixer from "/ParamsFixer.js";

const usersFetcher = (numResults, params=[]) => {
  const validParamsAsOneString = `
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

  const validParams = validParamsAsOneString.trim().split(/[\s+]/);

  const numResultsLowerLimit = 5;
  const numResultsUpperLimit = 1000;
  const numResultsDefault = 100;
  let numResultsToUse;

  if (typeof numResults === "number") {
    numResultsToUse = numResults;
  } else if (typeof numResults === "string") {
    numResultsToUse = parseInt(numResults);
  } else {
    numResultsToUse = numResultsDefault;
  }

  if (numResults < numResultsLowerLimit) {
    numResults = numResultsLowerLimit;
  }

  if (numResults > numResultsUpperLimit) {
    numResults = numResultsUpperLimit;
  }

  const baseUrl = https://randomuser.me/api/;
};

export default usersFetcher;