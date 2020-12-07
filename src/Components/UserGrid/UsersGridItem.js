import React, {useState} from "react";

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

  const popupArr = strArr.map( (_, idx) => 
    idx > 0 && subpropertyNameRegexp.test(strArr[idx - 1])
      ? strArr[idx - 1].slice(0, -2)
      : ""
  );

  const [currentPopup, setCurrentPopup] = useState(null);

  function handleMouseEnter(event) {
    // console.log("event.target =", event.target);
    const popupStr = event.target.dataset.userSubpropertyName;
    // console.log("popupStr =", popupStr);
    if (popupStr && popupStr.length) {
      // console.log(popupStr);

    }
  }

  function handleMouseLeave(event) {
    setCurrentPopup(null);
  }

  // console.log("popupArr =", popupArr);

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
                  data-user-subproperty-name={popupArr[idx]}
                  key={idx}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
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

