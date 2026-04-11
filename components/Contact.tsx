import { LinkedinOriginal } from "devicons-react"
import { Mail, GitBranchPlusIcon } from "lucide-react"

export default function Contact() {
    return (
        <section id="contact" className="flex flex-col items-center justify-center min-h-screen px-6 py-20 text-center">
            <h1 className="text-5xl font-bold text-white mb-4">Let's Work Together</h1>
            <p className="text-gray-400 max-w-md mb-10">
                Have an idea? Let’s bring it to life.
            </p>
            <div className="flex gap-4 mb-8">
                <a href="mailto:saitarun2307pagudala@gmail.com" className="border border-gray-600 rounded-full p-4 text-gray-400 hover:border-violet-500 hover:text-violet-400 transition-colors duration-300">
                    <Mail size={24} />
                </a>
                <a href="https://github.com/saitarunpagudala" target="_blank" className="border border-gray-600 rounded-full p-4 text-gray-400 hover:border-violet-500 hover:text-violet-400 transition-colors duration-300">
                    <GitBranchPlusIcon size={24} />
                </a>
                <a href="https://www.linkedin.com/in/sai-tarun-pagudala-a09364186/" target="_blank" className="border border-gray-600 rounded-full p-4 text-gray-400 hover:border-violet-500 hover:text-violet-400 transition-colors duration-300">
                    <LinkedinOriginal size={24} />
                </a>
            </div>
            <a href="mailto:saitarun2307pagudala@gmail.com">
                <button className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-4 rounded-full transition-colors duration-300 flex items-center gap-2">
                    <Mail size={18} /> Send me an email →
                </button>
            </a>
        </section>
    )
}