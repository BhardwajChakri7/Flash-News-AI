// FeatureCard.jsx
import { useTilt } from "./ui/useTilt"; // Assuming useTilt is in a file named useTilt.js/ts
import "../index.css";
const FeatureCard = ({ title, description, iconPath, svgViewBox }) => {
  // *** KEY FIX: Call the hook inside the component so each instance gets its own ref. ***
  const { ref, onMouseMove, onMouseLeave } = useTilt();

  // The className containing the Tailwind tilt CSS should also use CSS variables
  // or `transform-style: preserve-3d;` if you add more 3D elements.

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="mainCard
        group relative flex h-full w-[400px] flex-col justify-between
        rounded-3xl border border-white/40
        bg-[#0F1418] p-8 overflow-hidden
        transition-all duration-500 ease-out
        hover:-translate-y-2
        hover:shadow-[0_0_60px_-15px_rgba(154,233,117,0.25)]
      ">
      <div
        className="
          absolute inset-0 -z-10 rounded-3xl
          bg-[radial-gradient(500px_at_20%_100%,rgba(255, 255, 255, 1),transparent)]
          opacity-0 transition-opacity duration-500
          group-hover:opacity-100
        "
      />

      {/* Icon */}
      <div className="iconImage mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-[#ffffff]">
        <svg fill="currentColor" height="22" viewBox={svgViewBox} width="22">
          <path d={iconPath} />
        </svg>
      </div>

      {/* Title */}
      <h3 className="mb-3 text-2xl font-semibold tracking-tight text-[#EDEDED]">
        {title}
      </h3>

      {/* Description */}
      <p className="overflow-hidden mb-6 flex-grow text-base leading-relaxed text-[#9AA0A6]">
        {description}
      </p>
    </div>
  );
};
export default FeatureCard;
