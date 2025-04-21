"use client";
import { IdentificationIcon } from "./Icons";
import { useContext } from "react";
import { ShowContactMeContext } from "@/app/providers";
import { CopyIcon } from "./Icons";
import clsx from "clsx";
import Card from "./Card";
const ContactMeButton = () => {
  const showContactMe = useContext(ShowContactMeContext);
  return (
    <>
      <button
        className={clsx(
          " text-base rounded-sm bg-sky-700 dark:hover:bg-transparent py-2 outline-2 px-4 border border-sky-700 dark:text-(--color-egg-shell)"
        )}
        onClick={() => showContactMe.setShowContactMe(true)}
      >
        <span
          className={clsx("font-bold dark:hover:text-sky-400 dark:text-white ")}
        >
          Contact Me
        </span>
      </button>
    </>
  );
};
function ContactMe({ className }: { className?: string }): JSX.Element {
  const showContactMe = useContext(ShowContactMeContext);
  const copy = () => {
    navigator.clipboard.writeText("lianshengsong@outlook.com");
  };
  // const showContactMe = useContext(ShowContactMeContext)
  return (
    <>
      <div
        className={clsx(
          "rounded-xl dark:border-none border-2 border-(--color-outer-space)",
          className
        )}
      >
        {!showContactMe.showContactMe && <ContactMeButton />}
        {showContactMe.showContactMe && (
          <Card className={clsx("", "dark:bg-(--color-dark-licorice)")}>
            <div className={clsx("flex justify-end")}>
              <button
                className={clsx(
                  `font-bold py-1.5 px-2 text-xl rounded-full dark:hover:bg-(--color-outer-space) hover:bg-(--color-silver)`,
                  "font-serif"
                )}
                onClick={() => showContactMe.setShowContactMe(false)}
              >
                Hide
              </button>
            </div>

            <p>Hi , I'm Liansheng ,</p>
            <p>I'm a self-taught web developer !</p>
            <h3 className={clsx("font-serif")}>Contacts</h3>
            <ul className="list-disc list-inside">
              <li className="">
                <div className="inline-flex items-center">
                  <span className="px-2 text-lg">Email :</span>
                  <span className="text-sm">lianshengsong@outlook.com</span>
                  <button onClick={copy} className="">
                    <CopyIcon className="dark:hover:bg-(--color-outer-space) rounded-md fill-black dark:fill-zinc-400 stroke-white size-6 p-[0.25rem]" />
                  </button>
                </div>
              </li>
              <li>
                <a
                  href="https://www.x.com/lianshengsong"
                  className={clsx(
                    "font-bold rounded-full text-(--foreground-color-blue) underline py-1.5 px-2 hover:text-white"
                  )}
                  target="_blank"
                >
                  X(Twitter)
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/songliansheng"
                  className={clsx(
                    "font-bold rounded-full text-(--foreground-color-blue) underline  py-1.5 px-2",
                    "hover:text-white"
                  )}
                  target="_blank"
                >
                  Github
                </a>
              </li>
            </ul>
          </Card>
        )}
      </div>
    </>
  );
}
export { ContactMe };
