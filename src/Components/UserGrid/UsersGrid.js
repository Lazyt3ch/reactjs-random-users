import React, {useEffect} from "react";
import getRebuiltResults, {getBriefResults} from "../../Helpers/DataRebuilder.js";
import getGridColumnsFormula from "../../Helpers/GridCalculator.js";
import UsersGridItem from "./UsersGridItem.js";

function UsersGrid(props) {
  const {
    results,
    // resultsFetchCount,

    results2D,
    setResults2D,

    // briefResults2D,
    // setBriefResults2D,

    validProperties,
    
    gridColumnsFormula,
    setGridColumnsFormula,

    briefGridColumnsFormula,
    setBriefGridColumnsFormula,
    
    isBriefResults, 
    setIsBriefResults,

    // displayedResults, 
    // setDisplayedResults,
  } = props;
  
  // TODO:
  // const usersPerPageDefault = 20;
  // const [usersPerPage, setUsersPerPage] = useState(usersPerPageDefault);

  useEffect( () => {
    const results2DNew = Array.isArray(results) && results.length > 1
      ? getRebuiltResults(results, validProperties)
      : [];
    setResults2D(results2DNew);
  }, [results, validProperties, setResults2D]);

  // useEffect( () => {
  //   const briefResults2DNew = Array.isArray(results2D) && results2D.length > 1
  //     ? getBriefResults(results2D, validProperties)
  //     : [];
  //   setBriefResults2D(briefResults2DNew);
  // }, [results2D, validProperties, setBriefResults2D]);

  // useEffect( () => {
  //   const gridColumnsFormulaNew = Array.isArray(results2D) && results2D.length > 1
  //     ? getGridColumnsFormula(results2D, validProperties)
  //     : "";
  //   setGridColumnsFormula(gridColumnsFormulaNew);
  // }, [results2D, validProperties, setGridColumnsFormula]);
  
  // useEffect( () => {
  //   const briefGridColumnsFormulaNew = Array.isArray(briefResults2D) && briefResults2D.length > 1
  //     ? getGridColumnsFormula(briefResults2D, validProperties)
  //     : "";
  //   setBriefGridColumnsFormula(briefGridColumnsFormulaNew);
  // }, [briefResults2D, validProperties, setBriefGridColumnsFormula]);


  function handleBriefResultsChange(event) {
    setIsBriefResults(event.target.checked);    
  }

  // useEffect( () => {
  //   const displayedResultsNew = isBriefResults
  //     ? briefResults2D
  //     : results2D;
  //   setDisplayedResults(displayedResultsNew);
  // }, [briefResults2D, results2D, isBriefResults, setDisplayedResults]);

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
          ? results2D.map( (userObj, idx) => 
            <React.Fragment key={idx}>
              {Object.values(userObj).map( value => 
                <UsersGridItem 
                  key={value} 
                  value={value}
                  className="grid-item" 
                  style={idx === 0 ? {fontWeight: 700} : null}              
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