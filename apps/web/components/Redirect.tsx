'use client'
import { useRouter } from 'next/navigation'
import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'

export default function Redirect({
    message,
    link,
}: {
    message: string
    link: string
}) {
    const intervalRef = useRef<ReturnType<typeof setInterval>>()
    const [secondsRemaining, setSecondsRemaining] = useState(5)

    const router = useRouter()

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            if (secondsRemaining > 0) {
                setSecondsRemaining((s) => s - 1)
                console.log(secondsRemaining)
                console.log(secondsRemaining > 0)
            }
        }, 1000)
        if (secondsRemaining == 0) {
            clearInterval(intervalRef.current)
            router.push(link)
        }
        // ALERT The optional cleanup function must be configured here
        return () => clearInterval(intervalRef.current)

        // ALERT secondsRemaining must be added as dependency here
    }, [secondsRemaining])

    function handleStart() {
        setInterval(() => {
            setSecondsRemaining(secondsRemaining + 10)
            console.log(secondsRemaining)
            console.log(secondsRemaining > 0)
        }, 1000)
    }

    return (
        <div>
            <>
                {message} You will be redirected to{' '}
                <Link href={link}>Home</Link> in {secondsRemaining} seconds
            </>
        </div>
    )
}
