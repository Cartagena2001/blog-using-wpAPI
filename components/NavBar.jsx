import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <nav className="mx-auto flex items-center justify-between py-5">
      <Link href="/">
        <a className="inline-flex items-center justify-center rounded-lg text-5xl transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-200">
          👋
        </a>
      </Link>

      <ul className="flex items-center gap-2 text-base font-medium text-gray-500">
        <li className="hidden lg:block">
          <Link href="/">
            <a className="rounded-lg px-3 py-2"> Inicio </a>
          </Link>
        </li>

        <li>
          <Link href="/blog/">
            <a className="rounded-lg px-3 py-2">Mi Blog 📕</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
