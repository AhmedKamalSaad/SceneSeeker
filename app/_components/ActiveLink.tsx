"use client";
import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
interface props {
  href: string;
  children: React.ReactNode;
}
const ActiveLink = ({ children, href }: props) => {
  const currentPath = usePathname();
  const isActive = currentPath === href;
  return (
    <Link
      className={classNames({
        "text-red-700": isActive,
        "text-white": !isActive,
        "hover:text-red-600 transition-colors": true,
      })}
      href={href}
    >
      {children}
    </Link>
  );
};

export default ActiveLink;
