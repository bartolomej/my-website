import { useEffect, useState } from "react";


/**
 * This hook determines when target element is focused.
 * Works for both 'mobile' and 'desktop' mode.
 */
export default function (elementRef) {
  const [isFocused, setFocused] = useState(false);

  useEffect(() => {
    // dependant on a tiny 'isMobile' javascript library (check index.html)
    if (window.isMobile.any) {
      window.addEventListener('scroll', onScroll);
      return () => window.removeEventListener('scroll', onScroll);
    } else {
      const ele = elementRef.current;
      if (ele) {
        ele.addEventListener('mouseover', () => setFocused(true));
        ele.addEventListener('mouseout', () => setFocused(false));
      }
    }
  }, [elementRef]);

  function onScroll (e) {
    const ele = elementRef.current;
    if (elementRef.current) {
      const entryPoint = window.scrollY + (window.innerHeight * (1 / 2));
      const exitPoint = window.scrollY;
      if (ele.offsetTop < entryPoint && ele.offsetTop > exitPoint) {
        setFocused(true);
      } else {
        setFocused(false);
      }
    }
  }

  return isFocused;
}
