import { SectionList, ListItem } from "../../components/SectionList";

export default function Example() {
  const items: ListItem[] = [
    {
      id: "1",
      title: "Logística Integrada",
      description: "Soluciones end-to-end para tu cadena de suministro",
      icon: "📦"
    },
    {
      id: "2",
      title: "Distribución Nacional",
      description: "Cobertura en todo el territorio con tracking en tiempo real",
      icon: "🚚"
    },
    {
      id: "3",
      title: "Almacenamiento",
      description: "Espacios seguros y certificados para tu inventario",
      icon: "🏭"
    }
  ];

  return (
    <>
      <SectionList 
        title="Nuestros Servicios"
        items={items}
        className="bg-white"
      />
      
      {/* Sin animaciones */}
      <SectionList 
        title="Industrias"
        items={items}
        animated={false}
        className="bg-gray-50"
      />
    </>
  );
}
