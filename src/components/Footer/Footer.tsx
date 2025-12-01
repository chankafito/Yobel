import React from "react";
import { useTranslation } from "react-i18next";
import Slogan from "./Slogan"; // tu componente de logo + slogan + contacto
import FooterLinks from "./FooterLinks";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <div className="bg-black relative w-full overflow-hidden">
      <div className="w-full h-full relative z-10">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start px-4 md:px-[50px] py-0 relative w-full h-full">
          <div className="box-border content-stretch flex flex-col items-start overflow-x-clip overflow-y-auto px-0 py-[40px] relative shrink-0 w-full max-w-[1340px] mx-auto">
             <div className="content-stretch flex flex-col lg:flex-row gap-[60px] lg:gap-[133px] items-start relative shrink-0 w-full py-20">
                <Slogan />
                <FooterLinks />
             </div>
             <div className="content-stretch flex flex-col gap-[24px] items-end relative shrink-0 w-full">
               <p className="font-normal leading-[22px] not-italic relative shrink-0 text-[18px] text-white w-full">{t("footer.copyright")}</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
