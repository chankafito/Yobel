export function useAssetPath() {
  const baseUrl = import.meta.env.VITE_BASE_URL || '/';
  
  return (path: string) => {
    // Si ya tiene el baseUrl, no duplicar
    if (path.startsWith(baseUrl)) {
      return path;
    }
    
    // Construir la ruta completa
    const cleanBase = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl;
    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    
    return `${cleanBase}${cleanPath}`;
  };
}