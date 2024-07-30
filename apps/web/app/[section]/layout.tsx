export default function SubpageLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div
            id="subpage-main-boundary"
            className="max-w-7xl mx-auto "
        >
            {children}
        </div>
    )
}
