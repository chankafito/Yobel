import { useTranslation } from "react-i18next";
import FooterColumn from "./FooterColumn";
import FooterLink from "./FooterLink";

export default function FooterLinks() {
  const { t } = useTranslation();

  // Agrupar secciones en pares: (company + services), (news + ethics), (contact + legal)
  const pairs = [
    ["company", "services"],
    ["news", "ethics"],
    ["contact", "legal"],
  ];

  return (
    <div className="content-stretch flex flex-col gap-6 items-start relative shrink-0 w-full lg:w-[663px]">
      {pairs.map((pair, rowIndex) => {
        const leftKey = pair[0];
        const rightKey = pair[1];

        const leftSection: any = t(`footer.navs.${leftKey}`, { returnObjects: true });
        const rightSection: any = t(`footer.navs.${rightKey}`, { returnObjects: true });

        // Si ninguna de las dos secciones existe, omitimos la fila
        if ((!leftSection || typeof leftSection !== "object") && (!rightSection || typeof rightSection !== "object")) return null;

        return (
          <div
            key={`pair-${rowIndex}`}
            className="content-stretch flex flex-col md:flex-row gap-5 items-start relative shrink-0 w-full"
          >
            <div className="w-full md:w-1/2">
              {leftSection && (
                <FooterColumn title={leftSection.title}>
                  {Array.isArray(leftSection.links) && leftSection.links.map((link: any, i: number) => (
                    <FooterLink key={i} to={link.to}>
                      {link.label}
                    </FooterLink>
                  ))}
                </FooterColumn>
              )}
            </div>

            <div className="w-full md:w-1/2">
              {rightSection && (
                <FooterColumn title={rightSection.title}>
                  {Array.isArray(rightSection.links) && rightSection.links.map((link: any, i: number) => (
                    <FooterLink key={i} to={link.to}>
                      {link.label}
                    </FooterLink>
                  ))}
                </FooterColumn>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
