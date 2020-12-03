import React from "react";
import buildResults from "../../Helpers/DataRebuilder.js";
import getColumnWidths from "../../Helpers/GridCalculator.js";

function UsersGrid(props) {
  const {
    results,
    validProperties,
    columnWidths,
    setColumnWidths,
  } = props;
  
  // TODO:
  // const usersPerPageDefault = 20;
  // const [usersPerPage, setUsersPerPage] = useState(usersPerPageDefault);

  const rebuiltResults = buildResults(results, validProperties);  
  console.log("rebuiltResults =", rebuiltResults);

  // const columnWidthsNew = getColumnWidths(rebuiltResults);
  // setColumnWidths(columnWidthsNew);

  return (
    <div>

      {rebuiltResults && rebuiltResults.length > 1
        ? rebuiltResults.map( (userObj, idx) => 
          <div key={idx} style={idx === 0 ? {fontWeight: 700} : null}>
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