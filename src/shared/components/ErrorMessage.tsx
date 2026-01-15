export const ErrorMessage = ({ message }: { message: string }) => (
    <div className="w-full min-h-[50vh] flex items-center justify-center">
        <div className="text-center p-8 border-2 border-fmgm-blue/20 rounded-lg">
            <p className="text-fmgm-blue font-semibold">Error: {message}</p>
        </div>
    </div>
);
