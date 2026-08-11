import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* Navegação fixa minimalista */}
      <nav className="navegacao">
        <div className="container" style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
          <Link href="/" className="logo-texto">
            Dra<span style={{ color: "#C2705E" }}>.</span> Camila Ferreira
          </Link>
          <ul className="menu-links">
            <li><Link href="#tratamentos" className="link-nav">Tratamentos</Link></li>
            <li><Link href="#clinica" className="link-nav">A Clínica</Link></li>
            <li><Link href="#depoimentos" className="link-nav">Depoimentos</Link></li>
            <li><Link href="#contato" className="link-nav">Contato</Link></li>
            <li>
              <a
                href="https://wa.me/5512996867163"
                target="_blank"
                rel="noopener noreferrer"
                className="botao-nav-cta"
              >
                Agendar Consulta
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero assimétrico — Thesis visual */}
      <section className="hero">
        <div className="container">
          <div className="hero-conteudo">
            <div className="hero-info">
              <p className="texto-capacidade animar delay-1">São José dos Campos · Monte Castelo</p>
              
              <h1 className="titulo-hero animar delay-2">
                Odontologia de<br />
                <em>alta costura.</em>
              </h1>
              
              <div className="divisoria-fina animar delay-2" />
              
              <p className="texto-hero-sub animar delay-3">
                Implantes digitais, harmonização facial e estética dental personalizada. 
                Atendimento humanizado com tecnologia europeia.
              </p>
              
              <div className="hero-acoes animar delay-3">
                <a
                  href="https://wa.me/5512996867163?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="botao-base botao-whatsapp"
                >
                  Agendar via WhatsApp
                </a>
                <Link href="#tratamentos" className="botao-link">
                  Explorar tratamentos <span>→</span>
                </Link>
              </div>
            </div>
            
            {/* Arte decorativa geométrica */}
            <div className="hero-art">
              <div className="hero-art-circle"></div>
              <div className="hero-art-shape"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Tratamentos — Lista elegante sem cards genéricos */}
      <section id="tratamentos" className="secao">
        <div className="container">
          <p className="texto-capacidade animar">Nossos tratamentos</p>
          <h2 className="titulo-secao animar">
            Excelência em cada detalhe
          </h2>
          
          <div className="grid-servicos-lista">
            {[
              { num: "01", titulo: "Implantes Dentários", desc: "Tecnologia digital guiada para implantes seguros e duradouros." },
              { num: "02", titulo: "Harmonização Facial", desc: "Botox, preenchimento labial e olheiras com técnicas minimamente invasivas." },
              { num: "03", titulo: "Lentes de Contato Dental", desc: "Porcelana ultrafina personalizada para um sorriso natural." },
              { num: "04", titulo: "Ortodontia Invisível", desc: "Alinhadores transparentes para alinhar seu sorriso discretamente." },
              { num: "05", titulo: "Clareamento Dental", desc: "Técnicas profissionais para um sorriso mais claro e radiante." },
              { num: "06", titulo: "Odontopediatria", desc: "Atendimento especializado e acolhedor para crianças." },
            ].map((item, index) => (
              <div key={index} className="servico-item animar">
                <span className="servico-numero">{item.num}</span>
                <div className="servico-info">
                  <h3>{item.titulo}</h3>
                  <p className="servico-descricao">{item.desc}</p>
                </div>
                <span className="servico-arrow">↓</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção Sobre invertida */}
      <section id="clinica" className="secao secao-invertida">
        <div className="container">
          <div className="sobre-grid">
            {/* Stats lado a lado */}
            <div>
              <p className="texto-capacidade" style={{ color: "#C2705E" }}>Experiência comprovada</p>
              <h2 className="titulo-secao">
                Mais de 12 anos<br />transformando sorrisos
              </h2>
              <div style={{ height: "1px", background: "rgba(244,239,230,0.15)", margin: "1.5rem 0" }} />
              <p style={{ opacity: 0.7, maxWidth: "45ch", lineHeight: "1.7" }}>
                Formada pela UNESP com especializações internacionais. 
                Membro da Sociedade Brasileira de Estética Dental.
              </p>
            </div>
            
            {/* Stats grid */}
            <div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2rem" }}>
                <div className="stat-item">
                  <div className="stat-valor">12+</div>
                  <div className="stat-label" style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>Anos de experiência</div>
                </div>
                <div className="stat-item">
                  <div className="stat-valor">2.5k</div>
                  <div className="stat-label" style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>Pacientes atendidos</div>
                </div>
                <div className="stat-item">
                  <div className="stat-valor">4.9★</div>
                  <div className="stat-label" style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>Nota média Google</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section id="depoimentos" className="secao">
        <div className="container">
          <p className="texto-capacidade animar">O que dizem nossos pacientes</p>
          <h2 className="titulo-secao animar">Confiança construída</h2>
          
          <div className="depoimento-wrapper">
            {[
              { texto: "Finalmente encontrei uma dentista que me faz sentir segura. O ambiente é acolhedor e o tratamento foi perfeito.", autor: "Maria Clara Silva" },
              { texto: "Profissional incrível. Explica tudo com calma e o resultado ficou além das minhas expectativas.", autor: "Roberto Almeida" },
              { texto: "Minha filha adora ir ao consultório! Atendimento fantástico com crianças também.", autor: "Ana Paula Rodrigues" },
            ].map((dep, i) => (
              <div key={i} className="depoimento-card animar delay-1">
                <div className="depoimento-stars">★★★★★</div>
                <p className="depoimento-texto">"{dep.texto}"</p>
                <p className="depoimento-autor">— {dep.autor}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="secao secao-invertida">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <p className="texto-capacidade animar" style={{ color: "#C2705E" }}>Vamos conversar?</p>
            <h2 className="titulo-secao animar">Agende sua avaliação gratuita</h2>
            <p style={{ opacity: 0.6, maxWidth: "45ch", margin: "0 auto" }}>
              Primeira consulta com avaliação completa sem compromisso.
            </p>
          </div>
          
          <div className="contato-grid">
            <div className="animar">
              <div className="info-contato-item">
                <div className="info-titulo">Endereço</div>
                <p style={{ fontSize: "1.125rem" }}>
                  Av. Juscelino Kubitschek, 3520<br />
                  Monte Castelo — São José dos Campos, SP
                </p>
              </div>
              <div className="info-contato-item">
                <div className="info-titulo">Contato</div>
                <p style={{ fontSize: "1.125rem" }}>
                  📞 (12) 99686-7163<br />
                  📧 contato@dra-camilaferreira.com.br
                </p>
              </div>
              <div className="info-contato-item">
                <div className="info-titulo">Horário</div>
                <p style={{ fontSize: "1.125rem" }}>
                  Seg a Sex: 8h às 18h<br />
                  Sábado: 8h às 12h
                </p>
              </div>
              
              <div style={{ marginTop: "2rem" }}>
                <a
                  href="https://wa.me/5512996867163?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="botao-base botao-whatsapp"
                >
                  Agendar pelo WhatsApp
                </a>
              </div>
            </div>
            
            <div className="animar delay-1">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.1563!2d-45.8805!3d-23.2345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce796b6a0a5c2d%3A0x123456789abcdef!2sAv.%20Juscelino%20Kubitschek%2C%20Monte%20Castelo%2C%20S%C3%A3o%20Jos%C3%A9%20dos%20Campos%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="mapa-container"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p className="footer-logo">Dra. Camila Ferreira</p>
          <p style={{ opacity: 0.6, marginBottom: "1rem", fontSize: "0.9375rem" }}>
            Odontologia Humanizada em São José dos Campos
          </p>
          <p className="copyright">© {new Date().getFullYear()} CRO-SP 45678 · Todos os direitos reservados</p>
        </div>
      </footer>

      {/* WhatsApp flutuante */}
      <a href="https://wa.me/5512996867163" target="_blank" rel="noopener noreferrer" className="whatsapp-flutuante" aria-label="WhatsApp">💬</a>
    </main>
  );
}
