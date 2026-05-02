import { useState } from 'react';

export default function ContactFloat() {
  const [isOpen, setIsOpen] = useState(false);

  const contacts = [
    {
      name: 'WhatsApp',
      icon: '💬',
      color: '#25D366',
      link: 'https://wa.me/639613464499'
    },
    {
      name: 'Viber',
      icon: '📱',
      color: '#7360F2',
      link: 'viber://chat?number=639613464499'
    },
    {
      name: 'Messenger',
      icon: '💬',
      color: '#0084FF',
      link: 'https://m.me/soycartransportpalawan'
    },
    {
      name: 'Facebook',
      icon: '👍',
      color: '#1877F2',
      link: 'https://www.facebook.com/soycartransportpalawan'
    }
  ];

  return (
    <div className="contact-float-container">
      <div className={`contact-options ${isOpen ? 'open' : ''}`}>
        {contacts.map((contact, index) => (
          <a
            key={contact.name}
            href={contact.link}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-option"
            style={{ 
              backgroundColor: contact.color,
              transitionDelay: isOpen ? `${index * 50}ms` : '0ms'
            }}
            title={contact.name}
          >
            <span className="contact-icon">{contact.icon}</span>
            <span className="contact-label">{contact.name}</span>
          </a>
        ))}
      </div>

      <button
        className={`contact-float-btn ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Contact us"
      >
        {isOpen ? (
          <svg viewBox="0 0 24 24" className="contact-main-icon" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" fill="currentColor"/>
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" className="contact-main-icon" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z" fill="currentColor"/>
          </svg>
        )}
      </button>
    </div>
  );
}
