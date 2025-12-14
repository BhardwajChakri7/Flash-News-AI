import { useRef } from "react";
import gsap from "gsap";
import "../../index.css";

export const useTilt = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  const onMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(ref.current, {
      rotateX: (-y / rect.height) * 30,
      rotateY: (x / rect.width) * 30,
      duration: 0.4,
      ease: "power3.out",
      transformPerspective: 1000,
    });
  };

  const onMouseLeave = () => {
    if (!ref.current) return;
    gsap.to(ref.current, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.6,
      ease: "power3.out",
    });
  };

  return { ref, onMouseMove, onMouseLeave };
};
