import React from "react";
import { FloatingDock } from "./ui/floating-dock";
import {
  IconBrandGmail,
  IconFolders,
  IconHome,
  IconSchool,
  IconBulbFilled,
  IconUser
} from "@tabler/icons-react";

export function FloatingDockDemo() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "./",
    },

    {
      title: "About Me",
      icon: (
        <IconUser className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Skills",
      icon: (
        <IconBulbFilled className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "School",
      icon: (
        <IconSchool className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },

    {
      title: "Projects",
      icon: (
        <IconFolders className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/projects",
    },
    {
      title: "Contact Me",
      icon: (
        <IconBrandGmail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
  ];
  return (
   /*  <div className="relative w-full flex items-center justify-center">
      <FloatingDock className="top-2" />
      <p className="text-black dark:text-white">
        The Navbar will show on top of the page
      </p>
    </div> */
    <div className="flex items-center justify-center h-[12rem] w-full">
      <FloatingDock
        items={links}
      />
    </div>
  );
}
