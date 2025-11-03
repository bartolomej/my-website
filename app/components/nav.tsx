"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeSwitch } from "./theme-switch";
import { metaData } from "../config";

const navItems = {
  "/work": { name: "Work" },
  "/photos": { name: "Photography" },
  // TODO: add blog
  // "/blog": { name: "Blog" },
};

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="lg:mb-12 mb-8 py-5">
      <div className="flex flex-col md:flex-row md:items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-semibold tracking-tight">
            {metaData.title}
          </Link>
        </div>
        <div className="flex flex-row gap-4 mt-6 md:mt-0 md:ml-auto items-center">
          {Object.entries(navItems).map(([path, { name }]) => {
            const isActive = pathname === path;
            return (
              <Link
                key={path}
                href={path}
                className={`transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative ${
                  isActive
                    ? "text-neutral-900 dark:text-neutral-100 underline decoration-2 underline-offset-4"
                    : ""
                }`}
              >
                {name}
              </Link>
            );
          })}
          <ThemeSwitch />
        </div>
      </div>
    </nav>
  );
}
