import { useEffect } from "react";

const ScrollToTop = () => {
  useEffect(() => {
    const handleLinkClick = (event) => {
      if (event.target.getAttribute("href").startsWith("/")) {
        window.scrollTo(0, 0);
      }
    };

    document.addEventListener("click", handleLinkClick);

    return () => {
      document.removeEventListener("click", handleLinkClick);
    };
  }, []);

  return null;
};

export default ScrollToTop;
