import { useState, useEffect, useRef } from "react";

const useInfiniteScroll = (loadMoreItems, hasMoreItems) => {
  const [loading, setLoading] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMoreItems) {
          loadMoreItems();
        }
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [loadMoreItems, hasMoreItems]);

  return { containerRef, loading, setLoading };
};

export default useInfiniteScroll;
