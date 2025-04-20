import React, { useRef, useEffect } from 'react'
export default function Timer({ length,timerRef }: { length: number,timerRef }) {
    const timer =useRef(length)
    setInterval(() => {
        if (length > 0) {
            length = length - 1
        }
    }, 1000)
}
