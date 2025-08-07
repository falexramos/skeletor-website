export const eventos = {
  'conferencia-renaixer': {
    id: 'conferencia-renaixer',
    titulo: 'Conferencia Renàixer: De muerte a vida, del vacío a la plenitud',
    ponente: 'Sarab Rey (Izanami Martínez)',
    descripcion: [
      'La Conferencia "RENÀIXER" (RENACER) se llevará a cabo el Sábado 27 de Septiembre en el auditorio de Somos, y estará enfocada para volver a encender nuestra fe.',
      
    ],
    descripcion2: [
      'La intención de la Conferencia Renàixer es dejar todo aquello que nos impide correr la carrera, y así de esta manera poder renacer a través de las enseñanzas sobre salud mental. También estaremos hablando de como tener una espiritualidad correcta desde Cristo. '      
    ],
    descripcion3: [
      'Únete a nosotros para una experiencia inolvidable y auténtica.'
    ],
    fecha: 'Sábado 27 de Septiembre',
    horario: '19:00 hrs',
    precio: '20€',
    lugar: 'Auditorio de Somos.',
    imagen: '/assets/img/ordenador.jpeg',
    imagenMovil: '/assets/img/movile.jpeg'
  }
} as const;

export type Evento = typeof eventos[keyof typeof eventos];