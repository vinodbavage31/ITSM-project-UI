import { Award, Zap } from "lucide-react";
import confusionMatrix from "@/assets/confusion-matrix.jpg";

const PerformanceSection = () => {
  const models = [
    {
      name: "High Priority Prediction",
      type: "Binary Classification",
      gradient: "from-teal-500 to-teal-600",
      metrics: [
        { label: "Accuracy", value: 96 },
        { label: "AUC-ROC", value: 89 },
        { label: "Precision", value: 94 },
        { label: "Recall", value: 92 },
      ],
    },
    {
      name: "Priority Auto-Tagging",
      type: "Multi-class Classification",
      gradient: "from-purple-400 to-purple-600",
      metrics: [
        { label: "Accuracy", value: 75 },
        { label: "Macro F1", value: 72 },
        { label: "Precision", value: 74 },
        { label: "Recall", value: 71 },
      ],
    },
    {
      name: "RFC Failure Prediction",
      type: "XGBoost + SMOTE",
      gradient: "from-teal-500 to-purple-500",
      metrics: [
        { label: "F1-Score", value: 98 },
        { label: "Precision", value: 97 },
        { label: "Recall", value: 99 },
        { label: "AUC", value: 99 },
      ],
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />
      
      <div className="container relative z-10 px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Award className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Performance Metrics</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Model</span>{" "}
            <span className="gradient-text">Performance</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive evaluation metrics across all predictive models
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-8">
          {models.map((model, index) => (
            <div
              key={index}
              className="group bg-card rounded-3xl border border-border hover:border-primary/20 transition-all duration-500 overflow-hidden glow-card"
            >
              <div className={`p-6 bg-gradient-to-r ${model.gradient} bg-opacity-10`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${model.gradient} flex items-center justify-center`}>
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{model.name}</h3>
                      <p className="text-sm text-muted-foreground">{model.type}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  {model.metrics.map((metric, idx) => (
                    <div key={idx} className="text-center">
                      <div className="relative mb-4">
                        {/* Progress Ring */}
                        <svg className="w-24 h-24 mx-auto transform -rotate-90">
                          <circle
                            cx="48"
                            cy="48"
                            r="42"
                            stroke="currentColor"
                            strokeWidth="8"
                            fill="none"
                            className="text-muted"
                          />
                          <circle
                            cx="48"
                            cy="48"
                            r="42"
                            stroke="url(#gradient)"
                            strokeWidth="8"
                            fill="none"
                            strokeDasharray={`${(metric.value / 100) * 264} 264`}
                            strokeLinecap="round"
                            className="transition-all duration-1000"
                          />
                          <defs>
                            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                              <stop offset="0%" stopColor="hsl(var(--primary))" />
                              <stop offset="100%" stopColor="hsl(var(--accent))" />
                            </linearGradient>
                          </defs>
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className={`text-2xl font-bold bg-gradient-to-r ${model.gradient} bg-clip-text text-transparent`}>
                            {metric.value}%
                          </span>
                        </div>
                      </div>
                      <span className="text-sm font-medium text-muted-foreground">{metric.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Confusion Matrix Visual Section */}
        <div className="mt-20 max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Confusion Matrix Image */}
            <div className="relative rounded-3xl overflow-hidden glow-card group">
              <img 
                src={confusionMatrix} 
                alt="Confusion Matrix Visualization" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-900/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="px-6 py-4 rounded-xl glass-card">
                  <p className="text-lg font-semibold text-foreground">Confusion Matrix</p>
                  <p className="text-sm text-muted-foreground">Model prediction accuracy visualization</p>
                </div>
              </div>
            </div>

            {/* ROC Curve Placeholder with Stats */}
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-navy-800 to-navy-900 border border-primary/20 glow-card p-8">
              <div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/10 rounded-full blur-3xl" />
              
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-foreground mb-6">ROC Curve Analysis</h3>
                
                <div className="space-y-6">
                  {[
                    { label: "High Priority Model", auc: "0.89", color: "from-teal-500 to-teal-600" },
                    { label: "RFC Failure Model", auc: "0.99", color: "from-purple-400 to-purple-600" },
                    { label: "Auto-Tagging Model", auc: "0.82", color: "from-teal-500 to-purple-500" },
                  ].map((item, idx) => (
                    <div key={idx} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">{item.label}</span>
                        <span className={`font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                          AUC: {item.auc}
                        </span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div 
                          className={`h-full bg-gradient-to-r ${item.color} rounded-full transition-all duration-1000`}
                          style={{ width: `${parseFloat(item.auc) * 100}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-4 rounded-xl bg-primary/5 border border-primary/10">
                  <p className="text-sm text-muted-foreground">
                    All models demonstrate <span className="text-primary font-semibold">excellent discrimination</span> between 
                    positive and negative classes with AUC scores above 0.80
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerformanceSection;
