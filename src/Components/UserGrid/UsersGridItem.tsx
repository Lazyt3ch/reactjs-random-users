import React, {useState, useEffect, useMemo} from "react";
import PropTypes from "prop-types";

// import store from "../../redux/store";

// Finally, using a very fast pure CSS tooltip from here:
// https://www.w3schools.com/css/tryit.asp?filename=trycss_tooltip_arrow_bottom
// 
// Material-UI tooltips slowed down page rendering;
// react-tooltip seems to be buggy. 

interface Props {
  value: string; 
  rowIndex: number;
  isBriefResults: boolean;
  style: React.CSSProperties;
}

function UsersGridItem(props: Props) {
  const {
    value, 
    rowIndex, 
    isBriefResults,
    style,
  } = props;

  const subpropNamePattern = "[a-z]+:\\s";
  const subpropNameRegexp = useMemo( () => new RegExp(subpropNamePattern), [] );

  const [strArr, setStrArr] = useState<string[]>([]);
  
  useEffect( 
    () => {
      const subpropNameOrClosingParenRegexp = new RegExp(`(${subpropNamePattern}|\\])`);
      setStrArr(rowIndex > 0
      ? value.split(subpropNameOrClosingParenRegexp)
        .filter( part => part.length )
      : [])
    }, 
    [value, rowIndex, setStrArr]
  );

  const [tooltipArr, setTooltipArr] = useState<string[]>([]);
  
  useEffect( 
    () => {
      const tooltipArrNew: string[] = [];
      const nameStack: string[] = [];
      for (let i = 0; i < strArr.length; i++) {
        if ( strArr[i] === "[" ) {
          if (i > 0 && subpropNameRegexp.test(strArr[i - 1]) ) {
            nameStack.push(strArr[i - 1]);
          }
          tooltipArrNew.push("");
        } else if ( strArr[i] === "]" ) {
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
    }, 
    [value, strArr, subpropNameRegexp]
  );  

  return (
    <div style={style}>
      { rowIndex > 0
        ? <div className="grid-item property-content"
            dir="ltr"
          >
            {strArr.map ( (part, partIdx) => 
              part.length 
                ? subpropNameRegexp.test(part) 
                  ? <span className="subproperty-name"
                      style={{display: (isBriefResults ? "none" : "inline")}}
                      key={partIdx}
                    >
                      {part}
                    </span> 
                  : <span className={ `subproperty-value 
                      ${tooltipArr[partIdx] && tooltipArr[partIdx].length ? "tooltip" : ""}` }
                      key={partIdx}
                      dir="ltr"
                    >
                      {part}
                      {tooltipArr[partIdx] && tooltipArr[partIdx].length
                        ? <span className="tooltiptext"                        
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

    </div>
    
  );

}

UsersGridItem.propTypes = {
  value: PropTypes.string.isRequired,
  rowIndex: PropTypes.number.isRequired,
  isBriefResults: PropTypes.bool.isRequired,
  style: PropTypes.object,
};

export default UsersGridItem;

