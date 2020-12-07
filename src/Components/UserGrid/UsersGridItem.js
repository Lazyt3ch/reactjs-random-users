import React from "react";

function UsersGridItem(props) {
  const {
    value, 
    rowIndex, 
    isBriefResults,
  } = props;

  const subpropertyNameRegexp = new RegExp("([a-z]+:\\s)", "g");

  const strArr = rowIndex > 0
    ? value.split(subpropertyNameRegexp).filter(part => part.length)
    : [];

  const popupArr = strArr.forEach( (_, idx) => 
    idx > 0 && subpropertyNameRegexp.test(strArr[idx - 1])
      ? strArr[idx - 1]
      : ""
  );

  console.log("popupArr =", popupArr);

  return (
    <>
      { rowIndex > 0
        ? <div className="property-content">
            {strArr.map ( (part, idx) => 
            subpropertyNameRegexp.test(part) 
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

