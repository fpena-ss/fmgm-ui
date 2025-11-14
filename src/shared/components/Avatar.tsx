export const Avatar = ({ url, alt }: { url: string, alt: string }) => {
    return (
        <div className="w-10 h-10 rounded-full">
            <img src={url} alt={alt} />
        </div>
    )
}