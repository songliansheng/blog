import { auth } from '@/auth'
import Image from 'next/image'
export function Avatar({ imgSrc }) {
    return (
        <>
            <Image
                src={imgSrc}
                width={30}
                height={30}
                alt="Picture of the author"
            />
        </>
    )
}
