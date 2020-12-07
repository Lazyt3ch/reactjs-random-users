import React from "react";
import ReactTooltip from 'react-tooltip';

function UsersGridItem(props) {
  const {
    value, 
    rowIndex, 
    isBriefResults,
  } = props;

  console.log("value =", value);

  // const subpropNamePattern = "([a-z]+:\\s)";
  // const subpropNameRegexp = new RegExp(subpropNamePattern);
  // const subpropNameOrClosingParenRegexp = new RegExp(`${subpropNamePattern}|([)])`);
  // console.log(`${subpropNamePattern}|(\\))`);

  const subpropNamePattern = "[a-z]+:\\s";
  const subpropNameRegexp = new RegExp(subpropNamePattern);
  const subpropNameOrClosingParenRegexp = new RegExp(`(${subpropNamePattern}|[)])`);
  // console.log(`${subpropNamePattern}|(\\))`);

  const strArr = rowIndex > 0
    ? value.split(subpropNameOrClosingParenRegexp)
      .filter( part => part.length )
    : [];

  console.log("strArr =", strArr);

  // const tooltipArr = strArr.map( (_, idx) => 
  //   idx > 0 && subpropNameRegexp.test(strArr[idx - 1])
  //     ? strArr[idx - 1].slice(0, -2)
  //     : ""
  // );

  const tooltipArr = [];
  const nameStack = [];

  for (let i = 0; i < strArr.length; i++) {
    if ( strArr[i] === "(" ) {
      if (i > 0 && subpropNameRegexp.test(strArr[i - 1]) ) {
        nameStack.push(strArr[i - 1]);
      }
      tooltipArr.push("");
    } else if ( strArr[i] === ")" ) {
      if (nameStack.length) {
        nameStack.pop();
      }
      tooltipArr.push("");
    } else if ( i > 0 && subpropNameRegexp.test(strArr[i - 1]) ) {
      tooltipArr.push( `${
        nameStack.length ? nameStack[nameStack.length - 1] : ""
      }${strArr[i - 1].slice(0, -2)}` );
    } else {
      tooltipArr.push("");
    }
  }

  function handleMouseEnter(event) {
    // if (isBriefResults) {
    //   // console.log("mouse enter");
    //   const tooltipStr = event.target.dataset.tip;
    //   if (tooltipStr && tooltipStr.length) {
    //     ReactTooltip.show(event.target);
    //   }
    // }

    const tooltipStr = event.target.dataset.tip;
    if (tooltipStr && tooltipStr.length) {
      ReactTooltip.show(event.target);
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
                ? subpropNameRegexp.test(part) 
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

