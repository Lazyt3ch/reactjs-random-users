import React from "react";
import buildResults from "../../Helpers/DataRebuilder.js";
import getGridColumnsFormula from "../../Helpers/GridCalculator.js";

function UsersGrid(props) {
  const {
    results,

    validProperties,
    
    gridColumnsFormula,
    setGridColumnsFormula,
    
    displayedResults, 
    setDisplayedResults
  } = props;
  
  // TODO:
  // const usersPerPageDefault = 20;
  // const [usersPerPage, setUsersPerPage] = useState(usersPerPageDefault);

  const results2D = buildResults(results, validProperties);  
  console.log("results2D =", results2D);

  setGridColumnsFormula(getGridColumnsFormula(results2D, validProperties));
  const gridTemplateColumnsStyle = {gridTemplateColumns: gridColumnsFormula};
  console.log("gridTemplateColumnsStyle =", gridTemplateColumnsStyle);

  return (
    <div className="grid-container" style={gridTemplateColumnsStyle}>

      {results2D && results2D.length > 1
        ? results2D.map( (userObj, idx) => 
          <React.Fragment key={idx}>
            {Object.values(userObj).map( value => 
              <div 
                key={value} 
                className="grid-item" 
                style={idx === 0 ? {fontWeight: 700} : null}
              >
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