import React, {useState, useEffect, useCallback} from "react";
// import React from "react";

function UsersGridItem(props) {
  const {value} = props;

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
  const [strArr, setStrArr] = useState(value.split(regexp).filter(part => part.length));

  // const {spannedItem, setSpannedItem} = useState(getSpannedItem(value));

  // useEffect( () => {
  //   const spannedItemNew = getSpannedItem();
  //   setSpannedItem(spannedItemNew);
  // }, [value, setSpannedItem, getSpannedItem]);

  return (
    <div>
      { strArr.map (part => 
        regexp.test(part) 
          ? <span className="grid-item">{part}</span> 
          : <>{part}</>
        )
      }
    </div>
  );

}

export default UsersGridItem;

