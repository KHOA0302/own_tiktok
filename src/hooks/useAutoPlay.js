import { useRef, useCallback } from 'react'


const useAutoPlay = () => {
    const observer = useRef()

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };

    const listVideoOnPage = useCallback(node => {
        console.log(node)

        if (observer.current) observer.current.disconnect()

        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                console.log(entries[0].target)
            }
        }, options)

        if (node) {
            observer.current.observe(node)
        }
    }, [])

    return { listVideoOnPage }
}

export default useAutoPlay



