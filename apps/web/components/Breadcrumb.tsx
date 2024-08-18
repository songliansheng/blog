'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronRightIcon } from './Icons'
function getBreadcrumbs() {
    const currentPath = usePathname()
    const routeSegments = currentPath.split('/').filter((v) => v.length > 0)
    const breadcrumbs = routeSegments.map((routeSegment, index) => {
        const subRoutePath = routeSegments.slice(0, index + 1).join('/')
        const subRouteTitle = routeSegment
        return { subRoutePath, subRouteTitle }
    })
    return breadcrumbs
}
/* TODO Set the Route title centered horitally */
export default function Breadcrumbs({}) {
    const breadcrumbs = getBreadcrumbs()
    return (
        <div className="flex gap-x-4 flex-wrap">
            {breadcrumbs.map((breadcrumb, index) => (
                <div className="flex items-center capitalize" key={index}>
                    <Link href={'/' + breadcrumb.subRoutePath}>
                        {breadcrumb.subRouteTitle}
                    </Link>
                    {ChevronRightIcon}
                </div>
            ))}
        </div>
    )
}
