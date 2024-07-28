// 'use server'
import { auth } from '@/auth'
import Image from 'next/image'
export function Avatar({ imageSrc }) {
    // const session = await auth()
    // const avatar = session?.user?.image?session?.user?.image:''
    return (
        <Image
            src={imageSrc}
            width={30}
            height={30}
            alt="Picture of the author"
        />
    )
}
