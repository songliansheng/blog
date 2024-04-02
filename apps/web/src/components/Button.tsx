export function Button({
    className,
    buttonName,
}: {
    className?: string
    buttonName: string
}): JSX.Element {
    return <button className={className}>{buttonName}</button>
}
