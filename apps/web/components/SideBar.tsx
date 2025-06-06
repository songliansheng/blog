"use client";
import Button from "@turborepo/design-system/ui/Button";
import {
  EmailIcon,
  GithubIcon,
  CopyIcon,
} from "@turborepo/design-system/ui/Icons";
import clsx from "clsx";

export default function SideBar({
  className,
  id,
}: {
  className?: string;
  id?: string;
}) {
  const copy = () => {
    navigator.clipboard.writeText("lianshengsong@outlook.com");
  };
  function handleCopy() {
    var copyText = document.getElementById("emailAddress")?.textContent;
    var ele=document.getElementById("copiedNotification")
    ele?.classList.remove("hidden");
    ele?.classList.add("block");;
    if (copyText) {
      navigator.clipboard.writeText(copyText);
    }
    setTimeout(() => {
      ele?.classList.remove("block");
      ele?.classList.add("hidden");
    }, 2000);
  }
  return (
    <nav className={clsx(className)} id={id}>
      <a
        href="https://github.com/songliansheng"
        className={clsx(
          "font-bold rounded-full text-(--foreground-color-blue) underline  p-1.5",
          "hover:text-white"
        )}
        target="_blank"
      >
        <GithubIcon
          className={clsx(
            "fill-(--color-deep-sky-blue) dark:hover:fill-white hover:fill-black"
          )}
        />
      </a>
      <a
        href="https://www.x.com/lianshengsong"
        className={clsx(
          "font-bold text-(--foreground-color-blue) dark:hover:text-white hover:text-black",
          "flex justify-center",
          "p-1.5 text-4xl"
        )}
        target="_blank"
      >
        <span>X</span>
      </a>
      <div className={clsx(" flex items-center relative", "group")}>
        <EmailIcon
          className={clsx(
            "fill-(--color-deep-sky-blue) dark:hover:fill-white hover:fill-black",
            "peer",
            "p-1.5 size-8"
          )}
        />
        <div
          className={clsx(
            " items-center z-10 rounded-lg p-1.5",
            // "hidden",

            "hidden group-hover:flex delay-[0.5s] ",
            // "flex group-hover:flex delay-[0.5s] ",
            // "flex shrink-0",
            // "hidden",
            "dark:bg-(--color-carbon) bg-(--color-silver)"
            // " transition-all"
            // "absolute left-8"
          )}
        >
          <span
            id="emailAddress"
            className={clsx(
              // "opacity-0 peer-hover:opacity-100 hover:opacity-100",
              // " transition-all peer-hover:delay-[0.5s]",
              "text-sm z-10 mr-1.5"
            )}
          >
            lianshengsong@outlook.com
          </span>
          <Button
            onClick={handleCopy}
            className={clsx(
              "relative rounded-md font-bold dark:hover:bg-outer-space"
            )}
          >
            <CopyIcon className="size-5  fill-(--color-deep-sky-blue) dark:hover:fill-white hover:fill-black" />
            <span
              className={clsx(
                "hidden absolute left-8 top-0 text-sm",
                "dark:text-white"
              )}
              id="copiedNotification"
            >
              Copied
            </span>
          </Button>
        </div>
      </div>
    </nav>
  );
}
