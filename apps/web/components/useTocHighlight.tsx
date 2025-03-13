import { useEffect, useRef, useState } from 'react'

export function useTocHighlight() {
    const [currentId, setCurrentId] = useState('')

    useEffect(() => {
        const TocItemsObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry?.isIntersecting) {
                        // console.log(entry.target.id)
                        setCurrentId(entry.target.id)
                    }
                })
            },
            {
                rootMargin: '100px 20px 30px 40px',
            }
        )

        const elements = document.querySelectorAll('h2, h3, h4')
        elements.forEach((elem) => TocItemsObserver.observe(elem))
        return () => TocItemsObserver.disconnect()
    }, [])

    return { currentId }
}
