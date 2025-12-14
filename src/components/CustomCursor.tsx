import { useRef, useEffect } from "react";
import gsap from "gsap";

const CustomCursor = () => {
  const pointerRef = useRef<HTMLDivElement>(null);

  const mouseMovedOnPage = (e: MouseEvent) => {
    gsap.to(pointerRef.current, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.5,
      ease: "back.out",
    });
  };

  useEffect(() => {
    // Add event listener to document to capture all mouse movements
    document.addEventListener("mousemove", mouseMovedOnPage);
    
    // Show cursor when mouse enters the page
    const handleMouseEnter = () => {
      gsap.to(pointerRef.current, {
        opacity: 1,
        duration: 0.1,
      });
    };
    
    // Hide cursor when mouse leaves the page
    const handleMouseLeave = () => {
      gsap.to(pointerRef.current, {
        opacity: 0,
        duration: 0.1,
      });
    };

    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", mouseMovedOnPage);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={pointerRef}
      className="h-2 w-2 bg-white rounded-full fixed pointer-events-none z-[99999] mix-blend-difference opacity-0"
      style={{ 
        transform: "translate(-50%, -50%)",
        left: 0,
        top: 0
      }}
      ></div>
    



  );
};

export { CustomCursor };