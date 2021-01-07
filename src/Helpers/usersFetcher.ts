import buildUrl from "./urlBuilder";
import {DeepObj} from "./dataRebuilder";


interface DeserializedData {
  error?: string;
  results?: DeepObj[];
}

interface Results {
  resultsArr?: object[];
  errorMessage?: string;
}

async function fetchUsers(
  numResults: number, properties:string[] = [], isToInclude=true): Promise<Results> {
  const completeUrl = buildUrl(numResults, properties, isToInclude);
  // let resultsArr: object[] | undefined = undefined;
  let resultsArr: DeepObj[] | undefined = undefined;
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
        // console.log(errorMessage);      
      } else {
        resultsArr = data.results;
      }  
    } else {
      errorMessage = getErrorText(response.statusText);
      // console.log(errorMessage);
    }
  } catch(err) {
    errorMessage = getErrorText(err);
    // console.log(errorMessage);
  } finally {
    return { 
      resultsArr, 
      errorMessage,
    };
  }
};

export default fetchUsers;