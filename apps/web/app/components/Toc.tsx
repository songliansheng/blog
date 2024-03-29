export default function Toc({ headings }) {
    return (
        <div className="hidden xl:block overflow-y-auto bottom-0 fixed top-24 pl-8 right-[max(0px,calc(50%-45rem))] w-[19.5rem]">
            <ul className="space-y-2 pb-16">
                {headings.map((heading) => {
                    return (
                        <li>
                            <a href={`#${heading.data.id}`}>{heading.value}</a>
                        </li>)
                })}
            </ul>
        </div>
    )
}
