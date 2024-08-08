import styles from './styles.module.css'
export default function Loading() {
    // Or a custom loading skeleton component
    return (
        <div id="slug" className=" flex flex-row max-w-7xl mx-auto">
            <div id="slug-main" className={styles.loader}>
                Loading
            </div>

            <div
                id="slug-toc-wrapper"
                className="h-[calc(100vh-121px)] hidden sticky xl:block pr-4 top-24 pl-8  w-[19.5rem]"
            ></div>
        </div>
    )
}
