import { Target, TrendingUp, Brain, Shield, ArrowRight } from "lucide-react";
import mlPrediction from "@/assets/ml-prediction-enhanced.jpg";

const OverviewSection = () => {
  const highlights = [
    {
      icon: Target,
      title: "Precision Targeting",
      description: "Identify high-priority incidents before they escalate",
    },
    {
      icon: TrendingUp,
      title: "Trend Analysis",
      description: "Forecast incident volumes for better resource planning",
    },
    {
      icon: Brain,
      title: "Smart Automation",
      description: "Auto-categorize and route tickets with ML models",
    },
    {
      icon: Shield,
      title: "Risk Prevention",
      description: "Predict and prevent RFC failures proactively",
    },
  ];

  return (
    <section id="overview" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-background to-background" />
      
      <div className="container relative z-10 px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <span className="text-sm font-medium text-primary">Project Overview</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="text-foreground">Business Problem</span>
              <br />
              <span className="gradient-text">& Objective</span>
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              ABC Tech, a mid-size enterprise, operates a robust IT Service Management (ITSM) 
              system processing <span className="text-primary font-semibold">45,000+ incident records</span>. 
              Their current reactive approach leads to delayed resolutions, inefficient resource 
              allocation, and recurring critical failures.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              This project transforms their IT operations from <span className="text-foreground font-medium">reactive 
              firefighting</span> to <span className="gradient-text font-semibold">proactive, data-driven management</span> using 
              machine learning, time-series forecasting, and classification models.
            </p>

            {/* Key Highlights */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              {highlights.map((item, index) => (
                <div 
                  key={index}
                  className="group p-4 rounded-xl bg-card/50 border border-border hover:border-primary/30 transition-all duration-300"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg gradient-hero flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <a 
              href="#solutions" 
              className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all duration-300"
            >
              Explore Solutions <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden glow-card">
              <img 
                src={mlPrediction} 
                alt="Machine Learning Prediction Visualization" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-transparent to-transparent" />
              
              {/* Floating Stats Card */}
              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl glass-card">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Model Performance</p>
                    <p className="text-2xl font-bold gradient-text">96% Accuracy</p>
                  </div>
                  <div className="w-16 h-16 rounded-full gradient-hero flex items-center justify-center">
                    <Brain className="w-8 h-8 text-primary-foreground" />
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-primary/20 blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full bg-accent/20 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;
