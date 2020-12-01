import React from "react";

function FetcherProperties(props) {
  const {
    statusesString,     
    handleUnselectAll,
    handleSelectAll, 
    handleUpdateStatus,
  } = props;

  const statuses = JSON.parse(statusesString);
  console.log("FETCHER_PROPERTIES: statuses =", statuses)

  const allProperties = Object.keys(statuses);
  console.log("FETCHER_PROPERTIES: allProperties =", allProperties)
  console.log("statuses =", statuses)
  console.log("handleSelectAll =", handleSelectAll)

  return (
    <div style={{marginTop: "1rem"}}>
      <p style={{marginLeft: "2rem"}}>Select user properties to retrieve</p>
      
      <div style={{marginLeft: "2rem"}}>
        <button onClick={handleUnselectAll}>
          Unselect all
        </button>
        
        <button onClick={handleSelectAll}>
          Select all
        </button>
      </div>

      <ul style={{listStyleType: "none"}}>
        {allProperties.map( (property) => 
          <li key={property} style={{marginBottom: ".5rem"}}>            
            <input 
              type="checkbox" 
              name={property}
              checked={statuses[property]} 
              onChange={handleUpdateStatus}
            />
            <span style={{marginLeft: "1rem"}}>
              {property}
            </span>
          </li>)
        } 
      </ul>
    </div>
  );
}

export default FetcherProperties;