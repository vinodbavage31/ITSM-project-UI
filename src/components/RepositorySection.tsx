import { Button } from "@/components/ui/button";
import { Github, FileCode, Package, Terminal } from "lucide-react";

const RepositorySection = () => {
  const artifacts = [
    {
      icon: FileCode,
      name: "Jupyter Notebooks",
      description: "Complete analysis and modeling notebooks with step-by-step documentation",
      files: ["incident_analysis.ipynb", "priority_prediction.ipynb", "rfc_failure.ipynb"],
    },
    {
      icon: Package,
      name: "Saved Models",
      description: "Production-ready serialized models for immediate deployment",
      files: ["priority_model.pkl", "rfc_model.pkl", "department_model.pkl"],
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase text-primary bg-accent rounded-full mb-4">
            Repository
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Project Artifacts
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Fully documented codebase with reproducible notebooks and deployment-ready models
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {artifacts.map((artifact, index) => (
              <div
                key={index}
                className="bg-card rounded-xl border border-border shadow-card p-6 hover:shadow-card-hover transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-4">
                  <artifact.icon className="w-6 h-6 text-primary" />
                </div>
                
                <h3 className="text-lg font-semibold text-foreground mb-2">{artifact.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{artifact.description}</p>
                
                <div className="bg-navy-900/5 rounded-lg p-4 font-mono text-sm">
                  {artifact.files.map((file, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-muted-foreground py-1">
                      <span className="text-primary">├──</span>
                      <span>{file}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Execution Command */}
          <div className="bg-navy-900 rounded-xl p-6 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Terminal className="w-5 h-5 text-teal-100" />
              <span className="text-teal-100 font-medium">Quick Start</span>
            </div>
            
            <div className="bg-navy-800/50 rounded-lg p-4 font-mono text-sm text-teal-100/80 mb-6 inline-block">
              <code>jupyter notebook incident_analysis.ipynb</code>
            </div>

            <div>
              <Button variant="hero" size="lg" asChild>
                <a href="https://github.com/vinodbavage31" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5" />
                  View on GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RepositorySection;
