import Link from "next/link";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";
import React from 'react';
// Adds markup and invokes renderDefault()
function MyEnhancedNavbar(props: any) {
  return (
    <div>
      <div className="flex items-center justify-between p-5">
        <Link href="/" className="text-[#0000FF] flex items-center">
          <ArrowUturnLeftIcon className="h-6 w-6 text-[#0000FF] mr-2" />
          Go to Website
        </Link>
        <div className="hidden  bg-gray-500 md:flex p-5 rounded-lg justify-center border-4 border-[#780000]">
          <h1 className="font-bold text-[#780000]  ml-2">
            Welcome to FirehoseAI Studio
          </h1>
{/*           <Link
            href=""
            className="text-[#F7AB0A] font-bold ml-2"
          >
            www.papareact.com/universityofcode
          </Link> */}
        </div>
      </div>
      <>{props.renderDefault(props)}</>
    </div>
  );
}

export default MyEnhancedNavbar;
