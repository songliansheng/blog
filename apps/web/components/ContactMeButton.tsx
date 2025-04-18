'use client'
import { createContext, useContext, useState } from 'react'

import { IdentificationIcon } from './Icons'
import { ShowContactMeContext } from '@/app/providers'
import clsx from 'clsx'

export default function ContactMeButton(): JSX.Element {
    const showContactMe = useContext(ShowContactMeContext)
    // const showContactMe = useContext(ShowContactMeContext)
    return (
        <>
            <button
                className={clsx(
                    ' text-base rounded-sm bg-sky-700 dark:hover:bg-transparent py-2 outline-2 px-4 border border-sky-700 dark:text-(--color-egg-shell)'
                )}
                onClick={() => showContactMe.setShowContactMe(true)}
            >
                <span
                    className={clsx(
                        'font-bold dark:hover:text-sky-400 dark:text-white '
                    )}
                >
                    Contact Me
                </span>
            </button>
        </>
    )
}