declare global {
  interface Window {
    Square: any;
  }
}

// Puedes definir tipos más específicos si lo deseas, para que TypeScript
// te dé autocompletado y validación.
// declare const Square: {
//   payments: (applicationId: string, locationId: string) => any;
// };

export {};