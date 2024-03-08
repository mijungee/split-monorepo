import clsx from "clsx";
import { type KeyboardEvent, useState } from "react";
import type { ServiceTypes } from "~/client-user/src/types/user";
import { TabDropdownIcon } from "./TabDropdownIcon";

export interface TabDropdownTypes {
  type: ServiceTypes;
  title: string;
  description: string;
  handleClick: () => void;
}

export const TabDropdownElement = ({ type, title, description, handleClick }: TabDropdownTypes) => {
  const [isMouseEntered, setIsMouseEntered] = useState(false);

  return (
    <button
      type="button"
      className={clsx(
        "inline-flex items-start justify-center gap-[15px] rounded-[5px] px-[10px] py-[15px]",
        isMouseEntered ? "bg-theme-white" : "bg-gray-50",
      )}
      onMouseEnter={() => setIsMouseEntered(true)}
      onMouseLeave={() => setIsMouseEntered(false)}
      onClick={handleClick}
    >
      <TabDropdownIcon type={type} />
      <div className="flex flex-col items-start justify-center gap-1.5">
        <div className="text-left text-16/semi-bold text-theme-black">{title}</div>
        <div className="text-left text-13/regular text-theme-black">{description}</div>
      </div>
    </button>
  );
};

export const TabDropdown = ({ items }: { items: TabDropdownTypes[] }) => {
  return (
    <div className="inline-flex flex-col items-center justify-center gap-3.5 rounded-[5px] bg-gray-50 p-5">
      {items.map((item) => {
        return <TabDropdownElement key={item.type} {...item} />;
      })}
    </div>
  );
};
