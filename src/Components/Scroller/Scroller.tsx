// https://www.cluemediator.com/scroll-to-the-top-of-the-page-after-render-in-reactjs

import {useEffect} from "react";
import {useLocation} from "react-router-dom";

import {RootState} from "../../redux/store";
import actionTypes from "../../redux/actionTypes";
import {useSelector, useDispatch} from 'react-redux';

import PropTypes from "prop-types";

// import store from "../../redux/store";

interface Props {
  children: JSX.Element;

//   scrollTopArr: number[];
//   setScrollTopArr: Function;

//   activePageNumber: number;

//   prevPagePath: string;
//   setPrevPagePath: Function;
}

function Scroller(props: Props): JSX.Element { 
// function Scroller(): JSX.Element { 
  //   const { 
  //   children, 

  //   scrollTopArr, 
  //   setScrollTopArr,

  //   activePageNumber,

  //   prevPagePath, 
  //   setPrevPagePath,
  // } = props;

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

    // setPrevPagePath(pathname);
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
        // const scrollTopArrNew = scrollTopArr.slice();
        // scrollTopArrNew[activePageNumber] = Math.floor(scrollPos);
        const undatedScrollTopArr = scrollTopArr.slice();
        undatedScrollTopArr[activePageNumber] = Math.floor(scrollPos);
        // setScrollTopArr(scrollTopArrNew);
        dispatch({ type: actionTypes.SCROLL_TOP_ARR, payload: undatedScrollTopArr });
      }  
    };
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [scrollTopArr, dispatch, pathname, activePageNumber]);    
  // }, [scrollTopArr, setScrollTopArr, pathname, activePageNumber]);    
 
  return children;
}
 
Scroller.propTypes = {
  children: PropTypes.object.isRequired,

//   scrollTopArr: PropTypes.array.isRequired, 
//   setScrollTopArr: PropTypes.func.isRequired,

//   activePageNumber: PropTypes.number.isRequired,

//   prevPagePath: PropTypes.string.isRequired,
//   setPrevPagePath: PropTypes.func.isRequired,
};

export default Scroller;