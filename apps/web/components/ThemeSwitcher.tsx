'use client'
import { useEffect } from 'react'
import { darkIcon,lightIcon } from './Icons'


function switchToDark() {
    const rootElement = document.documentElement
    rootElement!.classList.add('dark')
}
function switchToLight() {
    const rootElement = document.documentElement
    // rootElement!.classList.add('dark')
    rootElement!.classList.remove('dark')
}

export default function ThemeSwitcher() {
    useEffect(() => {
        // Use this if you want save theme preference in browser
        /* 
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) 
        */
        // if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        //     document.documentElement.classList.add('dark')
        // }
        // else {
        //     document.documentElement.classList.remove('dark')
        // }
    })

    // let switchTheme = () => {
    //     // const elem = document.getElementById("para");
    //     const rootElement = document.documentElement;
    //     rootElement!.classList.add('dark')
    //     // elem!.style.color = 'blue';
    //     // docParent?.classList.add('dark')
    // }
    return (
        <>
            <div className="flex dark:hidden">
                <button
                    type="button"
                    className="active:scale-95 p-1.5 rounded-full  hover:bg-[theme('colors.silver')] hover:dark:bg-[theme('colors.outer-space')]"
                    onClick={switchToDark}
                >
                    {darkIcon}
                </button>
            </div>
            <div className="hidden dark:flex">
                {' '}
                <button
                    type="button"
                    className="active:scale-95 p-1.5 rounded-full hover:bg-[theme('colors.silver')] hover:dark:bg-[theme('colors.outer-space')]"
                    onClick={switchToLight}
                >
                    {lightIcon}
                </button>
            </div>
        </>
    )
}
