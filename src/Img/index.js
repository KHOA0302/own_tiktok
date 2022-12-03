import { forwardRef, useState } from 'react'
import images from '~/assets/imgs/index'

function Img({ src, alt, width, height, className }, ref) {
    const [fallBack, setFallBack] = useState('')

    const handleError = () => {
        setFallBack(images.defaultImg)
    }

    return (
        <img
            className={className}
            src={fallBack || src}
            alt={alt}
            ref={ref}
            onError={handleError}
        />
    )
}

export default forwardRef(Img)