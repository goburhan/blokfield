import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";

const navigation = [
  { name: "Projects", href: "#", current: true },
  { name: "Partners", href: "#", current: false },
  { name: "Co-member", href: "#", current: false },
  { name: "About Us", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <Disclosure as="nav" className="bg-black h-24">
      {({ open }) => (
        <>
          <div className="  mx-auto px-2 sm:px-0 lg:px-8 md:-py-10 ">
            <div className="relative flex justify-between h-24">
              <div className="flex-1 flex items-center justify-center  sm:items-stretch sm:justify-start  ">
                <div className="flex-shrink-0  flex items-center">
                  <img
                    className=" sm:hidden md:block h-20 w-auto  "
                    src="images/Group 243.svg"
                    alt="Workflow"
                  />
                </div>
                <div className=" sm:ml-6 ">
                  <div className="flex sm:space-x-4 md:space-x-12 lg:space-x-24 absolute lg:mt-4  ">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "px-6 py-4 rounded-md text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contact Button */}
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="bg-gray-800 sm:hidden md:block p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                >
                  <span className="sr-only">View notifications</span>
                  <div>Contact</div>
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
}
