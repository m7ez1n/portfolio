import Image from "next/image";

import SocialMedia from "@/components/social-media";

export default function Home() {
  return (
    <main className="flex flex-col justify-between w-screen h-screen dark:bg-black p-14">
      <div className="w-full md:flex md:items-center md:justify-between">
        <Image
          src="/assets/icon.png"
          alt="Logo Mateus Mendes"
          className="hidden md:block"
          width={100}
          height={150}
        />
        <div className="flex flex-col gap-2">
          <h1 className="font-light text-4xl text-[#FF2B51] tracking-wider text-center md:text-right leading-10 uppercase">
            Mateus``
          </h1>
          <h1 className="font-semibold text-4xl text-[#FF2B51] tracking-wider text-center md:text-right leading-10 uppercase">
            Pinheiro
          </h1>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-col gap-2 text-left w-96">
          <p className="text-3xl font-semibold leading-10 text-[#FF2B51]">
            Um pouco sobre mim...
          </p>
          <p className="text-xl font-normal leading-10 text-white">
            Comecei minha jornada no mundo da programação quando tinha apenas 17
            anos e fiquei completamente apaixonado por esse universo de resolver
            problemas e criar soluções através de códigos.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-between w-full gap-8 md:gap-0 md:flex-row">
        <div>
          <p className="text-2xl font-semibold leading-10 text-white">
            Web Developer
          </p>
          <p className="text-[#C0C0C0] text-xl leading-10">
            From <span className="uppercase text-[#FF2B51]">in</span> @
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
  );
}
