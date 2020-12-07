import React from "react";
import ReactTooltip from 'react-tooltip';

function UsersGridItem(props) {
  const {
    value, 
    rowIndex, 
    isBriefResults,
  } = props;

  console.log("value =", value);

  const subpropertyNameRegexp = new RegExp("([a-z]+:\\s)");

  const strArr = rowIndex > 0
    ? value.split(subpropertyNameRegexp).filter( part => part.length )
    : [];

  console.log("strArr =", strArr);

  const tooltipArr = strArr.map( (_, idx) => 
    idx > 0 && subpropertyNameRegexp.test(strArr[idx - 1])
      ? strArr[idx - 1].slice(0, -2)
      : ""
  );

  function handleMouseEnter(event) {
    if (isBriefResults) {
      // console.log("mouse enter");
      const tooltipStr = event.target.dataset.tip;
      if (tooltipStr && tooltipStr.length) {
        ReactTooltip.show(event.target);
      }
    }
  }

  function handleMouseLeave(event) {
    // console.log("mouse leave");
    ReactTooltip.hide()
  }

  return (
    <>
      { rowIndex > 0
        ? <div className="property-content">
            {strArr.map ( (part, partIdx) => 
              part.length 
                ? subpropertyNameRegexp.test(part) 
                  ? <span className="subproperty-name"
                      style={{display: (isBriefResults ? "none" : "inline")}}
                      key={partIdx}
                    >
                      {part}
                    </span> 
                  : <span className="subproperty-value"
                      data-tip={tooltipArr[partIdx]}
                      key={partIdx}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      {part}
                    </span>
                : <span></span>
            )}
          </div>
        : <div className="property-name">
            {value}
          </div>
      }

      <ReactTooltip />
    </>
    
  );

}

export default UsersGridItem;

