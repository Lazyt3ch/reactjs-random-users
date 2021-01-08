// https://www.cluemediator.com/scroll-to-the-top-of-the-page-after-render-in-reactjs

import {useEffect} from "react";
import {useLocation} from "react-router-dom";
import PropTypes from "prop-types";

interface Props {
  children: JSX.Element;

  scrollTopArr: number[];
  setScrollTopArr: Function;

  activePageNumber: number;

  prevPagePath: string;
  setPrevPagePath: Function;
}
 
function Scroller(props: Props): JSX.Element { 
    const { 
    children, 

    scrollTopArr, 
    setScrollTopArr,

    activePageNumber,

    prevPagePath, 
    setPrevPagePath,
  } = props;

  const {pathname} = useLocation();

  useEffect(() => {
    // The piece of code below is part of the flickering-reduction solution
    if (prevPagePath.startsWith("/view/")) {
      window.scrollTo({
        top: 0,
        behavior: 'auto',
      });            
    }

    setPrevPagePath(pathname);

    if (pathname.startsWith("/view/")) {
      setTimeout( () => {  // setTimeout is vital here!!!
        if (scrollTopArr[activePageNumber]) {
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
    const onScroll = (): void => {
      const scrollPos = document.documentElement.scrollTop;
      if (pathname.startsWith("/view/") && scrollPos > 0) {
        const scrollTopArrNew = scrollTopArr.slice();
        scrollTopArrNew[activePageNumber] = Math.floor(scrollPos);
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
 
Scroller.propTypes = {
  children: PropTypes.object.isRequired,

  scrollTopArr: PropTypes.array.isRequired, 
  setScrollTopArr: PropTypes.func.isRequired,

  activePageNumber: PropTypes.number.isRequired,

  prevPagePath: PropTypes.string.isRequired,
  setPrevPagePath: PropTypes.func.isRequired,
};

export default Scroller;