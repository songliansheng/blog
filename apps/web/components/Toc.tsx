'use client'
import { useTocHighlight } from './useTocHighlight'
import cx from 'classnames'
/*  h-[calc(100vh-121px)] hidden  lg:block mr-2 pl-4 w-[19.5rem] shadow-inner shrink-0 shadow-black/30 dark:shadow-white/10 overflow-y-auto */
export default function Toc({ title, headings }) {
    const { currentId } = useTocHighlight()
    return (
        <>
            <h2 className="py-4 ">{title}</h2>

            <ul className="space-y-2 pb-4 text-base overflow-y-auto h-[calc(100vh-13rem)]">
                {headings.map((heading, index) => {
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
        </>
    )
}
export function TOC({ headings }) {
    const { currentId } = useTocHighlight()
    return (
        <div className="hidden xl:block overflow-y-auto bottom-0 fixed top-24 pl-8 right-[max(0px,calc(50%-45rem))] w-[19.5rem]">
            <ul className="space-y-2 pb-16">
                {headings.map((heading, index) => {
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
