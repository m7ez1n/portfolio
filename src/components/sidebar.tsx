import Link from "next/link";
import clsx from "clsx";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const textClassName =
  "dark:text-white text-black/70 text-2xl uppercase font-semibold leading-9 tracking-wider cursor-pointer";
const activeContent =
  "after:block after:w-full md:after:w-14 after:h-[1px] after:bg-[#FF2B51] after:relative after:mt-1.5";

const ContentLinks = () => {
  const router = useRouter();
  const { t } = useTranslation();
  const links = [
    {
      title: "home",
      to: "/",
    },
    {
      title: t("navbar.about"),
      to: "/about",
    },
    {
      title: t("navbar.projects"),
      to: "/projects",
    },
    {
      title: t("navbar.experience"),
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
            to === router.pathname ? activeContent : null
          )}
        >
          {title}
        </Link>
      ))}
    </>
  );
};

const MobileSidebar = () => {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => setOpen((prev) => !prev);

  useEffect(() => {
    document.body.style.overflowY = open ? "hidden" : "auto";
  }, [open]);

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
        <ContentLinks />
      </div>
    </div>
  );
};

const Sidebar = () => {
  const [screenWidth, setScreenWidth] = useState<number>(0);
  const isMobile = screenWidth < 768;

  useEffect(() => {
    const updateScreen = () => setScreenWidth(window.innerWidth);
    updateScreen();
    window.addEventListener("resize", updateScreen);
    return () => window.removeEventListener("resize", updateScreen);
  }, []);

  if (isMobile) {
    return <MobileSidebar />;
  }

  return (
    <div className="md:block md:rotate-90 md:absolute md:right-0 md:top-[50%] md:translate-x-[40%] md:w-[100vh] md:text-center md:z-10">
      <div className="flex items-center justify-center gap-6">
        <ContentLinks />
      </div>
    </div>
  );
};

export default Sidebar;
