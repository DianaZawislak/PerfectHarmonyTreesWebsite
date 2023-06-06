import {
    FaFacebookF,
    FaTwitter,
    FaLinkedinIn,
    FaRedditAlien,
    FaPhone, FaEnvelope, FaMapMarkerAlt
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
            backgroundImage: 'url(https://cdn.discordapp.com/attachments/1110785495157461083/1114685118968238183/AdobeStock_372288300.jpeg)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100% auto', // Adjust this value to fit your needs
            opacity: 0.2
          }}
        />
        <div className="md:flex md:justify-end">
                  
  
  <div className="grid grid-cols-2 gap-8 justify-end">
  {/* Address */}
  <div>
    <h3 className="mb-3 text-sm font-semibold text-gray-900 uppercase dark:text-white">Address</h3>
    <ul>
      <li className="mb-2 flex items-center">
        <FaMapMarkerAlt className="mr-2 text-gray-600 dark:text-gray-400" />
        <span className="text-gray-600 dark:text-gray-400">123 Main Street</span>
      </li>
      <li className="mb-2 flex items-center">
        
        <span className="ml-6 text-gray-600 dark:text-gray-400">Jersey City, NJ 07301</span>
      </li>
    </ul>
  </div>

  {/* Phone and Email */}
  <div>
    <h3 className="mb-3 text-sm font-semibold text-gray-900 uppercase dark:text-white">Contact</h3>
    <ul>
      <li className="mb-2 flex items-center">
        <FaPhone className="mr-2 text-gray-600 dark:text-gray-400" />
        <a href="tel:123-456-7890" className="text-gray-600 dark:text-gray-400">123-456-7890</a>
      </li>
      <li className="mb-2 flex items-center">
        <FaEnvelope className="mr-2 text-gray-600 dark:text-gray-400" />
        <a href="mailto:example@example.com" className="text-gray-600 dark:text-gray-400">example@example.com</a>
      </li>
    </ul>
  </div>
</div>
</div>
                  <hr className="my-2 border-gray-300 sm:mx-auto dark:border-gray-700 lg:my-2" />


  <div className="sm:flex sm:items-center sm:justify-between z-10 relative">
  <div className="flex flex-col items-center">
    <Link href="/" target="_blank" className="flex items-center">
      <img src="https://cdn.discordapp.com/attachments/1110785495157461083/1110805598368440320/logonobrgdgray.png" alt="Logo" className="logo-class pb-3" width="80" height="80" />
    </Link>
{/*     <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
      {websiteTitle}
    </span> */}
  </div>
  <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400 flex flex-col items-center">
  © 2023{" "}
  <Link href="https://www.jgis219.com/" target="_blank" className="hover:underline">
    {websiteTitle}™
  </Link>
  <span className="self-center text-sm">
     All Rights Reserved.
  </span>
</span>

  <div className="flex justify-center items-center mt-4 sm:mt-0 space-x-6">
    <button className="text-gray-500 hover:text-gray-900 dark:hover:text-white" aria-label="Share on Facebook">
      <FaFacebookF aria-hidden="true" size={36} />
    </button>
    <button className="text-gray-500 hover:text-gray-900 dark:hover:text-white" aria-label="Share on Twitter">
      <FaTwitter aria-hidden="true" size={36} />
    </button>
    <button className="text-gray-500 hover:text-gray-900 dark:hover:text-white" aria-label="Share on LinkedIn">
      <FaLinkedinIn aria-hidden="true" size={36} />
    </button>
    <button className="text-gray-500 hover:text-gray-900 dark:hover:text-white" aria-label="Share on Reddit">
      <FaRedditAlien aria-hidden="true" size={36} />
    </button>
  </div>
</div>

              </footer>
         
      );
  }