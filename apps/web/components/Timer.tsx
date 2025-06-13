import React, { useRef, useEffect } from 'react'
export default function Timer({ length,timerRef }: { length: number,timerRef: React.MutableRefObject<number> }) {
    const timer =useRef(length)
    setInterval(() => {
        if (length > 0) {
            length = length - 1
        }
    }, 1000)
}
