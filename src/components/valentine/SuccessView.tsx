import { useState, useCallback } from "react";
import DatePicker from "@/components/valentine/DatePicker";
import MessagePanel from "@/components/valentine/MessagePanel";
import SurpriseSection from "@/components/valentine/SurpriseSection";
import LoveNoteSection from "@/components/valentine/LoveNoteSection";

const SuccessView = () => {
  const [activePanel, setActivePanel] = useState<
    "none" | "date" | "surprise" | "lovenote"
  >("none");
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const handleSelectPlan = useCallback((plan: string) => {
    setSelectedPlan(plan);
  }, []);

  const handleUnselectPlan = useCallback(() => {
    setSelectedPlan(null);
  }, []);

  return (
    <div className="animate-fade-in-up text-center max-w-lg w-full space-y-8">
      <div className="text-6xl mb-2 animate-pulse-soft" aria-hidden="true">
        🥰
      </div>
      <h1 className="font-display text-4xl sm:text-5xl font-bold text-gradient-love leading-tight">
        Yay! You said Yes!
      </h1>
      <p className="text-muted-foreground font-body text-lg">
        I knew you had great taste 💕 Now let's make it unforgettable…
      </p>

      <div className="flex flex-col gap-3 items-center">
        <button
          onClick={() => setActivePanel("date")}
          className="w-full max-w-xs bg-primary text-primary-foreground font-body font-semibold px-6 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:brightness-110 focus:outline-none focus:ring-4 focus:ring-ring/30"
          aria-label="Choose our date idea"
        >
          Choose our date idea ✨
        </button>
        <button
          onClick={() => setActivePanel("surprise")}
          className="w-full max-w-xs bg-secondary text-secondary-foreground font-body font-semibold px-6 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-ring/30"
          aria-label="One more surprise"
        >
          One more surprise 🎁
        </button>
        <button
          onClick={() => setActivePanel("lovenote")}
          className="w-full max-w-xs bg-card text-card-foreground border border-border font-body font-semibold px-6 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-ring/30"
          aria-label="Send a love note"
        >
          Send a love note 💌
        </button>
      </div>

      {activePanel === "date" && (
        <DatePicker
          selectedPlan={selectedPlan}
          onSelect={handleSelectPlan}
          onUnselect={handleUnselectPlan}
        />
      )}

      {activePanel === "date" && selectedPlan && (
        <MessagePanel selectedPlan={selectedPlan} />
      )}

      {activePanel === "surprise" && <SurpriseSection />}
      {activePanel === "lovenote" && <LoveNoteSection />}
    </div>
  );
};

export default SuccessView;
