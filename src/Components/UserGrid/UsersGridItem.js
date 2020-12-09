import React, {useState, useEffect, useMemo} from "react";

// Finally, using a very fast pure CSS tooltip from here:
// https://www.w3schools.com/css/tryit.asp?filename=trycss_tooltip_arrow_bottom
// 
// Material-UI tooltips slowed down page rendering;
// react-tooltip seems to be buggy. 

function UsersGridItem(props) {
  const {
    value, 
    rowIndex, 
    isBriefResults,
  } = props;

  // console.log("value =", value);

  const subpropNamePattern = "[a-z]+:\\s";
  const subpropNameRegexp = useMemo( () => new RegExp(subpropNamePattern), [] );

  const [strArr, setStrArr] = useState([]);
  
  useEffect( 
    () => {
      const subpropNameOrClosingParenRegexp = new RegExp(`(${subpropNamePattern}|[)])`);
      setStrArr(rowIndex > 0
      ? value.split(subpropNameOrClosingParenRegexp)
        .filter( part => part.length )
      : [])
    }, 
    [value, rowIndex, setStrArr]
  );

  // console.log("strArr =", strArr);

  const [tooltipArr, setTooltipArr] = useState([]);
  
  useEffect( 
    () => {
      const tooltipArrNew = [];
      const nameStack = [];
      for (let i = 0; i < strArr.length; i++) {
        if ( strArr[i] === "(" ) {
          if (i > 0 && subpropNameRegexp.test(strArr[i - 1]) ) {
            nameStack.push(strArr[i - 1]);
          }
          tooltipArrNew.push("");
        } else if ( strArr[i] === ")" ) {
          if (nameStack.length) {
            nameStack.pop();
          }
          tooltipArrNew.push("");
        } else if ( i > 0 && subpropNameRegexp.test(strArr[i - 1]) ) {
          tooltipArrNew.push( `${
            nameStack.length ? nameStack[nameStack.length - 1] : ""
          }${strArr[i - 1].slice(0, -2)}` );
        } else {
          tooltipArrNew.push("");
        }
      }    
      setTooltipArr(tooltipArrNew);
      // console.log("tooltipArrNew =", tooltipArrNew)
    }, 
    [value, strArr, subpropNameRegexp]
  );  

  return (
    <>
      { rowIndex > 0
        ? <div className="grid-item property-content">
            {strArr.map ( (part, partIdx) => 
              part.length 
                ? subpropNameRegexp.test(part) 
                  ? <span className="subproperty-name"
                      style={{display: (isBriefResults ? "none" : "inline")}}
                      key={partIdx}
                    >
                      {part}
                    </span> 
                  : <span className="subproperty-value" class="tooltip"
                    >
                      {part}
                      {tooltipArr[partIdx] && tooltipArr[partIdx].length
                        ? <span class="tooltiptext"                        
                            aria-label={tooltipArr[partIdx]}   
                          >
                            {tooltipArr[partIdx]}
                          </span>
                        : ""
                      }
                    </span>
                : <span></span>              
            )}
            
          </div>
        : <div className="grid-item property-name">
            {value}
          </div>
      }

    </>
    
  );

}

export default UsersGridItem;

