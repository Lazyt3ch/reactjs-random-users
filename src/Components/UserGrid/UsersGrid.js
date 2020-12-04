import React, {useEffect} from "react";
import buildResults, {removeSubpropertyNames} from "../../Helpers/DataRebuilder.js";
import getGridColumnsFormula from "../../Helpers/GridCalculator.js";

function UsersGrid(props) {
  const {
    results,

    validProperties,
    
    gridColumnsFormula,
    setGridColumnsFormula,
    
    isBriefResults, 
    setIsBriefResults,

    displayedResults, 
    setDisplayedResults,
  } = props;
  
  // TODO:
  // const usersPerPageDefault = 20;
  // const [usersPerPage, setUsersPerPage] = useState(usersPerPageDefault);

  const results2D = buildResults(results, validProperties);  
  console.log("results2D =", results2D);

  useEffect( () => {
    setGridColumnsFormula(getGridColumnsFormula(results2D, validProperties));
  }, [results2D, validProperties, setGridColumnsFormula]);

  function handleBriefResultsChange(event) {
    setIsBriefResults(event.target.checked);    
  }

  useEffect( () => {
    const displayedResultsNew = isBriefResults
      ? removeSubpropertyNames(results2D)
      : results2D;

    setDisplayedResults(displayedResultsNew);
  }, [results2D, isBriefResults, setDisplayedResults]);

  return (
    <React.Fragment>
      <div style={{marginLeft: "2rem", marginBottom: "1rem"}}>
        <input type="checkbox" 
          id="brief-checkbox"
          name="brief-checkbox"
          selected={isBriefResults}           
          onChange={handleBriefResultsChange}
        />
        <label htmlFor="brief-checkbox" 
          style={{display: "inline", paddingLeft: ".3rem"}}>
          Hide subproperty names
        </label>
      </div>

      <div className="grid-container" 
        style={{gridTemplateColumns: gridColumnsFormula}}
      >
        {displayedResults && displayedResults.length > 1
          ? displayedResults.map( (userObj, idx) => 
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
    </React.Fragment>
  );
}

export default UsersGrid;