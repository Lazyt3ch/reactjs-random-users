import React from "react";
// https://www.w3schools.com/css/tryit.asp?filename=trycss_ex_pagination_border_round

function Pagination(props) {
  const {pageNumbers, activePageNumber} = props;

  function handlePageNumberClick(event) {
    const pageNumber = event.target.value - 1;
    if (pageNumber !== activePageNumber) {
      
    }
  }

  return (
    <div class="pagination-contaner">
      <div>&laquo;</div>
      {pageNumbers.map(num =>
        <div className={num === activePageNumber ? "active-page" : ""}
          onClick={handlePageNumberClick}
        >
          {num + 1}
        </div>
      )}
      <div>&raquo;</div>
    </div>
  );
}

export default Pagination;