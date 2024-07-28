'use client'
import { useRef ,} from 'react'
import { forwardRef } from 'react'
import { Menu } from '@headlessui/react'
import { Avatar } from '@/components/Avatar'
import {
    ArchiveBoxXMarkIcon,
    ChevronDownIcon,
    PencilIcon,
    Square2StackIcon,
    TrashIcon,
} from '@heroicons/react/16/solid'

export default function RootDiv({ avatarSrc }) {
    const dropdown = useRef()
    let DropdownWrapper = () => {
        return (
            <div className="absolute">
                <div className="flex">
                    <div className="flex" ref={dropdown.current}></div>
                </div>
            </div>
        )
    }
    let DropdownWrapperr = forwardRef(function (props, ref) {
        return (
            <div className="absolute">
                <div className="flex">
                    <div className="flex" ref={ref} {...props}></div>
                </div>
            </div>
        )
    })

    return (
        <>
            <Menu>
                <Menu.Button className="flex shrink-0 ">
                    <Avatar imageSrc={avatarSrc} />
                </Menu.Button>
                <Menu.Items
                    // className="w-52 origin-top-right rounded-xl border border-white/5 bg-white/5 p-1 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
                    as={DropdownWrapperr}
                >
                    <Menu.Item>
                        <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                            <PencilIcon className="size-4 fill-white/30" />
                            Edit
                            <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">
                                ⌘E
                            </kbd>
                        </button>
                    </Menu.Item>
                    <Menu.Item>
                        <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                            <Square2StackIcon className="size-4 fill-white/30" />
                            Duplicate
                            <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">
                                ⌘D
                            </kbd>
                        </button>
                    </Menu.Item>
                    <div className="my-1 h-px bg-white/5" />
                    <Menu.Item>
                        <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                            <ArchiveBoxXMarkIcon className="size-4 fill-white/30" />
                            Archive
                            <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">
                                ⌘A
                            </kbd>
                        </button>
                    </Menu.Item>
                    <Menu.Item>
                        <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                            <TrashIcon className="size-4 fill-white/30" />
                            Delete
                            <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">
                                ⌘D
                            </kbd>
                        </button>
                    </Menu.Item>
                </Menu.Items>
            </Menu>
            <DropdownWrapper />
        </>
    )
}
