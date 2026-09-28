import type { NextConfig } from "next";

// Dominio personalizado: proemflex.com (Hostinger → GitHub Pages)
// Como ahora el sitio se sirve desde la raíz del dominio, ya NO se usa basePath.
// Si en algún momento se necesita volver a publicar en usuario.github.io/proemflex-web/,
// reactivar las variables comentadas más abajo.

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  // basePath: process.env.NODE_ENV === "production" ? "/proemflex-web" : "",
  // assetPrefix: process.env.NODE_ENV === "production" ? "/proemflex-web/" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
