'use client';

import Link from "next/link";
import Button from "./Button";
import { SOCIALS_WORKS } from "../constants";
import { useI18n } from "@/locales/client";

const Footer = () => {
  const t = useI18n();
  return (
    <footer className="w-full text-gray-20 mt-[3.5rem] max-container padding-container bg-[url(/footer-grid.svg)] bg-center bg-cover bg-no-repeat">
      <div className="flex flex-col items-center">
        <h1 className="font-bold text-3xl md:text-5xl text-center lg:max-w-[45vw]">
          {t("footer.title_before")}{" "}
          <span className="text-purple">{t("footer.title_highlight")}</span>
          {" "}{t("footer.title_after")}
        </h1>

        <p className="text-white-200 md:mt-10 my-5 text-center">
          {t("footer.description")}
        </p>

        <Link href="mailto:adjeeklou22@gmail.com">
          <Button
            type="button"
            title={t("nav.contact")}
            variant="btn_yellow"
          />
        </Link>
      </div>

      <div className="flex mt-16 md:flex-row flex-col mb-[3rem] justify-evenly items-center">
        <div className="flex items-center md:gap-3 gap-6">
          {SOCIALS_WORKS.map((social) =>
            social.links.map((link) => (
              <Link key={link.id} href={link.href} className="cursor-pointer" target="_blank">
                {link.icon && (
                  <link.icon className="w-9 h-9 text-secondary hover:p-1 hover:rounded-lg hover:bg-purple hover:text-primary" />
                )}
              </Link>
            ))
          )}
        </div>
        <p className="md:text-base text-sm md:font-normal font-light">
          {t("footer.copyright")}
        </p>
      </div>
    </footer>
  )
}

export default Footer






