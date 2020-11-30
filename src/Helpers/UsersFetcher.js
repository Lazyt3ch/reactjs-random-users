import buildUrl from "/UrlBuilder.js";

const fetchUsers = (numResults, properties, isToInclude=true) => {
  const completeUrl = buildUrl(numResults, properties, isToInclude);

  fetch(completeUrl)
    .then(response => response.json())
    .then(data => console.log(data));

};

export default fetchUsers;