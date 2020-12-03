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

  const columnWidthsNew = getColumnWidths(rebuiltResults);
  // setColumnWidths(columnWidthsNew);
  const gridTemplateColumns = {gridTemplateColumns: 
    columnWidthsNew.map( w => `${w}%` ).join(" ")
  };
  console.log("gridTemplateColumns =", gridTemplateColumns);

  return (
    <div className="grid-container" style={gridTemplateColumns}>

      {rebuiltResults && rebuiltResults.length > 1
        ? rebuiltResults.map( (userObj, idx) => 
          <React.Fragment key={idx} style={idx === 0 ? {fontWeight: 700} : null}>
            {Object.values(userObj).map( value => 
              <div key={value} className="right-margin-span">
                {value}
              </div>
            )}
          </React.Fragment>
          )                
        : ""
      }

    </div>
  );
}

export default UsersGrid;