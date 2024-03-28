'use client'

/*
 * Copyright (c) Facebook, Inc. and its affiliates.
 */
import { usePathname } from 'next/navigation'
import { Children } from 'react'
import cx from 'classnames'
// import { useTocHighlight } from '../utils/useTocHighlight'
import { useTocHighlight } from 'utils/useTocHighlight'
import { useEffect, useState } from 'react'
// import type { Toc } from '../MDX/TocContext'
import headings from '../../utils/buildHeadingsMeta'

export function Toc({ headings, }) {
    var result;
    // result = Children.toArray(headings)
    //   Children.forEach(headings, (child, index) => {
    //       result.push(child)
    //       result.push(<hr key={index} />)
    //   })
    // const [modifiedHeadings, setHeadings] = useState([])
    const pathname = usePathname()
    const { currentIndex } = useTocHighlight()
    
    console.log(headings)
    return headings
    // return (
    //     <nav role="navigation" className="pt-20 sticky top-0 end-0">
    //         {modifiedHeadings.length > 0 && (
    //             <h2 className="mb-3 lg:mb-3 uppercase tracking-wide font-bold text-sm text-secondary dark:text-secondary-dark px-4 w-full">
    //                 On this page
    //             </h2>
    //         )}
    //         <div
    //             className="h-full overflow-y-auto ps-4 max-h-[calc(100vh-7.5rem)]"
    //             style={{
    //                 overscrollBehavior: 'contain',
    //             }}
    //         >
    //             <ul className="space-y-2 pb-16">
    //                 {modifiedHeadings.length > 0 &&
    //                     headings.map((h, i) => {
    //                         if (
    //                             !h.url &&
    //                             process.env.NODE_ENV === 'development'
    //                         ) {
    //                             console.error('Heading does not have URL')
    //                         }
    //                         return (
    //                             <li
    //                                 key={`heading-${h.url}-${i}`}
    //                                 className={cx(
    //                                     'text-sm px-2 rounded-s-xl',
    //                                     selectedIndex === i
    //                                         ? 'bg-highlight dark:bg-highlight-dark'
    //                                         : null,
    //                                     {
    //                                         'ps-4': h?.depth === 3,
    //                                         hidden: h.depth && h.depth > 3,
    //                                     }
    //                                 )}
    //                             >
    //                                 <a
    //                                     className={cx(
    //                                         selectedIndex === i
    //                                             ? 'text-link dark:text-link-dark font-bold'
    //                                             : 'text-secondary dark:text-secondary-dark',
    //                                         'block hover:text-link dark:hover:text-link-dark leading-normal py-2'
    //                                     )}
    //                                     href={h.url}
    //                                 >
    //                                     {h.text}
    //                                 </a>
    //                             </li>
    //                         )
    //                     })}
    //             </ul>
    //         </div>
    //     </nav>
    // )
}
