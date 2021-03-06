import React, { useEffect } from 'react';

import { FiAlertTriangle, FiCheckCircle, FiInfo } from 'react-icons/fi';
import { MdClose } from 'react-icons/md';

import { ToastMessage, useToast } from '../../../hooks/toast';

import { Container } from './styles';

interface ToastProps {
  message: ToastMessage;
  style: object;
}

const icons = {
  info: <FiInfo size={25} />,
  error: <FiAlertTriangle size={25} />,
  success: <FiCheckCircle size={25} />,
};

const Toast: React.FC<ToastProps> = ({ message, style }) => {
  const { removeToast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => removeToast(message.id), 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [removeToast, message.id]);

  return (
    <Container
      type={message.type}
      hasDescription={Number(!!message.description)}
      style={style}
    >
      {icons[message.type] || 'info'}

      <div>
        <strong>{message.title}</strong>
        {message.description && <p>{message.description}</p>}
      </div>

      <button onClick={() => removeToast(message.id)} type="button">
        <MdClose size={18} />
      </button>
    </Container>
  );
};

export default Toast;
