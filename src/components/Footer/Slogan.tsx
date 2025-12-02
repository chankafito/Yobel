import Logo from "../Logo";
import { useTranslation } from "react-i18next";

export default function Slogan() {
  const { t } = useTranslation();
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full lg:w-[547px]">
      <div className="h-[196.678px] relative shrink-0 w-full max-w-[510px]">
        <Logo color="#FFF" />
      </div>

      <div className="font-normal leading-[22px] min-w-full not-italic relative shrink-0 text-[18px] text-white w-min">
        <p className="mb-0">{t('footer.slogan.one')}</p>
        <p className="mb-0">{t('footer.slogan.two')}</p>
        <p>{t('footer.slogan.three')}</p>
      </div>

      <div className="content-stretch flex flex-col gap-[8px] items-start justify-center not-italic relative shrink-0 text-white w-full">
        <p className="font-medium leading-[18px] relative shrink-0 text-[16px] w-full">{t('footer.contact')}</p>
        <p className="font-normal leading-[22px] relative shrink-0 text-[18px] w-full">
          +<span className="not-italic">511 997 593 459</span>
        </p>
      </div>
    </div>
  );
}
