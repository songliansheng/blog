'use client'
export function Button({
    className,
    buttonName,
    type,
    onClick,
}: {
    className?: string
    buttonName: string
    type?: string
    onClick?: () => {}
}): JSX.Element {
    return (
        <button className={className} onClick={onClick}>
            {buttonName}
        </button>
    )
}
