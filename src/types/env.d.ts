/// <reference types="vite/client" />

//声明vue组件模块
declare module "*.vue" {
    import { DefineComponent } from "vue";
    const component: DefineComponent<{}, {}, any>;
    export default component;
}

//全局环境变量
interface ImportMetaEnv {
    VITE_APP_TITLE: string,
    VITE_APP_PORT: number,
    VITE_APP_BASE_API: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}