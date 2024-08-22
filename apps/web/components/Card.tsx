export default function CardItem({ title, description }) {
    return 
    
}
export function LinkCard({item}: { item:{url; title; description}} ) {
    return (
        <div className="flex justify-center items-center w-[25rem] md:w-full group dark:bg-[theme('colors.onyx')] h-48  dark:hover:bg-[theme('colors.outer-space')] hover:bg-[theme('colors.silver')] bg-[theme('colors.dark-gray')]">
            <a
                className="block   max-w-[20rem]"
                href={item.url}
                target="_blank"
            >
                <h2 className="p-6 group-hover:font-bold">{item.title}</h2>
                <p className="px-6 pb-6 dark:text-[theme('colors.dark-gray')] dark:group-hover:text-white group-hover:font-semibold">
                    {item.description}
                </p>
            </a>
        </div>
    )
}