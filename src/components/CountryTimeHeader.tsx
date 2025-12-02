import React, { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

interface CountryTimeHeaderProps {
  country: string;
  timezone: string;
  availableCountries?: Array<{ value: string; label: string }>;
  selectedCountry?: string;
  onCountryChange?: (country: string) => void;
}

export function CountryTimeHeader({ 
  country, 
  timezone, 
  availableCountries, 
  selectedCountry, 
  onCountryChange 
}: CountryTimeHeaderProps) {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const timeString = now.toLocaleTimeString('en-US', { 
          timeZone: timezone,
          hour: 'numeric',
          minute: '2-digit',
          hour12: true 
        });
        setTime(timeString.toLowerCase());
      } catch {
        setTime('12:00 pm');
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 60000); // Update every minute

    return () => clearInterval(interval);
  }, [timezone]);

  return (
    <div className="mb-8 pb-6 border-b border-gray-200">
      <div className="flex items-center justify-between mb-2">
        {/* Mobile: always show static text */}
        <h3 className="md:hidden text-3xl tracking-tight text-black font-[Neue_Augenblick]">
          {country}
        </h3>
        
        {/* Desktop: show dropdown if available, otherwise static text */}
        {availableCountries && onCountryChange ? (
          <div className="hidden md:block relative flex-1 max-w-xs">
            <select
              value={selectedCountry}
              onChange={(e) => onCountryChange(e.target.value)}
              className="w-full appearance-none bg-transparent border-none px-0 py-0 pr-7 text-2xl md:text-3xl text-black font-[Neue_Augenblick] focus:outline-none cursor-pointer [&>option]:text-base [&>option]:font-normal [&>option]:py-1"
            >
              {availableCountries.map((c) => (
                <option key={c.value} value={c.value} className="text-base py-1">
                  {c.label}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-1 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
          </div>
        ) : (
          <h3 className="hidden md:block text-3xl md:text-4xl tracking-tight text-black font-[Neue_Augenblick]">
            {country}
          </h3>
        )}
        <p className="text-gray-500 text-2xl md:text-3xl font-[Neue_Augenblick]">{time}</p>
      </div>
    </div>
  );
}