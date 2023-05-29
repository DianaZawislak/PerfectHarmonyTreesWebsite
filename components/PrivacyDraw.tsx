"use client";
import { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Link from "next/link";

export default function CookieBanner() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const userResponse = localStorage.getItem('gdprResponse')
    if (!userResponse) {
      setOpen(true)
    }
  }, [])

  function onClose() {
    localStorage.setItem('gdprResponse', 'accepted')
    setOpen(false)
  }

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        static
        className="fixed inset-0 overflow-y-auto  z-50"
        onClose={() => {}}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gray-500 bg-opacity-10 transition-opacity" />
          <div className="fixed inset-x-0 bottom-0 pb-4">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-300"
              enterFrom="translate-y-full"
              enterTo="translate-y-0"
              leave="transform transition ease-in-out duration-300"
              leaveFrom="translate-y-0"
              leaveTo="translate-y-full"
            >
              <Dialog.Panel className="w-full max-w-md mx-auto rounded-lg shadow-lg overflow-hidden transform transition-all sm:max-w-xl">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 sm:mt-0 sm:text-left">
                      <Dialog.Title
                        as="h3"
                        className="text-lg leading-6 font-medium text-gray-900"
                      >
                        Cookies Policy
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          We use cookies to improve your browsing experience.
                          For more information, please visit our{" "}
                          <Link
                            className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
                            href="/privacy"
                          > Privacy Policy.</Link>{" "}
                         
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    type="button"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-lime-300 text-base font-medium text-gray-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => onClose()}
                  >
                    Accept
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
