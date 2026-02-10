import { useState, useCallback } from "react";
import FloatingHearts from "@/components/valentine/FloatingHearts";
import QuestionView from "@/components/valentine/QuestionView";
import SuccessView from "@/components/valentine/SuccessView";

export type ViewState = "question" | "success";

const Index = () => {
  const [view, setView] = useState<ViewState>("question");

  const handleYes = useCallback(() => setView("success"), []);

  return (
    <div className="gradient-romantic min-h-screen relative overflow-hidden">
      <FloatingHearts />
      <main className="relative z-10 flex min-h-screen items-center justify-center px-4 py-8">
        {view === "question" ? (
          <QuestionView onYes={handleYes} />
        ) : (
          <SuccessView />
        )}
      </main>
    </div>
  );
};

export default Index;
