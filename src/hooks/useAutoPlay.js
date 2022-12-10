import { useCallback, useEffect, useMemo, useState } from 'react'

const useAutoPlay = (options) => {
    const [isOnView, setIsOnView] = useState()

    const videoOnViewRef = useCallback(node => {

        let observer = new IntersectionObserver(entries => {

            entries.forEach(entry => {
                console.log(entry.target)
                entry.target.pause()
            })

            if (entries[0].isIntersecting) {
                setIsOnView(true)
                entries[0].target.play()
            }
        }, options)

        if (node) {
            observer.observe(node)
        }

    }, [])

    return { isOnView, videoOnViewRef }
}

export default useAutoPlay



