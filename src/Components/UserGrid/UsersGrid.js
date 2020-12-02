import React, {useState} from "react";
import buildResults from "../../Helpers/DataRebuilder.js";

function UsersGrid(props) {
  // const {numResults, properties} = props;
  const {results} = props;

  const usersPerPageDefault = 20;
  const [usersPerPage, setUsersPerPage] = useState(usersPerPageDefault);
  const rebuiltResults = buildResults(results);
  // console.log("rebultResults =", rebultResults);

  return (
    <div>

      <div>
        {rebuiltResults && rebuiltResults.length 
          && Object.keys(rebuiltResults[0]).map( key =>
            <span key={key}>
              {key}
            </span> )
        }
      </div>
      
      {rebuiltResults && rebuiltResults.length 
        && rebuiltResults.map( (userObj, idx) => 
          <div key={idx}>
            {Object.values(userObj).map( value => 
              <span key={value}>
                {value}
              </span>
            )}
          </div>
        )                
      }

    </div>
  );
}

export default UsersGrid;