export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="rounded-lg shadow m-4 bg-black/5 dark:bg-black/20 backdrop-blur-lg w-full mx-auto container lg:max-w-4xl md:max-w-2xl mb-0 flex justify-center">
            <div className="w-full max-w-screen-xl mx-auto md:flex md:items-center md:justify-between p-4"> {/* Ajuste del padding */}
                <span className="text-sm sm:text-center text-zinc-800/90 dark:text-zinc-200/90">
                    ©{currentYear} <a href="https://github.com/Guidoreale" className="hover:underline">Guido Reale</a>.
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium dark:text-white/90 sm:mt-0">
                    <li>
                        <a href="/#sobre-mi" className="hover:underline me-4 md:me-6">Sobre mí</a>
                    </li>
                    <li>
                        <a id="contacto" href="mailto:realeguido1@gmail.com" className="hover:underline">Contacto</a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}
