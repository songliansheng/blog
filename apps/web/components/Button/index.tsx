import { signOut } from '@/auth'
import { signIn } from 'next-auth/react'
import clsx from 'clsx'

/* ALERT If a function in a file is used by a client compponent ,then all other functions in the file will be treated as client components
 *ALERT So if a button has been used by a client component ,

*/
export default function Button({
    children,
    className,
disabled,
    type,
    onClick,
}: {
        children: any;
        className?: string;
        disabled?:boolean

    type?: string
    onClick?: (params?) => void
}): JSX.Element {
    return (
        <button
            className={clsx('px-4 py-2', disabled && 'cursor-not-allowed',className)}
            onClick={onClick}
        >
            {children}
        </button>
    )
}
