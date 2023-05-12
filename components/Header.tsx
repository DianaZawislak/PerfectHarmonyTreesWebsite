import Image from "next/image";
import Link from "next/link";
import React from 'react';
function Header() {
  return (
    <div className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <div className="flex items-center space-x-2">
        <Link href="/">
          <Image
            src="https://cdn.discordapp.com/attachments/1103865788944875622/1106442544130293780/logo.jpg"
            width={80}
            className="rounded-md"
            height={80}
            alt="logo"
          />
        </Link>
        <h1>Perfect Harmony Trees and Gardens, LLC</h1>
      </div>

      <div>
        <Link
          href="/"
          className="px-5 py-3 text-sm md:text-base bg-gray-700 text-[rgb(216,57,57)] flex items-center rounded-full text-center"
        >
          Sign up 
        </Link>
      </div>
    </div>
  );
}

export default Header;
