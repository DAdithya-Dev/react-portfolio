import {useEffect} from "react";

export const Navbar = ({menuOpen, setMenuOpen}) => {

    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : ''
    }, [menuOpen])
    return (
        <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.0)] backdrop-blur-lg border-white/10 shadow-lg">
            <div className="max-w-5xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <a href="#home" className="text-xl font-bold text-white">
                        Adithya<span className="text-blue-500">Peiris</span>
                    </a>

                    <button className="absolute top-4 right-7 text-white text-3xl md:hidden"
                            onClick={() => setMenuOpen((prev) => !prev)}>
                        &#9776;
                    </button>

                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a>
                        <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
                        <a href="#projects" className="text-gray-300 hover:text-white transition-colors">Projects</a>
                        <a href="#services" className="text-gray-300 hover:text-white transition-colors">Services</a>
                        <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}