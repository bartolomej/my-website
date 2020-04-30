import React, { useEffect } from "react";
import BackgroundEffect from "./background";

export function BackgroundAnimation ({ spacing, size = 5, color, style, width, height, speed }) {
  const containerRef = React.useRef();
  const animationRef = React.useRef();

  useEffect(() => {
    if (animationRef.current) {
      animationRef.current.setDimensions(width, height);
    }
  }, [height, width]);

  useEffect(() => {
    if (containerRef.current) {
      animationRef.current = new BackgroundEffect(
        containerRef.current,
        spacing,
        size,
        color,
        width,
        height,
        speed
      );
      animationRef.current.init();
    }
    return () => animationRef.current.destroy();
  }, [containerRef]);

  return <div className="background-animation" ref={containerRef} style={style} />
}
