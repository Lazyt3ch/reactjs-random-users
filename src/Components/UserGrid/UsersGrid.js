import React, {useState} from "react";

function UsersGrid(props) {
  const {numResults, properties} = props;

  const usersPerPageDefault = 20;
  const [usersPerPage, setUsersPerPage] = useState(usersPerPageDefault);

  return (
    <div>

    </div>
  );
}

export default UsersGrid;