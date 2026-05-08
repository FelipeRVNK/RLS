import React from 'react';

const Portfolio = () => {
  const clientes = [
    "Construtora CPL",
    "DAX Energy",
    "Enel Brasil",
    "ENIND Engenharia",
    "Furukawa Electric LatAM",
    "Inova Energy",
    "Jock Woerner",
    "John Zink Hamworthy",
    "Laury Engenharia",
    "SAIPEM",
    "Tequaly",
    "Texpi Equipamentos"
  ];

  return (
    <section
      id="portfolio"
      className="relative py-32 bg-[#111111] overflow-hidden text-white"
    >
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white/5 blur-3xl rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        <div className="text-center max-w-5xl mx-auto mb-20">

          <span className="uppercase tracking-[0.35em] text-gray-500 text-sm font-semibold">
            EXPERIÊNCIA & CONFIANÇA
          </span>

          <h2
            className="
              text-5xl
              md:text-6xl
              font-black
              uppercase
              leading-none
              mt-4
              mb-8
            "
          >
            Nosso <span className="text-gray-400">Portfólio</span>
          </h2>

          <div className="w-28 h-[2px] bg-gray-600 mx-auto mb-8"></div>

          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            Construímos uma trajetória sólida através de projetos executados com
            excelência técnica, segurança e comprometimento. Nossa experiência é
            refletida nas parcerias de sucesso com empresas de diversos setores
            industriais e de infraestrutura.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

        {clientes.map((cliente, idx) => (
            <div
            key={idx}
            className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                bg-[#161616]
                p-6
                transition-all
                duration-500
                hover:-translate-y-1
                hover:border-gray-500/40
            "
            >
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>

            <div className="relative flex items-center justify-center text-center min-h-[90px]">

                <h3 className="text-lg font-semibold text-gray-200">
                {cliente}
                </h3>
            </div>
            </div>
        ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-gray-500 italic text-lg">
            Além das empresas mencionadas, nosso portfólio conta com diversos
            outros parceiros e projetos realizados com excelência.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;