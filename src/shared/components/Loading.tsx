export const Loading = () => (
    <div className="w-full min-h-[50vh] flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-12 border-4 border-fmgm-green border-t-fmgm-lime rounded-full animate-spin" />
            <p className="text-fmgm-green font-medium">Cargando...</p>
        </div>
    </div>
);
