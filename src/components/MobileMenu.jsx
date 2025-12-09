export const MobileMenu = ({menuOpen, setMenuOpen}) => {

    return (
        <div className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center justify-center transition-all duration-300 ease-in-out
                        ${menuOpen ? 'h-screen opacity-100 pointer-events-auto' : 'h-0 opacity-0 pointer-events-none'}
                        `}
        >
            <button onClick={() => setMenuOpen((prev) => !prev)}
                    className={"absolute top-4 right-7 text-white text-4xl"}
                    aria-label={"Close Menu"}>
                &times;
            </button>

            <a onClick={() => setMenuOpen(false)} href="#home"
               className={'text-2xl font-semibold text-white my-4 active:text-3xl transition-all ease-in-out'}>Home</a>
            <a onClick={() => setMenuOpen(false)} href="#about"
               className={'text-2xl font-semibold text-white my-4 active:text-3xl transition-all ease-in-out'}>About</a>
            <a onClick={() => setMenuOpen(false)} href="#projects"
               className={'text-2xl font-semibold text-white my-4 active:text-3xl transition-all ease-in-out'}>Projects</a>
            <a onClick={() => setMenuOpen(false)} href="#services"
               className={'text-2xl font-semibold text-white my-4 active:text-3xl transition-all ease-in-out'}>Services</a>
            <a onClick={() => setMenuOpen(false)} href="#contact"
               className={'text-2xl font-semibold text-white my-4 active:text-3xl transition-all ease-in-out'}>Contact</a>
        </div>
    )
}