import { useState, useCallback, useRef, useEffect } from "react";

const NO_MESSAGES = [
  "Are you sure? 🥺",
  "Think again, cutie! 💭",
  "My heart just cracked a little… 💔",
  "You're breaking my heart! 😢",
  "Please reconsider! 🌹",
  "I'll be sad forever… 😭",
  "Give love a chance! 💞",
  "Wrong button, try the other one! 😉",
  "That's not what your heart says! 💗",
  "I won't give up on us! 🥰",
];

interface QuestionViewProps {
  onYes: () => void;
}

const QuestionView = ({ onYes }: QuestionViewProps) => {
  const [noCount, setNoCount] = useState(0);
  const [noMessage, setNoMessage] = useState("");
  const [noOffset, setNoOffset] = useState({ x: 0, y: 0 });
  const [wiggle, setWiggle] = useState(false);
  const noBtnRef = useRef<HTMLButtonElement>(null);

  const yesScale = 1 + noCount * 0.12;

  const escapeNo = useCallback(() => {
    const x = (Math.random() - 0.5) * 160;
    const y = (Math.random() - 0.5) * 80;
    setNoOffset({ x, y });
    setWiggle(true);
    setNoMessage(NO_MESSAGES[noCount % NO_MESSAGES.length]);
    setNoCount((c) => c + 1);
  }, [noCount]);

  useEffect(() => {
    if (wiggle) {
      const t = setTimeout(() => setWiggle(false), 400);
      return () => clearTimeout(t);
    }
  }, [wiggle]);

  return (
    <div className="animate-fade-in-up text-center max-w-md w-full">
      <div className="text-6xl mb-6 animate-pulse-soft" aria-hidden="true">
        💖
      </div>
      <h1 className="font-display text-4xl sm:text-5xl font-bold text-gradient-love mb-4 leading-tight">
        Will you be my Valentine?
      </h1>
      <p className="text-muted-foreground font-body text-lg mb-10">
        One click can change everything…
      </p>

      {noMessage && (
        <p
          className="text-primary font-body font-semibold text-lg mb-6 animate-fade-in-up"
          role="alert"
        >
          {noMessage}
        </p>
      )}

      <div className="flex items-center justify-center gap-4 flex-wrap relative">
        <button
          onClick={onYes}
          className="bg-primary text-primary-foreground font-body font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:brightness-110 focus:outline-none focus:ring-4 focus:ring-ring/30"
          style={{ transform: `scale(${yesScale})` }}
          aria-label="Yes, I'll be your Valentine"
        >
          Yes 💖
        </button>

        <button
          ref={noBtnRef}
          onClick={escapeNo}
          onMouseEnter={escapeNo}
          className={`bg-secondary text-secondary-foreground font-body font-semibold text-lg px-8 py-4 rounded-full shadow-md transition-all duration-300 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-ring/30 ${
            wiggle ? "animate-wiggle" : ""
          }`}
          style={{
            transform: `translate(${noOffset.x}px, ${noOffset.y}px)`,
            transition: "transform 0.3s ease-out",
          }}
          aria-label="No"
        >
          No 🙈
        </button>
      </div>
    </div>
  );
};

export default QuestionView;
