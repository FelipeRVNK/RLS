import React from 'react';

const Hero = () => {
  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        flex
        items-center
        overflow-hidden
        bg-[#0b0b0b]
        text-white
        border-b
        border-white/10
      "
    >
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-white/5 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-white/5 blur-3xl rounded-full"></div>

      <div
        className="
          relative
          max-w-7xl
          mx-auto
          px-6
          py-24
          flex
          flex-col
          lg:flex-row
          items-center
          gap-16
          w-full
        "
      >
        <div className="hidden lg:block lg:w-[32rem] shrink-0">
        <div className="relative group">

            <div
            className="
                absolute
                -inset-2
                bg-gradient-to-r
                from-gray-500/20
                to-white/10
                rounded-[40px]
                blur-xl
                opacity-60
                group-hover:opacity-100
                transition
                duration-500
            "
            ></div>

            <img
            src="/images/home.jpg"
            alt="RLS Inspeções"
            className="
                relative
                w-full
                h-[540px]
                object-cover
                rounded-[40px]
                border
                border-white/10
                shadow-2xl
                grayscale
                hover:grayscale-0
                transition-all
                duration-700
            "
            />
        </div>
        </div>

        <div className="flex-1">

          <span className="uppercase tracking-[0.35em] text-gray-400 text-sm font-semibold">
            Seja Bem-Vindo(a)
          </span>

          <h1
            className="
              text-5xl
              md:text-7xl
              font-black
              leading-[0.95]
              mt-4
              mb-8
              uppercase
            "
          >
            RLS <br />
            <span className="text-gray-400">
              Inspeções
            </span>
          </h1>

          <div className="w-24 h-[2px] bg-gray-500 mb-8"></div>

          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mb-12">
            Nossos empreendimentos e serviços abrangem uma ampla gama de
            setores, desde energia e engenharia até tecnologia e construção.
            Atuamos com excelência técnica, inovação e comprometimento,
            entregando soluções industriais seguras e eficientes para superar
            as expectativas dos nossos clientes.
          </p>

          <div className="flex flex-wrap gap-5">

            <a
              href="#servicos"
              className="
                inline-flex
                items-center
                justify-center
                rounded-2xl
                bg-white
                px-9
                py-5
                font-bold
                text-black
                transition-all
                duration-300
                hover:bg-gray-300
                hover:scale-105
              "
            >
              Conheça Nossos Serviços
            </a>

            <a
              href="#contato"
              className="
                inline-flex
                items-center
                justify-center
                rounded-2xl
                border
                border-white/10
                bg-[#141414]
                px-9
                py-5
                font-bold
                text-white
                transition-all
                duration-300
                hover:border-gray-500/40
                hover:bg-[#1a1a1a]
                hover:scale-105
              "
            >
              Fale Conosco
            </a>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;