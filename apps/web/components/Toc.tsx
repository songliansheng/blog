'use client'
import clsx from 'clsx'
import { useTocHighlight } from './useTocHighlight'

/*  h-[calc(100vh-121px)] hidden  lg:block mr-2 pl-4 w-[19.5rem] shadow-inner shrink-0 shadow-black/30 dark:shadow-white/10 overflow-y-auto */
export default function Toc({
    headings,
    className,
}: {
    headings: any
    className?: string
}) {
    const { currentId } = useTocHighlight()
    return (
        <>
            <ul className={clsx('space-y-2 pb-4 text-base ', className)}>
                {headings.map((heading, index) => {
                    return (
                        <li
                            key={index}
                            className={clsx('space-y-2 ', {
                                'bg-highlight dark:bg-highlight-dark':
                                    currentId === heading.data.id,
                                'ps-3': heading?.depth === 3,
                                hidden: heading.depth && heading.depth > 3,
                            })}
                            /*  className={cx(
                                'space-y-2 ',
                                currentId === heading.data.id
                                    ? 'bg-highlight dark:bg-highlight-dark'
                                    : null,
                                {
                                    'ps-3': heading?.depth === 3,
                                    hidden: heading.depth && heading.depth > 3,
                                }
                            )} */
                        >
                            <a
                                className={clsx(
                                    'space-y-2 hover:text-sky-400',
                                    {'font-bold':currentId === heading.data.id}
                                       
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
                            className={clsx(
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
                                className={clsx(
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
