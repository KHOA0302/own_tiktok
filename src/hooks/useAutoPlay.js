import { useCallback } from 'react'

const useAutoPlay = (options) => {

    const videoOnViewRef = useCallback(node => {

        let observer = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                entries[0].target.play()
            } else {
                entries[0].target.pause()
            }
        }, options)

        if (node) {
            observer.observe(node)
        }

    }, [options])

    return { videoOnViewRef }
}

export default useAutoPlay



