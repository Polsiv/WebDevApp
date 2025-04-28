// vite.config.js
import { defineConfig } from "file:///D:/My%20Stuff/WebDevApp/node_modules/vite/dist/node/index.js";
import react from "file:///D:/My%20Stuff/WebDevApp/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { VitePWA } from "file:///D:/My%20Stuff/WebDevApp/node_modules/vite-plugin-pwa/dist/index.js";
var vite_config_default = defineConfig({
  plugins: [react(), VitePWA(
    {
      registerType: "autoUpdate",
      devOptions: {
        enabled: true
      },
      manifest: {
        name: "Mi prueba App PWA React",
        short_name: "MiPWA",
        description: "Esta es una app PWA",
        theme_color: "#ffffff",
        display: "standalone",
        start_url: "/",
        icons: [
          {
            src: "icons/icon-128.png",
            sizes: "128x128",
            type: "image/png"
          },
          {
            src: "icons/icon-512x512.png",
            sizes: "512x512",
            type: "image/png"
          }
        ]
      },
      workbox: {
        globPatterns: ["*/.{js,css,html,png,jpg,jpeg,svg}"]
      }
    }
  )]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxNeSBTdHVmZlxcXFxXZWJEZXZBcHBcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXE15IFN0dWZmXFxcXFdlYkRldkFwcFxcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovTXklMjBTdHVmZi9XZWJEZXZBcHAvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0J1xuaW1wb3J0ICB7IFZpdGVQV0EgfSBmcm9tICd2aXRlLXBsdWdpbi1wd2EnXG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbcmVhY3QoKSwgVml0ZVBXQSh7XG4gICAgcmVnaXN0ZXJUeXBlOiAnYXV0b1VwZGF0ZScsXG4gICAgZGV2T3B0aW9uczoge1xuICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICB9LFxuICAgIG1hbmlmZXN0OiB7XG4gICAgICBuYW1lOiAnTWkgcHJ1ZWJhIEFwcCBQV0EgUmVhY3QnLFxuICAgICAgc2hvcnRfbmFtZTogJ01pUFdBJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnRXN0YSBlcyB1bmEgYXBwIFBXQScsXG4gICAgICB0aGVtZV9jb2xvcjogJyNmZmZmZmYnLFxuICAgICAgZGlzcGxheTogJ3N0YW5kYWxvbmUnLCBcbiAgICAgIHN0YXJ0X3VybDogJy8nLFxuICAgICAgaWNvbnM6W1xuICAgICAgICB7XG4gICAgICAgIHNyYzogJ2ljb25zL2ljb24tMTI4LnBuZycsXG4gICAgICAgIHNpemVzOiAnMTI4eDEyOCcsXG4gICAgICAgIHR5cGU6ICdpbWFnZS9wbmcnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzcmM6ICdpY29ucy9pY29uLTUxMng1MTIucG5nJyxcbiAgICAgICAgc2l6ZXM6ICc1MTJ4NTEyJyxcbiAgICAgICAgdHlwZTogJ2ltYWdlL3BuZydcbiAgICAgIH1cbiAgICAgIF1cblxuICAgIH0sXG4gICAgd29ya2JveDp7XG4gICAgICBnbG9iUGF0dGVybnM6WycqLy57anMsY3NzLGh0bWwscG5nLGpwZyxqcGVnLHN2Z30nXSxcbiAgICB9XG4gIH1cbiAgKV0sXG59KVxuXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXlQLFNBQVMsb0JBQW9CO0FBQ3RSLE9BQU8sV0FBVztBQUNsQixTQUFVLGVBQWU7QUFHekIsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUyxDQUFDLE1BQU0sR0FBRztBQUFBLElBQVE7QUFBQSxNQUN6QixjQUFjO0FBQUEsTUFDZCxZQUFZO0FBQUEsUUFDVixTQUFTO0FBQUEsTUFDWDtBQUFBLE1BQ0EsVUFBVTtBQUFBLFFBQ1IsTUFBTTtBQUFBLFFBQ04sWUFBWTtBQUFBLFFBQ1osYUFBYTtBQUFBLFFBQ2IsYUFBYTtBQUFBLFFBQ2IsU0FBUztBQUFBLFFBQ1QsV0FBVztBQUFBLFFBQ1gsT0FBTTtBQUFBLFVBQ0o7QUFBQSxZQUNBLEtBQUs7QUFBQSxZQUNMLE9BQU87QUFBQSxZQUNQLE1BQU07QUFBQSxVQUNSO0FBQUEsVUFDQTtBQUFBLFlBQ0UsS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFlBQ1AsTUFBTTtBQUFBLFVBQ1I7QUFBQSxRQUNBO0FBQUEsTUFFRjtBQUFBLE1BQ0EsU0FBUTtBQUFBLFFBQ04sY0FBYSxDQUFDLG1DQUFtQztBQUFBLE1BQ25EO0FBQUEsSUFDRjtBQUFBLEVBQ0EsQ0FBQztBQUNILENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
