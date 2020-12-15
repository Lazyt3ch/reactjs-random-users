// https://www.cluemediator.com/scroll-to-the-top-of-the-page-after-render-in-reactjs

import {useEffect} from "react";
import {useLocation} from "react-router-dom";
 
function Scroller(props) { 
  const { 
    children, 

    scrollTopArr, 
    setScrollTopArr,

    activePageNumber,
  } = props;

  const {pathname} = useLocation();

  useEffect(() => {
    if (pathname === "/view") {
      setTimeout( () => {  // setTimeout is vital here!!!
        window.scrollTo(0, scrollTopArr[activePageNumber] || 0);
      }, 50);      
    }
  // eslint-disable-next-line    
  }, [pathname, activePageNumber]);

  useEffect(() => {    
    const onScroll = e => {
      const scrollPos = e.target.documentElement.scrollTop;
      if (pathname === "/view" && scrollPos > 0) {
        console.log("Scroller: scrollTopArr =", scrollTopArr);
        const scrollTopArrNew = scrollTopArr.slice();
        scrollTopArrNew[activePageNumber] = Math.floor(scrollPos);
        console.log("Scroller: activePageNumber =", activePageNumber);
        console.log("Scroller: scrollTopArrNew =", scrollTopArrNew);
        setScrollTopArr(scrollTopArrNew);
      }  
    };
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [scrollTopArr, setScrollTopArr, pathname, activePageNumber]);    
 
  return children;
}
 
export default Scroller;