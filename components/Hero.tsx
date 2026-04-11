"use client"
import { motion } from "framer-motion"

export default function Hero() {
    return (
        <section id="home" className="flex flex-col items-center justify-center min-h-screen text-center px-6">
           <motion.h1 
                className="text-6xl font-bold text-white mb-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                Sai Tarun Pagudala
            </motion.h1>
           <motion.h2 
                className="text-2xl text-gray-300 mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                Software Engineer
            </motion.h2>
           <motion.p 
                className="text-gray-400 max-w-xl mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
            >
                Curious engineer driven by a desire to learn, explore, and build meaningful solutions.
                I enjoy understanding systems end-to-end, breaking down complex problems,
                and continuously improving how things are designed and implemented.
                Always eager to take on new challenges and expand my skill set.
            </motion.p>
           <motion.div 
                className="flex gap-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
            >
                <a href="#contact"><button className="bg-violet-600 hover:bg-violet-700 text-white px-6 py-3 rounded-full transition-colors duration-300">Get in Touch</button></a>
                <a href="#blog"><button className="border border-gray-600 hover:border-violet-500 text-white px-6 py-3 rounded-full transition-colors duration-300">Read my blog</button></a>
            </motion.div>
        </section>
    )
}