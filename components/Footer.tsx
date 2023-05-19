import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaRedditAlien,
} from "react-icons/fa"; // Import social icons
import Link from "next/link";

import Logo from "./Logo";
import { Link2Icon } from "@radix-ui/react-icons";
interface FooterProps {
    data: Footer;
  }
  
  export default function Footer({ data }: FooterProps) {
    const { websiteTitle, logo, sections } = data;


  return (
    <div className="max-w-screen-lg mx-auto">
      <footer className="p-4 bg-white sm:p-6 dark:bg-gray-800">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link href="/" target="_blank" className="flex items-center">
              <Logo picture={logo} />
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                {websiteTitle}
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            {sections.map((section) => (
              <div key={section.title}>
                <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  {section.title}
                </h3>
                <ul>
                  {section.items.map((item) => (
                    <li key={item.title} className="mb-4">
                      <Link
                        href={item.link}
                        target="_blank"
                        className="text-gray-600 hover:underline dark:text-gray-400"
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <Link
              href="https://www.jgis219.com/"
              target="_blank"
              className="hover:underline"
            >
              {websiteTitle}™
            </Link>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            <button
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              aria-label="Share on Facebook"
            >
              <FaFacebookF aria-hidden="true" />
            </button>

            <button
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              aria-label="Share on Twitter"
            >
              <FaTwitter aria-hidden="true" />
            </button>

            <button
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              aria-label="Share on LinkedIn"
            >
              <FaLinkedinIn aria-hidden="true" />
            </button>

            <button
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              aria-label="Share on Reddit"
            >
              <FaRedditAlien aria-hidden="true" />
            </button>

            <button
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              aria-label="Copy link"
            >
              <Link2Icon aria-hidden="true" />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
