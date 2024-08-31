'use client'
import { commentIcon, pencilSquareIcon, lightIcon } from '@/components/Icons'
import { Button } from '@/components/Button'
export default function ActionMenu() {
    return (
        <div className="flex justify-end">
            <Button className="flex px-sm items-center" onClick={() => {}}>
                {pencilSquareIcon}
                <span>Edit</span>
            </Button>
            <Button className="flex px-sm items-center" onClick={() => {}}>
                {commentIcon}
                <span>Reply</span>
            </Button>
        </div>
    )
}
