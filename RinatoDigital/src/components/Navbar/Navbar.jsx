import { Disclosure } from "@headlessui/react";
import { FaInstagram, FaPhone } from "react-icons/fa";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Contactanos", href: "#", current: false },
  { name: "¿Quienes Somos?", href: "#", current: false },
  { name: "Servicios", href: "#", current: false },
  { name: "Portafolio", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-white">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-purple-900 hover:bg-purple-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              <div className="flex items-center justify-center sm:items-stretch sm:justify-start">
                <img
                  className="h-14 w-auto"
                  src="src/assets/images/3.png"
                  alt="Rinato Digital Logo"
                />
              </div>

              <div className="hidden sm:flex sm:ml-6 space-x-4 items-center justify-center">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "text-purple-900 border-purple-900"
                        : "text-purple-900 hover:border-purple-900",
                      "block px-3 py-2 text-base font-medium border-b-2 "
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </a>
                ))}
              </div>

              <div className="hidden sm:flex items-center justify-center">
                <div className="flex space-x-4 items-center text-purple-900">
                  <FaPhone />
                  <p>|</p>
                  <FaInstagram />
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-4 pb-2 pt-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-purple-900 text-white"
                      : "text-purple-900 hover:bg-purple-900 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
