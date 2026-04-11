const links = [
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#education" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
]

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center px-8 py-4 fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/50 border-b border-gray-800">
            <span className="text-violet-500 font-bold text-xl select-none">Sai Tarun Pagudala</span>
            <ul className="flex gap-8 list-none">
                {links.map((link) => (
                    <li key={link.href}>
                        <a href={link.href} className="text-gray-300 hover:text-violet-500 transition-colors duration-300 text-sm">
                            {link.label}
                        </a>
                    </li>
                ))}
            </ul>
            <div>
                <a href="/resume.pdf" target="_blank">
                    <button className="bg-violet-600 hover:bg-violet-700 text-white text-sm font-medium py-2 px-4 rounded-full transition-colors duration-300">
                        Resume
                    </button>
                </a>
            </div>
        </nav>
    )
}