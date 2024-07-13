"use client"

import React, { useEffect } from 'react';

const ChatBubble = () => {
  useEffect(() => {
    // Adding the embeddedChatbotConfig script
    const configScript = document.createElement('script');
    configScript.innerHTML = `
      window.embeddedChatbotConfig = {
        chatbotId: "R8LWh0xK-RQHWgABgSfUC",
        domain: "www.chatbase.co"
      }
    `;
    document.body.appendChild(configScript);

    // Adding the embed.min.js script
    const embedScript = document.createElement('script');
    embedScript.src = "https://www.chatbase.co/embed.min.js";
    embedScript.setAttribute('chatbotId', 'R8LWh0xK-RQHWgABgSfUC');
    embedScript.setAttribute('domain', 'www.chatbase.co');
    embedScript.defer = true;
    document.body.appendChild(embedScript);

    return () => {
      // Cleanup scripts if necessary
      document.body.removeChild(configScript);
      document.body.removeChild(embedScript);
    };
  }, []);

  return null;
};

export default ChatBubble;
