import { Link } from "@tanstack/react-router";
import { WrenchScrewdriverIcon } from "@heroicons/react/24/outline";

export const WorkInProgress = () => (
    <div className="w-full min-h-[60vh] flex items-center justify-center px-6">
        <div className="text-center max-w-md">
            <WrenchScrewdriverIcon className="w-24 h-24 mx-auto text-fmgm-green mb-6" />
            <h1 className="text-4xl font-bold text-fmgm-blue mb-4">
                Trabajo en Progreso
            </h1>
            <p className="text-fmgm-blue/70 mb-8">
                Esta página está en construcción. Pronto estará disponible.
            </p>
            <Link 
                to="/" 
                className="inline-block px-6 py-3 bg-fmgm-green text-fmgm-lime font-medium rounded-lg hover:bg-fmgm-blue transition-colors"
            >
                Volver al Inicio
            </Link>
        </div>
    </div>
);
