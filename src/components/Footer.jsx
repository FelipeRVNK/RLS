import React from 'react';

const Footer = () => {
  return (
    <footer
      className="
        relative
        overflow-hidden
        bg-[#080808]
        border-t
        border-white/10
        text-white
      "
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-white/5 blur-3xl rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-16">

        <div
          className="
            flex
            flex-col
            lg:flex-row
            items-center
            justify-between
            gap-10
            pb-12
            border-b
            border-white/10
          "
        >
          <div className="text-center lg:text-left max-w-xl">

            <span className="uppercase tracking-[0.35em] text-gray-500 text-sm font-semibold">
              RLS INSPEÇÕES
            </span>

            <h2 className="text-4xl md:text-5xl font-black uppercase mt-4 mb-4 leading-none">
              Segurança, <br />
              qualidade e <span className="text-gray-400">excelência</span>
            </h2>

            <p className="text-gray-400 leading-relaxed text-lg">
              Soluções industriais especializadas com foco em segurança,
              confiabilidade e alto padrão técnico.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">

            <a
              href="mailto:contato@rlsinspecoes.com.br"
              className="
                px-6
                py-3
                rounded-2xl
                border
                border-white/10
                bg-[#141414]
                text-gray-300
                hover:text-white
                hover:border-gray-500/40
                transition-all
                duration-300
              "
            >
              Email
            </a>

            <a
              href="https://instagram.com/rlsinspecoes"
              target="_blank"
              rel="noreferrer"
              className="
                px-6
                py-3
                rounded-2xl
                border
                border-white/10
                bg-[#141414]
                text-gray-300
                hover:text-white
                hover:border-gray-500/40
                transition-all
                duration-300
              "
            >
              Instagram
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="
                px-6
                py-3
                rounded-2xl
                border
                border-white/10
                bg-[#141414]
                text-gray-300
                hover:text-white
                hover:border-gray-500/40
                transition-all
                duration-300
              "
            >
              LinkedIn
            </a>

            <a
              href="https://api.whatsapp.com/send/?phone=%2B5541999911928"
              target="_blank"
              rel="noreferrer"
              className="
                px-6
                py-3
                rounded-2xl
                border
                border-white/10
                bg-white
                text-black
                font-semibold
                hover:bg-gray-300
                transition-all
                duration-300
              "
            >
              WhatsApp
            </a>
          </div>
        </div>

        <div
          className="
            pt-8
            flex
            flex-col
            md:flex-row
            items-center
            justify-between
            gap-4
            text-gray-500
            text-sm
          "
        >
          <p>
            © {new Date().getFullYear()} RLS Inspeções — Todos os direitos
            reservados.
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;