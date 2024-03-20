import * as React from 'react'
export const H1 = ({ children }) => <h1 className="text-2xl">{children}</h1>

export const H2 = ({ children, ...props }) => (
    <>
        <h2 className="text-3xl font-bold mt-7" {...props}>
            {children}
        </h2>
        <hr className="mb-4 mt-2" />
    </>
)

export const H3 = ({ children }) => (
    <h3 className="text-2xl my-3 font-bold">{children}</h3>
)

export const P = ({ children, ...props }) => (
    <p className="my-4 whitespace-pre-wrap" {...props}>
        {children}
    </p>
)
