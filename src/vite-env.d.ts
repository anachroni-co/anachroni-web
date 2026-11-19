/// <reference types="vite/client" />

// Declaraciones para archivos de imagen
declare module '*.png' {
  const value: string;
  export default value;
}

declare module '*.jpg' {
  const value: string;
  export default value;
}

declare module '*.jpeg' {
  const value: string;
  export default value;
}

declare module '*.webp' {
  const value: string;
  export default value;
}

declare module '*.svg' {
  const value: string;
  export default value;
}

declare module '*.gif' {
  const value: string;
  export default value;
}

declare module '*.ico' {
  const value: string;
  export default value;
}

// Variables de entorno
interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  readonly VITE_EMAILJS_PUBLIC_KEY: string;
  readonly VITE_EMAILJS_SERVICE_ID: string;
  readonly VITE_EMAILJS_TEMPLATE_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}