import React, { useEffect } from "react";
import BackgroundEffect from "./background";

export function Background ({ spacing, size = 5, color }) {
  const containerRef = React.useRef();
  const animationRef = React.useRef();

  useEffect(() => {
    if (containerRef.current) {
      const animation = new BackgroundEffect(
        containerRef.current,
        spacing,
        size,
        color
      );
      animation.init();
      animationRef.current = animation;
    }
    return () => animationRef.current.destroy();
  }, [containerRef]);

  return <div ref={containerRef} style={{ width: '100%', height: '100%' }} />
}
