import React, {useState, useEffect} from "react";
import {getBriefResults} from "../../Helpers/DataRebuilder.js";
import getGridColumnsFormula from "../../Helpers/GridCalculator.js";
import isBadData from "../../Helpers/BadDataChecker.js";
import UsersGridItem from "./UsersGridItem.js";
import Pagination from "../Pagination/Pagination.js";
import constants from "../../constants.js";
import SpacedCheckbox from "../SpacedCheckbox/SpacedCheckbox.js";

function UsersGrid(props) {
  const {
    results2D,

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

    scrollTopArr, 
    setScrollTopArr,

    // gridWidth, 
    // setGridWidth,

    // briefGridWidth, 
    // setBriefGridWidth,

  } = props;

  const [activePageRows, setActivePageRows] = useState([]);

  // const getGridWidth = pageRows => {
  //   const scalingFactor = 0.8;
  //   let gridWidthNew = 0;
  //   let rowLen;

  //   pageRows.forEach( (row, idx) => {
  //     rowLen = row.reduce( (acc, item) => acc + item.length, 0);
  //     gridWidthNew = Math.max(gridWidthNew, rowLen);
  //   });

  //   return Math.floor(scalingFactor * gridWidthNew);
  // }  

  useEffect( () => {
    // console.log("results2D =", results2D);
    // if (isBadData(results2D, validPropertiesCopy)) {
    if (isBadData(results2D)) {
      return;
    }

    const getActivePageRows = allResults => {
      if (!totalPages || isBadData(allResults)) {
        return [];
      }

      const {usersPerPage} = constants;
  
      // Row 0 is used for table header, so content rows numbering starts from 1
      const contentRowsStart = (activePageNumber * usersPerPage) + 1;
      const contentRowsEnd = contentRowsStart + usersPerPage;
      const activePageRowsNew = [ allResults[0] ].concat(
        allResults.slice(contentRowsStart, contentRowsEnd + 1) );
      // console.log("activePageRowsNew =", activePageRowsNew);

      if (isBadData(activePageRowsNew)) {
        return [];
      }        

      console.log("activePageRowsNew =", activePageRowsNew);
      return activePageRowsNew;
    }    

    const {usersPerPage} = constants;

    if (Number.isInteger(usersPerPage) && usersPerPage > 0) {
      const activePageRowsNew = getActivePageRows(results2D);

      if (isBadData(activePageRowsNew)) {
        return;
      }

      setActivePageRows(activePageRowsNew);

      // const gridWidthNew = getGridWidth(activePageRowsNew);
      // setGridWidth(gridWidthNew);
    }
  }, [results2D, activePageNumber, totalPages,]);


  useEffect( () => {
    // if (isBadData(activePageRows, validPropertiesCopy)) {
    if (isBadData(activePageRows)) {
        return;
    }
        
    const briefResults2DNew = activePageRows.length > 1
      // ? getBriefResults(activePageRows, validPropertiesCopy)
      ? getBriefResults(activePageRows)
      : [];

    if (isBadData(briefResults2DNew)) {
      return;
    }

    setBriefResults2D(briefResults2DNew);         
    
    // const briefGridWidthNew = getGridWidth(briefResults2DNew);
    // setBriefGridWidth(briefGridWidthNew);
  
  }, [activePageRows, setBriefResults2D,]);
  // }, [activePageRows, validPropertiesCopy, setBriefResults2D]);


  useEffect( () => {
    if (isBadData(activePageRows, validPropertiesCopy)) {
      return;
    }

    const gridColumnsFormulaNew = activePageRows.length > 1
      ? getGridColumnsFormula(activePageRows, validPropertiesCopy)
      : "";
    
    if (typeof gridColumnsFormulaNew === "string") {
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

    if (typeof briefGridColumnsFormulaNew === "string") {
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
          <SpacedCheckbox 
            color="primary"
            mb={"0px"}          
            checked={isBriefResults}           
            onChange={handleBriefResultsChange}
          />
          <label htmlFor="brief-checkbox" 
            style={{display: "inline", paddingLeft: ".3rem", paddingBottom: "1rem"}}>
            Hide subproperty names
          </label>
        </div>
      </div>

      <div className="grid-container-wrapper"
        // style={{
        //   width: 
        //     `minmax(${ isBriefResults ? briefGridWidth : gridWidth }rem, 100%)`,
        // }}      
      >
        <div className="grid-container" id="users-grid-container"
          style={{
            // maxWidth: 
            //   `minmax(${ isBriefResults ? briefGridWidth : gridWidth }rem, 100%)`,            
            gridTemplateColumns: 
              (isBriefResults
                ? briefGridColumnsFormula
                : gridColumnsFormula), 
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