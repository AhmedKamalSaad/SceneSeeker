import Link from "next/link";
import React from "react";
import { RiMovie2Fill } from "react-icons/ri";
import ActiveLink from "./ActiveLink";

const NavBar = () => {
  return (
    <nav className="h-24 bg-slate-950/20 w-full fixed z-20">
      <div className="max-w-screen-2xl mx-auto flex justify-between items-center text-white h-full w-full px-3">
        <Link href={"/"} className="flex items-end">
          <RiMovie2Fill className="text-red-700" size={38} />
          <h1 className="text-xl font-bold">Movies</h1>
        </Link>
        <div className="flex gap-5 font-bold text-lg tracking-widest">
          <ActiveLink href={"/movies"}>Movies</ActiveLink>
          <ActiveLink href={"/tv"}>TV</ActiveLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
