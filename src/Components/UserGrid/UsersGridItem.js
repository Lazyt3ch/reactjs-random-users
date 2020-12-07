import React from "react";

function UsersGridItem(props) {
  const {
    value, 
    rowIndex, 
    isBriefResults,
  } = props;

  const regexp = new RegExp("([a-z]+:\\s)", "g");

  const strArr = rowIndex > 0
    ? value.split(regexp).filter(part => part.length)
    : [];

  return (
    <>
      { rowIndex > 0
        ? <div className="property-content">
            {strArr.map ( (part, idx) => 
            regexp.test(part) 
              ? <span className="subproperty-name"
                  style={{display: (isBriefResults ? "none" : "inline")}}
                  key={idx}
                >
                  {part}
                </span> 
              : <span className="subproperty-value"
                  key={idx}
                >
                  {part}
                </span>
            )}
          </div>
        : <div className="property-name">
            {value}
          </div>
      }
    </>
  );

}

export default UsersGridItem;

