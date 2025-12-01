# 🏗️ Documentación de Componentes Pendientes

## Componentes a Implementar

### 1. **Navbar** 📱
**Ubicación sugerida:** `src/layout/Navbar.tsx`

```tsx
interface NavbarProps {
  // Props según necesidad
}

export function Navbar({ }: NavbarProps) {
  return (
    <nav className="w-full bg-white shadow-sm">
      {/* Contenido del navbar */}
    </nav>
  );
}
```

**Funcionalidades sugeridas:**
- Logo/Branding
- Menú de navegación
- Selector de idioma (LangSelector)
- Búsqueda (opcional)
- Responsive menu mobile

---

### 2. **Footer** 🔗
**Ubicación sugerida:** `src/layout/Footer.tsx`

```tsx
export function Footer() {
  return (
    <footer className="w-full bg-gray-100 text-gray-800">
      {/* Contenido del footer */}
    </footer>
  );
}
```

**Funcionalidades sugeridas:**
- Links de navegación
- Redes sociales
- Información de contacto
- Copyright
- Links legales (Privacidad, Términos, etc)

---

### 3. **FloatingMenu** 🎯
**Ubicación sugerida:** `src/components/FloatingMenu/FloatingMenu.tsx`

```tsx
export function FloatingMenu() {
  return (
    <div className="fixed bottom-8 right-8">
      {/* Menú flotante */}
    </div>
  );
}
```

**Funcionalidades sugeridas:**
- Botón flotante (FAB)
- Menú de acciones rápidas
- Animar con Framer Motion
- WhatsApp, Chat, Contacto
- Responsive

---

## ✅ Checklist de Implementación

- [ ] Implementar Navbar
- [ ] Agregar LangSelector al Navbar
- [ ] Implementar Footer
- [ ] Implementar FloatingMenu
- [ ] Integrar en Layout.tsx
- [ ] Estilizar con Tailwind
- [ ] Animar con Framer Motion
- [ ] Hacer responsive (mobile/desktop)
- [ ] Tester en todos los idiomas

## 📝 Notas

- Usar componentes de `lucide-react` para iconos
- Mantener estilo consistent con Tailwind
- Asegurar accesibilidad (ARIA labels, etc)
- Probar en todos los idiomas configurados
