export const EMAILJS_SERVICE_ID = (import.meta as any).env
  .VITE_EMAILJS_SERVICE_ID as string | undefined;
export const EMAILJS_TEMPLATE_ID_CONTACT = (import.meta as any).env
  .VITE_EMAILJS_TEMPLATE_ID_CONTACT as string | undefined;
export const EMAILJS_TEMPLATE_ID_NEWSLETTER = (import.meta as any).env
  .VITE_EMAILJS_TEMPLATE_ID_NEWSLETTER as string | undefined;
export const EMAILJS_PUBLIC_KEY = (import.meta as any).env
  .VITE_EMAILJS_PUBLIC_KEY as string | undefined;
export const ROUTER_MODE = (import.meta as any).env.VITE_ROUTER_MODE as
  | string
  | undefined;

export function areEmailEnvVarsConfigured(): boolean {
  return (
    !!EMAILJS_SERVICE_ID &&
    !!EMAILJS_PUBLIC_KEY &&
    (!!EMAILJS_TEMPLATE_ID_CONTACT || !!EMAILJS_TEMPLATE_ID_NEWSLETTER)
  );
}
