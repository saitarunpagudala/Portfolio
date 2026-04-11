import Image from "next/image"

const experiences = [
    {
        title: "Engineer, IT Software",
        company: "American Airlines",
        duration: "March 2025 - Present",
        location: "Hyderabad, India",
        tasks: [
            "Working on the Drug and Alcohol Record Management application, designing and implementing logic for randomized drug testing across all fleet and transportation employees.",
            "Rewrote several legacy features, upgrading from MVC to the latest .NET and React stack for improved maintainability and performance.",
            "Contributed to the Pilot Hiring application by developing a feature to capture and filter pilots based on flying hours, streamlining candidate selection for HR.",
        ],
        logo: "/AA.png"
    },
    {
        title: "Software Engineer 2",
        company: "NCR Voyix (formerly known as NCR Corporation)",
        duration: "Feb 2021 - March 2025",
        location: "Hyderabad, India",
        tasks: [
            "Developed backend microservices as RESTful web services using BDD with SpecFlow for .NET, along with unit tests to increase code coverage and reliability.",
            "Worked on frontend apps including Configuration Manager and Web POS built with React.js and Next.js, interacting with backend through BFFs in Node.js and Express.js.",
            "Implemented a feature to handle two concurrent transactions, allowing cashiers to switch between them seamlessly with independent payment management.",
            "Integrated a third-party payment provider system with the next-generation POS for processing payments.",
            "Developed a service to execute commands for collecting logs or changing log levels at any level of the application hierarchy.",
            "Fixed several production-critical bugs, delivering hotfix DLLs within a day for immediate deployment.",
        ],
        logo: "/NCR.png"
    },
]

export default function Experience() {
    return (
        <section id="experience" className="flex flex-col items-center justify-center min-h-screen px-6 py-20">
            <h1 className="text-4xl font-bold text-white mb-12">💼 Work Experience</h1>
            <div className="flex flex-col gap-6 w-full max-w-4xl">
                {experiences.map((exp) => (
                    <div key={exp.title} className="border border-gray-700 rounded-xl p-6">
                        <div className="flex justify-between items-start mb-4">
                            <div className="flex items-center gap-4">
                                <Image
                                    src={exp.logo}
                                    alt={exp.company}
                                    width={50}
                                    height={50}
                                    className="object-contain mix-blend-screen"
                                />
                                <div>
                                    <h2 className="text-xl font-bold text-white">{exp.title}</h2>
                                    <p className="text-violet-400">{exp.company}</p>
                                </div>
                            </div>
                            <div className="text-right text-sm text-gray-400">
                                <p>{exp.duration}</p>
                                <p>{exp.location}</p>
                            </div>
                        </div>
                        <ul className="flex flex-col gap-2 mt-2">
                            {exp.tasks.map((task, index) => (
                                <li key={index} className="flex items-start gap-2 text-gray-400">
                                    <span className="text-violet-500 mt-1">•</span>
                                    <span>{task}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    )
}