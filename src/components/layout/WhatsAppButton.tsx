"use client";

import React from "react";

export function WhatsAppButton() {
  const phoneNumber = "552136226888";
  const message = encodeURIComponent("Olá! Gostaria de solicitar um orçamento de cabos elétricos.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      title="Fale conosco pelo WhatsApp"
      className="fixed bottom-6 left-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform whatsapp-pulse"
      aria-label="WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        className="w-7 h-7 fill-white"
      >
        <path d="M16.004 0h-.008C7.174 0 .001 7.174.001 16.004c0 3.498 1.126 6.738 3.037 9.372L1.055 31.22l6.088-1.953a15.93 15.93 0 008.861 2.674C24.83 31.941 32 24.767 32 16.004S24.83 0 16.004 0zm9.32 22.609c-.39 1.097-1.937 2.009-3.16 2.275-.838.178-1.932.32-5.616-1.207-4.712-1.952-7.742-6.73-7.975-7.043-.225-.313-1.839-2.453-1.839-4.68s1.148-3.316 1.586-3.774c.39-.41 1.026-.605 1.635-.605.197 0 .374.01.533.018.438.02.658.046 .949.735.364.863 1.247 3.044 1.355 3.265.11.221.221.52.068.825-.143.313-.27.45-.492.699-.221.247-.433.438-.654.704-.202.234-.43.485-.178.923.252.438 1.122 1.847 2.41 2.993 1.658 1.475 3.024 1.952 3.508 2.155.39.163.853.127 1.114-.155.327-.362.735-.962 1.148-1.555.293-.42.664-.478 1.08-.313.423.155 2.672 1.262 3.13 1.491.458.234.764.35.877.54.11.196.11 1.1-.28 2.197z" />
      </svg>
    </a>
  );
}
