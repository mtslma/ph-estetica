import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ✅ ESSENCIAL: Habilita a exportação estática.
  // Isso diz ao Next.js para gerar arquivos HTML/CSS/JS em vez de rodar um servidor.
  output: 'export',

    // ⚠️ IMPORTANTE para a hospedagem estática (como GitHub Pages):
  // O componente <Image> do Next.js normalmente precisa de um servidor para otimizar
  // imagens. Como não teremos um, esta opção desativa a otimização e faz
  // com que as imagens funcionem corretamente.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
