import { useRef } from "react";

export const SwipeProgress = ({ onChange }) => {
  const containerRef = useRef(null);
  const startY = useRef(null);

  const handleTouchStart = (e) => {
    startY.current = e.touches[0].clientY;
  };

  const handleTouchMove = (e) => {
    if (!containerRef.current) return;

    const containerHeight = containerRef.current.offsetHeight;
    let delta = e.touches[0].clientY - startY.current;

    let newProgress = (delta / containerHeight) * 100;

    if (newProgress < 0) newProgress = 0;
    if (newProgress > 100) newProgress = 100;

    onChange(newProgress); // Hero component will receive the % here
  };

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-50" 
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    />
  );
};
