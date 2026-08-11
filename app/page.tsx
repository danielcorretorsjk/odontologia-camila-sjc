import Link from "next/link";

export default function Home() {
  const servicos = [
    { icone: "🦷", titulo: "Implantes Dentários", desc: "Tecnologia digital guiada para implantes seguros e duradouros com recuperação acelerada." },
    { icone: "✨", titulo: "Harmonização Facial", desc: "Botox, preenchimento labial e tratamento de olheiras com técnicas minimamente invasivas." },
    { icone: "😁", titulo: "Ortodontia", desc: "Aparelhos tradicionais e alinhadores invisíveis para um sorriso alinhado e saudável." },
    { icone: "💎", titulo: "Lentes de Contato", desc: "Porcelana ultrafina personalizada para transformar seu sorriso com naturalidade." },
    { icone: "🪥", titulo: "Limpeza e Preventiva", desc: "Profilaxia profissional, raspagem supra/subgengival e orientação de higiene bucal." },
    { icone: "👨‍👩‍👧", titulo: "Odontopediatria", desc: "Atendimento especializado e acolhedor para crianças desde os primeiros anos de vida." },
  ];

  return (
    <main>
      {/* === NAV === */}
      <nav className="navegacao">
        <div className="container navegacao-conteudo">
          <Link href="/" className="logo-texto">
            Dra.<span className="logo-destaque">Camila</span> Ferreira
          </Link>
          <ul className="menu-links">
            <li><Link href="#servicos" className="link-nav">Serviços</Link></li>
            <li><Link href="#sobre" className="link-nav">Sobre</Link></li>
            <li><Link href="#depoimentos" className="link-nav">Depoimentos</Link></li>
            <li><Link href="#contato" className="link-nav">Contato</Link></li>
            <li><a href="https://wa.me/5512996867163" target="_blank" rel="noopener" className="botao-nav-cta">Agendar</a></li>
          </ul>
        </div>
      </nav>

      {/* === HERO === */}
      <section className="hero">
        <div className="container">
          <div className="hero-conteudo">
            <div className="hero-info">
              <p className="texto-capacidade animar-entrada animar-delay-1">
                São José dos Campos — Monte Castelo
              </p>
              <div className="badge-certificado animar-entrada animar-delay-1">
                <span className="estrela">★ ★ ★ ★ ★</span> 4.9 no Google · 200+ avaliações
              </div>
              <h1 className="titulo-hero animar-entrada animar-delay-2">
                Um sorriso que inspira <em>confiança</em>
              </h1>
              <p className="texto-hero-sub animar-entrada animar-delay-3">
                Odontologia humanizada com tecnologia de ponta. Implantes, estética e harmonização facial para você se sentir melhor todos os dias.
              </p>
              <div className="hero-acoes animar-entrada animar-delay-4">
                <a href="https://wa.me/5512996867163?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o!" target="_blank" rel="noopener" className="botao-base botao-whatsapp">
                  💬 Agendar via WhatsApp
                </a>
                <Link href="#servicos" className="botao-base botao-outline">
                  Ver tratamentos
                </Link>
              </div>
              <div className="hero-horario animar-entrada animar-delay-4" style={{ marginTop: '2rem' }}>
                <p style={{ fontSize: '0.875rem', color: '#5a6a7a' }}>
                  📍 Av. Juscelino Kubitschek, 3520 — Monte Castelo<br />
                  ⏰ Seg-Sex 8h-18h | Sáb 8h-12h
                </p>
              </div>
            </div>
            <div className="hero-imagem animar-entrada animar-delay-3">
              {/* Placeholder visual — substituir por foto real */}
              <div style={{ width: '100%', maxWidth: '460px', aspectRatio: '4/5', background: 'linear-gradient(135deg, #e8f4fc 0%, #c8dfe8 100%)', borderRadius: '24px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', boxShadow: '0 12px 40px rgba(26,60,94,0.12)', textAlign: 'center', padding: '2rem' }}>
                <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>👩‍⚕️</div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.25rem', fontWeight: '600', color: '#1a3c5e' }}>Dra. Camila Ferreira</div>
                <div style={{ fontSize: '0.875rem', color: '#5a6a7a', marginTop: '0.5rem' }}>CRO-SP 45678</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === SERVIÇOS === */}
      <section id="servicos" className="secao">
        <div className="container" style={{ textAlign: 'center' }}>
          <p className="texto-capacidade animar-entrada">Nossos tratamentos</p>
          <h2 className="titulo-secao animar-entrada">Saúde e estética sob medida</h2>
          <p className="subtitulo-secao animar-entrada" style={{ margin: '0 auto' }}>
            Cada paciente é único. Por isso, elaboramos planos personalizados com as melhores técnicas e materiais disponíveis.
          </p>
          <div className="grid-servicos">
            {servicos.map((s) => (
              <article key={s.titulo} className="card-servico animar-entrada">
                <div className="servico-icon">{s.icone}</div>
                <h3 className="servico-titulo">{s.titulo}</h3>
                <p className="servico-descricao">{s.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* === SOBRE === */}
      <section id="sobre" className="secao secao-fundo">
        <div className="container">
          <div className="sobre-grid">
            <div className="sobre-imagem animar-entrada">
              <div style={{ width: '100%', aspectRatio: '4/3', background: 'linear-gradient(135deg, #f8fafb 0%, #e8f4fc 100%)', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 12px 40px rgba(26,60,94,0.12)' }}>
                <div style={{ fontSize: '5rem', opacity: '0.3' }}>🏥</div>
              </div>
            </div>
            <div className="animar-entrada animar-delay-2">
              <p className="texto-capacidade">Conheça a Dra. Camila</p>
              <h2 className="titulo-secao">Cuidando do seu sorriso com dedicação há mais de 12 anos</h2>
              <p style={{ color: '#5a6a7a', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                Formada pela UNESP com especialização em Implantodontia pela PUC-SP e pós-graduação em Harmonização Facial pela Santo André. Sou membro ativo da Sociedade Brasileira de Odontologia Estética.
              </p>
              <p style={{ color: '#5a6a7a', lineHeight: '1.7', marginBottom: '2rem' }}>
                Minha missão é oferecer um atendimento humanizado, onde cada paciente seja tratado com respeito, atenção e carinho. Acreditamos que o primeiro passo para um sorriso bonito é a saúde bucal bem cuidada.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
                <div className="stat-item">
                  <div className="stat-valor">12+</div>
                  <div className="stat-label">Anos de experiência</div>
                </div>
                <div className="stat-item">
                  <div className="stat-valor">2500+</div>
                  <div className="stat-label">Pacientes atendidos</div>
                </div>
                <div className="stat-item">
                  <div className="stat-valor">4.9★</div>
                  <div className="stat-label">Nota média</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === DEPOIMENTOS === */}
      <section id="depoimentos" className="secao">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p className="texto-capacidade animar-entrada">O que dizem nossos pacientes</p>
            <h2 className="titulo-secao animar-entrada">Confiança construída a cada sorriso</h2>
          </div>
          <div className="grid-servicos">
            {[
              { nome: "Maria Clara S.", texto: "Finalmente encontrei uma dentista que me faz sentir segura. O ambiente é lindo e super acolhedor. Recomendo demais!", estrelas: "★★★★★" },
              { nome: "Roberto Almeida", texto: "Fiz implante com a Dra. Camila e foi a melhor decisão. Profissional incrível, explica tudo com calma. Recuperação rápida!", estrelas: "★★★★★" },
              { nome: "Ana Paula R.", texto: "Minha filha adora ir ao consultório! Atendimento fantástico com crianças também. Obrigada pelo cuidado.", estrelas: "★★★★★" },
            ].map((dep) => (
              <div key={dep.nome} className="depoimento-card animar-entrada">
                <div className="depoimento-stars">{dep.estrelas}</div>
                <p className="depoimento-texto">"{dep.texto}"</p>
                <p className="depoimento-autor">— {dep.nome}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === CONTATO === */}
      <section id="contato" className="secao secao-fundo">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p className="texto-capacidade animar-entrada">Vamos conversar?</p>
            <h2 className="titulo-secao animar-entrada">Agende sua avaliação gratuita</h2>
            <p className="subtitulo-secao animar-entrada" style={{ margin: '0 auto' }}>
              Primeira consulta com avaliação completa sem compromisso. Entre em contato ou visite nossa clínica.
            </p>
          </div>
          <div className="contato-grid">
            <div className="animar-entrada">
              <div className="info-contato-item">
                <div className="info-icon">📍</div>
                <div>
                  <div className="info-titulo">Endereço</div>
                  <div className="info-descricao">Av. Juscelino Kubitschek, 3520 — Monte Castelo<br />São José dos Campos — SP, 12242-000</div>
                </div>
              </div>
              <div className="info-contato-item">
                <div className="info-icon">📞</div>
                <div>
                  <div className="info-titulo">Telefone / WhatsApp</div>
                  <div className="info-descricao">(12) 99686-7163</div>
                </div>
              </div>
              <div className="info-contato-item">
                <div className="info-icon">📧</div>
                <div>
                  <div className="info-titulo">E-mail</div>
                  <div className="info-descricao">contato@dra-camilaferreira.com.br</div>
                </div>
              </div>
              <div className="info-contato-item">
                <div className="info-icon">⏰</div>
                <div>
                  <div className="info-titulo">Horário</div>
                  <div className="info-descricao">Seg a Sex: 8h às 18h | Sáb: 8h às 12h</div>
                </div>
              </div>
              <div style={{ marginTop: '2rem' }}>
                <a href="https://wa.me/5512996867163?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o!" target="_blank" rel="noopener" className="botao-base botao-whatsapp" style={{ width: '100%', justifyContent: 'center', padding: '1rem' }}>
                  💬 Agendar pelo WhatsApp agora
                </a>
              </div>
            </div>
            <div className="animar-entrada animar-delay-2">
              <div className="mapa-container">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.1563!2d-45.8805!3d-23.2345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce796b6a0a5c2d%3A0x123456789abcdef!2sAv.%20Juscelino%20Kubitschek%2C%20Monte%20Castelo%2C%20S%C3%A3o%20Jos%C3%A9%20dos%20Campos%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === FOOTER === */}
      <footer className="footer">
        <div className="container">
          <div className="footer-logo">Dra. Camila Ferreira</div>
          <p style={{ marginBottom: '1rem' }}>Odontologia Humanizada em São José dos Campos</p>
          <div className="footer-direitos">
            © {new Date().getFullYear()} Dra. Camila Ferreira — CRO-SP 45678 · Todos os direitos reservados
          </div>
        </div>
      </footer>

      {/* WhatsApp Flutuante */}
      <a href="https://wa.me/5512996867163" target="_blank" rel="noopener" className="whatsapp-flutuante" aria-label="WhatsApp">
        💬
      </a>
    </main>
  );
}
