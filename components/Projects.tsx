const projects = [
    {
        title: "Dependency Injection Container",
        description: "This project implements a Dependency Injection (DI) Container that manages the registration and resolution of dependencies as either singleton or transient instances",
        technologies: ["C#", ".NET Core"],
        githublink:"https://github.com/saitarunpagudala/DIContainer"
    },
    {
        title:"California Housing Price Prediction",
        description: "This project focuses on predicting housing prices in California using machine learning techniques. It involves data preprocessing, feature engineering, and model training to achieve accurate predictions.",
        technologies: ["Python", "Scikit-learn", "Pandas"],
        githublink:"https://github.com/saitarunpagudala/ML_1"
    },
    {
        title:"Multiple machine learning classification Models",
        description:"The objective of this project is to predict whether a breast tumor is Malignant (0) or Benign (1) using diagnostic medical features.",
        technologies: ["Python", "Scikit-learn"],
        githublink:"https://github.com/saitarunpagudala/ML_Assignment-2",
        appLink:"https://2025aa05408-ml-assignment-2.streamlit.app/"
    }

];

export default function Projects() {
    return (
        <section id="projects" className="flex flex-col items-center justify-center min-h-screen px-6 py-20">
            <h1 className="text-4xl font-bold text-white mb-12">Featured Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full">
                {projects.map((project, index) => (
                    <div key={index} className="border border-gray-700 rounded-xl p-6 flex flex-col gap-4 hover:border-violet-500 transition-colors duration-300">
                        <h2 className="text-xl font-bold text-white">{project.title}</h2>
                        <p className="text-gray-400 text-sm flex-1">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                                <span key={tech} className="bg-violet-800 text-violet-200 text-xs px-3 py-1 rounded-full">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex gap-4 text-sm text-gray-400">
                            {project.githublink && (
                                <a href={project.githublink} target="_blank" className="hover:text-violet-400 transition-colors">
                                    ⑂ Code
                                </a>
                            )}
                            {project.appLink && (
                                <a href={project.appLink} target="_blank" className="hover:text-violet-400 transition-colors">
                                    ↗ Live App
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}