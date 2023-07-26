/// <reference types="vite/client" />

//声明vue组件模块
declare module "*.vue" {
    import { DefineComponent } from "vue";
    const component: DefineComponent<{}, {}, any>;
    export default component;
}
