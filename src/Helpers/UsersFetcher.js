import buildUrl from "./UrlBuilder.js";

async function fetchUsers(numResults, properties=[], isToInclude=true) {
  const completeUrl = buildUrl(numResults, properties, isToInclude);
  let results = null;

  try {
    const response = await fetch(completeUrl);
    const data = await response.json();
    if (data.error) {
      console.log("The server returned an error");      
    } else {
      results = data.results;
    }
  } catch(err) {
    console.log(`An error occurred: ${err}`);
  } finally {
    return results;
  }
};

export default fetchUsers;