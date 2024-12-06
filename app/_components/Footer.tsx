import Link from "next/link";
import React from "react";
import { RiMovie2Fill } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="h-24 flex items-center justify-center bg-slate-900">
      <Link href={"/"} className="flex items-end">
        <RiMovie2Fill className="text-red-700" size={50} />
        <h1 className="text-2xl font-bold text-white">Movies</h1>
      </Link>
    </div>
  );
};

export default Footer;
