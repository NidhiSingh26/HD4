import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";

export type DropdownProps = {
  title: string;
  description: string;
  isMobile: boolean;
};

export default function Dropdown({ title, description, isMobile }: DropdownProps) {
  return (
    //  original design uses font-klein but its missing numbers, question marks, and other symbols.
    <div className={`w-full mx-auto ${isMobile ? "" : "relative"}`}>
      <Disclosure>
        {({ open }) => (
          <>
            <DisclosureButton
              className={`flex justify-between items-center w-full px-4 py-3 font-medium text-lg bg-gray-100 shadow-blocky-box-shadow ${open ? "rounded-t-lg" : "rounded-lg"} hover:bg-gray-200 transition-all duration-200`}
            >
              <span>{title}</span>
              <FontAwesomeIcon
                icon={faChevronDown}
                className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
              />
            </DisclosureButton>

            {open && (
              <DisclosurePanel
                className={`px-4 pt-4 pb-4 bg-gray-100 rounded-b-lg shadow-blocky-box-shadow ${!isMobile ? "absolute z-10" : ""}`}
              >
                {description}
              </DisclosurePanel>
            )}
          </>
        )}
      </Disclosure>
    </div>
  );
}
