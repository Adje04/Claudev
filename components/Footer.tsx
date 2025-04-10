'use client';

import Link from "next/link";
import Button from "./Button";
import { SOCIALS_WORKS } from "../constants";

const Footer = () => {
  return (
    <footer className="w-full text-gray-20 mt-[3.5rem] max-container padding-container bg-[url(/footer-grid.svg)] bg-center bg-cover bg-no-repeat">
      <div className="flex flex-col items-center">
        <h1 className="font-bold text-3xl md:text-5xl text-center lg:max-w-[45vw]">
          Prêt à faire passer votre <span className="text-purple">présence digitale</span>au niveau supérieur ?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Contactez-moi dès maintenant et discutons ensemble de la manière dont je peux vous aider à atteindre vos objectifs.
        </p>

        <Link href={'mailto: adjeeklou22@gmail.com'}>
          <Button
            type={'button'}
            title={'contact'}
            variant="btn_yellow"
          />
        </Link>
      </div>
      <div className="flex mt-16 md:flex-row flex-col mb-[3rem] justify-evenly items-center">
        <div className="flex items-center md:gap-3 gap-6">
          {SOCIALS_WORKS.map((social) => (
            social.links.map((link) => (
              <Link key={link.id} href={link.href} className="cursor-pointer" target="_blank">
                {link.icon && <link.icon className="w-9 h-9 text-secondary hover:p-1 hover:rounded-lg hover:bg-purple hover:text-primary" />}
              </Link>
            ))))}
        </div>
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright &copy; 2025 adjeeklou@gmail.com
        </p>
      </div>
    </footer>
  )
}

export default Footer