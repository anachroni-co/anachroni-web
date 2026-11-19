import React from 'react';
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';

const Legal = () => {
  const { section = 'notice' } = useParams();

  const content = {
    notice: {
      title: "Legal Notice / Aviso Legal",
      content: (
        <>
          <div className="mb-8">
            <h3 className="mb-4 text-2xl">English</h3>
            <p className="mb-4">This website is owned by <strong>Anachroni S. Coop Galega</strong>, CIF: F55460372, registered in Spain.</p>
            <p className="mb-4">Address: Plaza Peñasco nº1, Vigo - Pontevedra, 36202, Spain.</p>
            <p>Use of this website implies full acceptance of the terms and conditions outlined in this legal notice. Anachroni reserves the right to modify these terms at any time.</p>
          </div>
          <div>
            <h3 className="mb-4 text-2xl">Español</h3>
            <p className="mb-4">Este sitio web es propiedad de <strong>Anachroni S. Coop Galega</strong>, CIF: F55460372, registrada en España.</p>
            <p className="mb-4">Dirección: Plaza Peñasco nº1, Vigo - Pontevedra, 36202, España.</p>
            <p>El uso de esta web implica la aceptación plena de los términos y condiciones que se detallan en este aviso legal. Anachroni se reserva el derecho de modificar estas condiciones en cualquier momento.</p>
          </div>
        </>
      )
    },
    privacy: {
      title: "Privacy Policy / Política de Privacidad",
      content: (
        <>
          <div className="mb-8">
            <h3 className="mb-4 text-2xl">English</h3>
            <p>We collect only the data strictly necessary for contact purposes and statistical navigation analysis. We do not sell or share your data with third parties. You may request access, correction or deletion of your personal data by writing to: info@anachroni.co</p>
          </div>
          <div>
            <h3 className="mb-4 text-2xl">Español</h3>
            <p>Recopilamos solo los datos estrictamente necesarios para fines de contacto y análisis estadístico de navegación. No vendemos ni compartimos sus datos con terceros. Puede solicitar acceso, corrección o eliminación de sus datos personales escribiendo a: info@anachroni.co</p>
          </div>
        </>
      )
    },
    investment: {
      title: "Investment Disclaimer / Cláusula sobre Inversión",
      content: (
        <>
          <div className="mb-8">
            <h3 className="mb-4 text-2xl">English</h3>
            <p>This website does not constitute a public offer of securities. Any reference to investment is purely informative and non-binding. We do not accept or process financial transactions or public fundraising through this website.</p>
          </div>
          <div>
            <h3 className="mb-4 text-2xl">Español</h3>
            <p>Este sitio web no constituye una oferta pública de valores. Cualquier referencia a inversión tiene un carácter meramente informativo y no vinculante. No aceptamos ni gestionamos transacciones financieras ni captación de fondos públicos a través de este sitio.</p>
          </div>
        </>
      )
    }
  };

  return (
    <div className="min-h-screen px-6 pt-24 pb-32">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="mb-6 text-4xl font-light md:text-5xl">
            {content[section as keyof typeof content].title}
          </h1>
          <div className="p-8 border bg-gradient-to-br from-purple-900/30 to-purple-800/10 rounded-xl backdrop-blur-sm border-purple-500/20">
            {content[section as keyof typeof content].content}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Legal;