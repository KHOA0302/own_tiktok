
function Img({ src, alt, width, height, className }) {
    return (
        <img className={className} src={src} alt={alt} />
    )
}

export default Img