import React, {useState, useEffect} from "react";

// https://www.w3schools.com/css/tryit.asp?filename=trycss_ex_pagination_border_round

// Row 0 is used for table header, so content row numbering starts from 1

function Pagination(props) {
  const {
    totalPages, 

    activePageNumber,
    setActivePageNumber,
  } = props;

  const [pageNumbers, setPageNumbers] = useState([0]);

  useEffect(
    () => {
      // console.log("PAGINATION: totalPages =", totalPages);
      if (totalPages < 1) {
        return;
      }

      const pageNumbersNew = Array.from(new Array(totalPages), (_, idx) => idx);
      // console.log("PAGINATION: pageNumbersNew =", pageNumbersNew);
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

    // console.log("pageNumber =", pageNumber);

    if (pageNumber !== activePageNumber) {
      setActivePageNumber(pageNumber);
    }
  }

  return (
    <div className="pagination unselectable">
      <span onClick={handlePageNumberClick}
        className={activePageNumber === 0 ? "no-hover-effect" : ""}
      >
        &lt;&lt;
      </span>

      <span onClick={handlePageNumberClick}
        className={activePageNumber === 0 ? "no-hover-effect" : ""}
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
        className={activePageNumber === totalPages - 1 ? "no-hover-effect" : ""}      
      >
        &gt;
      </span>  

      <span onClick={handlePageNumberClick}
        className={activePageNumber === totalPages - 1 ? "no-hover-effect" : ""}      
      >
        &gt;&gt;
      </span>    
    </div>
  );
}

export default Pagination;