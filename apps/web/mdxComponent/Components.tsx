import * as React from "react";
import clsx from "clsx";
export const BR = () => <br className="" />;
export const CODE = ({ children, ...props }:{children:any}) => (
  <>
    <code className="dark:bg-(--color-onyx)" {...props}>
      {children}
    </code>
  </>
);
export const H1 = ({ children }: { children: any }) => (
  <h1 className="text-2xl">{children}</h1>
);
/*  className="mb-8 h-[3px] bg-gray-600"  */
export const H2 = ({ children, ...props }: { children: any }) => (
  <>
    <h2
      className={clsx(
        "text-3xl font-bold mb-2",
        "scroll-mt-[calc(var(--rootheader-height)+1rem)]"
      )}
      {...props}
    >
      {children}
    </h2>
  </>
);

export const H3 = ({ children, ...props }: { children: any }) => (
  <h3
    className={clsx(
      "scroll-mt-[calc(var(--rootheader-height)+1rem)]",
      "text-xl font-bold "
    )}
    {...props}
  >
    {children}
  </h3>
);
export const HR = ({ children, ...props }: { children: any }) => (
  <hr
    className="dark:border-white/10 my-12 h-[2px] dark:bg-white/10"
    {...props}
  />
);

export const P = ({ children, ...props }: { children: any }) => (
  <p className="mb-4 leading-10" {...props}>
    {children}
  </p>
);
export const Li = ({ children, ...props }: { children: any }) => (
  <li className="" {...props}>
    {children}
  </li>
); /* "italic capitalize font-normal" */
export const STRONG = ({ children, ...props }: { children: any }) => (
  <strong
    className={clsx(
      "font-normal capitalize underline decoration-[1.5px] dark:decoration-white/30 decoration-gray-600"
    )}
    {...props}
  >
    {children}
  </strong>
);
export const UL = ({ children, ...props }: { children: any }) => (
  <ul {...props} className={clsx("list-disc", " pl-4")}>
    {children}
  </ul>
);
