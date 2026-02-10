import { useMemo } from "react";

const HEART_CHARS = ["♥", "♡", "❤", "💕", "💗"];

const FloatingHearts = () => {
  const hearts = useMemo(
    () =>
      Array.from({ length: 15 }, (_, i) => ({
        id: i,
        char: HEART_CHARS[i % HEART_CHARS.length],
        left: Math.random() * 100,
        delay: Math.random() * 12,
        duration: 8 + Math.random() * 10,
        size: 14 + Math.random() * 20,
      })),
    []
  );

  return (
    <div className="fixed inset-0 pointer-events-none z-0" aria-hidden="true">
      {hearts.map((h) => (
        <span
          key={h.id}
          className="absolute animate-float-heart text-heart-red/30"
          style={{
            left: `${h.left}%`,
            animationDelay: `${h.delay}s`,
            animationDuration: `${h.duration}s`,
            fontSize: `${h.size}px`,
          }}
        >
          {h.char}
        </span>
      ))}
    </div>
  );
};

export default FloatingHearts;
