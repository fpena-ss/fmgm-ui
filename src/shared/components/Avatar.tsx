export const Avatar = ({ url, alt }: { url: string, alt: string }) => {
    return (
        <div className="w-12 h-12 rounded-full overflow-hidden">
            <img 
                src={url} 
                alt={alt} 
                className="w-full h-full object-cover"
            />
        </div>
    );
}