import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaRedditAlien,
} from "react-icons/fa";
import Link from "next/link";

import Logo from "./Logo";
import { Link2Icon } from "@radix-ui/react-icons";

interface FooterProps {
    data: Footer;
}

export default function Footer({ data }: FooterProps) {
    const { websiteTitle, logo, sections } = data;

    return (
      
            <footer className="p-4 bg-white sm:p-6 dark:bg-gray-800 relative">
                <div 
                    className="absolute inset-0 z-0" 
                    style={{
                        backgroundImage: 'url(https://cdn.discordapp.com/attachments/1103865788944875622/1109552133776355338/dianadetroit_realistic_photo_of_tree_trunk_sliced_view_from_the_8ab8a6ad-6576-409e-b631-365dcaf77bf6.png)', 
                        backgroundRepeat: 'no-repeat', 
                        backgroundSize: 'cover',
                        opacity: 0.3
                    }}
                />
                <div className="md:flex md:justify-between z-10 relative">
                    <div className="mb-6 md:mb-0">
                        <Link href="/" target="_blank" className="flex items-center">
                        <img src="https://cdn.discordapp.com/attachments/1103865788944875622/1109562988878368828/logonobrgd.png" alt="Logo" className="logo-class"  width="150" height="150" />
{/*                             <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                                {websiteTitle}
                            </span> */}
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
                <hr className="my-6 border-gray-800 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between z-10 relative">
                    <span className="text-xl text-gray-500 sm:text-center dark:text-gray-400">
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
                            <FaFacebookF aria-hidden="true" size={36}/>
                        </button>

                        <button
                            className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                            aria-label="Share on Twitter"
                        >
                            <FaTwitter aria-hidden="true" size={36}/>
                        </button>

                        <button
                            className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                            aria-label="Share on LinkedIn"
                        >
                            <FaLinkedinIn aria-hidden="true" size={36}/>
                        </button>

                        <button
                            className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                            aria-label="Share on Reddit"
                        >
                            <FaRedditAlien aria-hidden="true" size={36}/>
                        </button>

                   
                    </div>
                </div>
            </footer>
       
    );
}
