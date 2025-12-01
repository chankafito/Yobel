# YOB New - Aplicación Web Multiidioma

Aplicación modern built con **React 19**, **TypeScript**, **Vite**, **Tailwind CSS**, **Framer Motion** y soporte multiidioma con **i18next**.

## 🚀 Características

- ✅ React 19 + TypeScript
- ✅ Vite para compilación rápida
- ✅ Tailwind CSS v4 con plugin Vite
- ✅ Soporte multiidioma (EN, ES, CL, FR)
- ✅ Animaciones con Framer Motion
- ✅ Enrutamiento con React Router v7
- ✅ ESLint configurado
- ✅ Componentes reutilizables

## 📁 Estructura del Proyecto

```
src/
├── app/                 # Lógica de la aplicación
│   ├── App.tsx         # Componente raíz
│   ├── router.tsx      # Configuración de rutas
│   ├── LangWrapper.tsx # Proveedor de idioma
│   ├── i18n.ts         # Configuración de i18next
│   └── index.css       # Estilos globales
├── layout/             # Layouts de página
│   ├── Layout.tsx      # Layout principal
│   └── ScrollToTop.tsx # Control de scroll
├── pages/              # Páginas de la aplicación
│   ├── Home/
│   ├── About/
│   ├── Services/
│   └── NotFound.tsx
├── components/         # Componentes reutilizables
│   ├── Header/
│   ├── Footer/
│   ├── LangSelector.tsx
│   └── ...
├── hooks/              # Custom hooks
├── services/           # Servicios/APIs
├── animations/         # Animaciones reutilizables
└── locales/            # Archivos de traducción (JSON)
```

## 🛠️ Scripts Disponibles

```bash
# Desarrollo
npm run dev      # Inicia el servidor de desarrollo (puerto 3000)

# Construcción
npm run build    # Compila TypeScript y Vite

# Lint
npm run lint     # Verifica la calidad del código

# Preview
npm run preview  # Preview de la build
```

## 🌍 Multiidioma

Los idiomas soportados están configurados en `src/app/i18n.ts`:

- `en` - English
- `es` - Español
- `cl` - Chileno
- `fr` - Français

### Cambiar de Idioma

El idioma se detecta automáticamente desde la URL:
- `http://localhost:3000/` → English (default)
- `http://localhost:3000/es` → Español
- `http://localhost:3000/cl` → Chileno
- `http://localhost:3000/fr` → Français

### Agregar Traducciones

1. Crea archivos en `src/locales/{lang}/common.json`
2. Añade tus claves de traducción
3. Usa en componentes:

```tsx
import { useTranslation } from 'react-i18next';

export function MyComponent() {
  const { t } = useTranslation();
  return <h1>{t('home.title')}</h1>;
}
```

## 🔧 Configuración de Variables de Entorno

Crea un archivo `.env` en la raíz del proyecto (copia de `.env.example`):

```bash
VITE_BASE_URL=/
```

## 📦 Dependencias Principales

| Paquete | Versión | Propósito |
|---------|---------|----------|
| React | ^19.2.0 | Framework UI |
| React Router | ^7.9.6 | Enrutamiento |
| i18next | ^25.6.3 | Internacionalización |
| Tailwind CSS | ^4.1.17 | Estilos CSS |
| Framer Motion | ^12.23.24 | Animaciones |
| Vite | ^7.2.4 | Build tool |
| TypeScript | ~5.9.3 | Type safety |

## 🚀 Comenzar

```bash
# Instalar dependencias
npm install

# Iniciar desarrollo
npm run dev

# Abrir en navegador
# http://localhost:3000
```

## 📝 Próximos Pasos

- [ ] Implementar componente Navbar
- [ ] Implementar componente FloatingMenu
- [ ] Implementar componente Footer
- [ ] Agregar más páginas
- [ ] Conectar APIs/backend

## 📄 Licencia

Todos los derechos reservados © 2025
