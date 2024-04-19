import { useEffect, useState } from "react";
/**
 * UseScrollFade
 * Custom hook that handles window scrolling for knowing if the scroll is near the Top
 */
const UseScrollFade = () => {
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    /**
     * handleScroll
     * Function that uses an EventListener for handling window scrolling
     * Returns a boolean value, when the scollY is near the Top
     */
    const handleScroll = () => {
      setIsAtTop(window.scrollY <= 200);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      // This is the cleaner function (removes the eventListener whenever the
      // component is unmounted
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return isAtTop;
};

export default UseScrollFade;
