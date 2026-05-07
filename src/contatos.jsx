/* CONTATOS — inspirado em layout de equipe comercial */

function ContatosBanner() {
  return (
    <section style={{
      position: 'relative',
      background: 'var(--ink-0)',
      paddingTop: 140, paddingBottom: 100,
      overflow: 'hidden',
      borderBottom: '1px solid var(--line)'
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        background: `
          radial-gradient(ellipse at 20% 100%, rgba(27,58,75,0.5), transparent 50%),
          radial-gradient(ellipse at 90% 0%, rgba(45,104,131,0.25), transparent 60%)
        `
      }} />
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)`,
        backgroundSize: '60px 60px',
        maskImage: 'radial-gradient(ellipse at center, black, transparent 70%)',
        WebkitMaskImage: 'radial-gradient(ellipse at center, black, transparent 70%)',
        opacity: 0.6
      }} />
      <div className="container" style={{ position: 'relative' }}>
        <div className="mono fade-up" style={{
          color: 'var(--petrol-300)', textTransform: 'uppercase',
          letterSpacing: '0.4em', fontSize: 11,
          display: 'inline-flex', alignItems: 'center', gap: 12,
          marginBottom: 28
        }}>
          <span style={{ width: 32, height: 1, background: 'var(--petrol-300)' }} />
          Contatos
        </div>
        <h1 className="fade-up" style={{
          fontSize: 'clamp(40px, 7vw, 88px)',
          lineHeight: 0.98,
          fontWeight: 600,
          letterSpacing: '-0.03em',
          maxWidth: 980,
          animationDelay: '0.1s'
        }}>
          Fale com<br/>nossa <span style={{ color: 'var(--petrol-300)', fontStyle: 'italic', fontWeight: 400 }}>equipe</span>.
        </h1>
        <p className="fade-up" style={{
          marginTop: 28,
          fontSize: 'clamp(15px, 1.3vw, 18px)',
          color: 'var(--fg-dim)',
          maxWidth: 580,
          lineHeight: 1.55,
          animationDelay: '0.2s'
        }}>
          Atendimento direto, sem intermediários. Escolha o consultor da sua preferência
          e fale agora pelo WhatsApp — respondemos em minutos durante o horário comercial.
        </p>
      </div>
    </section>
  );
}

function ConsultoraDestaque() {
  const phone = '5589981190165';
  const link = `https://wa.me/${phone}?text=${encodeURIComponent('Olá, Sabrina! Vim pelo site da Cardoso Veículos.')}`;

  return (
    <section style={{
      background: 'var(--ink-1)',
      padding: '100px 0 120px',
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 5fr) minmax(0, 7fr)',
          gap: 56,
          alignItems: 'center'
        }} className="consultora-grid">
          {/* Photo */}
          <div style={{
            position: 'relative',
            borderRadius: 20,
            overflow: 'hidden',
            border: '1px solid var(--line)',
            aspectRatio: '4/5',
            background: 'var(--ink-2)'
          }}>
            <img src="assets/team/sabrina.jpg" alt="Sabrina — Cardoso Veículos"
                 style={{
                   width: '100%', height: '100%',
                   objectFit: 'cover',
                   objectPosition: 'center 25%'
                 }} />
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(180deg, transparent 50%, rgba(6,8,11,0.45) 100%)',
              pointerEvents: 'none'
            }} />
            <span style={{
              position: 'absolute', top: 18, left: 18,
              padding: '6px 12px',
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: 10, letterSpacing: '0.24em',
              textTransform: 'uppercase',
              background: 'rgba(7,9,12,0.72)',
              backdropFilter: 'blur(10px)',
              border: '1px solid var(--line-2)',
              borderRadius: 4,
              color: 'var(--petrol-300)'
            }}>Atendimento</span>
          </div>

          {/* Info */}
          <div>
            <div className="mono" style={{
              color: 'var(--petrol-300)', textTransform: 'uppercase',
              letterSpacing: '0.32em', fontSize: 11,
              display: 'inline-flex', alignItems: 'center', gap: 10,
              marginBottom: 20
            }}>
              <span style={{ width: 24, height: 1, background: 'var(--petrol-300)' }} />
              Quem te atende
            </div>

            <h2 style={{
              fontSize: 'clamp(36px, 5.2vw, 64px)',
              fontWeight: 600, lineHeight: 1, letterSpacing: '-0.025em',
              marginBottom: 12
            }}>
              Sabrina<span style={{ color: 'var(--petrol-300)' }}>.</span>
            </h2>
            <div className="mono" style={{
              fontSize: 12, color: 'var(--petrol-300)',
              textTransform: 'uppercase', letterSpacing: '0.24em',
              marginBottom: 24
            }}>
              Consultora de vendas
            </div>

            <p style={{
              fontSize: 17, color: 'var(--fg-dim)', lineHeight: 1.6,
              maxWidth: 540, marginBottom: 32
            }}>
              Entre em contato pelo WhatsApp. A Sabrina apresenta o estoque disponível,
              esclarece dúvidas sobre cada veículo e ajuda a agendar sua visita — sem pressa,
              sem compromisso.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginBottom: 32 }}>
              {['Resposta rápida', 'Atendimento direto', 'Sem letras miúdas'].map(t => (
                <span key={t} style={{
                  padding: '8px 14px',
                  border: '1px solid var(--line-2)',
                  borderRadius: 999,
                  fontSize: 12.5,
                  color: 'var(--fg-dim)',
                  display: 'inline-flex', alignItems: 'center', gap: 8
                }}>
                  <IconCheck size={12} stroke={2.4} style={{ color: 'var(--petrol-300)' }} /> {t}
                </span>
              ))}
            </div>

            <a href={link} target="_blank" rel="noopener noreferrer"
               style={{
                 display: 'inline-flex', alignItems: 'center', gap: 12,
                 padding: '18px 24px',
                 background: 'var(--whatsapp)', color: '#0a1410',
                 borderRadius: 12, fontWeight: 600, fontSize: 15,
                 transition: 'background 0.2s'
               }}
               onMouseEnter={(e) => e.currentTarget.style.background = 'var(--whatsapp-dark)'}
               onMouseLeave={(e) => e.currentTarget.style.background = 'var(--whatsapp)'}
            >
              <IconWhatsApp size={18} stroke={2} />
              Falar com a Sabrina
              <IconArrow size={16} stroke={2.2} />
            </a>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 880px) {
          .consultora-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}

function ContatosInfo() {
  return (
    <section style={{
      background: 'var(--ink-0)',
      padding: '100px 0',
      borderTop: '1px solid var(--line)'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.2fr)',
          gap: 56,
          alignItems: 'flex-start'
        }} className="info-grid">
          <div style={{ minWidth: 0 }}>
            <SectionEyebrow kicker="Outros canais">
              Prefere outro canal? Estamos disponíveis.
            </SectionEyebrow>

            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: 16,
              maxWidth: '100%'
            }}>
              <ContactBox
                icon={<IconWhatsApp size={20} />}
                label="WhatsApp"
                value={WHATSAPP_DISPLAY}
                href={WHATSAPP_LINK}
              />
              <ContactBox
                icon={<IconMail size={20} />}
                label="E-mail"
                value="contato@cardosoveiculossrn.com.br"
                href="mailto:contato@cardosoveiculossrn.com.br"
              />
              <ContactBox
                icon={<IconInstagram size={20} />}
                label="Instagram"
                value="@_cardoso_veiculos"
                href={INSTAGRAM_LINK}
              />
              <ContactBox
                icon={<IconPin size={20} />}
                label="Endereço"
                value={`${ADDRESS_LINE_1}, ${ADDRESS_LINE_2}`}
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS_LINE_1 + ', ' + ADDRESS_LINE_2)}`}
              />
            </div>
          </div>

          <div className="hours-card" style={{
            background: 'var(--ink-2)',
            border: '1px solid var(--line)',
            borderRadius: 20,
            padding: 40,
            position: 'relative',
            overflow: 'hidden',
            minWidth: 0
          }}>
            <div style={{
              position: 'absolute', top: -40, right: -40,
              width: 220, height: 220,
              background: 'radial-gradient(circle, rgba(45,104,131,0.25), transparent 70%)',
              pointerEvents: 'none'
            }} />
            <div style={{ position: 'relative' }}>
              <div className="mono" style={{
                color: 'var(--petrol-300)', textTransform: 'uppercase',
                letterSpacing: '0.3em', fontSize: 11, marginBottom: 20
              }}>Horários</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {[
                  { d: 'Segunda', h: '08h — 18h' },
                  { d: 'Terça', h: '08h — 18h' },
                  { d: 'Quarta', h: '08h — 18h' },
                  { d: 'Quinta', h: '08h — 18h' },
                  { d: 'Sexta', h: '08h — 18h' },
                  { d: 'Sábado', h: '08h — 13h' },
                  { d: 'Domingo', h: 'Fechado', closed: true },
                ].map((row, i) => (
                  <div key={i} style={{
                    display: 'flex', justifyContent: 'space-between',
                    paddingBottom: 14,
                    borderBottom: i < 6 ? '1px dashed var(--line)' : 'none',
                    color: row.closed ? 'var(--fg-mute)' : 'var(--fg)'
                  }}>
                    <span style={{ fontSize: 14, fontWeight: 500 }}>{row.d}</span>
                    <span className="mono" style={{ fontSize: 13, letterSpacing: '0.04em' }}>{row.h}</span>
                  </div>
                ))}
              </div>
              <div style={{
                marginTop: 28, paddingTop: 24,
                borderTop: '1px solid var(--line)',
                display: 'flex', alignItems: 'center', gap: 10,
                color: 'var(--fg-dim)', fontSize: 13
              }}>
                <span style={{
                  width: 8, height: 8, borderRadius: '50%',
                  background: 'var(--whatsapp)',
                  boxShadow: '0 0 12px var(--whatsapp)'
                }} />
                Estamos abertos agora — respondemos em minutos.
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 920px) {
          .info-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
        @media (max-width: 480px) {
          .hours-card { padding: 24px !important; }
        }
      `}</style>
    </section>
  );
}

function ContactBox({ icon, label, value, href }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" style={{
      display: 'flex', alignItems: 'center', gap: 16,
      padding: '20px 22px',
      background: 'var(--ink-2)',
      border: '1px solid var(--line)',
      borderRadius: 14,
      transition: 'border-color 0.2s, background 0.2s',
      minWidth: 0
    }}
    onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--petrol-600)'; e.currentTarget.style.background = 'var(--ink-3)'; }}
    onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--line)'; e.currentTarget.style.background = 'var(--ink-2)'; }}
    >
      <div style={{
        width: 44, height: 44,
        borderRadius: 12,
        background: 'rgba(27,58,75,0.25)',
        border: '1px solid var(--line-2)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: 'var(--petrol-300)', flexShrink: 0
      }}>{icon}</div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div className="mono" style={{ fontSize: 10, color: 'var(--fg-mute)', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: 4 }}>{label}</div>
        <div style={{ fontSize: 14, fontWeight: 500, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', wordBreak: 'break-all' }}>{value}</div>
      </div>
      <IconArrow size={16} stroke={2} style={{ color: 'var(--fg-mute)', flexShrink: 0 }} />
    </a>
  );
}

function ContatosPage() {
  return (
    <main>
      <ContatosBanner />
      <ConsultoraDestaque />
      <ContatosInfo />
    </main>
  );
}

Object.assign(window, { ContatosPage });
