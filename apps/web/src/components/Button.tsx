export function Button({
    className,
    buttonName,
    type,
}: {
    className?: string
    buttonName: string
    type?: string
}): JSX.Element {
    return <button className={className}>{buttonName}</button>
}
