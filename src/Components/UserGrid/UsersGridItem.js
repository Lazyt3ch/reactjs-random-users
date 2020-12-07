// import React, {useState} from "react";
import React from "react";

function UsersGridItem(props) {
  const {value} = props;


  // const getSpannedItem = str => {
  //   console.log("str =", str);
  //   const spannedStr = str.replace(/([a-z]+:)\s/g, <span>$1</span>);
  //   // const spannedStr = str.replace(/([a-z]+:)\s/g, <span></span>);
  //   console.log("spannedStr =", spannedStr);
  //   return <div>{spannedStr}</div>;
  // }


  const getSpannedItem = () => {
    console.log("value =", value);        
    const regexp = new RegExp("([a-z]+:\\s)", "g");
    const strArr = value
      .split(regexp)
      .filter(part => part.length);
    console.log("strArr =", strArr);
    const spannedArr = strArr.map( part => 
      regexp.test(part) 
        ? <span className="users-grid-item">part</span> 
        : part 
    );
    console.log("spannedArr =", spannedArr);
    return spannedArr;
  }

  // const {spannedItem, setSpannedItem} = useState(getSpannedItem(value));

  return (
    <div>
      {() => getSpannedItem()}
    </div>
  );

}

export default UsersGridItem;

