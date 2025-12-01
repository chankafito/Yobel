import React from "react";
import { Link, useParams } from "react-router-dom";

interface FooterLinkProps {
  to: string;
  children: React.ReactNode;
}

export default function FooterLink({ to, children }: FooterLinkProps) {
  const { lang } = useParams();

  // Si el enlace es ancla o externo, lo usamos tal cual
  const isHash = typeof to === "string" && to.startsWith("#");
  const isExternal =
    typeof to === "string" &&
    (to.startsWith("http://") || to.startsWith("https://") || to.startsWith("//"));

  let target = to;
  if (!isHash && !isExternal && typeof to === "string") {
    // Si estamos en una ruta con lang (e.g. /cl) y el to empieza con '/', prefixamos '/:lang'
    if (lang && to.startsWith("/")) {
      target = `/${lang}${to}`;
    }
  }

  return (
    <Link
      to={target}
      className="relative shrink-0 w-full cursor-pointer hover:text-white transition-colors text-[22px] text-[rgba(255,255,255,0.5)] font-normal leading-6"
    >
      {children}
    </Link>
  );
}
