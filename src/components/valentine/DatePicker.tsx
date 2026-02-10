const DATE_OPTIONS = [
  { id: "coffee", label: "Coffee + walk ☕🌿" },
  { id: "dinner", label: "Dinner date 🍽️✨" },
  { id: "movie", label: "Movie night 🎬🍿" },
  { id: "picnic", label: "Picnic (indoors if cold) 🧺🏡" },
  { id: "stargazing", label: "Stargazing 🌙⭐" },
];

interface DatePickerProps {
  selectedPlan: string | null;
  onSelect: (plan: string) => void;
  onUnselect: () => void;
}

const DatePicker = ({ selectedPlan, onSelect, onUnselect }: DatePickerProps) => {
  return (
    <div className="animate-fade-in-up bg-card rounded-2xl p-6 shadow-lg border border-border space-y-4">
      <h2 className="font-display text-2xl font-semibold text-foreground">
        Pick our date 💞
      </h2>
      <div className="space-y-2">
        {DATE_OPTIONS.map((opt) => {
          const isSelected = selectedPlan === opt.label;
          const isDisabled = selectedPlan !== null && !isSelected;
          return (
            <button
              key={opt.id}
              onClick={() => !isDisabled && onSelect(opt.label)}
              disabled={isDisabled}
              className={`w-full text-left px-5 py-3.5 rounded-xl font-body font-medium transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-ring/30 ${
                isSelected
                  ? "bg-primary text-primary-foreground shadow-md"
                  : isDisabled
                  ? "bg-muted text-muted-foreground opacity-50 cursor-not-allowed"
                  : "bg-secondary text-secondary-foreground hover:bg-primary/10 hover:shadow-sm"
              }`}
              aria-label={opt.label}
              aria-pressed={isSelected}
            >
              <span className="flex items-center justify-between">
                <span>{opt.label}</span>
                {isSelected && (
                  <span className="text-sm font-bold">Selected ✅</span>
                )}
              </span>
            </button>
          );
        })}
      </div>

      {selectedPlan && (
        <div className="animate-fade-in-up space-y-3">
          <p className="font-body text-foreground font-semibold">
            Locked in! Can't wait for our {selectedPlan} 💞
          </p>
          <button
            onClick={onUnselect}
            className="text-sm font-body text-muted-foreground underline hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-ring/30 rounded"
            aria-label="Unselect date plan"
          >
            Unselect
          </button>
        </div>
      )}
    </div>
  );
};

export default DatePicker;
