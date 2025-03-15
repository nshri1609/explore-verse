
import { useEffect, useState, useRef } from "react";

interface UseIntersectionObserverProps {
  root?: null | HTMLElement;
  rootMargin?: string;
  threshold?: number | number[];
  freezeOnceVisible?: boolean;
}

function useIntersectionObserver({
  root = null,
  rootMargin = "0px",
  threshold = 0.1,
  freezeOnceVisible = true,
}: UseIntersectionObserverProps = {}) {
  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const elementRef = useRef<HTMLElement | null>(null);
  const frozen = useRef<boolean>(false);

  const updateEntry = ([entry]: IntersectionObserverEntry[]): void => {
    setEntry(entry);
    setIsVisible(entry.isIntersecting);
    
    if (freezeOnceVisible && entry.isIntersecting) {
      frozen.current = true;
    }
  };

  useEffect(() => {
    const node = elementRef.current;
    
    // Do nothing if no element or already frozen
    if (!node || (freezeOnceVisible && frozen.current)) return;
    
    const observerParams = { root, rootMargin, threshold };
    const observer = new IntersectionObserver(updateEntry, observerParams);
    
    observer.observe(node);
    
    return () => {
      observer.disconnect();
    };
  }, [root, rootMargin, threshold, freezeOnceVisible]);

  return { ref: elementRef, entry, isVisible };
}

// Custom hook to initialize reveal animations
export function useRevealAnimations() {
  useEffect(() => {
    const setupRevealAnimations = () => {
      const callback = (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      };

      const observer = new IntersectionObserver(callback, {
        threshold: 0.1,
      });

      document.querySelectorAll(".reveal").forEach((element) => {
        observer.observe(element);
      });

      return observer;
    };

    const observer = setupRevealAnimations();

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);
}

export default useIntersectionObserver;
