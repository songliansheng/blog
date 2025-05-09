import clsx from "clsx"

export default function Button({
    type,
    children,
    className,
}: {
    type?: 'button' | 'submit' | 'reset' | undefined
    children: React.ReactNode
    className?: string
    onClick?: () => void
    // disabled?: boolean
}) {
    return (
        <button className={clsx(className,'text-red-600')} type={type}>
            {children}
        </button>
    )
}