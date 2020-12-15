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
    // console.log("SCROLL TO: pathname =", pathname);
    if (pathname === "/view") {
      // console.log("SCROLLER");
      setTimeout( () => {  // setTimeout is vital here!!!
        window.scrollTo(0, scrollTopArr[activePageNumber] || 0);
      }, 50);      
    }
  }, [pathname]);

  useEffect(() => {    
    let scrollPos;
    // console.log("SAVE SCROLL: pathname =", pathname);
    const onScroll = e => {
      // console.log(">>>>>>>>");
      // console.log("pathname =", pathname);
      scrollPos = e.target.documentElement.scrollTop;
      // console.log("scrollTop =", scrollTop);
      // console.log("<<<<<<<<<");
      if (pathname === "/view" && scrollPos > 0) {
        // setScrollTop(Math.floor(scrollTopNew));
        const scrollTopArrNew = scrollTopArr.slice();
        scrollTopArrNew[activePageNumber] = Math.floor(scrollPos);
        setScrollTopArr(Math.floor(scrollTopArrNew));
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