import { useEffect, useRef, useState } from 'react'
const TOP_OFFSET = 85

function getHeaderAnchors(): HTMLAnchorElement[] {
    return Array.prototype.filter.call(
        document.getElementsByClassName('mdx-header-anchor'),
        function (testElement) {
            return (
                testElement.parentNode.nodeName === 'H1' ||
                testElement.parentNode.nodeName === 'H2' ||
                testElement.parentNode.nodeName === 'H3'
            )
        }
    )
}



export function useTocHighlight() {
    const [currentIndex, setCurrentIndex] = useState<number>(0)
    const timeoutRef = useRef<number | null>(null)

    useEffect(() => {
        function updateActiveLink() {
            const pageHeight = document.body.scrollHeight
            const scrollPosition = window.scrollY + window.innerHeight
            const headersAnchors = getHeaderAnchors()

            if (scrollPosition >= 0 && pageHeight - scrollPosition <= 0) {
                // Scrolled to bottom of page.
                setCurrentIndex(headersAnchors.length - 1)
                return
            }

            let index = -1
            while (index < headersAnchors.length - 1) {
                const headerAnchor = headersAnchors[index + 1]
                const rect = headerAnchor?.getBoundingClientRect()
                const top = rect ? rect.top : undefined

                if (top !== undefined && top >= TOP_OFFSET) {
                    break
                }
                index += 1
            }

            setCurrentIndex(Math.max(index, 0))
        }
        function throttledUpdateActiveLink() {
            if (timeoutRef.current === null) {
                timeoutRef.current = window.setTimeout(() => {
                    timeoutRef.current = null
                    updateActiveLink()
                }, 100)
            }
        }
        document.addEventListener('scroll', throttledUpdateActiveLink)
        document.addEventListener('resize', throttledUpdateActiveLink)
        updateActiveLink()
        return () => {
            if (timeoutRef.current != null) {
                clearTimeout(timeoutRef.current)
                timeoutRef.current = null
            }
            document.removeEventListener('scroll', throttledUpdateActiveLink)
            document.removeEventListener('resize', throttledUpdateActiveLink)
        }
    }, [])
    return {
        currentIndex,
    }
}
