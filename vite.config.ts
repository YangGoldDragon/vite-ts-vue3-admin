import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path"
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";

// https://vitejs.dev/config/
export default defineConfig({
  //路径别名
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@components": path.resolve(__dirname, "src/components"),
    }
  },
  plugins: [
    vue(),
    AutoImport({
      // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
      imports: ["vue", "@vueuse/core"],
      eslintrc: {
        enabled: false,
        filepath: "./.eslintrc-auto-import.json",
        globalsPropValue: true,
      },
      resolvers: [
        // 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)
        ElementPlusResolver(),
        IconsResolver({}),
      ],
      vueTemplate: true,
      // 配置文件生成位置(false:关闭自动生成)
      dts: false,
      // dts: "src/types/auto-imports.d.ts",
    }),
    Components({
      resolvers: [
        // 自动导入 Element Plus 组件
        ElementPlusResolver(),
        // 自动导入图标组件
        IconsResolver({
          // @iconify-json/ep 是 Element Plus 的图标库
          enabledCollections: ["ep"],
        }),
      ],
      // 指定自定义组件位置(默认:src/components)
      dirs: ["src/**/components"],
      // 配置文件位置(false:关闭自动生成)
      dts: false,
      // dts: "src/types/components.d.ts",
    }),
    Icons({
      // 自动安装图标库
      autoInstall: true,
    }),
  ]
})
