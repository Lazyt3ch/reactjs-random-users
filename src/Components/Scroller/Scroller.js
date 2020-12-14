// https://www.cluemediator.com/scroll-to-the-top-of-the-page-after-render-in-reactjs

import {useEffect} from "react";
import {useLocation} from "react-router-dom";
 
function Scroller({ children }) {
  const {pathname} = useLocation();
 
  useEffect(() => {
    if (pathname === "/view") {
      console.log("SCROLLER");
      setTimeout( () => {  // setTimeout is vital here!!!
        window.scrollTo(0, 500);
      }, 50);      
    }
  }, [pathname]);
 
  return children;
}
 
export default Scroller;