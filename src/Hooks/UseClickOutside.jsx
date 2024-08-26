import { useEffect } from "react";

function useClickOutside(ref, callback) {
  useEffect(() => {
    function handleClickOutside(event) {
      // Check if the click is outside the ref's current element
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    }

    // Add event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener on unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback]);
}

export default useClickOutside;
