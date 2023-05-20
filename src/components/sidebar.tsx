import Link from "next/link";
import clsx from "clsx";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useMedia } from "react-use";

const textClassName =
  "dark:text-white text-black/70 text-2xl uppercase font-semibold leading-9 tracking-wider cursor-pointer";
const activeContent =
  "after:block after:w-14 after:h-[1px] after:bg-[#FF2B51] after:relative after:mt-1.5";

const MobileSidebar = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen((prev) => !prev);

  useEffect(() => {
    document.body.style.overflowY = open ? "hidden" : "auto";
  }, [open]);

  if (!open) {
    return (
      <AiOutlineMenu
        size={25}
        className="cursor-pointer dark:text-white text-black/70"
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
        <Link href="/" className={textClassName}>
          Home
        </Link>
        <Link href="/about" className={textClassName}>
          {t("navbar.about")}
        </Link>
        <Link href="/projects" className={textClassName}>
          {t("navbar.projects")}
        </Link>
        <Link
          href="/experience"
          className="text-2xl font-semibold leading-9 tracking-wider uppercase pointer-events-none dark:text-gray-500 text-black/40 cursor-none"
        >
          {t("navbar.experience")}
        </Link>
      </div>
    </div>
  );
};

const Sidebar = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const isWide = useMedia("(min-width: 960px)");

  if (!isWide) {
    return <MobileSidebar />;
  }

  const homeIsCurrent = router.pathname === "/";
  const aboutIsCurrent = router.pathname === "/about";
  const projectsIsCurrent = router.pathname === "/projects";
  const experienceIsCurrent = router.pathname === "/experience";

  return (
    <div className="md:block md:rotate-90 md:absolute md:right-0 md:top-[50%] md:translate-x-[40%] md:w-[100vh] md:text-center md:z-10">
      <div className="flex gap-8 md:items-center md:justify-center md:gap-12">
        <Link
          href="/"
          className={clsx(textClassName, homeIsCurrent ? activeContent : null)}
        >
          Home
        </Link>
        <Link
          href="/about"
          className={clsx(textClassName, aboutIsCurrent ? activeContent : null)}
        >
          {t("navbar.about")}
        </Link>
        <Link
          href="/projects"
          className={clsx(
            textClassName,
            projectsIsCurrent ? activeContent : null
          )}
        >
          {t("navbar.projects")}
        </Link>
        <Link
          href="/experience"
          className="text-2xl font-semibold leading-9 tracking-wider uppercase pointer-events-none dark:text-gray-500 text-black/40 cursor-none"
        >
          {t("navbar.experience")}
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
