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
      console.log("activePageNumber =", activePageNumber);
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

    if (text.startsWith("<<")) {
      pageNumber = 0;
    } else if (text.startsWith(">>")) {
      pageNumber = totalPages - 1;
    } else if (text.startsWith("<")) {
      pageNumber = Math.max(activePageNumber - 1, 0);
    } else if (text.startsWith(">")) {
      pageNumber = Math.min(activePageNumber + 1, totalPages - 1);
    } else {
      pageNumber = parseInt(text) - 1;
    }

    if (pageNumber !== activePageNumber) {
      setActivePageNumber(pageNumber);
      history.push(`/view/${pageNumber + 1}`);
    }
  }

  return (
    <>
      <div className="pagination unselectable">
        <span onClick={handlePageNumberClick}
          className={activePageNumber === 0 ? "active-page no-hover-effect" : "tooltip no-arrow"}
        >
          &lt;&lt;
          {activePageNumber > 0 &&
            <span className="tooltiptext" style={{minWidth: "10rem"}}>
              Go to First Page
            </span>           
          }
        </span>

        <span onClick={handlePageNumberClick}
          className={activePageNumber === 0 ? "active-page no-hover-effect" : "tooltip no-arrow"}
        >
          &lt;
          {activePageNumber > 0 &&
            <span className="tooltiptext" style={{minWidth: "10rem"}}>
              {`Go to Page ${activePageNumber}`}
            </span>           
          }          
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
          className={activePageNumber >= totalPages - 1 
            ? "active-page no-hover-effect" 
            : "tooltip no-arrow"}      
        >
          &gt;
          {activePageNumber < totalPages - 1 &&
            <span className="tooltiptext" style={{minWidth: "10rem"}}>
              {`Go to Page ${activePageNumber + 2}`}
            </span>           
          }             
        </span>  

        <span onClick={handlePageNumberClick}
          className={activePageNumber >= totalPages - 1 
            ? "active-page no-hover-effect" 
            : "tooltip no-arrow"}      
        >
          &gt;&gt;
          {activePageNumber < totalPages - 1 &&
            <span className="tooltiptext" style={{minWidth: "10rem"}}>
              Go to Last Page
            </span>           
          }
        </span>    
      </div>
    </>
  );
}

Pagination.propTypes = {
  totalPages: PropTypes.number.isRequired,

  activePageNumber: PropTypes.number.isRequired,
  setActivePageNumber: PropTypes.func.isRequired,
};

export default Pagination;