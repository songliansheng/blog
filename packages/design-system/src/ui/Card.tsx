import clsx from 'clsx'

export default function Card({
    children,
    className,
}: {
    children: React.ReactNode
    className?: string
}) {
    return <div className={clsx(className)}>{children}</div>
}
export function LinkCard({ item }: { item: { url; title; description } }) {
    return (
        <div className="flex justify-center mx-8 items-center w-[25rem] md:w-full group dark:bg-(--color-onyx) h-48  dark:hover:bg-(--color-outer-space) hover:bg-(--color-silver) bg-(--color-dark-gray)">
            <a
                className="block max-w-[20rem]"
                href={item.url}
                target="_blank"
            >
                <h2 className="p-6 group-hover:font-bold">{item.title}</h2>
                <p className="px-6 pb-6 dark:text-(--color-dark-gray) dark:group-hover:text-white group-hover:font-semibold">
                    {item.description}
                </p>
            </a>
        </div>
    )
}
export function ProjectCard({
    item,
}: {
    item: {
        sourceUrl: string
        demoUrl: string
        title: string
        description: string
    }
}) {
    return (
        <div className="border-2 rounded-xl border-solid p-5 dark:bg-(--silver) h-48 bg-(--onyx)">
            <a
                className="block   max-w-[20rem]"
                href={item.sourceUrl}
                target="_blank"
            >
                {item.title}
            </a>
            <p>{item.description}</p>
            <a className="" href={item.demoUrl} target="_blank">
                <span>Demo</span>
            </a>
        </div>
    )
}
