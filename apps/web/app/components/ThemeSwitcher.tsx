'use client'
// let switchTheme = () => {
//     const elem = document.getElementById("para");
//     elem?.style.color = blue;
//     // docParent?.classList.add('dark')
// }
export default function ThemeSwitcher() {
    let switchTheme = () => {
        // const elem = document.getElementById("para");
        const rootElement = document.documentElement;
        rootElement!.classList.add('dark')
        // elem!.style.color = 'blue';
        // docParent?.classList.add('dark')
    }
    return (<div>
        <button onClick={switchTheme}>dark</button>
    </div>)


}