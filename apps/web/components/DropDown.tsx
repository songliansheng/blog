"use client";
import Button from "./Button";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { ChevronDownIcon } from "@/components/Icons";

export function DropDownItem({ children, className, onClick, title }) {
  return (
    <button className={className} onClick={onClick} title={title}>
      {children}
    </button>
  );
}

function DropDownItems({ children, onClose, dropDownItemsRef, className }) {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    onClose();
  };
  return (
    <div
      ref={dropDownItemsRef}
      onKeyDown={handleKeyDown}
      className={`fixed z-50 ${className}`}
    >
      {children}
    </div>
  );
}

export default function DropDown({
  dropDownItemsClassName,
  buttonIcon,
  buttonLabel,
  children,
  stopCloseOnClickSelf,
}: {
  buttonIcon;
  dropDownItemsClassName;
  children: React.ReactNode;
  buttonLabel?: string;
  stopCloseOnClickSelf?: boolean;
}) {
  const dropDownButtonRef = useRef<HTMLButtonElement>(null);
  const dropDownItemsRef = useRef<HTMLDivElement>(null);
  const [showDropDown, setShowDropDown] = useState(false);
  useEffect(() => {
    const dropDownButton = dropDownButtonRef.current;
    const dropDownItems = dropDownItemsRef.current;
    if (showDropDown && dropDownItems !== null && dropDownButton !== null) {
      const { top, left } = dropDownButton.getBoundingClientRect();
      dropDownItems.style.top = `${top + dropDownButton.offsetHeight}px`;
      dropDownItems.style.left = `${left}px`;
    }
  }, [dropDownButtonRef, dropDownItemsRef, showDropDown]);
  useEffect(() => {
    const button = dropDownButtonRef.current;

    if (button !== null && showDropDown) {
      const handle = (event: MouseEvent) => {
        const target = event.target;
        if (stopCloseOnClickSelf) {
          if (
            dropDownItemsRef.current &&
            /* MARK as is used in Type Assertion in typescript */
            dropDownItemsRef.current.contains(target as Node)
          ) {
            return;
          }
        }
        /* MARK
         *  If somewhere other than the dropDown Button is clicked , dropDownItems will be hidden
         */
        if (!button.contains(target as Node)) {
          setShowDropDown(false);
        }
      };
      document.addEventListener("click", handle);

      return () => {
        document.removeEventListener("click", handle);
      };
    }
  }, [dropDownItemsRef, dropDownButtonRef, showDropDown, stopCloseOnClickSelf]);
  useEffect(() => {
    const handleButtonPositionUpdate = () => {
      if (showDropDown) {
        const dropDownButton = dropDownButtonRef.current;
        const dropDownItems = dropDownItemsRef.current;
        if (dropDownButton !== null && dropDownItems !== null) {
          const { top } = dropDownButton.getBoundingClientRect();
          const newPosition = top + dropDownButton.offsetHeight;
          if (newPosition !== dropDownItems.getBoundingClientRect().top) {
            dropDownItems.style.top = `${newPosition}px`;
          }
        }
      }
    };

    document.addEventListener("scroll", handleButtonPositionUpdate);

    return () => {
      document.removeEventListener("scroll", handleButtonPositionUpdate);
    };
  }, [dropDownButtonRef, dropDownItemsRef, showDropDown]);
  const handleClose = () => {
    setShowDropDown(false);
  };
  return (
    <>
      <button
        onClick={() => setShowDropDown(!showDropDown)}
        className="flex items-center gap-x-2 text-sm"
        ref={dropDownButtonRef}
      >
        {buttonIcon && buttonIcon}
        {buttonLabel && (
          <span className="text dropdown-button-text">{buttonLabel}</span>
        )}

        {ChevronDownIcon}
      </button>
      {showDropDown &&
        createPortal(
          <DropDownItems
            className={`text-sm dark:bg-(--color-licorice-light) ${dropDownItemsClassName}`}
            onClose={handleClose}
            dropDownItemsRef={dropDownItemsRef}
          >
            {children}
          </DropDownItems>,
          document.getElementById("root")!
        )}
    </>
  );
}
