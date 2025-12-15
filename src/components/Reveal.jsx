import { useEffect, useRef, useState } from "react";

/**
 * Reveal: fades and slides children into view when they enter the viewport.
 * - Starts at opacity 0 and translateY(+24px)
 * - Transitions to opacity 1 and translateY(0)
 * - Respects prefers-reduced-motion
 */
export default function Reveal({
  children,
  className = "",
  threshold = 0.2,
  rootMargin = "0px 0px -10% 0px",
  once = true,
  delay = 0,
  direction = "up", // 'up' | 'left' | 'right'
  ...rest
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // If user prefers reduced motion, reveal immediately
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            setVisible(false);
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  const inlineStyle = delay ? { transitionDelay: `${delay}ms` } : undefined;

  const dirClass = direction === "left" ? "reveal-left" : direction === "right" ? "reveal-right" : "";

  return (
    <div
      ref={ref}
      className={`reveal ${dirClass} ${visible ? "reveal-visible" : ""} ${className}`}
      style={inlineStyle}
      {...rest}
    >
      {children}
    </div>
  );
}
