import './home.css';


export default function Home() {
  return (
    <>
      {/* Mantendo exatamente seu HTML */}
      <section className="anuncio">
        <img src="/anuncio4.png" alt="Anúncio" />
      </section>

      <section className="tudo">
        <section className="texto">
          <img src="/logozin.jpeg" width="50px" alt="Logo" />
          <h1>Quem somos e o que fazemos?</h1>
          <p>O WomanTech é um projeto de extensão da Faculdade de Computação e Informática (FCI),<br /> em parceria com o programa Meninas Digitais da Sociedade Brasileira de Computação. 
           Por <br /> meio de oficinas, painéis, criação de conteúdos, recursos educacionais e ferramentas digitais, <br /> o WomanTech busca construir um ambiente acolhedor, inclusivo e inspirador, incentivando <br /> cada vez mais mulheres a se inserirem e permanecerem na área de TI.</p>
        </section>

        <section className="circulo">
          <h1 id="c2">Objetivo</h1>
          <p id="c1">Promover a participação feminina na tecnologia, fortalecendo a autonomia, a inclusão digital e ampliando oportunidades para mulheres em diferentes fases da vida — desde alunas do ensino médio até profissionais em transição de carreira.</p>
        </section>
      </section>

      <section className="organizadoras">
        <img src="/logozin.jpeg" width="50px" alt="Logo" />
        <h1>Organizadoras e colaboradoras</h1>

        <section className="pessoas">
          <section className="pessoa">
            <section className="foto"><img src="/p1.jpeg" width="105px" alt="Andreia" /></section>
            <p>Profª. Drª. Andreia Cristina do Santos Gusmão</p>
          </section>

          <section className="pessoa">
            <section className="foto"><img src="/p2.jpeg" width="105px" alt="Carolina" /></section>
            <p>Profª. Drª. Carolina Toledo Ferraz</p>
          </section>

          <section className="pessoa">
            <section className="foto"><img src="/p3.jpeg" width="105px" alt="Cristiane" /></section>
            <p>Profª. Drª. Cristiane Camilo Hernandez</p>
          </section>

          <section className="pessoa">
            <section className="foto"><img src="/p4.jpeg" width="105px" alt="Daniela" /></section>
            <p>Profª. Drª. Daniela Vieira Cunha</p>
          </section>

          <section className="pessoa">
            <section className="foto"><img src="/p5.jpeg" width="105px" alt="Marcilyanne" /></section>
            <p>Profª. Drª. Marcilyanne Moreira Gois</p>
          </section>

          <section className="pessoa">
            <section className="foto"><img src="/p6.jpeg" width="105px" alt="Patricia" /></section>
            <p>Profª. Mª. Patricia Bonezi Nunes da Mota</p>
          </section>
        </section>
      </section>
    </>
  );
}