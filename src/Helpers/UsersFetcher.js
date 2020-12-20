import buildUrl from "./UrlBuilder.js";

async function fetchUsers(numResults, properties=[], isToInclude=true) {
  const completeUrl = buildUrl(numResults, properties, isToInclude);
  let resultsArr = null;
  let errorMessage = "";

  try {
    const response = await fetch(completeUrl);

    // https://www.tjvantoll.com/2015/09/13/fetch-and-errors/
    if (response.ok) {
      const data = await response.json();
  
      if (data.error || !data.results || !data.results.length) {
        errorMessage = "The server returned an unspecified error.";
        console.log(errorMessage);      
      } else {
        resultsArr = data.results;
      }  
    } else {
      errorMessage = `An error occurred: ${response.statusText}`;
      console.log(errorMessage);
    }
  } catch(err) {
    errorMessage = `An error occurred: ${err}`;
    console.log(errorMessage);
  } finally {
    return { 
      resultsArr, 
      errorMessage,
    };
  }
};

export default fetchUsers;