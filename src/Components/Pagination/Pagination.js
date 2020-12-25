import React, {useState, useEffect} from "react";
import {useHistory} from "react-router-dom";
import PropTypes from "prop-types";

// https://www.w3schools.com/css/tryit.asp?filename=trycss_ex_pagination_border_round

// Row 0 is used for table header, so content row numbering starts from 1

// The "page-spacer" span keeps the ">" and ">>" span elements in the same positions

function Pagination(props) {
  const {
    totalPages, 

    activePageNumber,
    setActivePageNumber,
  } = props;

  const [displayedPageNumbers, setDisplayedPageNumbers] = useState([0]);

  const history = useHistory();  

  useEffect(
    () => {
      const pageNumbers = Array.from(new Array(totalPages), (_, idx) => idx);

      const displayedPageNumbersNew = pageNumbers.length <= 5 
        ? pageNumbers.slice(1, totalPages - 1) // All pages except for first and last ones
        : activePageNumber <= 1
          ? pageNumbers.slice(1, 4)
          : activePageNumber >= totalPages - 2
            ? pageNumbers.slice(-4, -1)
            : pageNumbers.slice(activePageNumber - 1, activePageNumber + 2);    
      setDisplayedPageNumbers(displayedPageNumbersNew);
    }, 
    [totalPages, activePageNumber]
  )

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
        className={activePageNumber === 0 ? "active-page no-hover-effect" : ""}
      >
        &lt;&lt;
      </span>

      <span onClick={handlePageNumberClick}
        className={activePageNumber === 0 ? "active-page no-hover-effect" : ""}
      >
        &lt;
      </span> 

      <span className={activePageNumber === 0 ? "active-page no-hover-effect" : ""}
        onClick={handlePageNumberClick}
      >
        1
      </span>      

      { totalPages > 5 && activePageNumber >= 3 &&
        <span className="page-ellipsis no-hover-effect"
        >
          &#8230;
        </span>   
      }        

      {displayedPageNumbers.map(num =>
        <span className={num === activePageNumber ? "active-page no-hover-effect" : ""}
          key={num}          
          onClick={handlePageNumberClick}
        >
          {num + 1}
        </span>
      )}      

      { totalPages > 5 && activePageNumber < totalPages - 3 &&
        <span className="page-ellipsis no-hover-effect"
        >
          &#8230;
        </span>   
      }        

      {totalPages > 1 && 
        <span className={activePageNumber === totalPages - 1 ? "active-page no-hover-effect" : ""}
          onClick={handlePageNumberClick}
        >
          {totalPages}
        </span>
      }

      { totalPages > 5 && !(activePageNumber >= 3 && activePageNumber < totalPages - 3) &&
        <span className="page-spacer no-hover-effect">
          &nbsp;&nbsp;
        </span>
      }

      <span onClick={handlePageNumberClick}
        className={activePageNumber >= totalPages - 1 ? "active-page no-hover-effect" : ""}      
      >
        &gt;
      </span>  

      <span onClick={handlePageNumberClick}
        className={activePageNumber >= totalPages - 1 ? "active-page no-hover-effect" : ""}      
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