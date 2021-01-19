import React, {useState, useLayoutEffect} from "react";
import getGridColumnsFormula from "../../utils/gridCalculator";
import isNonEmptyArray from "../../utils/badDataChecker";
import UsersGridItem from "./UsersGridItem";
import Pagination from "../Pagination/Pagination";
import constants from "../../constants";
import SpacedCheckbox from "../SpacedCheckbox/SpacedCheckbox";
// import PropTypes from "prop-types";
import "./UsersGrid.css";

import {RootState} from "../../redux/store";
import actionTypes from "../../redux/actionTypes";
import {useSelector, useDispatch} from 'react-redux';

// import store from "../../redux/store";

// interface Props {
//   results2D: string[][];
    
//   gridColumnsFormula: string;
//   setGridColumnsFormula: React.Dispatch<React.SetStateAction<string>>;

//   isBriefResults: boolean;
//   setIsBriefResults: React.Dispatch<React.SetStateAction<boolean>>;

//   activePageNumber: number;
//   setActivePageNumber: React.Dispatch<React.SetStateAction<number>>;

//   totalPages: number;
// }

// function UsersGrid(props: Props) {
function UsersGrid() {
  // const {
  //   results2D,
    
  //   gridColumnsFormula,
  //   setGridColumnsFormula,

  //   isBriefResults, 
  //   setIsBriefResults,

  //   activePageNumber, 
  //   setActivePageNumber,

  //   totalPages, 
  // } = props;

  const [activePageRows, setActivePageRows] = useState<string[][]>([]);

  const dispatch = useDispatch();

  const results2D = useSelector((state: RootState) => state.results2D);
  const gridColumnsFormula = useSelector((state: RootState) => state.gridColumnsFormula);
  const isBriefResults = useSelector((state: RootState) => state.isBriefResults);
  const activePageNumber = useSelector((state: RootState) => state.activePageNumber);
  const totalPages = useSelector((state: RootState) => state.totalPages);
  
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
      // const activePageRowsNew = [ allResults[0] ].concat(
      const updatedActivePageRows = [ allResults[0] ].concat(
        allResults.slice(contentRowsStart, contentRowsEnd + 1) );

      if (!isNonEmptyArray(updatedActivePageRows)) {
        return [];
      }        

      return updatedActivePageRows;
    }    

    const updatedActivePageRows = getActivePageRows(results2D);

    if (!isNonEmptyArray(updatedActivePageRows)) {
      return;
    }

    setActivePageRows(updatedActivePageRows);

    // const gridColumnsFormulaNew = activePageRowsNew.length > 1
    const updatedGridColumnsFormula = updatedActivePageRows.length > 1
      ? getGridColumnsFormula(updatedActivePageRows)
      : "";
    
    // setGridColumnsFormula(gridColumnsFormulaNew);
    dispatch({ type: actionTypes.GRID_COLUMNS_FORMULA, payload: updatedGridColumnsFormula});

  // }, [results2D, activePageNumber, totalPages, setGridColumnsFormula]);
  }, [results2D, activePageNumber, totalPages, dispatch]);


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

// UsersGrid.propTypes = {
//   results2D: PropTypes.array.isRequired,
    
//   gridColumnsFormula: PropTypes.string.isRequired,
//   setGridColumnsFormula: PropTypes.func.isRequired,

//   isBriefResults: PropTypes.bool.isRequired,
//   setIsBriefResults: PropTypes.func.isRequired,

//   activePageNumber: PropTypes.number.isRequired,
//   setActivePageNumber: PropTypes.func.isRequired,

//   totalPages: PropTypes.number.isRequired,
// };

export default UsersGrid;