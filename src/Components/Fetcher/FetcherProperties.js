import React from "react";

function FetcherProperties(props) {
  const {
    statusesString,     
    handleUnselectAll,
    handleSelectAll, 
    handleInvertSelection,
    handleSingleCheck,
  } = props;

  const statuses = JSON.parse(statusesString);
  const allProperties = Object.keys(statuses);

  return (
    <div style={{marginTop: "1rem"}}>
      <p style={{marginLeft: "2rem"}}>
        Select user properties to retrieve
      </p>
      
      <div style={{marginLeft: "2rem"}}>
        <button className="properties-button" onClick={handleUnselectAll}>
          Unselect all
        </button>
        
        <button className="properties-button" onClick={handleSelectAll}>
          Select all
        </button>

        <button className="properties-button" onClick={handleInvertSelection}>
          Invert Selection
        </button>
      </div>

      <ul style={{listStyleType: "none"}}>
        {allProperties.map( (property) => 
          <li key={property} style={{marginBottom: ".5rem"}}>            
            <input 
              type="checkbox" 
              name={property}
              checked={statuses[property]} 
              onChange={handleSingleCheck}
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