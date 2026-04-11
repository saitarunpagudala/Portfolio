const links = [
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#education" },
    { label: "Projects", href: "#projects" },
    // { label: "Blog", href: "#blog" },
    { label: "Contact", href: "#contact" },
]

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center px-6 py-4 bg-black">
            <span className="text-violet-500 font-bold text-xl">Sai Tarun Pagudala</span>
            <ul className="flex gap-6 list-none">
                {links.map((link) => (
                    <li key={link.href}>
                        <a href={link.href} className="text-gray-300 hover:text-violet-500 transition-colors duration-300">
                            {link.label}
                        </a>
                    </li>
                ))}
            </ul>
            <div className="flex gap-3">
                <a href="/resume.pdf" target="_blank">
                    <button className="bg-violet-500 hover:bg-violet-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300">Resume</button>
                </a>
            </div>
        </nav>
    )
}