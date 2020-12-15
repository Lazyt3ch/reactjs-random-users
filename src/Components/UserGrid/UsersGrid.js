import React, {useState, useEffect} from "react";
import getRebuiltResults, {getBriefResults} from "../../Helpers/DataRebuilder.js";
import getGridColumnsFormula from "../../Helpers/GridCalculator.js";
import isBadData from "../../Helpers/BadDataChecker.js";
import UsersGridItem from "./UsersGridItem.js";
import Pagination from "../Pagination/Pagination.js";
import constants from "../../constants.js";

function UsersGrid(props) {
  const {
    // results,

    results2D,
    // setResults2D,

    briefResults2D,
    setBriefResults2D,

    validPropertiesCopy,
    
    gridColumnsFormula,
    setGridColumnsFormula,

    briefGridColumnsFormula,
    setBriefGridColumnsFormula,
    
    isBriefResults, 
    setIsBriefResults,

    activePageNumber, 
    setActivePageNumber,

    totalPages, 
    // setTotalPages,

    scrollTopArr, 
    setScrollTopArr,

  } = props;

  const [activePageRows, setActivePageRows] = useState([]);

  // useEffect( () => {
  //   if (isBadData(results, validPropertiesCopy)) {
  //     return;
  //   }

  //   const results2DNew = results.length > 1
  //     ? getRebuiltResults(results, validPropertiesCopy)
  //     : [];

  //   if (!isBadData(results2DNew) && results2DNew.length) {
  //     setResults2D(results2DNew);
  //   }
  // }, [results, validPropertiesCopy, setResults2D]);


  // useEffect( () => {
  //   const {usersPerPage} = constants;

  //   // Row 0 is used for table header, so content rows numbering starts from 1
  //   const totalUsers = results.length - 1;

  //   if (Number.isInteger(usersPerPage) && usersPerPage > 0) {
  //     const totalPagesNew = Math.ceil(totalUsers / usersPerPage);
  //     setTotalPages(totalPagesNew);  
  //   }    
  // }, [results, setTotalPages]);


  useEffect( () => {
    if (isBadData(results2D, validPropertiesCopy)) {
      return;
    }

    const getActivePageRows = (allResults) => {
      if (!totalPages || !allResults || !Array.isArray(allResults) || !allResults.length) {
        return [];
      }
  
      const {usersPerPage} = constants;
  
      // Row 0 is used for table header, so content rows numbering starts from 1
      const contentRowsStart = (activePageNumber * usersPerPage) + 1;
      const contentRowsEnd = contentRowsStart + usersPerPage;
      const activePageRowsNew = [ allResults[0] ].concat(
        allResults.slice(contentRowsStart, contentRowsEnd + 1) );
      
      return activePageRowsNew;
    }    

    if (!isBadData(results2D) && results2D.length) {
      const {usersPerPage} = constants;

      if (Number.isInteger(usersPerPage) && usersPerPage > 0) {
        const activePageRowsNew = getActivePageRows(results2D);
        setActivePageRows(activePageRowsNew);
      }
    }
  }, [results2D, validPropertiesCopy, activePageNumber, totalPages]);


  useEffect( () => {
    if (isBadData(activePageRows, validPropertiesCopy)) {
      return;
    }
        
    const briefResults2DNew = activePageRows.length > 1
      ? getBriefResults(activePageRows, validPropertiesCopy)
      : [];

    if (!isBadData(briefResults2DNew) && briefResults2DNew.length) {
      setBriefResults2D(briefResults2DNew);
    }      
  }, [activePageRows, validPropertiesCopy, setBriefResults2D]);


  useEffect( () => {
    if (isBadData(activePageRows, validPropertiesCopy)) {
      return;
    }

    const gridColumnsFormulaNew = activePageRows.length > 1
      ? getGridColumnsFormula(activePageRows, validPropertiesCopy)
      : "";
    
    if (gridColumnsFormulaNew) {
      setGridColumnsFormula(gridColumnsFormulaNew);
    }
  }, [activePageRows, validPropertiesCopy, setGridColumnsFormula]);
  

  useEffect( () => {
    if (isBadData(briefResults2D, validPropertiesCopy)) {
      return;
    }

    const briefGridColumnsFormulaNew = briefResults2D.length > 1
      ? getGridColumnsFormula(briefResults2D, validPropertiesCopy)
      : "";

    if (briefGridColumnsFormulaNew) {
      setBriefGridColumnsFormula(briefGridColumnsFormulaNew);
    }
  }, [briefResults2D, validPropertiesCopy, setBriefGridColumnsFormula]);


  function handleBriefResultsChange(event) {
    setIsBriefResults(event.target.checked);    
  }

  return (
    <div>

      <div className="users-view-top-wrapper"> 
        <Pagination 
          totalPages={totalPages} 

          activePageNumber={activePageNumber} 
          setActivePageNumber={setActivePageNumber}    

          scrollTopArr={scrollTopArr}
          setScrollTopArr={setScrollTopArr}
        />

        <div className="grid-settings">
          <input type="checkbox" 
            id="brief-checkbox"
            name="brief-checkbox"
            checked={isBriefResults}           
            onChange={handleBriefResultsChange}
          />
          <label htmlFor="brief-checkbox" 
            style={{display: "inline", paddingLeft: ".3rem", paddingBottom: "1rem"}}>
            Hide subproperty names
          </label>
        </div>
      </div>

      <div className="grid-container-wrapper">
        <div className="grid-container" id="users-grid-container"
          style={{gridTemplateColumns: 
            isBriefResults
              ? briefGridColumnsFormula
              : gridColumnsFormula
          }}
        >
          {activePageRows && activePageRows.length > 1
            ? activePageRows.map( (userObj, rowIndex) => 
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
      </div>

    </div>
  );
}

export default UsersGrid;