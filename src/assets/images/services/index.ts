import type { ServiceSlug } from "../../../types/service";

// Import all service images
import comercioExterior from "./comercio-exterior.jpeg";
import almacenamiento from "./almacenamiento.jpeg";
import distribucion from "./distribucion.jpeg";
import manufactura from "./manufactura.jpeg";
import courierExpress from "./courier-express.jpeg";
import valorAgregado from "./valor-agregado.jpeg";

// Import shared image
import yobelLogistica from "../yobel-logistica.jpg";

export const serviceImages: Record<ServiceSlug, { main: string; hover: string; benefits: string }> = {
  "comercio-exterior": {
    main: comercioExterior,
    hover: comercioExterior,
    benefits: yobelLogistica,
  },
  "almacenamiento": {
    main: almacenamiento,
    hover: almacenamiento,
    benefits: yobelLogistica,
  },
  "distribucion": {
    main: distribucion,
    hover: distribucion,
    benefits: yobelLogistica,
  },
  "manufactura": {
    main: manufactura,
    hover: manufactura,
    benefits: yobelLogistica,
  },
  "courier-express": {
    main: courierExpress,
    hover: courierExpress,
    benefits: yobelLogistica,
  },
  "valor-agregado": {
    main: valorAgregado,
    hover: valorAgregado,
    benefits: yobelLogistica,
  },
};

export {
  comercioExterior,
  almacenamiento,
  distribucion,
  manufactura,
  courierExpress,
  valorAgregado,
  yobelLogistica,
};
