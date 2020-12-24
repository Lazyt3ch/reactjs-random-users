// https://www.cluemediator.com/scroll-to-the-top-of-the-page-after-render-in-reactjs

import {useEffect} from "react";
import {useLocation} from "react-router-dom";
import PropTypes from "prop-types";
 
function Scroller(props) { 
  const { 
    children, 

    scrollTopArr, 
    setScrollTopArr,

    activePageNumber,
  } = props;

  const {pathname} = useLocation();

  useEffect(() => {
    if (pathname.startsWith("/view/")) {
      setTimeout( () => {  // setTimeout is vital here!!!
        if (scrollTopArr[activePageNumber]) {
          // console.log("SCROLLING: ", scrollTopArr);
          window.scrollTo({
            top: scrollTopArr[activePageNumber],
            behavior: 'auto',
          });
        }
      }, 20);      
    }
  // eslint-disable-next-line    
  }, [pathname, activePageNumber]);

  useEffect(() => {    
    const onScroll = e => {
      const scrollPos = e.target.documentElement.scrollTop;
      if (pathname.startsWith("/view/") && scrollPos > 0) {
        const scrollTopArrNew = scrollTopArr.slice();
        scrollTopArrNew[activePageNumber] = Math.floor(scrollPos);
        setScrollTopArr(scrollTopArrNew);
        // console.log("SAVING SCROLL TOP: ", scrollTopArrNew);
      }  
    };
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [scrollTopArr, setScrollTopArr, pathname, activePageNumber]);    
 
  return children;
}
 
Scroller.propTypes = {
  children: PropTypes.array.isRequired,

  scrollTopArr: PropTypes.array.isRequired, 
  setScrollTopArr: PropTypes.func.isRequired,

  activePageNumber: PropTypes.number.isRequired,
};

export default Scroller;