import React, {useState, useEffect} from "react";
// https://www.w3schools.com/css/tryit.asp?filename=trycss_ex_pagination_border_round

function Pagination(props) {
  const {
    totalPages, 

    activePageNumber,
    setActivePageNumber,
  } = props;

  const [pageNumbers, setPageNumbers] = useState([0]);

  useEffect(
    () => {
      const pageNumbersNew = Array.from(new Array(totalPages), (_, idx) => idx);
      setPageNumbers(pageNumbersNew);
    },
    [totalPages]
  );

  function handlePageNumberClick(event) {
    const pageNumber = event.target.value - 1;
    if (pageNumber !== activePageNumber) {
      setActivePageNumber(pageNumber);
    }
  }

  return (
    <div class="pagination">
      <span>&laquo;</span>
      {pageNumbers.map(num =>
        <span className={num === activePageNumber ? "active-page" : ""}
          onClick={handlePageNumberClick}
        >
          {num + 1}
        </span>
      )}
      <span>&raquo;</span>
    </div>
  );
}

export default Pagination;