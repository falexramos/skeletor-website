// src/data/eventos.ts
import type { FormField } from "@/components/pay/DynamicPaymentForm.astro";
import type { ImageMetadata } from "astro";

export interface Evento {
  id: string;
  titulo: string;
  ponente: string;
  descripcion: string[];
  fecha: string;
  horario: string;
  lugar: string;
  imagen: string | ImageMetadata;
  imagenMovil: string | ImageMetadata;
  
  // Campos para la página de registro
  unitPrice: number;
  registrationEndpoint: string;
  eventName: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  time: string;
  location: string;
  formFields: FormField[];
  companionFormFields?: FormField[];
}

export const eventos: Evento[] = [
  {
    id: 'conferencia-renaixer',
    titulo: 'Conferencia Renàixer: De muerte a vida, del vacío a la plenitud',
    ponente: 'Sarab Rey (Izanami Martínez)',
    descripcion: [
      'La Conferencia "RENÀIXER" (RENACER) se llevará a cabo el Sábado 27 de Septiembre en el auditorio de Somos, y estará enfocada para volver a encender nuestra fe.',
      'La intención de la Conferencia Renàixer es dejar todo aquello que nos impide correr la carrera, y así de esta manera poder renacer a través de las enseñanzas sobre salud mental. También estaremos hablando de como tener una espiritualidad correcta desde Cristo.',
      'Únete a nosotros para una experiencia inolvidable y auténtica.'
    ],
    fecha: 'Sábado 28 de Septiembre',
    horario: '19:00 hrs',
    lugar: 'Edificio Sanchis Guarner - C. Algemesí, 46910 Alfafar, Valencia.',
    imagen: '/assets/img/ordenador.jpeg',
    imagenMovil: '/assets/img/movile.jpeg',
    // Campos para el registro
    unitPrice: 30,
    registrationEndpoint: "https://8qr8t0qsmg.execute-api.us-east-1.amazonaws.com/v1/contactos",
    eventName: "Conferencia Renàixer",
    imageAlt: "Conferencia Renàixer",
    imageWidth: 800,
    imageHeight: 600,
    time: "19:00 hrs",
    location: "Edificio Sanchis Guarner - C. Algemesí, 46910 Alfafar, Valencia.",
    formFields: [
        { id: 'nombreCompleto', label: 'Nombre Completo *', type: 'text', required: true, placeholder: 'Ingresa tu nombre completo' },
        { id: 'email', label: 'Email *', type: 'email', required: true, placeholder: 'tu@email.com' },
        { id: 'telefono', label: 'Teléfono *', type: 'tel', required: true, placeholder: '' },
        { id: 'ciudad', label: 'Ciudad *', type: 'text', required: true, placeholder: 'Tu ciudad' },
        { id: 'direccion', label: 'Dirección *', type: 'text', required: true, placeholder: 'Tu dirección completa' },
        { 
          id: 'comoNosConociste', 
          label: '¿Cómo nos conociste? *', 
          type: 'select', 
          required: true,
          options: [
            { value: "", text: "Selecciona una opción" },
            { value: "Sitio Web", text: "Sitio Web" },
            { value: "Redes Sociales", text: "Redes Sociales" },
            { value: "Amigo", text: "Recomendación de un amigo" },
            { value: "Email", text: "Email marketing" },
            { value: "Publicidad", text: "Publicidad" },
            { value: "Otro", text: "Otro" },
          ]
        },
        { id: 'deDondeNosVisitas', label: '¿De qué iglesia nos visitas? *', type: 'text', required: true, placeholder: '' },
        { 
          id: 'formaDePago', 
          label: '¿Tu reserva se realizo en? *', 
          type: 'select', 
          required: true,
          options: [
            { value: "", text: "Selecciona una opción" },
            { value: "Pagina Web", text: "Página Web" },
            { value: "Efectivo", text: "Efectivo" },
            { value: "Bizum", text: "Bizum" },
            { value: "Tarjeta", text: "Tarjeta" },
            { value: "Otro", text: "Otro" },
          ]
        },
    ],
    companionFormFields: [
        { id: 'nombreCompleto', label: 'Nombre Completo', type: 'text', required: true, placeholder: 'Nombre', gridSpan: 'col-span-2' },
        { id: 'email', label: 'Email', type: 'email', required: true, placeholder: 'email@ejemplo.com' },
        { id: 'telefono', label: 'Teléfono', type: 'tel', required: true },
        { id: 'deDondeNosVisitas', label: '¿De qué iglesia nos visita?', type: 'text', required: true, placeholder: '' },
    ],
  }
];
