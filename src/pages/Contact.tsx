import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';
import SEO from '../components/SEO';
import emailjs from '@emailjs/browser';

interface Point {
  title: string;
  description: string;
  icon: string;
}

interface FormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

const Contact = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('idle');
    setIsSubmitting(true);
    
    try {
      const templateParams = {
        to_email: 'info@anachroni.co',
        user_name: formData.name,
        user_email: formData.email,
        company: formData.company,
        message: formData.message,
        name: formData.name,
        user_mail: formData.email
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
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <SEO 
        title={t.contact.title}
        description={t.contact.subtitle}
        keywords={[
          "AI Investment", "Deep Tech", "Spanish Startup",
          "Machine Learning", "Neuroscience", "Philosophy",
          "Embedded Systems", "AI Research", "Innovation"
        ]}
        lang={language}
      />
      <div className="min-h-screen px-6 pt-24 pb-32">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="flex items-center gap-3 mb-6 text-4xl font-light md:text-5xl">
              <span>🤝</span> {t.contact.title}
            </h1>
            <p className="max-w-3xl mb-12 text-xl text-gray-300">
              {t.contact.subtitle}
            </p>
          </motion.div>

          {/* Investment Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="p-8 mb-16 border bg-gradient-to-br from-purple-900/30 to-purple-800/10 rounded-xl backdrop-blur-sm border-purple-500/20"
          >
            <h2 className="mb-6 text-3xl font-light">{t.contact.investment.title}</h2>
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="mb-4 text-xl font-light">{t.contact.investment.whyInvest}</h3>
                <ul className="space-y-4">
                  {t.contact.investment.reasons.map((reason, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-2xl">{['🚀', '💡', '🎯', '🔬'][index]}</span>
                      <p>{reason}</p>
                    </li>
                  ))}
                </ul>

                {/* Tax Benefits Section */}
                <div className="p-6 mt-8 border bg-gradient-to-br from-green-800/40 to-green-700/30 rounded-xl backdrop-blur-sm border-green-500/30">
                  <h3 className="flex items-center gap-2 mb-4 text-xl font-light">
                    <span>💰</span> {t.contact.investment.taxBenefits.title}
                  </h3>
                  <p className="mb-4 text-gray-200">
                    {t.contact.investment.taxBenefits.description}
                  </p>
                  <p className="mb-4 font-medium text-gray-200">
                    {t.contact.investment.taxBenefits.maxDeduction}
                  </p>
                  <div className="p-4 mt-4 border rounded-lg bg-green-800/40 border-green-500/40">
                    <h4 className="flex items-center gap-2 mb-2 text-lg font-light">
                      <span>🌍</span> {language === 'en' ? 'For Foreign Investors' : 'Para Inversores Extranjeros'}
                    </h4>
                    <p className="text-gray-200">
                      {t.contact.investment.taxBenefits.foreignInvestors}
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="mb-4 text-xl font-light">{t.contact.investment.form.title}</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="label-neumorphic">
                      {t.contact.investment.form.name}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full input-neumorphic"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="label-neumorphic">
                      {t.contact.investment.form.email}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full input-neumorphic"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="label-neumorphic">
                      {t.contact.investment.form.company}
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      className="w-full input-neumorphic"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="label-neumorphic">
                      {t.contact.investment.form.message}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full input-neumorphic"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-neumorphic text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? t.contact.investment.form.sending : t.contact.investment.form.submit}
                  </button>
                  {status === 'success' && (
                    <div className="alert-neumorphic-success text-center">
                      {t.contact.investment.form.success}
                    </div>
                  )}
                  {status === 'error' && (
                    <div className="alert-neumorphic-error text-center">
                      {t.contact.investment.form.error}
                    </div>
                  )}
                </form>

                {/* ENISA Certification */}
                <div className="flex flex-col items-center justify-center p-6 mt-8 border rounded-lg bg-gradient-to-br from-green-800/40 to-green-700/30 border-green-500/30">
                  <img 
                    src="/enisa-logo.png" 
                    alt="ENISA Logo" 
                    className="h-32 mb-4"
                  />
                  <p className="text-xl font-light text-gray-200">
                    {language === 'en' ? 'ENISA Startup Certified' : 'Certificado ENISA Startup'}
                  </p>
                  <p className="mt-2 text-sm text-center text-gray-300">
                    {language === 'en' 
                      ? 'Backed by Spain\'s National Innovation Company'
                      : 'Respaldado por la Empresa Nacional de Innovación'}
                  </p>
                  <div className="pt-4 mt-4 border-t border-green-500/30">
                    <p className="text-lg font-medium text-gray-200">
                      Anachroni AI on Edge
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="mb-8 text-2xl font-light">
              {t.contact.strategicFocus.title}
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {t.contact.strategicFocus.points.map((point: Point, index: number) => (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                  className="p-6 border bg-gradient-to-br from-purple-900/30 to-purple-800/10 rounded-xl backdrop-blur-sm border-purple-500/20"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">{point.icon}</span>
                    <div>
                      <h3 className="mb-2 text-xl font-light">{point.title}</h3>
                      <p className="text-gray-300">{point.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="mb-8 text-2xl font-light">
              {t.contact.businessModel.title}
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {t.contact.businessModel.points.map((point: Point, index: number) => (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.6 }}
                  className="p-6 border bg-gradient-to-br from-purple-900/30 to-purple-800/10 rounded-xl backdrop-blur-sm border-purple-500/20"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">{point.icon}</span>
                    <div>
                      <h3 className="mb-2 text-xl font-light">{point.title}</h3>
                      <p className="text-gray-300">{point.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-16"
          >
            <h2 className="mb-8 text-2xl font-light">
              {t.contact.industryAlliances.title}
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {t.contact.industryAlliances.points.map((point: Point, index: number) => (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.8 }}
                  className="p-6 border bg-gradient-to-br from-purple-900/30 to-purple-800/10 rounded-xl backdrop-blur-sm border-purple-500/20"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">{point.icon}</span>
                    <div>
                      <h3 className="mb-2 text-xl font-light">{point.title}</h3>
                      <p className="text-gray-300">{point.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="max-w-2xl mx-auto text-center"
          >
            <p className="text-xl italic text-gray-300">
              {t.contact.mission}
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Contact;