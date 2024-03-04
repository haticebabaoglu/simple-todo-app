import { useState, useEffect } from 'react';

const Notification = ({ message, onClose }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onClose(); // Bildirimi otomatik olarak kapatır
    }, 5000); // 5 saniye sonra bildirimi otomatik olarak kapatır

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`notification ${visible ? 'show' : ''}`}>
      {message}
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default Notification;
