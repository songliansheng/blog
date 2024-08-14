import styles from './styles.module.css'
export default function Loading() {
    /* ALERT Pay attention the space in ' min-w-[66%]' */

    return (
        <div
            id="main"
            className="'min-w-[50%]'  flex flex-row max-w-7xl mx-auto"
        >
            <div
                id="article"
                className="h-[calc(100vh-100px)] min-w-[66%] bg-black flex items-center justify-center"
            >
                <div
                    className={styles.loader3 + ' w-64 h-[calc(100vh-200px)]'}
                ></div>
                
            </div>

            <div
                id="leafPage-toc-wrapper"
                className="h-[calc(100vh-121px)] hidden sticky xl:block pr-4 top-24 pl-8  w-[19.5rem]"
            ></div>
        </div>
    )
}
