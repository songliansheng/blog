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
