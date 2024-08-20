import { LinkCard } from "@/components/Card"
export default async function Page({
    params,
    searchParams,
}: {
    params: { section: string }
    searchParams: { [key: string]: string | string[] | undefined }
    }) {
    const item = {
        url: 'https://github.com/songliansheng/blog',
        title: 'Blog',
        description:"A personal blog created using Nextjs、Reactjs , the demo is ...current site you are visiting"
    }
   
    return (
        <main className="max-w-7xl mx-auto">
            <header className="pb-12">
                <p className="text-2xl">
                   
                </p>
            </header>
            <div className="grid gap-x-8 grid-cols-3 gap-y-12 justify-items-center">
                <LinkCard item={item} />
                
            </div>
        </main>
    )
}
