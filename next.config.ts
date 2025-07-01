/** @type {import('next').NextConfig} */
const nextConfig = {
  // ✅ 1. Habilita a exportação para um site 100% estático
  output: 'export',

  // ✅ 2. Corrige os caminhos para o GitHub Pages
  //    Dizendo que seu site vive dentro do subdiretório /ph-estetica
  basePath: '/ph-estetica',
  assetPrefix: '/ph-estetica/',

  // ✅ 3. Mantém a configuração de imagens que você já tinha
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
