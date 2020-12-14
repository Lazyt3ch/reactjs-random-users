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
    if (pathname === "/view") {
      // console.log("SCROLLER");
      setTimeout( () => {  // setTimeout is vital here!!!
        window.scrollTo(0, scrollTop || 0);
      }, 50);      
    }
  }, [pathname]);

  useEffect(() => {    
    const onScroll = e => {
      console.log("e.target.documentElement.scrollTop =", e.target.documentElement.scrollTop);
      if (pathname === "/view") {
        setScrollTop(e.target.documentElement.scrollTop);
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop, setScrollTop]);    
 
  return children;
}
 
export default Scroller;