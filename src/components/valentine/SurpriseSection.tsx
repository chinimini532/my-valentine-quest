import { useState, useMemo } from "react";

const ROMANTIC_LINES = [
  "You're the reason I believe in magic ✨",
  "Every love story is beautiful, but ours is my favorite 💕",
  "I love you more than yesterday, less than tomorrow 🌹",
  "You stole my heart, but I'll let you keep it 💗",
  "With you, every moment is a fairytale 🏰",
];

const SurpriseSection = () => {
  const [revealed, setRevealed] = useState(false);
  const [confettiPieces, setConfettiPieces] = useState<
    { id: number; tx: number; ty: number; color: string }[]
  >([]);

  const line = useMemo(
    () => ROMANTIC_LINES[Math.floor(Math.random() * ROMANTIC_LINES.length)],
    []
  );

  const triggerConfetti = () => {
    const colors = [
      "hsl(340,65%,55%)",
      "hsl(350,85%,60%)",
      "hsl(20,60%,70%)",
      "hsl(340,80%,65%)",
      "hsl(350,50%,92%)",
    ];
    const pieces = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      tx: (Math.random() - 0.5) * 300,
      ty: -(100 + Math.random() * 200),
      color: colors[i % colors.length],
    }));
    setConfettiPieces(pieces);
    setRevealed(true);
    setTimeout(() => setConfettiPieces([]), 1200);
  };

  return (
    <div className="animate-fade-in-up bg-card rounded-2xl p-6 shadow-lg border border-border space-y-4 relative overflow-hidden">
      <h2 className="font-display text-2xl font-semibold text-foreground">
        Your Surprise 🎁
      </h2>

      {!revealed ? (
        <button
          onClick={triggerConfetti}
          className="bg-primary text-primary-foreground font-body font-semibold px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:brightness-110 animate-pulse-soft focus:outline-none focus:ring-4 focus:ring-ring/30"
          aria-label="Reveal surprise"
        >
          Tap to reveal ✨
        </button>
      ) : (
        <p className="font-display text-xl italic text-foreground animate-fade-in-up">
          "{line}"
        </p>
      )}

      {/* Confetti burst */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        aria-hidden="true"
      >
        {confettiPieces.map((p) => (
          <span
            key={p.id}
            className="absolute text-lg animate-confetti"
            style={
              {
                "--tx": `${p.tx}px`,
                "--ty": `${p.ty}px`,
                color: p.color,
              } as React.CSSProperties
            }
          >
            ♥
          </span>
        ))}
      </div>
    </div>
  );
};

export default SurpriseSection;
