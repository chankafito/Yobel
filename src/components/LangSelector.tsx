import { useNavigate, useParams } from "react-router-dom";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { ChevronDown } from "lucide-react";

export default function LangSelector() {
  const navigate = useNavigate();
  const { lang } = useParams();
  const current = lang ?? "en";

  const options = [
    { code: "en", label: "Global", lang : "EN", prefix : "EN" },
    { code: "es", label: "Perú", lang : "ES", prefix: "PE" },
    { code: "cl", label: "Chile", lang : "ES", prefix: "CL"},
  ];

  const handleSelect = (value: string) => {
    navigate(`/${value}`);
  };

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="flex items-center gap-2  bg-transparent cursor-pointer">
        <span className="text-lg ">
          {options.find((o) => o.code === current)?.prefix || "EN"}
        </span>
        <ChevronDown className="w-5 transition-transform duration-200" />
      </DropdownMenu.Trigger>

      <DropdownMenu.Content
        sideOffset={8}
        className="absolute right-0 mt-2 w-64 bg-white rounded-[20px] shadow-2xl border border-gray-100 p-5 flex flex-col gap-3 z-50"
      >
        <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1 px-2"> Selecciona ubicación </div>

        {options.map((o) => (
          <DropdownMenu.Item
            key={o.code}
            onSelect={() => handleSelect(o.code)}
            className={`text-left px-4 py-3 rounded-xl flex justify-between items-center font-medium transition-colors cursor-pointer
              ${o.code === current ? "bg-gray-50 text-black ring-1 ring-black/5" : "text-gray-600 hover:bg-gray-50"}`}
          >
            {o.label}
            <span
              className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${
                o.code === current
                  ? "bg-black text-white"
                  : "bg-gray-200 text-gray-600"
              }`}
            >
              {o.lang.toUpperCase()}
            </span>
          </DropdownMenu.Item>
        ))}
      </DropdownMenu.Content>
    </DropdownMenu.Root>

  );
}
