import React, {useEffect} from "react";
import getRebuiltResults, {getBriefResults} from "../../Helpers/DataRebuilder.js";
import getGridColumnsFormula from "../../Helpers/GridCalculator.js";
import isBadData from "../../Helpers/BadDataChecker.js";
import UsersGridItem from "./UsersGridItem.js";

function UsersGrid(props) {
  const {
    results,
    // resultsFetchCount,

    results2D,
    setResults2D,

    briefResults2D,
    setBriefResults2D,

    validPropertiesCopy,
    
    gridColumnsFormula,
    setGridColumnsFormula,

    briefGridColumnsFormula,
    setBriefGridColumnsFormula,
    
    isBriefResults, 
    setIsBriefResults,
  } = props;
  
  // TODO:
  // const usersPerPageDefault = 20;
  // const [usersPerPage, setUsersPerPage] = useState(usersPerPageDefault);

  useEffect( () => {
    if (isBadData(results, validPropertiesCopy)) {
      return;
    }

    const results2DNew = Array.isArray(results) && results.length > 1
      ? getRebuiltResults(results, validPropertiesCopy)
      : [];
    // console.log("results2DNew =", results2DNew);
    setResults2D(results2DNew);
  }, [results, validPropertiesCopy, setResults2D]);

  useEffect( () => {
    if (isBadData(results2D, validPropertiesCopy)) {
      return;
    }
        
    const briefResults2DNew = Array.isArray(results2D) && results2D.length > 1
      ? getBriefResults(results2D, validPropertiesCopy)
      : [];
    setBriefResults2D(briefResults2DNew);
  }, [results2D, validPropertiesCopy, setBriefResults2D]);

  useEffect( () => {
    if (isBadData(results2D, validPropertiesCopy)) {
      return;
    }

    const gridColumnsFormulaNew = Array.isArray(results2D) && results2D.length > 1
      ? getGridColumnsFormula(results2D, validPropertiesCopy)
      : "";
    setGridColumnsFormula(gridColumnsFormulaNew);
  }, [results2D, validPropertiesCopy, setGridColumnsFormula]);
  
  useEffect( () => {
    if (isBadData(briefResults2D, validPropertiesCopy)) {
      return;
    }

    const briefGridColumnsFormulaNew = Array.isArray(briefResults2D) && briefResults2D.length > 1
      ? getGridColumnsFormula(briefResults2D, validPropertiesCopy)
      : "";
    setBriefGridColumnsFormula(briefGridColumnsFormulaNew);
  }, [briefResults2D, validPropertiesCopy, setBriefGridColumnsFormula]);

  function handleBriefResultsChange(event) {
    setIsBriefResults(event.target.checked);    
  }

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
        style={{gridTemplateColumns: 
          isBriefResults
            ? briefGridColumnsFormula
            : gridColumnsFormula
        }}
      >
        {results2D && results2D.length > 1
          ? results2D.map( (userObj, rowIndex) => 
            <React.Fragment key={rowIndex}>
              {Object.values(userObj).map( value => 
                <UsersGridItem 
                  key={value} 
                  value={value}
                  rowIndex={rowIndex}
                  isBriefResults={isBriefResults}
                  style={rowIndex === 0 ? {fontWeight: 700} : null}              
                />
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