// https://www.cluemediator.com/scroll-to-the-top-of-the-page-after-render-in-reactjs

import {useEffect} from "react";
import {useLocation} from "react-router-dom";

import {RootState} from "../../redux/store";
import actionTypes from "../../redux/actionTypes";
import {useSelector, useDispatch} from 'react-redux';

import PropTypes from "prop-types";

interface Props {
  children: JSX.Element;
}

function Scroller(props: Props): JSX.Element { 
  const { children } = props;

  const {pathname} = useLocation();

  const dispatch = useDispatch();

  const scrollTopArr = useSelector((state: RootState) => state.scrollTopArr);
  const activePageNumber = useSelector((state: RootState) => state.activePageNumber);
  const prevPagePath = useSelector((state: RootState) => state.prevPagePath);

  useEffect(() => {
    // The piece of code below is part of the flickering-reduction solution
    if (prevPagePath.startsWith("/view/")) {
      window.scrollTo({
        top: 0,
        behavior: 'auto',
      });            
    }

    dispatch({ type: actionTypes.PREV_PAGE_PATH, payload: pathname });    

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
        const undatedScrollTopArr = scrollTopArr.slice();
        undatedScrollTopArr[activePageNumber] = Math.floor(scrollPos);
        dispatch({ type: actionTypes.SCROLL_TOP_ARR, payload: undatedScrollTopArr });
      }  
    };
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [scrollTopArr, dispatch, pathname, activePageNumber]);    
 
  return children;
}
 
Scroller.propTypes = {
  children: PropTypes.object.isRequired,
};

export default Scroller;