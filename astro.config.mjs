// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";;

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  site: "https://ivarslv.github.io/bimarks/", // Укажи адрес своего GitHub Pages
  outDir: "dist", // Папка, в которую Astro билдит файлы
  base: "/bimarks/", // Обязательный параметр для корректных путей
});