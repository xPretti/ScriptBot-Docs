// starlight-virtual-internal.d.ts
declare module "virtual:starlight/user-config" {
   const config: any;
   export default config;
}

declare module "virtual:starlight/plugin-translations" {
   const translations: any;
   export default translations;
}

// Adicione também para os componentes se necessário
declare module "virtual:starlight/components/*" {
   const component: any;
   export default component;
}
