import React, {useState} from "react";
import buildResults from "../../Helpers/DataRebuilder.js";

function UsersGrid(props) {
  // const {numResults, properties} = props;
  const {results} = props;

  const usersPerPageDefault = 20;
  const [usersPerPage, setUsersPerPage] = useState(usersPerPageDefault);
  const rebultResults = buildResults(results);
  console.log("rebultResults =", rebultResults);

  return (
    <div>

    </div>
  );
}

export default UsersGrid;