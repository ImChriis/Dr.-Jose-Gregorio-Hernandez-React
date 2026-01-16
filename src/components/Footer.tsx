const Footer: React.FC = () => {
    return(
        <footer className="relative w-full bg-[#121212] bg-opacity-80 backdrop-blur-md text-white py-5 lg:py-7">
            <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/80 to-transparent" aria-hidden="true" />
            <div className="max-w-screen-2xl mx-auto flex flex-col sm:flex-row items-center sm:items-center justify-between gap-3 sm:gap-5 text-center sm:text-left px-4 sm:px-6 lg:px-8 text-base sm:text-lg lg:text-xl">
                <p>Historia de José Gregorio Hernández</p>
                <div className="flex flex-col items-center sm:items-end leading-tight">
                    <p>Universidad Dr. José Gregorio Hernández, la Universidad de los Valores</p>
                    <p className="text-sm text-white/80 mt-4">Diseño MSc Juan Carlos Medina</p>
                    <p className="text-sm text-white/80">Ingeniero en informática</p>
                     <p className="text-sm text-white/80">© 2026</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;