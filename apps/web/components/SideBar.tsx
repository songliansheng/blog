"use client";
import Button from "@turborepo/design-system/ui/Button";
import {
  EmailIcon,
  GithubIcon,
  CopyIcon,
} from "@turborepo/design-system/ui/Icons";
import { useState, useEffect } from "react";
import clsx from "clsx";
import { createPortal } from "react-dom";
const Nav = ({
  className,
  handleCopy,
  type,
}: {
  className?: String;
  handleCopy: () => void;
  type: String;
  }) => {
  const EmailCopiedNotification = () => {
    return (
      <div
        className={clsx(
          " items-center z-50 rounded-lg p-1.5",
          "flex group-hover:flex delay-[0.5s] ",
          // "hidden group-hover:flex delay-[0.5s] ",
          "flex flex-col lg:flex-row",
          "dark:bg-(--color-carbon) bg-(--color-silver)"
        )}
      >
        <span
          id="emailAddress"
          className={clsx(
            // "opacity-0 peer-hover:opacity-100 hover:opacity-100",
            // " transition-all peer-hover:delay-[0.5s]",
            "hidden lg:inline",
            "text-sm mr-1.5"
          )}
        >
          lianshengsong@outlook.com
        </span>
        <Button
          onClick={handleCopy}
          className={clsx(
            "relative rounded-md font-bold dark:hover:bg-outer-space w-5"
          )}
        >
          <CopyIcon
            className={clsx(
              "size-5  fill-(--color-deep-sky-blue) dark:hover:fill-white hover:fill-black",
              "hidden lg:block"
            )}
          />
          <span
            className={clsx(
              "hidden absolute lg:left-8 lg:top-0 text-sm",
              "dark:text-white"
            )}
            id="copiedNotification"
          >
            Copied
          </span>
        </Button>
      </div>
    );
  }
  const PortalEmailCopiedNotification = ({className}) => { return <span id="copiedNotificationInPortal" className={clsx(className)}>Email copied</span>  }
  return (
    <nav className={clsx("", className)}>
      <a
        href="https://github.com/songliansheng"
        className={clsx(
          "font-bold rounded-full text-(--foreground-color-blue) underline  p-1",
          "hover:text-white"
        )}
        target="_blank"
      >
        <GithubIcon
          className={clsx(
            "fill-(--color-deep-sky-blue) dark:hover:fill-white hover:fill-black lg:size-6 size-5"
          )}
        />
      </a>
      <a
        href="https://www.x.com/lianshengsong"
        className={clsx(
          "font-bold text-(--foreground-color-blue) dark:hover:text-white hover:text-black",
          "flex justify-center",
          "px-2 text-4xl"
        )}
        target="_blank"
      >
        <span className={clsx("text-2xl lg:text-3xl", "group")}>X</span>
      </a>
      <div className={clsx("")}>
        <div
          className={clsx(
            "flex items-center relative lg:absolute lg:py-2 lg:pr-2.5",
            "group",
            "flex-col lg:flex-row"
          )}
        >
          <EmailIcon
            className={clsx(
              "fill-(--color-deep-sky-blue) dark:hover:fill-white hover:fill-black",
              "peer",
              "p-1.5 size-8"
            )}
            onClick={handleCopy}
          />
          {type == "SideBar" && <EmailCopiedNotification />}
          {type == "SideBarPortal" && (
            <PortalEmailCopiedNotification
              className={clsx(
                "hidden absolute top-10 right-0 text-sm whitespace-nowrap"
              )}
            />
          )}
        </div>
      </div>
    </nav>
  );
};

export function SideBar({
  className,
  id,
}: {
  className?: string;
  id?: string;
}) {
  function handleCopy() {
    var copyText = document.getElementById("emailAddress")?.textContent;
    var ele = document.getElementById("copiedNotification");
    ele?.classList.remove("hidden");
    ele?.classList.add("block");
    if (copyText) {
      navigator.clipboard.writeText(copyText);
    }
    setTimeout(() => {
      ele?.classList.remove("block");
      ele?.classList.add("hidden");
    }, 2000);
  }

  return <Nav className={className} handleCopy={handleCopy} type="SideBar" />;
}

export function SideBarPortal({
  className,
  id,
}: {
  className?: string;
  id?: string;
}): JSX.Element {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);
  function handleCopy() {
    // var copyText = document.getElementById("emailAddress")?.textContent;
    var ele = document.getElementById("copiedNotificationInPortal");
    ele?.classList.remove("hidden");
    ele?.classList.add("block");
    // if (copyText) {
    //   navigator.clipboard.writeText(copyText);
    // }
    setTimeout(() => {
      ele?.classList.remove("block");
      ele?.classList.add("hidden");
    }, 2000);
  }
  return (
    <>
      {domLoaded &&
        createPortal(
          <Nav handleCopy={handleCopy} className={className} type="SideBarPortal" />,
          document.getElementById("group-in-header")!
        )}
    </>
  );
}
