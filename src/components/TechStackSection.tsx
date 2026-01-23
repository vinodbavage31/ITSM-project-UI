const TechStackSection = () => {
  const technologies = [
    {
      name: "Python",
      icon: "🐍",
      category: "Language",
    },
    {
      name: "Pandas",
      icon: "🐼",
      category: "Data Processing",
    },
    {
      name: "NumPy",
      icon: "🔢",
      category: "Numerical Computing",
    },
    {
      name: "Scikit-learn",
      icon: "🔬",
      category: "Machine Learning",
    },
    {
      name: "XGBoost",
      icon: "🚀",
      category: "Gradient Boosting",
    },
    {
      name: "Statsmodels",
      icon: "📊",
      category: "Statistical Models",
    },
    {
      name: "MySQL",
      icon: "🗄️",
      category: "Database",
    },
    {
      name: "Matplotlib",
      icon: "📈",
      category: "Visualization",
    },
    {
      name: "Seaborn",
      icon: "🎨",
      category: "Statistical Viz",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase text-primary bg-accent rounded-full mb-4">
            Technologies
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Tech Stack
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Industry-standard tools for data science and machine learning
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-3 md:grid-cols-5 gap-4 md:gap-6">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="group flex flex-col items-center p-4 md:p-6 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-card-hover transition-all duration-300"
              >
                <div className="text-3xl md:text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {tech.icon}
                </div>
                <span className="font-medium text-foreground text-sm md:text-base text-center">
                  {tech.name}
                </span>
                <span className="text-xs text-muted-foreground mt-1 text-center hidden md:block">
                  {tech.category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
