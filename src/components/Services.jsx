import React from 'react';

const Services = () => {
  const servicosLista = [
    "Instalações de Caldeiras",
    "Inspeções de Fabricação",
    "Inspeções Dimensionais",
    "Inspeção de Pintura e Revestimentos",
    "Inspeções de END",
    "Sistemas Contra Incêndio",
    "Hidrantes e Sprinkler",
    "Tubulações Industriais",
    "Aquecedores de Fluidos Térmicos",
    "Evaporadores e Secadores",
    "Instalações Elétricas",
    "Instalações de Equipamentos",
    "Instalações de Utilidades",
    "Isolamento Térmico",
    "Estruturas Metálicas",
    "Tubulação de Aço Inox OD",
    "Inspeção de Solda",
    "Controle de Qualidade Fabril"
  ];

  return (
    <section
      id="servicos"
      className="relative py-32 bg-[#0b0b0b] overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-white/5 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-white/5 blur-3xl rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        <div className="text-center max-w-5xl mx-auto mb-20">

          <span className="uppercase tracking-[0.35em] text-gray-500 text-sm font-semibold">
            RLS INSPEÇÕES
          </span>

          <h2
            className="
              text-5xl
              md:text-6xl
              font-black
              text-white
              uppercase
              leading-none
              mt-4
              mb-8
            "
          >
            Nossos <span className="text-gray-400">Serviços</span>
          </h2>

          <div className="w-28 h-[2px] bg-gray-600 mx-auto mb-8"></div>

          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            A <span className="font-semibold text-white">RLS INSPEÇÕES LTDA</span> conta
            com uma equipe técnica altamente capacitada, preparada para entregar
            soluções industriais com máxima qualidade, segurança e eficiência.
            Atuamos com seriedade, ética e comprometimento, oferecendo serviços
            especializados para otimizar processos produtivos e infraestrutura.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">

          {servicosLista.map((servico, index) => (
            <div
              key={index}
              className="
                group
                relative
                bg-[#141414]
                border
                border-white/10
                rounded-3xl
                p-6
                overflow-hidden
                hover:border-gray-500/40
                transition-all
                duration-500
                hover:-translate-y-1
              "
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>

              <div className="relative flex items-center gap-4">

                <div
                  className="
                    min-w-[55px]
                    h-[55px]
                    rounded-2xl
                    bg-[#1d1d1d]
                    border
                    border-white/10
                    flex
                    items-center
                    justify-center
                    text-gray-400
                    font-black
                    text-lg
                  "
                >
                  {String(index + 1).padStart(2, '0')}
                </div>

                <h3 className="text-lg font-semibold text-gray-200 leading-snug">
                  {servico}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <a
            href="https://api.whatsapp.com/send/?phone=%2B5541999911928&text&type=phone_number&app_absent=0"
            target="_blank"
            rel="noreferrer"
            className="
              group
              relative
              inline-flex
              items-center
              justify-center
              overflow-hidden
              rounded-2xl
              border
              border-white/10
              bg-white
              px-10
              py-5
              font-bold
              text-black
              tracking-wide
              transition-all
              duration-300
              hover:scale-105
              hover:bg-gray-300
            "
          >
            FAZER ORÇAMENTO
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;