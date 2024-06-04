import React from 'react'
import { FloatingNav } from './ui/floating-navbar';
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";

const Navbar = () => {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-10 text-black dark:text-black" />,
    },
    {
      name: "Experience",
      link: "#experience",
      icon: <IconUser className="h-4 w-10 text-black dark:text-black" />,
    },
    {
      name: "Contact",
      link: "#contact",
      icon: <IconMessage className="h-4 w-10 text-black dark:text-black" />
      ,
    },
  ];
  return (
    <div className="relative  w-full">
    <FloatingNav navItems={navItems} />
  </div>
  )
}

export default Navbar

