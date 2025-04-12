import Header from '../lib/components/Header'
// import Comments from 'components/CommentDemo'
// import { headers } from 'next/headers'  mr-[calc(theme('w-full') - 33rem)]
import { signIn } from '@/auth.config'
import { createServersideClient } from '@/lib/supabase-client'
import { ProjectCard } from '@/lib/components/Card'
import Card from '@/lib/components/Card'
import dynamic from 'next/dynamic'
import clsx from 'clsx'
async function getDate() {
    const supabaseClient =await createServersideClient()
    const { data: projects } = await supabaseClient
        .from('projects')
        .select('title,description,sourceUrl,demoUrl')
        .eq('id', '1')
    const { data: article } = await supabaseClient
        .from('notes')
        .select('content')
        .eq('id', '2')

    return { projects, article }
}
const ProjectItem = ({
    item,
}: {
    item: {
        sourceUrl: string
        demoUrl: string
        title: string
        description: string
    }
}) => {
    return (
        <>
            <a
                className={clsx('block max-w-[20rem]  ', 'text-sky-400')}
                href={item.sourceUrl}
                target="_blank"
            >
                {item.title}
            </a>
            <p>{item.description}</p>
            <a
                className={clsx('text-sky-400')}
                href={item.demoUrl}
                target="_blank"
            >
                <span>Demo</span>
            </a>
        </>
    )
}
export default async function HomePage() {
    
    const { projects, article } = await getDate()
    // console.log('WTF' + projects[0].sourceurl)
    // console.log('WTF' + article[0].content)

    // const headersList = headers()
    return (
        <div className={clsx('gap-8 grid grid-cols-[1fr,3fr]')}>
            <section className={clsx('pr-4')}>
                <h3>Latest</h3>
                <p>No items to display .</p>
            </section>
            <div
                className={clsx(
                    'pl-8 border-l-2 border-solid border-[theme(colors.outer-space)] min-h-screen'
                )}
            >
                <h2 className={clsx('')}>Posts</h2>
                <p>No items to display .</p>
                <h2>Projects</h2>
                <div className={clsx('grid grid-cols-3 gap-5')}>
                    <Card
                        className={clsx(
                            'border-2 rounded-xl border-solid border-[theme(colors.outer-space)]'
                        )}
                    >
                        <ProjectItem item={projects[0]} />
                    </Card>
                </div>
            </div>
        </div>
    )
}
