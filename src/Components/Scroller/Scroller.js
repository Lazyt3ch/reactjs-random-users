// https://www.cluemediator.com/scroll-to-the-top-of-the-page-after-render-in-reactjs

import {useEffect} from "react";
import {useLocation} from "react-router-dom";
 
function Scroller(props) { 
  const { 
    children, 
    scrollTop, 
    setScrollTop 
  } = props;

  const {pathname} = useLocation();

  useEffect(() => {
    console.log("SCROLL TO: pathname =", pathname);
    if (pathname === "/view") {
      // console.log("SCROLLER");
      setTimeout( () => {  // setTimeout is vital here!!!
        window.scrollTo(0, scrollTop || 0);
      }, 50);      
    }
  }, [pathname]);

  useEffect(() => {    
    let scrollTop;
    // console.log("SAVE SCROLL: pathname =", pathname);
    const onScroll = e => {
      // console.log(">>>>>>>>");
      // console.log("pathname =", pathname);
      scrollTop = e.target.documentElement.scrollTop;
      // console.log("scrollTop =", scrollTop);
      // console.log("<<<<<<<<<");
      if (pathname === "/view" && scrollTop > 0) {
        setScrollTop(scrollTop);
      }  
    };
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [scrollTop, setScrollTop, pathname]);    
 
  return children;
}
 
export default Scroller;