import { cn } from "../utils/cn";
import svgPaths from "../assets/svg/maps";

interface AmericasMapProps {
  className?: string;
  selected?: string;
  onSelect?: (country: string) => void;
}

// Mapeo de países basado en el nuevo diseño de Figma AmericaMapa1-265-841.tsx
// Solo los países nombrados específicamente son interactivos

// Países interactivos (los 9 países que deben tener hover celeste y funcionalidad de click)
const interactiveCountries = [
  { id: 'mexico', paths: ['pcd57680'], name: 'México' },
  { id: 'guatemala', paths: ['p4508c00'], name: 'Guatemala' },
  { id: 'el_salvador', paths: ['p437e110'], name: 'El Salvador' },
  { id: 'rep_dominicana', paths: ['p836f580'], name: 'Rep. Dominicana' },
  { id: 'costa_rica', paths: ['p2cb0db20'], name: 'Costa Rica' },
  { id: 'panama', paths: ['p2d405600'], name: 'Panamá' },
  { id: 'colombia', paths: ['p24378cb0'], name: 'Colombia' },
  { id: 'ecuador', paths: ['p3bc66d80'], name: 'Ecuador' },
  { id: 'peru', paths: ['p2b511e80'], name: 'Perú' },
];

// Países no interactivos (gris claro en Figma, sin hover ni click)
const nonInteractiveCountries = [
  { paths: ['p1442d380'], color: '#E5E7EB', name: 'Belice' },
  { paths: ['p2b00dc00'], color: '#E5E7EB', name: 'Honduras' },
  { paths: ['p19a74500'], color: '#E5E7EB', name: 'Nicaragua' },
  { paths: ['p1579ef00'], color: '#E5E7EB', name: 'Guyana' },
  { paths: ['p12cad680'], color: '#E5E7EB', name: 'French Guiana' },
  { paths: ['p28ab5e80', 'p3cec1e00'], color: '#E5E7EB', name: 'Brasil' },
  { paths: ['p2cb0db20', 'p5a0fd00'], color: '#E5E7EB', name: 'Suriname' },
  { paths: ['p240bfe80'], color: '#E5E7EB', name: 'Venezuela' },
  { paths: ['p2bb6ab00'], color: '#E5E7EB', name: 'Argentina' },
  { paths: ['p46b8900'], color: '#E5E7EB', name: 'Bolivia' },
  { paths: ['pe0e1300'], color: '#E5E7EB', name: 'Paraguay' },
  { paths: ['p36025480'], color: '#E5E7EB', name: 'Uruguay' },
  { paths: ['p1a775e00'], color: '#E5E7EB', name: 'Chile' },
  { paths: ['p3ff3c080'], color: '#E5E7EB', name: 'Región 25' },
  { paths: ['p2118d480'], color: '#E5E7EB', name: 'Región 27' },
];

// Divisiones territoriales (paths negros que no son interactivos)
const territorialDivisions = [
  'p2ea30f00', 'p37a26440', 'pc8f7100', 'p2829d100', 'p2a6ae6c0', 'p1c3fc130',
  'p6258100', 'p2cac1c00', 'p31657f00', 'p1ed4ea80', 'p19b3f1f0', 'p29a12680',
  'p32bebb80', 'p3ed78600', 'p6bceb00', 'p1fd3b500', 'p2f995480', 'p1bf21900',
  'p37fbfd00', 'p15cd7370', 'p3bdbce00', 'p1dce2a80', 'p32fb7f00', 'p3ac24a00',
  'p34dbe880', 'pff34e80', 'p3ddd70f0', 'p149daaf0', 'p39ae7180', 'p3c7aad40',
  'p265c000', 'p7cb2380', 'p315d80f0', 'p22d1c400', 'p479b180', 'pf983e00',
  'p3f73ca80', 'p126071c0', 'p1cfbb8c0', 'p26f6c900', 'p3a38d480', 'p2828ee00',
  'p3ef81800', 'p7243b00', 'p1a336d00', 'paf6eef2', 'p260fdd00', 'p360efd40',
  'p13302500', 'p9309900', 'p3b57e700', 'p30cae100', 'p106cb870', 'p9589f00',
  'p1321d000', 'p34993d40', 'p53af840', 'p1f75f880'
];

// Divisiones territoriales con opacidad 0.64
const territorialDivisionsOpacity = [
  'p3acfb200', 'p35c72800', 'p2b56f400'
];

export function AmericasMap({ className, selected, onSelect }: AmericasMapProps) {
  return (
    <div className={cn("relative w-full h-full select-none", className)}>
      {/* SVG Gradient Definition */}
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <linearGradient id="yellowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#F0DE32', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#FFFFFF', stopOpacity: 1 }} />
          </linearGradient>
          <clipPath id="clip0_265_845">
            <rect fill="white" height="1562" width="1393" />
          </clipPath>
        </defs>
      </svg>

      {/* Map Container */}
      <div className="relative w-full h-full aspect-[0.89]">
        <div className="absolute inset-0">
          <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1393 1562">
            <g clipPath="url(#clip0_265_845)">
              {/* Países no interactivos con gris muy claro (renderizados primero, abajo) */}
              {nonInteractiveCountries.map((country, countryIdx) => {
                return country.paths.map((pathKey, idx) => {
                  const pathData = svgPaths[pathKey];
                  
                  return (
                    <path
                      key={`non-interactive-${countryIdx}-${idx}`}
                      d={pathData}
                      fill="#E5E7EB"
                      opacity="0.64"
                      stroke="#444444"
                      strokeWidth="0.5"
                      strokeMiterlimit="11"
                      pointerEvents="none"
                    />
                  );
                });
              })}
              
              {/* Divisiones territoriales (negro, no interactivas) */}
              {territorialDivisions.map((pathKey) => {
                const pathData = svgPaths[pathKey];
                return (
                  <path
                    key={pathKey}
                    d={pathData}
                    fill="black"
                    pointerEvents="none"
                  />
                );
              })}
              
              {/* Divisiones territoriales con opacidad */}
              {territorialDivisionsOpacity.map((pathKey) => {
                const pathData = svgPaths[pathKey];
                return (
                  <path
                    key={pathKey}
                    d={pathData}
                    fill="black"
                    opacity="0.64"
                    pointerEvents="none"
                  />
                );
              })}
              
              {/* Países interactivos en gris con click y hover (renderizados al final, arriba) */}
              {interactiveCountries.map((country) => {
                const isSelected = selected === country.id;
                
                return country.paths.map((pathKey, idx) => {
                  const pathData = svgPaths[pathKey];
                  
                  return (
                    <path
                      key={`${country.id}-${idx}`}
                      d={pathData}
                      className={cn(
                        "transition-all duration-300 cursor-pointer",
                        isSelected ? "drop-shadow-lg" : "hover:drop-shadow-md"
                      )}
                      style={
                        isSelected
                          ? { fill: 'url(#yellowGradient)', opacity: 0.9 }
                          : { fill: '#D1D5DB', opacity: 0.64 }
                      }
                      stroke="#444444"
                      strokeWidth="0.5"
                      strokeMiterlimit="11"
                      onClick={() => onSelect?.(country.id)}
                      onMouseEnter={(e) => {
                        if (!isSelected) {
                          e.currentTarget.style.fill = "#BAE6FD";
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isSelected) {
                          e.currentTarget.style.fill = "#D1D5DB";
                        }
                      }}
                    />
                  );
                });
              })}
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}