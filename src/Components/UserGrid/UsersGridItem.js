import React, {useState, useEffect, useCallback} from "react";
// import React from "react";

function UsersGridItem(props) {
  const {value, rowIndex} = props;

  // const getSpannedItem = () => {
  //   console.log("value =", value);        
  //   const regexp = new RegExp("([a-z]+:\\s)", "g");
  //   const strArr = value
  //     .split(regexp)
  //     .filter(part => part.length);
  //   console.log("strArr =", strArr);  
  //   const spannedArr = strArr.map( part => 
  //     regexp.test(part) 
  //       ? <span className="grid-item">{part}</span> 
  //       : <>{part}</>
  //   );
  //   console.log("spannedArr =", spannedArr);
  //   return spannedArr;
  // };

  // const getStrArr = () => {

  // }

  const regexp = new RegExp("([a-z]+:\\s)", "g");
  const [strArr, setStrArr] = useState(
    rowIndex > 0
      ? value.split(regexp).filter(part => part.length)
      : []
  );

  // const {spannedItem, setSpannedItem} = useState(getSpannedItem(value));

  // useEffect( () => {
  //   const spannedItemNew = getSpannedItem();
  //   setSpannedItem(spannedItemNew);
  // }, [value, setSpannedItem, getSpannedItem]);

  return (
    <>
      { rowIndex > 0
          ? <div className="property-content">
              {strArr.map (part => 
              regexp.test(part) 
                ? <span className="subproperty-name">{part}</span> 
                : <span className="subproperty-value">{part}</span>
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

