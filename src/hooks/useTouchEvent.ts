import { useEffect } from "react";

export const useTouchEvent = (
  eventType: "touchstart" | "touchend",
  callback: (e: TouchEvent) => void
) => {
  useEffect(() => {
    window.addEventListener(eventType, callback);
    return () => {
      window.removeEventListener(eventType, callback);
    };
  }, [callback, eventType]);
};
