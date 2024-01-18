import { useEffect } from "react";

export const useKeyPress = (
  eventType: "keydown" | "keyup",
  callback: (e: React.KeyboardEvent) => void,
  dependencies: React.DependencyList
) => {
  useEffect(() => {
    window.addEventListener(eventType, callback as any);
    return () => {
      window.removeEventListener(eventType, callback as any);
    };
  }, [callback, eventType]);
};
