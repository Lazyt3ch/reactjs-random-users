import React, {useState, useEffect} from "react";
import {useHistory} from "react-router-dom";
import PropTypes from "prop-types";

// https://www.w3schools.com/css/tryit.asp?filename=trycss_ex_pagination_border_round

// Row 0 is used for table header, so content row numbering starts from 1

function Pagination(props) {
  const {
    totalPages, 

    activePageNumber,
    setActivePageNumber,
  } = props;

  const [pageNumbers, setPageNumbers] = useState([0]);

  const history = useHistory();  

  useEffect(
    () => {
      if (totalPages < 1) {
        return;
      }

      const pageNumbersNew = Array.from(new Array(totalPages), (_, idx) => idx);
      setPageNumbers(pageNumbersNew);
    },
    [totalPages]
  );

  function handlePageNumberClick(event) {
    const text = event.target.textContent;
    let pageNumber;

    switch (text) {
      case "<<":
        pageNumber = 0;
        break;
      case ">>":
        pageNumber = totalPages - 1;
        break;
      case "<":
        pageNumber = Math.max(activePageNumber - 1, 0);
        break;
      case ">":
        pageNumber = Math.min(activePageNumber + 1, totalPages - 1);
        break;
      default:
        pageNumber = parseInt(text) - 1;
    }

    if (pageNumber !== activePageNumber) {
      setActivePageNumber(pageNumber);
      history.push(`/view/${pageNumber + 1}`);
    }
  }

  return (
    <div className="pagination unselectable">
      <span onClick={handlePageNumberClick}
        className={activePageNumber === 0 ? "active-page" : ""}
      >
        &lt;&lt;
      </span>

      <span onClick={handlePageNumberClick}
        className={activePageNumber === 0 ? "active-page" : ""}
      >
        &lt;
      </span> 

      {pageNumbers.map(num =>
        <span className={num === activePageNumber ? "active-page" : ""}
          key={num}          
          onClick={handlePageNumberClick}
        >
          {num + 1}
        </span>
      )}

      <span onClick={handlePageNumberClick}
        className={activePageNumber === totalPages - 1 ? "active-page" : ""}      
      >
        &gt;
      </span>  

      <span onClick={handlePageNumberClick}
        className={activePageNumber === totalPages - 1 ? "active-page" : ""}      
      >
        &gt;&gt;
      </span>    
    </div>
  );
}

Pagination.propTypes = {
  totalPages: PropTypes.number.isRequired,

  activePageNumber: PropTypes.number.isRequired,
  setActivePageNumber: PropTypes.func.isRequired,
};

export default Pagination;