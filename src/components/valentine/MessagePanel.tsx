import { useState, useCallback } from "react";
import { sendPlanEmail } from "@/lib/valentine-api";

interface MessagePanelProps {
  selectedPlan: string;
}

const MessagePanel = ({ selectedPlan }: MessagePanelProps) => {
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);
  const [sentMessage, setSentMessage] = useState("");

  const handleSend = useCallback(async () => {
    if (!message.trim()) return;
    await sendPlanEmail(selectedPlan, message);
    setSentMessage(message);
    setSent(true);
  }, [message, selectedPlan]);

  return (
    <div className="animate-fade-in-up bg-card rounded-2xl p-6 shadow-lg border border-border space-y-4">
      <h2 className="font-display text-2xl font-semibold text-foreground">
        Send a message 💌
      </h2>

      {!sent ? (
        <>
          <div className="bg-blush rounded-xl p-4 text-left space-y-1">
            <p className="font-body text-sm text-muted-foreground">
              Your plan:
            </p>
            <p className="font-body font-semibold text-foreground">
              {selectedPlan}
            </p>
          </div>

          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Write something sweet…"
            rows={3}
            className="w-full rounded-xl border border-input bg-background px-4 py-3 font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-4 focus:ring-ring/30 resize-none"
            aria-label="Love message"
          />

          {message.trim() && (
            <div className="animate-fade-in-up bg-blush rounded-xl p-4 text-left">
              <p className="font-body text-xs text-muted-foreground mb-1">
                Preview:
              </p>
              <p className="font-body text-foreground whitespace-pre-wrap">
                {message}
              </p>
            </div>
          )}

          <button
            onClick={handleSend}
            disabled={!message.trim()}
            className="w-full bg-primary text-primary-foreground font-body font-semibold px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:brightness-110 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-4 focus:ring-ring/30"
            aria-label="Send message"
          >
            Send 💖
          </button>
          <p className="font-body text-xs text-muted-foreground">
            (Email delivery will be enabled later via an API.)
          </p>
        </>
      ) : (
        <div className="animate-fade-in-up space-y-3">
          <div className="bg-primary/10 rounded-xl p-4">
            <p className="font-body font-semibold text-primary">
              Sent! Your message is saved here (email sending will be added
              later) 💖
            </p>
          </div>
          <div className="bg-blush rounded-xl p-4 text-left space-y-2">
            <p className="font-body text-sm text-muted-foreground">Plan:</p>
            <p className="font-body font-semibold text-foreground">
              {selectedPlan}
            </p>
            <p className="font-body text-sm text-muted-foreground mt-2">
              Message:
            </p>
            <p className="font-body text-foreground whitespace-pre-wrap">
              {sentMessage}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MessagePanel;
