export default function CardItem({ title, description }) {
    return 
    
}
export function LinkCard({item}: { item:{url; title; description}} ) {
    return (
        <a
            className="group dark:bg-white/[0.05] h-48  dark:hover:bg-white/[0.2] bg-black/[0.2]"
            href={item.url}
            target="_blank"
        >
            <h2 className="p-6 group-hover:font-bold">{item.title}</h2>
            <p className="px-6 pb-6 dark:text-white/[0.6] dark:group-hover:text-white group-hover:font-semibold">
                {item.description}
            </p>
        </a>
    )
}