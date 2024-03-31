'use client'
import { useTocHighlight } from './useTocHighlight'
import cx from 'classnames'
export default function Toc({ headings }) {
     const { currentId } = useTocHighlight()
    return (
        <div className="hidden xl:block overflow-y-auto bottom-0 fixed top-24 pl-8 right-[max(0px,calc(50%-45rem))] w-[19.5rem]">
            <ul className="space-y-2 pb-16">
                {headings.map((heading,index) => {
                    return (
                        <li
                            key={index}
                            className={cx(
                                'space-y-2 ',
                                currentId === heading.data.id
                                    ? 'bg-highlight dark:bg-highlight-dark'
                                    : null,
                                {
                                    'ps-3': heading?.depth === 3,
                                    hidden: heading.depth && heading.depth > 3,
                                }
                            )}
                        >
                            <a
                                className={cx(
                                    'space-y-2 ',
                                    currentId === heading.data.id
                                        ? 'font-bold'
                                        : null
                                )}
                                href={`#${heading.data.id}`}
                            >
                                {heading.value}
                            </a>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}


