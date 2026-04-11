import {
    JavascriptOriginal,
    TypescriptOriginal,
    ReactOriginal,
    CsharpOriginal,
    DotnetcorePlain,
    JavaOriginal,
    PythonOriginal,
    MicrosoftsqlserverPlain,
    GitOriginal,
    AzureOriginal,
} from "devicons-react"

const skills = [
    { name: "C#", icon: CsharpOriginal },
    { name: ".NET Core", icon: DotnetcorePlain },
    { name: "MSSQL", icon: MicrosoftsqlserverPlain },
    { name: "React", icon: ReactOriginal },
    { name: "Git", icon: GitOriginal },
    { name: "Azure", icon: AzureOriginal },
    { name: "JavaScript", icon: JavascriptOriginal },
    { name: "TypeScript", icon: TypescriptOriginal },
    { name: "Java", icon: JavaOriginal },
    { name: "Python", icon: PythonOriginal },

]
export default function Skills() {
    return (
        <section id="skills" className="flex flex-col items-center justify-center min-h-screen text-center px-6 py-20">
            <h1 className="text-4xl font-bold text-white mb-12">Technical Skills</h1>
            <div className="flex flex-wrap justify-center gap-6 max-w-4xl">
                {skills.map((skill) => (
                    <div key={skill.name} className="flex flex-col items-center gap-2 border border-gray-700 rounded-xl p-4 w-24 hover:border-violet-500 transition-colors duration-300">
                        <skill.icon size={36} />
                        <span className="text-gray-300 text-xs">{skill.name}</span>
                    </div>
                ))}
            </div>
        </section>
    )
}