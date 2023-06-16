import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaRedditAlien,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import Link from "next/link";

import Logo from "./Logo";
import { Link2Icon } from "@radix-ui/react-icons";

interface FooterProps {
  data: FooterV2;
}

export default function Footer({ data }: FooterProps) {
  const {  CompanyName,   PhoneNumber, logoUrl, Address,Email,  backgroundImageUrl} = data;

  return (
    <footer className="p-4 bg-white sm:p-6 dark:bg-gray-900 relative">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            `url(${backgroundImageUrl})`,
          backgroundRepeat: "repeat",
          backgroundSize: "100% auto", // Adjust this value to fit your needs
          opacity: 0.1,
        }}
      />

      <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8 justify-center mb-8 z-10">
        <div className="flex flex-col sm:flex-row items-center justify-start">
          <Link href="/" target="_blank">
            <img
              src={logoUrl}
              alt="Logo"
              className="logo-class pb-3"
              width="80"
              height="80"
            />
          </Link>
          <h1 className="text-gray-600 justify-center align-middle md:ml-4 sm:ml-0 mt-2 sm:mb-2">
            {CompanyName}, LLC
          </h1>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-semibold text-gray-900 text-center uppercase dark:text-white">
            Address
          </h3>
          <ul>
            <li className="mb-2 flex justify-center">
              <FaMapMarkerAlt className="mr-2 text-gray-600 dark:text-gray-400" />
              <span className="text-gray-600 dark:text-gray-400 justify-center">
                {Address.StreetAddress}
              </span>
            </li>
            <li className="mb-2 flex justify-center">
              <span className="ml-6 text-gray-600 dark:text-gray-400 justify-center">
                {Address.City}, {Address.State} {Address.Zipcode}
              </span>
            </li>
          </ul>
        </div>

        <div className="z-10">
          <h3 className="mb-3 text-center text-sm font-semibold text-gray-900 uppercase dark:text-white">
            Contact
          </h3>
          <ul>
            <li className="mb-2 flex items-center justify-center">
              <FaPhone className="mr-2 text-gray-600 dark:text-gray-400  " />
              <a
                href={`tel:${[PhoneNumber]}`}
                className="text-gray-600 dark:text-gray-400 justify-center"
              >
               { PhoneNumber}
              </a>
            </li>
            <li className="mb-2 flex items-center justify-center">
              <FaEnvelope className="mr-2 text-gray-600 dark:text-gray-400" />
              <a
                href={`mailto:${Email}`}
                className="text-gray-600 dark:text-gray-400"
              >
                {Email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <hr className="my-2 border-gray-300 sm:mx-auto dark:border-gray-700 lg:my-2" />

      <div className="sm:flex sm:items-center sm:justify-between z-10 relative">
        {/* <div className="flex flex-col">

   <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
    {websiteTitle}
  </span>
</div> */}
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400 flex flex-col items-center">
          © 2023{" "}
          <Link
            href="https://www.jgis219.com/"
            target="_blank"
            className="hover:underline"
          >
            {CompanyName}™
          </Link>
          <span className="self-center text-sm">All Rights Reserved.</span>
        </span>

        <div className="flex justify-center items-center mt-4 sm:mt-0 space-x-6">
          <button
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            aria-label="Share on Facebook"
          >
            <FaFacebookF aria-hidden="true" size={36} />
          </button>
          <button
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            aria-label="Share on Twitter"
          >
            <FaTwitter aria-hidden="true" size={36} />
          </button>
          <button
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            aria-label="Share on LinkedIn"
          >
            <FaLinkedinIn aria-hidden="true" size={36} />
          </button>
        </div>
      </div>
    </footer>
  );
}
