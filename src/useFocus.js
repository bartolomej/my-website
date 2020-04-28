import { useEffect, useState } from "react";


export default function (elementRef) {
  const [isFocused, setFocused] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [elementRef]);

  function onScroll (e) {
    const ele = elementRef.current;
    if (elementRef.current) {
      const entryPoint = window.scrollY + (window.innerHeight * (2 / 3));
      const exitPoint = window.scrollY + (window.innerHeight / 6);
      if (ele.offsetTop < entryPoint && ele.offsetTop > exitPoint) {
        setFocused(true);
      } else {
        setFocused(false);
      }
    }
  }

  return isFocused;
}
