import React from 'react';

const Contact = () => {
  return (
    <section
      id="contato"
      className="relative py-24 md:py-32 bg-[#0b0b0b] overflow-hidden text-white"
    >
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-white/5 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-white/5 blur-3xl rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">

        <div className="text-center max-w-5xl mx-auto mb-16 md:mb-20">

          <span className="uppercase tracking-[0.35em] text-gray-500 text-sm font-semibold">
            ENTRE EM CONTATO
          </span>

          <h2
            className="
              text-4xl
              md:text-6xl
              font-black
              uppercase
              leading-none
              mt-4
              mb-8
            "
          >
            Fale com a <span className="text-gray-400">RLS</span>
          </h2>

          <div className="w-28 h-[2px] bg-gray-600 mx-auto mb-8"></div>

          <p className="text-base md:text-xl text-gray-300 leading-relaxed">
            Nossa equipe está preparada para atender sua empresa com soluções
            técnicas especializadas, suporte profissional e atendimento de alta
            qualidade.
          </p>
        </div>

        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-8
          "
        >

          <div
            className="
              relative
              overflow-hidden
              rounded-[35px]
              border
              border-white/10
              bg-[#141414]
              p-6
              md:p-10
            "
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent"></div>

            <div className="relative">

              <h3 className="text-3xl font-black mb-10">
                Informações de <span className="text-gray-400">Contato</span>
              </h3>

              <div className="space-y-6 mb-12">

                <div className="border border-white/10 rounded-2xl p-5 bg-[#1a1a1a]">

                  <p className="text-sm uppercase tracking-widest text-gray-500 mb-2">
                    Email
                  </p>

                  <a
                    href="mailto:contato@rlsinspecoes.com.br"
                    className="
                      text-base
                      md:text-xl
                      font-semibold
                      text-gray-200
                      hover:text-white
                      transition
                      break-all
                    "
                  >
                    contato@rlsinspecoes.com.br
                  </a>
                </div>

                <div className="border border-white/10 rounded-2xl p-5 bg-[#1a1a1a]">

                  <p className="text-sm uppercase tracking-widest text-gray-500 mb-2">
                    Telefone / WhatsApp
                  </p>

                  <a
                    href="https://wa.me/5541999911928"
                    target="_blank"
                    rel="noreferrer"
                    className="
                      text-base
                      md:text-xl
                      font-semibold
                      text-gray-200
                      hover:text-white
                      transition
                    "
                  >
                    +55 (41) 99991-1928
                  </a>
                </div>
              </div>

              <div>

                <h4 className="text-2xl font-bold mb-8">
                  Nossa <span className="text-gray-400">Equipe</span>
                </h4>

                <div className="space-y-6">

                  <div
                    className="
                      flex
                      flex-col
                      sm:flex-row
                      items-start
                      sm:items-center
                      gap-5
                      border
                      border-white/10
                      bg-[#1a1a1a]
                      rounded-3xl
                      p-5
                    "
                  >
                    <img
                      src="/images/contato1.jpg"
                      alt="Rogério Lima"
                      className="
                        w-16
                        h-16
                        md:w-20
                        md:h-20
                        rounded-2xl
                        object-cover
                        border
                        border-white/10
                      "
                    />

                    <div className="min-w-0">

                      <h5 className="text-xl font-bold text-white">
                        Rogério Lima
                      </h5>

                      <p className="text-gray-400 mt-1">
                        Direção
                      </p>

                      <a
                        href="mailto:rogerio@rlsinspecoes.com.br"
                        className="
                          text-sm
                          md:text-base
                          text-gray-300
                          hover:text-white
                          transition
                          break-all
                        "
                      >
                        rogerio@rlsinspecoes.com.br
                      </a>
                    </div>
                  </div>

                  <div
                    className="
                      flex
                      flex-col
                      sm:flex-row
                      items-start
                      sm:items-center
                      gap-5
                      border
                      border-white/10
                      bg-[#1a1a1a]
                      rounded-3xl
                      p-5
                    "
                  >
                    <img
                      src="/images/contato.jpg"
                      alt="Joseph Nixon"
                      className="
                        w-16
                        h-16
                        md:w-20
                        md:h-20
                        rounded-2xl
                        object-cover
                        border
                        border-white/10
                      "
                    />

                    <div className="min-w-0">

                      <h5 className="text-xl font-bold text-white">
                        Joseph Nixon
                      </h5>

                      <p className="text-gray-400 mt-1">
                        Comercial
                      </p>

                      <a
                        href="mailto:joseph@rlsinspecoes.com.br"
                        className="
                          text-sm
                          md:text-base
                          text-gray-300
                          hover:text-white
                          transition
                          break-all
                        "
                      >
                        joseph@rlsinspecoes.com.br
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

          <div
            className="
              relative
              overflow-hidden
              rounded-[35px]
              border
              border-white/10
              bg-[#111111]
              p-6
              md:p-10
              flex
              flex-col
              justify-center
            "
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] to-transparent"></div>

            <div className="relative">

              <span className="uppercase tracking-[0.3em] text-gray-500 text-sm font-semibold">
                OPORTUNIDADES
              </span>

              <h3
                className="
                  text-4xl
                  md:text-5xl
                  font-black
                  uppercase
                  leading-none
                  mt-4
                  mb-8
                "
              >
                Trabalhe <br />
                conosco
              </h3>

              <p className="text-base md:text-xl text-gray-300 leading-relaxed mb-10">
                Faça parte da nossa equipe de especialistas e contribua para
                projetos industriais com excelência, inovação e segurança.
              </p>

              <div
                className="
                  border
                  border-white/10
                  bg-[#1a1a1a]
                  rounded-3xl
                  p-6
                  md:p-8
                  mb-10
                "
              >
                <h4 className="text-2xl font-bold mb-6">
                  Envie seu currículo
                </h4>

                <div className="space-y-4 text-gray-300 text-sm md:text-base">

                  <p>
                    <span className="font-bold text-white">
                      ASSUNTO:
                    </span>{" "}
                    CV + NOME + PROFISSÃO
                  </p>

                  <p>
                    <span className="font-bold text-white">
                      TEXTO:
                    </span>{" "}
                    Breve apresentação profissional atual
                  </p>

                  <p className="italic text-gray-500">
                    Anexar currículo em PDF.
                  </p>
                </div>
              </div>

              <a
                href="mailto:rh@rlsinspecoes.com.br"
                className="
                  inline-flex
                  items-center
                  justify-center
                  w-full
                  rounded-2xl
                  bg-white
                  px-8
                  py-5
                  text-base
                  md:text-lg
                  font-bold
                  text-black
                  transition-all
                  duration-300
                  hover:bg-gray-300
                  hover:scale-[1.02]
                "
              >
                ENVIAR EMAIL PARA RH
              </a>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;