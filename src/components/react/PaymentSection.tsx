import React, { useState, useEffect } from 'react';

const applicationId = import.meta.env.PUBLIC_SQUARE_APP_ID;
const locationId = import.meta.env.PUBLIC_SQUARE_LOCATION_ID;

interface SquarePaymentMethod {
  attach: (selector: string) => Promise<void>;
  tokenize: (options?: any) => Promise<{
    status: string;
    token?: string;
    errors?: any[];
  }>;
}

interface SquarePayments {
  card: () => Promise<SquarePaymentMethod>;
  applePay: (paymentRequest: any) => Promise<SquarePaymentMethod | null>;
  googlePay: (paymentRequest: any) => Promise<SquarePaymentMethod | null>;
}

interface SquareSDK {
  payments: (applicationId: string, locationId: string) => SquarePayments;
}

declare global {
  interface Window {
    Square: SquareSDK;
  }
}

interface PaymentSectionProps {
  initialAmount: number;
}

const PaymentSection: React.FC<PaymentSectionProps> = ({ initialAmount }) => {
  const [card, setCard] = useState<SquarePaymentMethod | null>(null);
  const [message, setMessage] = useState<{ text: string; type: 'error' | 'success' | 'info' | '' }>({ text: '', type: '' });

  const buildPaymentRequest = (payments: any) => {
    return payments.paymentRequest({
      countryCode: 'ES',
      currencyCode: 'EUR',
      total: {
        amount: initialAmount.toString(),
        label: 'Total',
      },
    });
  };

  const showMessage = (text: string, type: 'error' | 'success' | 'info') => {
    setMessage({ text, type });
    // Auto-ocultar después de 5 segundos
    setTimeout(() => {
      setMessage({ text: '', type: '' });
    }, 5000);
  };

  useEffect(() => {
    const attachPaymentMethods = async () => {
      try {
        if (!window.Square) {
          console.error('El SDK de Square no se ha cargado.');
          showMessage('Error al cargar el sistema de pagos. Por favor, recargue la página.', 'error');
          return;
        }

        const paymentsInstance = window.Square.payments(applicationId, locationId);
        const paymentRequest = buildPaymentRequest(paymentsInstance);
        
        const cardInstance = await paymentsInstance.card();
        await cardInstance.attach('#card-container');
        setCard(cardInstance);

        const applePayInstance = await paymentsInstance.applePay(paymentRequest);
        if (applePayInstance) {
          await applePayInstance.attach('#apple-pay-button');
        } else {
          console.log('Apple Pay no está disponible.');
        }

        const googlePayInstance = await paymentsInstance.googlePay(paymentRequest);
        if (googlePayInstance) {
          await googlePayInstance.attach('#google-pay-button');
        } else {
          console.log('Google Pay no está disponible.');
        }
      } catch (e) {
        console.error('Error al inicializar métodos de pago:', e);
      }
    };

    if (window.Square) {
      attachPaymentMethods();
    } else {
      const squareScript = document.createElement('script');
      squareScript.src = 'https://sandbox.web.squarecdn.com/v1/square.js';
      squareScript.async = true;
      squareScript.onload = attachPaymentMethods;
      document.body.appendChild(squareScript);
    }
    return () => {};
  }, []);

  const handleCardSubmit = async () => {
    if (!card) {
      showMessage('El formulario de tarjeta no está disponible. Por favor, recargue la página.', 'error');
      return;
    }

    // Limpiar mensajes anteriores
    setMessage({ text: '', type: '' });
    
    try {
      showMessage('Procesando información de la tarjeta...', 'info');
      const result = await card.tokenize();
      
      if (result.status === 'OK' && result.token) {
        showMessage('Información de tarjeta procesada correctamente.', 'success');
        const customEvent = new CustomEvent('payment-success', {
          detail: {
            nonce: result.token,
            paymentType: 'card',
          },
        });
        window.dispatchEvent(customEvent);
      } else {
        console.error('Error al tokenizar con tarjeta:', result.errors);
        showMessage('Error al procesar la información de la tarjeta. Por favor, verifique los datos e intente nuevamente.', 'error');
      }
    } catch (e) {
      console.error('Error al procesar el pago con tarjeta:', e);
      showMessage('Error al procesar el pago. Por favor, intente nuevamente.', 'error');
    }
  };

  // Escuchar evento de validación del formulario
  useEffect(() => {
    const handleFormValidated = (e: CustomEvent) => {
      if (e.detail.paymentType === 'card') {
        handleCardSubmit();
      }
    };

    window.addEventListener('form-validated', handleFormValidated as EventListener);
    
    return () => {
      window.removeEventListener('form-validated', handleFormValidated as EventListener);
    };
  }, [card]);

  // Función para obtener las clases CSS según el tipo de mensaje
  const getMessageClasses = (type: string) => {
    const baseClasses = "p-3 rounded-md text-sm font-medium transition-all duration-300";
    switch (type) {
      case 'error':
        return `${baseClasses} bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-800 dark:text-red-200`;
      case 'success':
        return `${baseClasses} bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-800 dark:text-green-200`;
      case 'info':
        return `${baseClasses} bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 text-blue-800 dark:text-blue-200`;
      default:
        return baseClasses;
    }
  };

  return (
    <div className="space-y-6">
      {/* Mensaje de estado */}
      {message.text && (
        <div className={getMessageClasses(message.type)}>
          <div className="flex items-center space-x-2">
            {message.type === 'error' && <span className="text-lg">⚠️</span>}
            {message.type === 'success' && <span className="text-lg">✅</span>}
            {message.type === 'info' && <span className="text-lg">ℹ️</span>}
            <span>{message.text}</span>
          </div>
        </div>
      )}

      <div id="apple-pay-button" className="h-12 mb-2"></div>
      <div id="google-pay-button" className="h-12 mb-2"></div>
      <div className="space-y-4">
        <label className="block text-sm font-medium text-dark dark:text-light">Información de Tarjeta</label>
        <div id="card-container" className="mt-1 block w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm"></div>
      </div>
    </div>
  );
};

export default PaymentSection;