import React from "react";

interface FooterColumnProps {
  title: string;
  children: React.ReactNode;
}

export default function FooterColumn({ title, children }: FooterColumnProps) {
  return (
    <div className="box-border content-stretch flex flex-col gap-[24px] items-start justify-center px-0 py-[16px] relative shrink-0 w-full">
      <p className="font-medium leading-[18px] not-italic relative shrink-0 text-[16px] text-white w-full uppercase">{title}</p>
      <div className="content-stretch flex flex-col gap-[14px] items-start justify-center w-full">
        {children}
      </div>
    </div>
  );
}
