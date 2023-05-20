import SocialMedia from "@/components/social-media";
import ToggleTheme from "@/components/toggle-theme";
import Sidebar from "@/components/sidebar";

const Layout = ({ children }: { children: React.ReactNode }) => (
  <>
    <main className="flex flex-col justify-between min-h-screen p-8 select-none min-w-screen dark:bg-black md:p-14">
      <div className="w-full md:flex md:items-center md:justify-between">
        <div className="flex items-center justify-between gap-4 mb-12">
          <ToggleTheme />
          <Sidebar />
        </div>
        <div className="flex flex-col gap-2 mb-8 md:mb-0">
          <h1 className="font-light text-4xl text-[#FF2B51] tracking-wider text-center md:text-right leading-10 uppercase">
            Mateus
          </h1>
          <h1 className="font-semibold text-4xl text-[#FF2B51] tracking-wider text-center md:text-right leading-10 uppercase">
            Pinheiro
          </h1>
        </div>
      </div>
      <div className="flex md:justify-center">{children}</div>
      <div className="flex flex-col items-center justify-between w-full gap-8 md:gap-0 md:flex-row">
        <div>
          <p className="text-2xl font-semibold leading-10 text-black/70 dark:text-white">
            Web Developer
          </p>
          <p className="text-[#C0C0C0] text-xl leading-10 text-center md:text-left">
            <span className="text-[#FF2B51]">at</span> @
            <a
              target="_blank"
              className="underline"
              href="https://rarolabs.com.br"
            >
              Raro Labs
            </a>
          </p>
        </div>
        <SocialMedia />
      </div>
    </main>
  </>
);

export default Layout;
