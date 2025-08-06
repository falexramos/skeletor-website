export const eventos = {
  'conferencia-renaixer': {
    id: 'conferencia-renaixer',
    titulo: 'Conferencia Renàixer: De la muerte a la vida, del vacío a la plenitud.',
    ponente: 'Sarab Rey (Izanami Martínez)',
    descripcion: 'La Conferencia "RENÀIXER" se llevará a cabo en el auditorio Somos, y está enfocada para volver a encender y renacer tu fe a través de enseñanzas profundas sobre la salud mental y la espiritualidad correcta desde Cristo. Estará con nosotros, Sarab Rey, más conocida como Izanami Martínez, antropóloga y comunicadora reconocida a nivel internacional. Únete a nosotros para una experiencia inolvidable y auténtica.',
    fecha: 'Sábado 26 de Septiembre',
    horario: 'desde las 19:00 a 22:00',
    precio: '20€',
    lugar: 'Auditorio de Somos.',
    imagen: '/assets/img/ordenador.jpeg',
    imagenMovil: '/assets/img/movile.jpeg'
  }
} as const;

export type Evento = typeof eventos[keyof typeof eventos];