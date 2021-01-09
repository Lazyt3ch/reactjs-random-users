import React, {useState, useLayoutEffect} from "react";
import getGridColumnsFormula from "../../Helpers/gridCalculator";
import isNonEmptyArray from "../../Helpers/badDataChecker";
import UsersGridItem from "./UsersGridItem";
import Pagination from "../Pagination/Pagination";
import constants from "../../constants";
import SpacedCheckbox from "../SpacedCheckbox/SpacedCheckbox";
import PropTypes from "prop-types";
import "./UsersGrid.css";

interface Props {
  results2D: string[][];
    
  gridColumnsFormula: string;
  setGridColumnsFormula: React.Dispatch<React.SetStateAction<string>>;

  isBriefResults: boolean;
  setIsBriefResults: React.Dispatch<React.SetStateAction<boolean>>;

  activePageNumber: number;
  setActivePageNumber: React.Dispatch<React.SetStateAction<number>>;

  totalPages: number;
}

function UsersGrid(props: Props) {
  const {
    results2D,
    
    gridColumnsFormula,
    setGridColumnsFormula,

    isBriefResults, 
    setIsBriefResults,

    activePageNumber, 
    setActivePageNumber,

    totalPages, 
  } = props;

  const [activePageRows, setActivePageRows] = useState<string[][]>([]);

  
  useLayoutEffect( () => {
      if (!isNonEmptyArray(results2D)) {
      return;
    }

    const getActivePageRows = (allResults: string[][]): string[][] => {
      if (!totalPages || !isNonEmptyArray(allResults)) {
        return [];
      }

      const {usersPerPage} = constants;
  
      // Row 0 is used for table header, so content rows numbering starts from 1
      const contentRowsStart = (activePageNumber * usersPerPage) + 1;
      const contentRowsEnd = contentRowsStart + usersPerPage;
      const activePageRowsNew = [ allResults[0] ].concat(
        allResults.slice(contentRowsStart, contentRowsEnd + 1) );

      if (!isNonEmptyArray(activePageRowsNew)) {
        return [];
      }        

      return activePageRowsNew;
    }    

    const activePageRowsNew = getActivePageRows(results2D);

    if (!isNonEmptyArray(activePageRowsNew)) {
      return;
    }

    setActivePageRows(activePageRowsNew);

    const gridColumnsFormulaNew = activePageRowsNew.length > 1
      ? getGridColumnsFormula(activePageRowsNew)
      : "";
    
    setGridColumnsFormula(gridColumnsFormulaNew);
  }, [results2D, activePageNumber, totalPages, setGridColumnsFormula]);


  function handleBriefResultsChange(event: React.ChangeEvent<HTMLInputElement>): void {
    setIsBriefResults(event.target.checked);  
  }

  return (
    <>

      <div className="users-view-top-wrapper"> 
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

        <Pagination 
          totalPages={totalPages} 

          activePageNumber={activePageNumber} 
          setActivePageNumber={setActivePageNumber}    
        />        
      </div>

      <div className="grid-container-wrapper">
        <div className="grid-container" id="users-grid-container"
          style={{
            gridTemplateColumns: gridColumnsFormula,
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
                    style={{fontWeight: (rowIndex === 0 ? 700 : 400)}}              
                  />
                )}
              </React.Fragment>
              )                
            : ""
          }
        </div>      
      </div>

    </>
  );
}

UsersGrid.propTypes = {
  results2D: PropTypes.array.isRequired,
    
  gridColumnsFormula: PropTypes.string.isRequired,
  setGridColumnsFormula: PropTypes.func.isRequired,

  isBriefResults: PropTypes.bool.isRequired,
  setIsBriefResults: PropTypes.func.isRequired,

  activePageNumber: PropTypes.number.isRequired,
  setActivePageNumber: PropTypes.func.isRequired,

  totalPages: PropTypes.number.isRequired,
};

export default UsersGrid;