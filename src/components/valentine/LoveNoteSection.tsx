import { useState, useCallback } from "react";

const LoveNoteSection = () => {
  const [note, setNote] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submittedNote, setSubmittedNote] = useState("");

  const handleSubmit = useCallback(() => {
    if (!note.trim()) return;
    setSubmittedNote(note);
    setSubmitted(true);
  }, [note]);

  return (
    <div className="animate-fade-in-up bg-card rounded-2xl p-6 shadow-lg border border-border space-y-4">
      <h2 className="font-display text-2xl font-semibold text-foreground">
        Love Note 💌
      </h2>

      {!submitted ? (
        <>
          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Pour your heart out…"
            rows={4}
            className="w-full rounded-xl border border-input bg-background px-4 py-3 font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-4 focus:ring-ring/30 resize-none"
            aria-label="Love note"
          />
          <button
            onClick={handleSubmit}
            disabled={!note.trim()}
            className="w-full bg-primary text-primary-foreground font-body font-semibold px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:brightness-110 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-4 focus:ring-ring/30"
            aria-label="Submit love note"
          >
            Send with love 💗
          </button>
        </>
      ) : (
        <div className="animate-fade-in-up space-y-3">
          <p className="font-body font-semibold text-primary">
            Your love note has been received 💖
          </p>
          <div className="bg-blush rounded-xl p-5 text-left">
            <p className="font-display text-lg italic text-foreground whitespace-pre-wrap">
              "{submittedNote}"
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoveNoteSection;
