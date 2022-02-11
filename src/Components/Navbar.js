import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";

const navigation = [
  { name: "Projects", href: "#projects", current: true },
  { name: "Partners", href: "#partners", current: false },
  { name: "About Us", href: "#about", current: false },
  { name: "What We Do", href: "#whatwedo", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <Disclosure as="nav" className="nav h-24 w-full blur lg">
      {({ open }) => (
        <>
          <div className="  mx-auto  sm:px-0 lg:px-8 md:-py-10 ">
            <div className="relative flex justify-between  h-24">
              <div className="flex-1 flex items-center justify-center  sm:items-stretch sm:justify-start  ">
                <div className="flex-shrink-0  flex items-center">
                <a href="/#">
                <img
                    className=" sm:hidden md:block h-20 w-auto  "
                    src="images/Group 243.svg"
                    alt="Workflow"
                  />
                  </a>  
                
                </div>
                <div className=" sm:ml-0 ">
                  <div className="flex sm:space-x-2 md:space-x-12  absolute mt-4  navloc ">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? " text-white"
                            : "text-gray-300 hover:bg-gray-800 hover:text-white",
                          "sm:px-1 lg:px-6 py-4 rounded-md text-sm font-medium"
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
              <div className="absolute lg:block sm:hidden right-0 flex items-center py-6 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <a   href="#contact">
                 

                <button
                  type="button"
                  className="cbtn px-8 text-white "
                  href="#contact"
                  
                >
                  <div>Contact</div>
                </button>
                </a>
               
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
}
