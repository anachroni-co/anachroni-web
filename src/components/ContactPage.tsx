import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

interface FormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const templateParams = {
        user_name: formData.name,
        user_email: formData.email,
        company: formData.company,
        message: formData.message
      };

      await emailjs.send(
        'service_o7tz1p2',
        'template_5igogfb',
        templateParams,
        'zJ7nDvt98s4zz0HYu'
      );
      
      setStatus('success');
      setFormData({ name: '', email: '', company: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1a1a] to-[#2d1b4d] text-white p-5">
      <div className="max-w-2xl p-8 mx-auto card-neumorphic">
        {/* Logo y Encabezado */}
        <div className="mb-8 text-center">
          <a href="https://anachroni.co" className="inline-block">
            <img 
              src="/LogoGuayT.png" 
              alt="Anachroni Logo" 
              className="w-auto h-10 sm:h-12"
              style={{
                minWidth: '180px',
                minHeight: '120px'
              }}
              loading="eager"
            />
          </a>
          <h1 className="text-2xl font-light">Nuevo mensaje de contacto</h1>
        </div>

        {/* Formulario de Contacto */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Información del remitente */}
          <div className="form-group-neumorphic">
            <div className="space-y-4">
              <div>
                <label className="label-neumorphic">Nombre</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full input-neumorphic"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label className="label-neumorphic">Email</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full input-neumorphic"
                  placeholder="tu@email.com"
                />
              </div>
              <div>
                <label className="label-neumorphic">Empresa</label>
                <input 
                  type="text" 
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  className="w-full input-neumorphic"
                  placeholder="Nombre de tu empresa"
                />
              </div>
            </div>
          </div>

          {/* Mensaje */}
          <div className="form-group-neumorphic">
            <label className="label-neumorphic mb-4">Mensaje:</label>
            <textarea 
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full input-neumorphic min-h-[150px]"
              placeholder="Escribe tu mensaje aquí..."
            />
          </div>

          {/* Estado del envío */}
          {status === 'success' && (
            <div className="alert-neumorphic-success text-center">
              ¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.
            </div>
          )}
          {status === 'error' && (
            <div className="alert-neumorphic-error text-center">
              Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.
            </div>
          )}

          {/* Botón de envío */}
          <button 
            type="submit"
            disabled={status === 'sending'}
            className="w-full btn-neumorphic disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === 'sending' ? 'Enviando...' : 'Enviar mensaje'}
          </button>
        </form>

        {/* Pie de página */}
        <div className="pt-6 mt-8">
          <div className="divider-neumorphic"></div>
          <p className="mb-4 text-sm text-purple-300">
            Este formulario te conectará directamente con el equipo de Anachroni.
          </p>
          
          <div className="mt-6 text-center">
            <p className="text-sm text-purple-300">Saludos,</p>
            <p className="mt-1 text-base text-white">El equipo de Anachroni</p>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-6 mt-8 text-center">
          <div className="divider-neumorphic"></div>
          <p className="text-xs text-purple-300">
            <a 
              href="https://anachroni.co" 
              className="text-purple-200 transition-colors hover:text-purple-100"
            >
              anachroni.co
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;