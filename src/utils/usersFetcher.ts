import buildUrl from "./urlBuilder";
import getRebuiltResults, {DeepObj} from "./dataRebuilder";

interface DeserializedData {
  results?: DeepObj[];
  error?: string;
}

interface Results {
  results2D: string[][];
  errorMessage?: string;
}

async function fetchUsers(
  numResults: number, properties:string[] = [], isToInclude=true): Promise<Results> {
  const completeUrl = buildUrl(numResults, properties, isToInclude);
  let results2D: string[][] = [];
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
        results2D = getRebuiltResults(data.results, properties);
      }  
    } else {
      errorMessage = getErrorText(response.statusText);
    }
  } catch(err) {
    errorMessage = getErrorText(err);
  } finally {
    return { 
      results2D,
      errorMessage,
    };
  }
};

export default fetchUsers;