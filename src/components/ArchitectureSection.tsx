import { Database, Cog, Brain, LineChart, Package, ArrowRight } from "lucide-react";

const ArchitectureSection = () => {
  const layers = [
    {
      icon: Database,
      title: "Data Source",
      items: ["MySQL ITSM Database", "45,000+ Records", "RFC Transaction Logs"],
      gradient: "from-teal-500 to-teal-600",
    },
    {
      icon: Cog,
      title: "Processing",
      items: ["Pandas & NumPy", "Feature Engineering", "SMOTE Oversampling"],
      gradient: "from-teal-600 to-purple-500",
    },
    {
      icon: Brain,
      title: "ML Models",
      items: ["RandomForest", "XGBoost", "Scikit-learn Pipelines"],
      gradient: "from-purple-500 to-purple-600",
    },
    {
      icon: LineChart,
      title: "Time Series",
      items: ["Exponential Smoothing", "Linear Regression", "Seasonal Analysis"],
      gradient: "from-purple-600 to-teal-500",
    },
    {
      icon: Package,
      title: "Deployment",
      items: ["Joblib Models", ".pkl Files", "Production Ready"],
      gradient: "from-teal-500 to-teal-600",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-background to-muted/30" />
      
      {/* Floating Orbs */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container relative z-10 px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30 mb-6">
            <span className="text-sm font-medium text-accent">System Design</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Technical</span>{" "}
            <span className="gradient-text">Architecture</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            End-to-end data pipeline from raw ITSM data to production-ready models
          </p>
        </div>

        {/* Architecture Flow */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {layers.map((layer, index) => (
              <div key={index} className="relative group">
                {/* Card */}
                <div className="relative bg-card rounded-2xl border border-border hover:border-primary/30 p-6 h-full transition-all duration-500 glow-card">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${layer.gradient} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <layer.icon className="w-7 h-7 text-white" />
                  </div>
                  
                  <h3 className="font-bold text-foreground mb-3">{layer.title}</h3>
                  
                  <ul className="space-y-2">
                    {layer.items.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${layer.gradient}`} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Arrow Connector */}
                {index < layers.length - 1 && (
                  <div className="hidden md:flex absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                    <div className="w-8 h-8 rounded-full bg-card border border-border flex items-center justify-center">
                      <ArrowRight className="w-4 h-4 text-primary" />
                    </div>
                  </div>
                )}

                {/* Mobile Arrow */}
                {index < layers.length - 1 && (
                  <div className="md:hidden flex justify-center py-2">
                    <div className="w-8 h-8 rounded-full bg-card border border-border flex items-center justify-center rotate-90">
                      <ArrowRight className="w-4 h-4 text-primary" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Data Flow Indicator */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            Data flows seamlessly from collection to deployment, ensuring{" "}
            <span className="text-primary font-medium">real-time predictions</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ArchitectureSection;
