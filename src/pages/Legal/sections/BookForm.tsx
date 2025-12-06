import { useState } from "react";
import { cn } from "../../../utils/cn";
import { CleanInput, CleanSelect, CleanTextArea } from "../../../components/ui/form-elements";
import { Button } from "../../../components/ui/button";

export function BookForm() {
  const [selectedType, setSelectedType] = useState<"reclamacion" | "queja" | null>(null);

  return(
    <>
      <div className="bg-white p-0 md:p-8 rounded-none mb-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-gray-100 pb-6 mb-10">
          <h3 className="text-3xl font-medium text-black font-augenblick">Identificación del consumidor</h3>
          <span className="text-gray-400 text-sm font-medium mt-2 md:mt-0">* Datos requeridos</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-12">
          {/* Row 1 */}
          <CleanInput label="Nombre" placeholder="Ingresa tu nombre" required />
          <CleanInput label="Primer apellido" placeholder="Ingresa tu primer apellido" required />
          <CleanInput label="Segundo apellido" placeholder="Ingresa tu segundo apellido" required />

          {/* Row 2 */}
          <CleanSelect 
              label="Tipo de documentación" 
              placeholder="Selección de documentación"
              options={["DNI", "Carnet de Extranjería", "Pasaporte", "RUC"]} 
              required 
              defaultValue=""
          />
          <CleanInput label="Número de documentación" placeholder="00000000" required />
          <CleanInput label="Celular" placeholder="999 999 999" type="tel" required />

          {/* Row 3 */}
          <CleanSelect 
              label="Departamento" 
              placeholder="Seleccionar departamento"
              options={["Lima", "Arequipa", "Cusco", "Otros"]} 
              required 
              defaultValue=""
          />
          <CleanSelect 
              label="Provincia" 
              placeholder="Seleccionar provincia"
              options={["Lima", "Callao", "Otros"]} 
              required 
              defaultValue=""
          />
          <CleanSelect 
              label="Distrito" 
              placeholder="Seleccionar distrito"
              options={["Miraflores", "San Isidro", "Otros"]} 
              required 
              defaultValue=""
          />

          {/* Row 4 */}
          <CleanInput label="Dirección" placeholder="Av. Principal 123" required className="md:col-span-2" />
          <CleanInput label="Referencia" placeholder="Frente al parque..." />
          
          <div className="md:col-span-3">
              <CleanInput label="Correo electrónico" placeholder="nombre@ejemplo.com" type="email" required />
          </div>
        </div>

        {/* Minor check */}
        <div className="mt-16 border-t border-gray-100 pt-8 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <label className="block text-lg font-medium text-black">¿Eres menor de edad?</label>
          <div className="col-span-2 flex justify-start gap-16">
              <label className="group flex items-center gap-3 cursor-pointer">
                <div className="relative flex items-center justify-center w-6 h-6 rounded-full border border-gray-300 group-hover:border-black transition-colors">
                    <input type="radio" name="is_minor" className="peer appearance-none w-full h-full opacity-0 absolute" />
                    <div className="w-3 h-3 bg-black rounded-full opacity-0 peer-checked:opacity-100 transition-opacity" />
                </div>
                <span className="text-gray-600 group-hover:text-black transition-colors">Si</span>
              </label>
              <label className="group flex items-center gap-3 cursor-pointer">
                <div className="relative flex items-center justify-center w-6 h-6 rounded-full border border-gray-300 group-hover:border-black transition-colors">
                    <input type="radio" name="is_minor" className="peer appearance-none w-full h-full opacity-0 absolute" defaultChecked />
                    <div className="w-3 h-3 bg-black rounded-full opacity-0 peer-checked:opacity-100 transition-opacity" />
                </div>
                <span className="text-gray-600 group-hover:text-black transition-colors">No</span>
              </label>
          </div>
        </div>
      </div>

      <div className="bg-white p-0 md:p-8 rounded-none mb-8">
        <div className="border-b border-gray-100 pb-6 mb-10">
          <h3 className="text-3xl font-medium text-black font-augenblick">Identificación del Bien Contratado</h3>
        </div>
        
        <div className="grid grid-cols-1 gap-8">
          <div>
            <label className="block text-xs font-medium text-gray-400 uppercase tracking-wider mb-6">Tipo de Reclamo</label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Reclamación Card */}
              <label 
                  className={cn(
                      "cursor-pointer group p-6 border rounded-xl transition-all duration-300",
                      selectedType === "reclamacion" 
                          ? "border-black bg-gray-50" 
                          : "border-gray-200 hover:border-gray-400 bg-white"
                  )}
                  onClick={() => setSelectedType("reclamacion")}
              >
                <div className="flex items-start gap-4">
                  <div className="relative flex items-center justify-center w-5 h-5 mt-1 rounded-full border border-gray-300 group-hover:border-black transition-colors shrink-0">
                    <input 
                          type="radio" 
                          name="tipo_reclamo" 
                          className="peer appearance-none w-full h-full opacity-0 absolute" 
                          checked={selectedType === "reclamacion"}
                          onChange={() => setSelectedType("reclamacion")}
                    />
                    <div className="w-2.5 h-2.5 bg-black rounded-full opacity-0 peer-checked:opacity-100 transition-opacity" />
                  </div>
                  <div>
                    <span className="text-xl font-medium block mb-2 text-black">Reclamación</span>
                    <span className="text-sm text-gray-500 leading-relaxed">Desacuerdo relacionado con productos y/o servicios.</span>
                  </div>
                </div>
              </label>

              {/* Queja Card */}
              <label 
                  className={cn(
                      "cursor-pointer group p-6 border rounded-xl transition-all duration-300",
                      selectedType === "queja" 
                          ? "border-black bg-gray-50" 
                          : "border-gray-200 hover:border-gray-400 bg-white"
                  )}
                  onClick={() => setSelectedType("queja")}
              >
                <div className="flex items-start gap-4">
                  <div className="relative flex items-center justify-center w-5 h-5 mt-1 rounded-full border border-gray-300 group-hover:border-black transition-colors shrink-0">
                    <input 
                          type="radio" 
                          name="tipo_reclamo" 
                          className="peer appearance-none w-full h-full opacity-0 absolute" 
                          checked={selectedType === "queja"}
                          onChange={() => setSelectedType("queja")}
                    />
                    <div className="w-2.5 h-2.5 bg-black rounded-full opacity-0 peer-checked:opacity-100 transition-opacity" />
                  </div>
                  <div>
                    <span className="text-xl font-medium block mb-2 text-black">Queja</span>
                    <span className="text-sm text-gray-500 leading-relaxed">Desacuerdo no relacionado con productos y/o servicios; o, malestar o insatisfacción con la atención al público.</span>
                  </div>
                </div>
              </label>

            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-0 md:p-8 rounded-none mb-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-gray-100 pb-6 mb-10">
          <h3 className="text-3xl font-medium text-black font-augenblick">Detalle de la Reclamación</h3>
          <span className="text-gray-400 text-sm font-medium mt-2 md:mt-0">* Datos requeridos</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-12">
          {/* Row 1 */}
          <CleanSelect 
              label="Tipo de consumo" 
              placeholder="Seleccionar tipo"
              options={["Producto", "Servicio"]} 
              required 
              defaultValue=""
          />
          <CleanInput label="N° de pedido" placeholder="Ej: PED-123456" required />
          <CleanInput 
              label="Fecha de reclamación / queja" 
              defaultValue={new Date().toLocaleDateString('es-PE')} 
              readOnly 
              className="text-gray-500"
          />

          {/* Row 2 */}
          <CleanInput label="Proveedor" placeholder="Nombre del proveedor" />
          <CleanInput label="Monto reclamado (S/.)" placeholder="0.00" type="number" />
          <div className="hidden md:block"></div>

          {/* Row 3 */}
          <div className="md:col-span-3">
            <CleanTextArea 
              label="Descripción del producto o servicio" 
              placeholder="Describe brevemente el producto o servicio contratado..." 
              required 
              rows={3}
            />
          </div>

          {/* Row 4 */}
          <CleanInput label="Fecha de compra" type="date" className="text-gray-600" />
          <CleanInput label="Fecha de consumo" type="date" className="text-gray-600" />
          <CleanInput label="Fecha de caducidad" type="date" className="text-gray-600" />

          {/* Row 5 */}
          <div className="md:col-span-3">
            <CleanTextArea 
              label="Detalle de la Reclamación / Queja" 
              placeholder="Explica detalladamente los hechos..."
              required
              rows={5}
            />
          </div>

          {/* Row 6 - Pedido de cliente */}
          <div className="md:col-span-3">
            <CleanTextArea 
              label="Pedido del cliente" 
              placeholder="¿Qué solución esperas recibir?"
              rows={5}
            />
          </div>
        </div>
      </div>

      {/* Informational Text */}
      <div className="bg-gray-50 p-6 rounded-xl mb-12">
        <ul className="space-y-3 text-sm text-gray-600 list-disc pl-5">
          <li>La formulación del reclamo no excluye el recurso a otros medios de resolución de controversias ni es un requisito previo para presentar una denuncia ante el Indecopi.</li>
          <li>El proveedor debe responder a la reclamación en un plazo no superior a quince (15) días naturales, pudiendo ampliar el plazo hasta quince días.</li>
          <li>Con la firma de este documento, el cliente autoriza a ser contactado después de la tramitación de la reclamación para evaluar la calidad y satisfacción del proceso de atención de reclamaciones.</li>
        </ul>
      </div>

      {/* Legal & Submit */}
      <div className="space-y-6">
        <div className="flex items-start gap-3">
          <input type="checkbox" className="mt-1 w-4 h-4 text-black rounded border-gray-300 focus:ring-black" />
          <p className="text-sm text-gray-600">
            Declaro que soy el dueño del servicio y acepto el contenido de este formulario al declarar bajo Declaración Jurada la veracidad de los hechos descritos.
          </p>
        </div>
        <div className="flex items-start gap-3">
          <input type="checkbox" className="mt-1 w-4 h-4 text-black rounded border-gray-300 focus:ring-black" />
          <p className="text-sm text-gray-600">
            He leído y acepto las <a href="#" className="underline text-black">Políticas de Privacidad</a> y el tratamiento de mis datos personales.
          </p>
        </div>

        <div className="pt-4">
          <Button className="bg-black text-white h-auto px-[14px] py-[8px] rounded-[19px] text-[22px] font-medium font-augenblick leading-[24px] hover:bg-gray-800 transition-colors w-full md:w-auto flex items-center justify-center gap-[12px]">
            <span className="whitespace-nowrap relative top-[-1px]">Enviar Reclamación</span>
            <div className="relative shrink-0 w-[24px] h-[24px] flex items-center justify-center overflow-hidden">
              <svg className="w-[17px] h-[16px]" fill="none" viewBox="0 0 17 16">
                <path d="M0 7.52417H16" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" />
                <path d="M8.85449 0.53033L15.8545 7.53033L8.85449 14.5303" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" />
              </svg>
            </div>
          </Button>
        </div>
      </div>
    </>
  )
}