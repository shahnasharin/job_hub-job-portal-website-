import React from "react";
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import job3 from '../../assets/111.png';
// import AuthContext from "../../Context/AuthContext";

const userNav = [
  { name: "Home", href: "#", current: true },
  { name: "Services", href: "#", current: false },
  { name: "About", href: "#", current: false },
  { name: "login", href: "/login", current: false },
  { name: "register", href: "#", current: false },

];

const Navbar = () => {
  return (
    <Disclosure as="nav" className="bg-transparent">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
            <div className="relative flex items-center justify-between h-20">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-start">
                <div className="flex-shrink-0 flex items-center">
                  {/* Your logo */}
                  <Link to="/">
                    <img
                      className="block lg:hidden h-10"
                      src={job3}
                      alt="Logo"
                    />
                    <img
                      className="hidden lg:block h-60 w-80"
                      src={job3}
                      alt="Logo"
                    />
                  </Link>
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {userNav.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={`
                          px-3 py-2 rounded-md text-sm font-medium
                          ${
                            item.current
                              ? "text-white block py-2 pl-3 pr-4 text-gray-900 rounded hover:text-orange-700 md:hover:bg-transparent md:p-0 dark:text-white md:dark:hover:text-orange-500 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                              : "block py-2 pl-3 pr-4 text-orang-900 rounded hover:text-orange-700 md:hover:bg-transparent md:p-0 dark:text-white md:dark:hover:text-orange-500 dark:hover:text-white md:dark:hover:bg-transparent dark:border-orange-700"
                          }
                        `}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              {/* Right side of the navbar */}
              {/* <div className="hidden sm:flex sm:items-center sm:ml-6"> */}
                {/* Add your content here for the right side of the navbar */}
              {/* </div> */}
            </div>
          </div>

          {/* Mobile menu */}
          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {userNav.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`
                    block px-3 py-2 rounded-md text-base font-medium
                    ${
                      item.current
                        ? "text-white bg-blue-700"
                        : "text-gray-300 hover:text-white hover:bg-gray-700"
                    }
                  `}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
