"use client";

import clsx from "clsx";
import { useCurrentLocale } from "next-i18n-router/client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

import i18nConfig from "@/i18nConfig";

export type SidebarDictionaryProps = {
  about: string;
  projects: string;
  experience: string;
};

const textClassName =
  "dark:text-white text-black/70 text-2xl uppercase font-semibold leading-9 tracking-wider cursor-pointer";
const activeContent =
  "after:block after:w-full md:after:w-14 after:h-[1px] after:bg-[#FF2B51] after:relative after:mt-1.5";

const ContentLinks = ({
  about,
  experience,
  projects,
}: SidebarDictionaryProps) => {
  const pathname = usePathname();
  const currentLocale = useCurrentLocale(i18nConfig);

  const links = [
    {
      title: "home",
      to: "/",
    },
    {
      title: about,
      to: "/about",
    },
    {
      title: projects,
      to: "/projects",
    },
    {
      title: experience,
      to: "/experience",
    },
  ];

  return (
    <>
      {links.map(({ title, to }) => (
        <Link
          href={to}
          key={title}
          className={clsx(
            textClassName,
            `/${currentLocale}${to}` === pathname ? activeContent : null
          )}
        >
          {title}
        </Link>
      ))}
    </>
  );
};

const MobileSidebar = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const toggleMenu = () => setOpen((prev) => !prev);

  useEffect(() => {
    document.body.style.overflowY = open ? "hidden" : "auto";
  }, [open]);

  useEffect(() => {
    if (open) {
      setOpen(false);
    }

    return setOpen(false);
  }, [pathname]);

  if (!open) {
    return (
      <AiOutlineMenu
        size={25}
        className="cursor-pointer dark:text-white text-black/7"
        onClick={toggleMenu}
      />
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-start w-full p-5 overflow-hidden bg-white animated fadeIn faster dark:bg-black">
      <div className="flex justify-end w-full">
        <AiOutlineClose
          className="mb-6 cursor-pointer text-black/70 dark:text-white"
          size={25}
          onClick={toggleMenu}
        />
      </div>

      <div className="flex flex-col items-center justify-center h-full gap-5">
        {children}
      </div>
    </div>
  );
};

const Sidebar = ({ ...dictionary }: SidebarDictionaryProps) => {
  const [screenWidth, setScreenWidth] = useState<number>(0);
  const isMobile = screenWidth < 768;

  useEffect(() => {
    const updateScreen = () => setScreenWidth(window.innerWidth);
    updateScreen();
    window.addEventListener("resize", updateScreen);
    return () => window.removeEventListener("resize", updateScreen);
  }, []);

  if (isMobile) {
    return (
      <MobileSidebar>
        <ContentLinks {...dictionary} />
      </MobileSidebar>
    );
  }

  return (
    <div className="md:block md:rotate-90 md:absolute md:right-0 md:top-[50%] md:translate-x-[40%] md:w-[100vh] md:text-center md:z-10">
      <div className="flex items-center justify-center gap-6">
        <ContentLinks {...dictionary} />
      </div>
    </div>
  );
};

export default Sidebar;
