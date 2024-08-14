import Header from '../components/Header'
// import Comments from 'components/CommentDemo'
// import { headers } from 'next/headers'
import { signIn } from 'auth'
import dynamic from 'next/dynamic'

const Comments = dynamic(() => import('@/components/Comments/Comments'), {
    loading: () => <p>Loading...</p>,
})
export default function () {
    // const headersList = headers()
    return (
        <div>
            <div className="mx-auto px-1.5 max-w-[1408px] typewriter">
                <h1 className="lg:ps-4">Hi ! I'm Song Liansheng !</h1>
            </div>
        </div>
    )
}
