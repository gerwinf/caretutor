// components/Chatbot.js

"use client"

import { useEffect } from 'react';

const Chatbot = () => {
  useEffect(() => {
    // Configure the embedded chatbot
    window.embeddedChatbotConfig = {
      chatbotId: "R8LWh0xK-RQHWgABgSfUC",
      domain: "www.chatbase.co"
    };

    // Create the script element
    const script = document.createElement('script');
    script.src = 'https://www.chatbase.co/embed.min.js';
    script.async = true;
    script.defer = true;
    script.setAttribute('chatbotId', 'R8LWh0xK-RQHWgABgSfUC');
    script.setAttribute('domain', 'www.chatbase.co');

    // Append the script to the body
    document.body.appendChild(script);

    // Cleanup function to remove the script when the component is unmounted
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <iframe
        src="https://www.chatbase.co/chatbot-iframe/R8LWh0xK-RQHWgABgSfUC"
        width="100%"
        style={{ height: '100%', minHeight: '700px' }}
        frameBorder="0"
      ></iframe>
    </div>
  );
};

export default Chatbot;
