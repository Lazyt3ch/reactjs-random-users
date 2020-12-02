import React from "react";

function FetcherProperties(props) {
  const {
    statusesString,     
    handleUnselectAll,
    handleSelectAll, 
    handleInvertSelection,
    handleSingleCheck,
  } = props;

  const propertiesStatuses = JSON.parse(statusesString);
  const allProperties = Object.keys(propertiesStatuses);
  const numTotalProperties = allProperties.length;
  const numSelectedProperties = Object.values(propertiesStatuses)
    .reduce( (acc, value) => acc + value, 0 );  

  return (
    <div style={{marginTop: "1rem"}}>
      <p style={{marginLeft: "2rem"}}>
        Select user properties to retrieve
      </p>
      
      <div style={{marginLeft: "2rem"}}>
        <button 
          className="properties-button" 
          disabled={numSelectedProperties === 0}
          onClick={handleUnselectAll}
        >
          Unselect all
        </button>
        
        <button 
          className="properties-button" 
          disabled={numSelectedProperties === numTotalProperties}
          onClick={handleSelectAll}
        >
          Select all
        </button>

        <button 
          className="properties-button" 
          onClick={handleInvertSelection}
        >
          Invert Selection
        </button>
      </div>

      <ul style={{listStyleType: "none"}}>
        {allProperties.map( (property) => 
          <li key={property} style={{marginBottom: ".5rem"}}>            
            <input 
              type="checkbox" 
              name={property}
              checked={propertiesStatuses[property]} 
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