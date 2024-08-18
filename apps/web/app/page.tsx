import Header from '../components/Header'
// import Comments from 'components/CommentDemo'
// import { headers } from 'next/headers'  mr-[calc(theme('w-full') - 33rem)]
import { signIn } from 'auth'
import dynamic from 'next/dynamic'

export default function HomePage() {
    // const headersList = headers()
    return (
        <main className=" flex flex-col mx-auto max-w-7xl lg:justify-start">
            <div className=" px-1.5 h-[calc(100vh+50px)]">
                <p className="pb-4 font-bold text-2xl">
                    Hi , I'm Liansheng , I'm a
                </p>
                <p className="inline-block typewriter text-3xl pr-12 pb-12 font-bold indent-72 mr-[calc(8rem)]">
                    Web developer ,
                </p>

                <p className="pb-12 font-bold text-2xl">
                    I'm now at a junior level , I'm able ( Of course I'm still
                    learning ) to build websites using nextjs、Reactjs ,
                </p>
                <p className="pb-4 font-bold text-2xl">You can find me on </p>
                <p className="inline-block pr-12 typewriter pb-8 text-3xl font-bold indent-56">
                    <a
                        href="https://www.x.com/lianshengsong"
                        className=" hover:bg-sky-700 underline"
                    >
                        X(Twitter)
                    </a>
                    、
                    <a
                        href="https://github.com/songliansheng"
                        className=" hover:bg-sky-700 underline"
                    >
                        Github
                    </a>
                    .
                </p>
            </div>
        </main>
    )
}
