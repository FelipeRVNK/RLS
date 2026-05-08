import React from 'react';

const About = () => {
  return (
    <div
      id="historia"
      className="flex flex-col bg-[#0b0b0b] text-white overflow-hidden"
    >
      <section className="relative min-h-screen flex items-center border-b border-white/10">
        
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-white/5 blur-3xl rounded-full"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-24 flex flex-col-reverse lg:flex-row items-center gap-16 w-full">

          <div className="lg:w-[28rem] shrink-0">
            <div className="relative group">
              
              <div className="absolute -inset-2 bg-gradient-to-r from-gray-500/30 to-white/10 rounded-[40px] blur-xl opacity-60 group-hover:opacity-100 transition duration-500"></div>

              <img
                src="/images/sobre1.jpg"
                alt="História"
                className="
                    relative
                    w-full
                    h-[320px]
                    sm:h-[420px]
                    lg:h-[520px]
                    object-cover
                    rounded-[30px]
                    lg:rounded-[40px]
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
              RLS INSPEÇÕES
            </span>

            <h2
              className="
                text-5xl
                md:text-6xl
                font-black
                leading-none
                mt-4
                mb-8
                uppercase
              "
            >
              Mais de uma <br />
              década de <span className="text-gray-400">excelência</span>
            </h2>

            <div className="w-24 h-[2px] bg-gray-500 mb-8"></div>

            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl">
              Há 10 anos, a RLS Inspeções, liderada por Rogério Lima Dos Santos,
              com uma vasta experiência de 35 anos, trouxe inovação para a
              indústria brasileira.
              <br />
              <br />
              Nossa principal preocupação é garantir segurança, qualidade e
              confiança em cada projeto executado. Mais do que resultados
              comerciais, buscamos gerar impacto positivo através do
              desenvolvimento profissional, da responsabilidade e da excelência
              operacional.
            </p>
          </div>
        </div>
      </section>

      <section className="relative min-h-screen flex items-center bg-[#111111]">
        
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-white/5 blur-3xl rounded-full"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-24 flex flex-col lg:flex-row-reverse items-center gap-16 w-full">

          <div className="lg:w-[28rem] shrink-0">
            <div className="relative group">

              <div className="absolute -inset-2 bg-gradient-to-r from-gray-500/20 to-white/10 rounded-[40px] blur-xl opacity-60 group-hover:opacity-100 transition duration-500"></div>

              <img
                src="/images/sobre2.jpg"
                alt="Satisfação Garantida"
                className="
                    relative
                    w-full
                    h-[320px]
                    sm:h-[420px]
                    lg:h-[520px]
                    object-cover
                    rounded-[30px]
                    lg:rounded-[40px]
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
              COMPROMISSO & QUALIDADE
            </span>

            <h2
              className="
                text-5xl
                md:text-6xl
                font-black
                leading-none
                mt-4
                mb-8
                uppercase
              "
            >
              Satisfação <br />
              <span className="text-gray-400">garantida</span>
            </h2>

            <div className="w-24 h-[2px] bg-gray-500 mb-8"></div>

            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl">
              Trabalhamos para superar expectativas através de soluções seguras,
              eficientes e inovadoras.
              <br />
              <br />
              Investimos continuamente no fortalecimento da nossa equipe,
              valorizando parcerias e entregando serviços com alto padrão de
              excelência. Nossa trajetória é marcada pela confiança dos clientes
              e por um ambiente de trabalho seguro e profissional.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;