import { useEffect, useRef, useState } from "react";

export default function CreativeMotion() {
  const glowRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (!glowRef.current) return;

      glowRef.current.animate(
        {
          left: `${event.clientX}px`,
          top: `${event.clientY}px`,
        },
        {
          duration: 500,
          fill: "forwards",
          easing: "ease-out",
        }
      );
    };

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const progress =
        totalHeight > 0 ? (scrollTop / totalHeight) * 100 : 0;

      setScrollProgress(progress);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Cursor-following red glow */}
      <div
        ref={glowRef}
        className="pointer-events-none fixed left-1/2 top-1/2 z-[2] hidden h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-25 blur-[130px] lg:block"
        style={{
          background:
            "radial-gradient(circle, rgba(242,38,46,0.55), transparent 68%)",
        }}
      />

      {/* Scroll progress */}
      <div className="fixed left-0 top-0 z-[100] h-[2px] w-full bg-transparent">
        <div
          className="h-full bg-[#f2262e] shadow-[0_0_18px_rgba(242,38,46,0.85)] transition-[width] duration-150"
          style={{
            width: `${scrollProgress}%`,
          }}
        />
      </div>
    </>
  );
}