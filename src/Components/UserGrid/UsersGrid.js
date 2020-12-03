import React, {useState} from "react";
import buildResults from "../../Helpers/DataRebuilder.js";

function UsersGrid(props) {
  // const {numResults, properties} = props;
  const {results} = props;

  const usersPerPageDefault = 20;
  const [usersPerPage, setUsersPerPage] = useState(usersPerPageDefault);
  const rebuiltResults = buildResults(results);  
  console.log("rebuiltResults =", rebuiltResults);

  return (
    <div>

      <div>
        {rebuiltResults && rebuiltResults.length 
          ? Object.keys(rebuiltResults[0]).map( key =>
            <span key={key} className="right-margin-span">
              {key}
            </span> )
          : ""
        }
      </div>
      
      {rebuiltResults && rebuiltResults.length 
        ? rebuiltResults.map( (userObj, idx) => 
          <div key={idx}>
            {Object.values(userObj).map( value => 
              <span key={value} className="right-margin-span">
                {value}
              </span>
            )}
          </div>
          )                
        : ""
      }

    </div>
  );
}

export default UsersGrid;