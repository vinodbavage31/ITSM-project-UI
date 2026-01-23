import { AlertTriangle, TrendingUp, Tags, Shield, ArrowUpRight } from "lucide-react";

const problems = [
  {
    icon: AlertTriangle,
    title: "High Priority Prediction",
    problem: "Critical incidents often escalate before teams can respond",
    solution: "Binary classification model identifies high-priority tickets instantly",
    metrics: [
      { label: "Accuracy", value: "96%" },
      { label: "AUC Score", value: "0.89" },
    ],
    gradient: "from-teal-500 to-teal-600",
    delay: "animation-delay-100",
  },
  {
    icon: TrendingUp,
    title: "Volume Forecasting",
    problem: "Unpredictable incident volumes lead to staffing issues",
    solution: "Time-series forecasting predicts quarterly & annual trends",
    metrics: [
      { label: "Quarterly", value: "±5%" },
      { label: "Annual", value: "±3%" },
    ],
    gradient: "from-purple-400 to-purple-600",
    delay: "animation-delay-200",
  },
  {
    icon: Tags,
    title: "Auto-Tagging System",
    problem: "Manual categorization is slow and error-prone",
    solution: "Multi-class classifier auto-assigns Priority P1–P5 & Department",
    metrics: [
      { label: "Accuracy", value: "75%" },
      { label: "Categories", value: "10+" },
    ],
    gradient: "from-teal-500 to-purple-500",
    delay: "animation-delay-300",
  },
  {
    icon: Shield,
    title: "RFC Failure Prevention",
    problem: "Change failures cause outages and revenue loss",
    solution: "XGBoost + SMOTE predicts risky change requests",
    metrics: [
      { label: "F1-Score", value: "98%" },
      { label: "Precision", value: "97%" },
    ],
    gradient: "from-purple-500 to-teal-500",
    delay: "animation-delay-400",
  },
];

const BusinessProblemsSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="container relative z-10 px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30 mb-6">
            <span className="text-sm font-medium text-accent">Key Achievements</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Business Problems</span>
            <br />
            <span className="gradient-text">& ML Solutions</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Four critical challenges addressed with tailored machine learning models, 
            delivering measurable impact on IT operations efficiency.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {problems.map((problem, index) => (
            <div
              key={index}
              className={`group relative p-8 rounded-3xl bg-card border border-border hover:border-primary/30 transition-all duration-500 glow-card animate-fade-up ${problem.delay}`}
            >
              {/* Icon & Title */}
              <div className="flex items-start gap-4 mb-6">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${problem.gradient} flex items-center justify-center shadow-lg`}>
                  <problem.icon className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {problem.title}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 absolute top-8 right-8 transition-all duration-300" />
                </div>
              </div>

              {/* Problem & Solution */}
              <div className="space-y-4 mb-6">
                <div className="p-4 rounded-xl bg-destructive/5 border border-destructive/10">
                  <p className="text-sm font-medium text-destructive mb-1">Challenge</p>
                  <p className="text-sm text-muted-foreground">{problem.problem}</p>
                </div>
                <div className="p-4 rounded-xl bg-primary/5 border border-primary/10">
                  <p className="text-sm font-medium text-primary mb-1">Solution</p>
                  <p className="text-sm text-muted-foreground">{problem.solution}</p>
                </div>
              </div>

              {/* Metrics */}
              <div className="flex gap-4">
                {problem.metrics.map((metric, metricIndex) => (
                  <div key={metricIndex} className="flex-1 p-4 rounded-xl bg-muted/50 text-center">
                    <p className={`text-2xl font-bold bg-gradient-to-r ${problem.gradient} bg-clip-text text-transparent`}>
                      {metric.value}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">{metric.label}</p>
                  </div>
                ))}
              </div>

              {/* Hover Gradient */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${problem.gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 pointer-events-none`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessProblemsSection;
