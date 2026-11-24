// Configuração de publicação, lida das variáveis de ambiente do build:
//   SITE_URL=https://dominio.com.br  → canonical e og:url
//   PUBLIC_GTM_ID=GTM-XXXXXXX        → Google Tag Manager com Consent Mode v2
// Sem PUBLIC_GTM_ID não entra tag nem aviso de cookies (rascunho e aprovação).
export const gtmId: string = (import.meta.env.PUBLIC_GTM_ID ?? '').trim();
export const CHAVE_CONSENTIMENTO = 'leal-consentimento';
