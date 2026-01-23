import { Database, Wrench, Brain, CheckCircle, Rocket, ArrowRight } from "lucide-react";

const WorkflowSection = () => {
  const steps = [
    {
      icon: Database,
      title: "Data Collection",
      description: "Extract 45,000+ incident records from MySQL ITSM database",
      details: ["SQL queries", "Data extraction", "Initial validation"],
    },
    {
      icon: Wrench,
      title: "Data Cleaning & Feature Engineering",
      description: "Transform raw data into ML-ready features",
      details: ["Missing value handling", "Encoding", "Feature creation", "SMOTE for imbalance"],
    },
    {
      icon: Brain,
      title: "Model Training",
      description: "Train multiple ML models with cross-validation",
      details: ["RandomForest", "XGBoost", "Logistic Regression", "Hyperparameter tuning"],
    },
    {
      icon: CheckCircle,
      title: "Evaluation",
      description: "Rigorous model evaluation and comparison",
      details: ["Accuracy metrics", "AUC-ROC analysis", "Confusion matrix", "Cross-validation"],
    },
    {
      icon: Rocket,
      title: "Prediction & Automation",
      description: "Deploy models for real-time predictions",
      details: ["Model serialization", "Batch predictions", "Integration ready"],
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase text-primary bg-accent rounded-full mb-4">
            Methodology
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Project Workflow
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            End-to-end data science workflow from data collection to deployment
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Timeline Line - Desktop */}
            <div className="hidden md:block absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-primary via-teal-500 to-emerald-500 rounded-full" />
            
            {/* Steps */}
            <div className="grid md:grid-cols-5 gap-6">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  {/* Timeline Node - Desktop */}
                  <div className="hidden md:flex absolute top-16 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary border-4 border-background shadow-lg z-10 items-center justify-center">
                    <span className="text-xs font-bold text-primary-foreground">{index + 1}</span>
                  </div>

                  {/* Card */}
                  <div className="bg-card rounded-xl border border-border shadow-card hover:shadow-card-hover transition-all duration-300 p-5 md:mt-28 h-full">
                    {/* Mobile step number */}
                    <div className="md:hidden flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                        <span className="text-xs font-bold text-primary-foreground">{index + 1}</span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-muted-foreground" />
                    </div>

                    <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-4">
                      <step.icon className="w-6 h-6 text-primary" />
                    </div>
                    
                    <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{step.description}</p>
                    
                    <ul className="space-y-1.5">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs text-muted-foreground">
                          <span className="w-1 h-1 rounded-full bg-primary" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;
