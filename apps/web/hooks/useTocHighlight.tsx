import { useEffect, useRef, useState } from 'react'

export function useTocHighlight() {
    const [currentId, setCurrentId] = useState('')

    useEffect(() => {
        const TocItemsObserver = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry?.isIntersecting) {
                // console.log(entry.target.id)
                setCurrentId(entry.target.id);
              }
            });
          },
          {
            rootMargin: "0px 0px -80% 0px",
            threshold: 0.5,
           
          }
        );

        const elements = document.querySelectorAll('h2, h3, h4')
        elements.forEach((elem) => TocItemsObserver.observe(elem))
        return () => TocItemsObserver.disconnect()
    }, [])

    return { currentId }
}
