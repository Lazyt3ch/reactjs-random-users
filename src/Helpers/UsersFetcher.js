import buildUrl from "./UrlBuilder.js";

async function fetchUsers(numResults, properties=[], isToInclude=true) {
  const completeUrl = buildUrl(numResults, properties, isToInclude);
  let results = null;
  let errorMessage = "";

  try {
    const response = await fetch(completeUrl);
    const data = await response.json();
    if (data.error) {
      errorMessage = "The server returned an unspecified error.";
      console.log(errorMessage);      
    } else {
      results = data.results;
    }
  } catch(err) {
    errorMessage = `An error occurred: ${err}`;
    console.log(errorMessage);
  } finally {
    return { 
      results, 
      errorMessage,
    };
  }
};

export default fetchUsers;