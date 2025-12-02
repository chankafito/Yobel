import React, { useState } from "react";
import { Copy, Check } from "lucide-react";

interface LocationCardProps {
  city: string;
  email: string;
  phone: string;
  address: string;
}

export function LocationCard({  city,  email,  phone,  address }: LocationCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    
    // Fallback method for copying text
    const textArea = document.createElement('textarea');
    textArea.value = email;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
      document.execCommand('copy');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
    
    document.body.removeChild(textArea);
  };

  return (
    <div className="flex flex-col gap-4 bg-white border border-[#b8b8b8] rounded-[15px] p-6">
      {/* City */}
      <h3 className="text-2xl md:text-3xl tracking-tight text-black font-bold not-italic"> {city} </h3>

      {/* Address */}
      <p className="text-gray-600 leading-relaxed"> {address} </p>

      {/* Email with copy button */}
      <div className="flex items-center gap-2 group">
        <a  href={`mailto:${email}`} className="text-black text-lg" >
          {email}
        </a>
        <button
          onClick={handleCopyEmail}
          className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors opacity-0 group-hover:opacity-100"
          title="Copiar email"
        >
          {copied ? (
            <Check className="w-4 h-4 text-green-600" />
          ) : (
            <Copy className="w-4 h-4 text-gray-600" />
          )}
        </button>
      </div>

      {/* Phone */}
      <a  href={`tel:${phone.replace(/\s/g, '')}`} className="text-black text-lg" > {phone} </a>
    </div>
  );
}