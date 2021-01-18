import buildUrl from "./urlBuilder";
import getRebuiltResults, {
  DeepObj, 
  FlatObj,
  getRebuiltData,
} from "./dataRebuilder";

interface DeserializedData {
  results?: DeepObj[];
  error?: string;
}

interface Results {
  resultsArr?: DeepObj[];
  errorMessage?: string;
}

async function fetchUsers(
  numResults: number, properties:string[] = [], isToInclude=true): Promise<Results> {
  const completeUrl = buildUrl(numResults, properties, isToInclude);
  let resultsArr: DeepObj[] = [];
  let errorMessage = "";

  const getErrorText = (text: string) => 
    text
      ? `An error occurred: ${text}`
      : "An unspecified error occurred";

  try {
    const response = await fetch(completeUrl);

    // https://www.tjvantoll.com/2015/09/13/fetch-and-errors/
    if (response.ok) {
      const data: DeserializedData = await response.json();
  
      if (data.error || !data.results || !data.results.length) {
        errorMessage = "The server returned an unspecified error.";
      } else {
        resultsArr = data.results;
      }  
    } else {
      errorMessage = getErrorText(response.statusText);
    }
  } catch(err) {
    errorMessage = getErrorText(err);
  } finally {
    return { 
      resultsArr, 
      errorMessage,
    };
  }
};

export default fetchUsers;