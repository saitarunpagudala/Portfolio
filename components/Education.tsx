import Image from "next/image"

const education = [
    {
        title: "Master of Technology in Artificial Intelligence and Machine Learning",
        institution: "Birla Institute of Technology And Science - Pilani",
        shortform: "BITS",
        timeline: "2025 - 2027 (expected)",
        description: "Pursuing a master's degree in Artificial Intelligence and Machine Learning at BITS Pilani, focusing on advanced AI techniques, machine learning algorithms, and their applications in real-world scenarios.",
        logo: "/BITS.png"
    },
    {
        title: "Bachelor of Technology in Computer Science and Engineering",
        institution: "Keshav Memorial Institute of Technology",
        shortform: "KMIT",
        timeline: "2017 - 2021",
        description: "Completed a bachelor's degree in Computer Science and Engineering at KMIT, gaining a strong foundation in programming, algorithms, and software development principles.",
        cgpa: "7.8",
        logo: "/KMIT.png"
    }
]

export default function Education() {
    return (
        <section id="education" className="flex flex-col items-center justify-center min-h-screen px-6 py-20">
            <h1 className="text-4xl font-bold text-white mb-12">🎓 Education</h1>
            <div className="flex flex-col gap-6 w-full max-w-4xl">
                {education.map((edu, index) => (
                    <div key={index} className="border border-gray-700 rounded-xl p-6">
                        <div className="flex justify-between items-start">
                            <div className="flex items-center gap-4">
                                <Image 
                                    src={edu.logo} 
                                    alt={edu.institution} 
                                    width={50} 
                                    height={50} 
                                    className="rounded-full object-contain"
                                />
                                <div>
                                    <h2 className="text-xl font-bold text-white">{edu.title}</h2>
                                    <p className="text-violet-400">{edu.institution} ({edu.shortform})</p>
                                    {edu.cgpa && (
                                        <p className="text-gray-400 mt-1">CGPA: {edu.cgpa}</p>
                                    )}
                                </div>
                            </div>
                            <span className="text-gray-400 text-sm whitespace-nowrap">{edu.timeline}</span>
                        </div>
                        <p className="text-gray-400 mt-4">{edu.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}