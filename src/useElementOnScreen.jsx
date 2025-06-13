import { useState, useRef, useEffect } from "react";

function useElementOnScreen(options) {
  const containerRef = useRef();
  const [isVisible, setIsVisible] = useState(false);
  const callbackFunc = (entries) => {
    const [entry] = entries;
    if (!entry.isIntersecting) return;
    setIsVisible(entry.isIntersecting);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunc, options);
    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [containerRef, options]);

  return { containerRef, isVisible };
}

export default useElementOnScreen;
