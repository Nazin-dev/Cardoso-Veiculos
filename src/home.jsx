/* HOME — Landing page focada em veículos */

const INVENTORY = [
  {
    id: 'toro-freedom',
    brand: 'FIAT',
    model: 'Toro Freedom',
    cover: 'assets/cars/toro-red-front-3q.jpg',
    gallery: [
      'assets/cars/toro-red-front-3q.jpg',
      'assets/cars/toro-red-front.jpg',
      'assets/cars/toro-red-rear.jpg',
    ],
    tag: 'Picape · 4 portas',
    highlight: 'Destaque',
    pitch: 'Robusta, versátil e pronta para qualquer desafio. Agende uma visita e conheça de perto.',
  },
  {
    id: 'creta-platinum',
    brand: 'HYUNDAI',
    model: 'Creta',
    cover: 'assets/cars/creta-grey-3q.jpg',
    gallery: [
      'assets/cars/creta-grey-3q.jpg',
      'assets/cars/creta-grey-side.jpg',
      'assets/cars/creta-grey-front.jpg',
      'assets/cars/creta-grey-front-2.jpg',
    ],
    tag: 'SUV · Linha nova',
    highlight: 'Novo no pátio',
    pitch: 'SUV moderno, espaçoso e cheio de tecnologia. O test-drive convence — agende o seu.',
  },
  {
    id: 'creta-silver',
    brand: 'HYUNDAI',
    model: 'Creta',
    cover: 'assets/cars/creta-silver-3q.jpg',
    gallery: ['assets/cars/creta-silver-3q.jpg'],
    tag: 'SUV · Compacto',
    pitch: 'Conforto e economia em um único pacote. Agende seu test-drive.',
  },
  {
    id: 'saveiro-cross',
    brand: 'VOLKSWAGEN',
    model: 'Saveiro Cross',
    cover: 'assets/cars/saveiro-cross-3q.jpg',
    gallery: [
      'assets/cars/saveiro-cross-3q.jpg',
      'assets/cars/saveiro-cross-front.jpg',
      'assets/cars/saveiro-cross-side.jpg',
      'assets/cars/saveiro-cross-front-2.jpg',
      'assets/cars/saveiro-cross-3q-2.jpg',
    ],
    tag: 'Picape · Cabine dupla',
    pitch: 'A picape que trabalha com você no dia a dia. Venha conhecer de perto — ela impressiona.',
  },
];

function Hero() {
  return (
    <section style={{
      position: 'relative',
      minHeight: 'min(820px, 92vh)',
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden',
      background: 'var(--ink-0)',
      isolation: 'isolate',
      paddingTop: 60, paddingBottom: 60
    }}>
      {/* Background: foto real do showroom (Toro vermelha) com overlay */}
      <div style={{ position: 'absolute', inset: 0, zIndex: -2 }}>
        <img src="assets/cars/toro-red-front-3q.jpg" alt=""
             style={{
               position: 'absolute', inset: 0,
               width: '100%', height: '100%',
               objectFit: 'cover',
               objectPosition: 'center 40%',
               filter: 'saturate(1.05) contrast(1.05)'
             }} />
        <div style={{
          position: 'absolute', inset: 0,
          background: `
            linear-gradient(90deg, rgba(6,8,11,0.96) 0%, rgba(6,8,11,0.78) 45%, rgba(6,8,11,0.35) 75%, rgba(6,8,11,0.55) 100%),
            linear-gradient(180deg, rgba(6,8,11,0.5) 0%, transparent 30%, rgba(6,8,11,0.7) 100%)
          `
        }} />
        {/* azul accent */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse at 90% 50%, rgba(43,134,230,0.18), transparent 55%)'
        }} />
      </div>

      <div className="container" style={{ position: 'relative', width: '100%', zIndex: 2 }}>
        <div style={{ maxWidth: 780 }}>
          <div className="fade-up mono" style={{
            color: 'var(--petrol-300)',
            letterSpacing: '0.4em',
            textTransform: 'uppercase',
            fontSize: 11,
            display: 'inline-flex', alignItems: 'center', gap: 12,
            marginBottom: 24,
          }}>
            <span style={{ width: 32, height: 1, background: 'var(--petrol-500)' }} />
            São Raimundo Nonato · Piauí
          </div>

          <h1 className="fade-up" style={{
            fontSize: 'clamp(40px, 7vw, 92px)',
            lineHeight: 0.96,
            fontWeight: 700,
            letterSpacing: '-0.035em',
            color: 'var(--fg)',
            animationDelay: '0.1s'
          }}>
            Seu próximo<br/>
            veículo<br/>
            <span style={{ color: 'var(--petrol-500)' }}>está aqui.</span>
          </h1>

          <p className="fade-up" style={{
            marginTop: 28,
            fontSize: 'clamp(16px, 1.4vw, 19px)',
            lineHeight: 1.55,
            color: 'var(--fg-dim)',
            maxWidth: 520,
            animationDelay: '0.2s'
          }}>
            Usados e seminovos selecionados, revisados e prontos para a estrada — com
            atendimento direto, sem letras miúdas. Confira o estoque agora.
          </p>

          <div className="fade-up" style={{
            marginTop: 40,
            display: 'flex', flexWrap: 'wrap', gap: 12,
            animationDelay: '0.3s'
          }}>
            <Button href="#estoque" variant="primary"
                    icon={<IconArrow size={16} stroke={2.2} />}
                    style={{ background: 'var(--petrol-500)', borderColor: 'var(--petrol-400)' }}>
              <IconCar size={16} stroke={2} /> Ver estoque
            </Button>
            <Button href={WHATSAPP_LINK} target="_blank" variant="whatsapp"
                    icon={<IconArrow size={16} stroke={2.2} />}>
              <IconWhatsApp size={16} stroke={2} /> Falar agora
            </Button>
          </div>

          {/* Trust strip */}
          <div className="fade-up" style={{
            marginTop: 64,
            display: 'flex', flexWrap: 'wrap', gap: 36,
            paddingTop: 28,
            borderTop: '1px solid var(--line)',
            animationDelay: '0.4s',
            maxWidth: 720
          }}>
            {[
              { k: 'Centenas', v: 'de clientes atendidos' },
              { k: '100%', v: 'veículos revisados' },
              { k: 'Aceita', v: 'seu usado na troca' },
              { k: 'Até 60×', v: 'financiamento facilitado' },
            ].map((s, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                <span style={{
                  fontFamily: 'Sora, sans-serif',
                  fontSize: 22, fontWeight: 600,
                  color: 'var(--fg)', lineHeight: 1
                }}>{s.k}</span>
                <span className="mono" style={{
                  fontSize: 11, color: 'var(--fg-mute)',
                  textTransform: 'uppercase', letterSpacing: '0.16em'
                }}>{s.v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Estoque() {
  return (
    <section id="estoque" style={{
      background: 'var(--ink-0)',
      padding: '120px 0',
      borderTop: '1px solid var(--line)'
    }}>
      <div className="container">
        <div style={{
          display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: 24, marginBottom: 56
        }}>
          <div style={{ maxWidth: 680 }}>
            <div className="mono" style={{
              color: 'var(--petrol-500)', textTransform: 'uppercase',
              letterSpacing: '0.32em', fontSize: 11,
              display: 'inline-flex', alignItems: 'center', gap: 10,
              marginBottom: 18
            }}>
              <span style={{ width: 24, height: 1, background: 'var(--petrol-500)' }} />
              No pátio agora
            </div>
            <h2 style={{ fontSize: 'clamp(32px, 4.4vw, 56px)', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.02em' }}>
              Alguns veículos do nosso pátio.
            </h2>
            <p style={{ marginTop: 18, color: 'var(--fg-dim)', fontSize: 16, lineHeight: 1.6 }}>
              Quer saber mais sobre algum veículo ou ver o que mais temos disponível?
              Fale com nossa equipe pelo WhatsApp ou agende uma visita à loja.
            </p>
          </div>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
             style={{
               display: 'inline-flex', alignItems: 'center', gap: 10,
               color: 'var(--fg-dim)', fontSize: 13,
               padding: '12px 18px', border: '1px solid var(--line-2)',
               borderRadius: 999, fontFamily: 'JetBrains Mono, monospace',
               textTransform: 'uppercase', letterSpacing: '0.16em'
             }}>
            Ver mais opções <IconArrow size={14} stroke={2.2} />
          </a>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 20
        }}>
          {INVENTORY.map((c, i) => <CarCard key={c.id} car={c} featured={i === 0} />)}
        </div>
      </div>
    </section>
  );
}

function CarCard({ car, featured }) {
  const [idx, setIdx] = React.useState(0);
  const [hover, setHover] = React.useState(false);

  React.useEffect(() => {
    if (!hover || car.gallery.length < 2) return;
    const t = setInterval(() => setIdx(i => (i + 1) % car.gallery.length), 1400);
    return () => clearInterval(t);
  }, [hover, car.gallery.length]);

  React.useEffect(() => { if (!hover) setIdx(0); }, [hover]);

  const link = `${WHATSAPP_LINK}?text=${encodeURIComponent(`Olá! Tenho interesse no ${car.brand} ${car.model}. Pode me contar mais sobre ele?`)}`;

  return (
    <article
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: 'relative',
        background: 'var(--ink-2)',
        border: '1px solid',
        borderColor: hover ? 'var(--petrol-600)' : 'var(--line)',
        borderRadius: 18,
        overflow: 'hidden',
        display: 'flex', flexDirection: 'column',
        transform: hover ? 'translateY(-4px)' : 'translateY(0)',
        transition: 'transform 0.3s, border-color 0.3s'
      }}
    >
      <div style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden', background: 'var(--ink-1)' }}>
        {car.gallery.map((src, i) => (
          <img key={i} src={src} alt={car.model}
               style={{
                 position: 'absolute', inset: 0,
                 width: '100%', height: '100%',
                 objectFit: 'cover',
                 opacity: idx === i ? 1 : 0,
                 transition: 'opacity 0.5s, transform 6s',
                 transform: hover ? 'scale(1.06)' : 'scale(1)'
               }} />
        ))}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(180deg, rgba(6,8,11,0.4) 0%, transparent 30%, rgba(6,8,11,0.55) 100%)'
        }} />
        {car.highlight && (
          <span style={{
            position: 'absolute', top: 14, left: 14,
            padding: '6px 12px',
            background: 'var(--petrol-500)',
            color: '#fff',
            fontSize: 10, fontWeight: 600,
            letterSpacing: '0.2em', textTransform: 'uppercase',
            borderRadius: 4,
            fontFamily: 'JetBrains Mono, monospace'
          }}>{car.highlight}</span>
        )}
        {car.gallery.length > 1 && (
          <div style={{
            position: 'absolute', bottom: 12, left: 12, right: 12,
            display: 'flex', gap: 4, justifyContent: 'center'
          }}>
            {car.gallery.map((_, i) => (
              <span key={i} style={{
                height: 3, flex: 1, maxWidth: 28,
                background: idx === i ? 'var(--petrol-300)' : 'rgba(255,255,255,0.25)',
                borderRadius: 2, transition: 'background 0.3s'
              }} />
            ))}
          </div>
        )}
      </div>

      <div style={{ padding: 24, display: 'flex', flexDirection: 'column', gap: 8, flex: 1 }}>
        <div className="mono" style={{
          fontSize: 10, color: 'var(--petrol-500)',
          textTransform: 'uppercase', letterSpacing: '0.24em'
        }}>{car.brand} · {car.tag}</div>
        <h3 style={{
          fontFamily: 'Sora, sans-serif',
          fontSize: 24, fontWeight: 600,
          letterSpacing: '-0.01em',
          lineHeight: 1.1
        }}>{car.model}</h3>
        <p style={{ fontSize: 14, color: 'var(--fg-dim)', lineHeight: 1.55, marginTop: 4 }}>
          {car.pitch}
        </p>

        <a href={link} target="_blank" rel="noopener noreferrer"
           style={{
             marginTop: 20,
             display: 'flex', alignItems: 'center', justifyContent: 'space-between',
             padding: '14px 18px',
             background: 'var(--whatsapp)', color: '#0a1410',
             borderRadius: 10, fontWeight: 600, fontSize: 13.5,
             transition: 'background 0.2s'
           }}
           onMouseEnter={(e) => e.currentTarget.style.background = 'var(--whatsapp-dark)'}
           onMouseLeave={(e) => e.currentTarget.style.background = 'var(--whatsapp)'}
        >
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
            <IconWhatsApp size={15} stroke={2} /> Tenho interesse
          </span>
          <IconArrow size={15} stroke={2.2} />
        </a>
      </div>
    </article>
  );
}

function Diferenciais() {
  const items = [
    { icon: IconShield, title: 'Procedência verificada', desc: 'Cada veículo passa por checagem documental e mecânica antes de ser anunciado.' },
    { icon: IconCalculator, title: 'Financiamento facilitado', desc: 'Trabalhamos com as principais financeiras para encontrar a parcela que cabe no seu bolso.' },
    { icon: IconHandshake, title: 'Aceitamos seu usado', desc: 'Avaliação rápida e justa do seu carro como parte do pagamento — sem burocracia.' },
    { icon: IconWrench, title: 'Revisão completa', desc: 'Mecânica, elétrica, suspensão e estética. Você só leva o carro com tudo em ordem.' },
  ];

  return (
    <section style={{
      background: 'var(--ink-1)',
      padding: '100px 0',
      borderTop: '1px solid var(--line)'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: 0,
          border: '1px solid var(--line)',
          borderRadius: 16,
          overflow: 'hidden',
          background: 'var(--ink-2)'
        }}>
          {items.map((it, i) => {
            const Ico = it.icon;
            return (
              <div key={i}
                style={{
                  padding: '36px 28px',
                  borderRight: '1px solid var(--line)',
                  display: 'flex', flexDirection: 'column', gap: 16,
                  transition: 'background 0.3s'
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--ink-3)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; }}
              >
                <div style={{
                  width: 48, height: 48,
                  border: '1px solid var(--petrol-700)',
                  borderRadius: 12,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--petrol-500)',
                  background: 'rgba(15,78,160,0.18)'
                }}>
                  <Ico size={22} stroke={1.6} />
                </div>
                <h3 style={{ fontSize: 17, fontWeight: 600, lineHeight: 1.25 }}>{it.title}</h3>
                <p style={{ color: 'var(--fg-dim)', fontSize: 14, lineHeight: 1.6 }}>{it.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Financiamento_DISABLED() {
  const [valor, setValor] = React.useState(80000);
  const [entrada, setEntrada] = React.useState(20000);
  const [parcelas, setParcelas] = React.useState(48);

  const taxa = 0.0179;
  const financiado = Math.max(valor - entrada, 0);
  const parcela = financiado > 0
    ? (financiado * taxa) / (1 - Math.pow(1 + taxa, -parcelas))
    : 0;
  const total = parcela * parcelas + entrada;

  const fmt = (n) => n.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 });

  return (
    <section id="financiamento" style={{
      background: 'var(--ink-0)',
      padding: '120px 0',
      borderTop: '1px solid var(--line)'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 5fr) minmax(0, 7fr)',
          gap: 64,
          alignItems: 'flex-start'
        }} className="fin-grid">
          <div style={{ position: 'sticky', top: 100 }}>
            <SectionEyebrow kicker="Simulador">
              Veja sua parcela <span style={{ color: 'var(--petrol-500)' }}>antes</span> de vir até a loja.
            </SectionEyebrow>
            <p style={{ color: 'var(--fg-dim)', fontSize: 16, lineHeight: 1.65, maxWidth: 460 }}>
              Simulação ilustrativa baseada em taxas médias de mercado para CDC.
              Aprovação e taxa final dependem da análise da financeira parceira.
            </p>
            <div style={{ marginTop: 32 }}>
              <Button href={WHATSAPP_LINK} target="_blank" variant="whatsapp"
                      icon={<IconArrow size={16} stroke={2.2} />}>
                <IconWhatsApp size={16} stroke={2} /> Quero proposta real
              </Button>
            </div>
          </div>

          <div style={{
            background: 'var(--ink-2)',
            border: '1px solid var(--line)',
            borderRadius: 20,
            padding: 40,
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute', top: 0, right: 0,
              width: 240, height: 240,
              background: 'radial-gradient(circle at 100% 0%, rgba(43,134,230,0.22), transparent 70%)',
              pointerEvents: 'none'
            }} />

            <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 32 }}>
              <SimRange label="Valor do veículo" value={valor} min={20000} max={200000} step={1000}
                        onChange={setValor} formatter={fmt} />
              <SimRange label="Entrada" value={entrada} min={0} max={Math.min(valor, 100000)} step={500}
                        onChange={setEntrada} formatter={fmt} />
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 14 }}>
                  <span className="mono" style={{ fontSize: 11, color: 'var(--fg-mute)', textTransform: 'uppercase', letterSpacing: '0.2em' }}>Prazo</span>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {[24, 36, 48, 60].map(p => (
                    <button key={p} onClick={() => setParcelas(p)}
                            style={{
                              padding: '10px 18px',
                              borderRadius: 999,
                              border: '1px solid',
                              borderColor: parcelas === p ? 'var(--petrol-500)' : 'var(--line-2)',
                              background: parcelas === p ? 'rgba(43,134,230,0.18)' : 'transparent',
                              color: parcelas === p ? 'var(--fg)' : 'var(--fg-dim)',
                              fontSize: 14, fontWeight: 500,
                              transition: 'all 0.2s'
                            }}>
                      {p}× meses
                    </button>
                  ))}
                </div>
              </div>

              <div style={{
                marginTop: 8,
                paddingTop: 32,
                borderTop: '1px solid var(--line)',
                display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32
              }}>
                <div>
                  <div className="mono" style={{ fontSize: 10, color: 'var(--fg-mute)', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: 8 }}>
                    Parcela estimada
                  </div>
                  <div style={{
                    fontFamily: 'Sora, sans-serif', fontWeight: 700,
                    fontSize: 'clamp(32px, 4vw, 48px)',
                    color: 'var(--petrol-500)',
                    letterSpacing: '-0.02em', lineHeight: 1
                  }}>
                    {fmt(parcela)}
                  </div>
                  <div style={{ fontSize: 13, color: 'var(--fg-mute)', marginTop: 6 }}>
                    em {parcelas}× · taxa ref. {(taxa * 100).toFixed(2)}% a.m.
                  </div>
                </div>
                <div>
                  <div className="mono" style={{ fontSize: 10, color: 'var(--fg-mute)', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: 8 }}>
                    Total do plano
                  </div>
                  <div style={{
                    fontFamily: 'Sora, sans-serif', fontWeight: 600,
                    fontSize: 'clamp(24px, 3vw, 32px)',
                    color: 'var(--fg)', lineHeight: 1
                  }}>{fmt(total)}</div>
                  <div style={{ fontSize: 13, color: 'var(--fg-mute)', marginTop: 6 }}>
                    com entrada de {fmt(entrada)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 920px) {
          .fin-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .fin-grid > div:first-child { position: static !important; }
        }
      `}</style>
    </section>
  );
}

function SimRange({ label, value, min, max, step, onChange, formatter }) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 14 }}>
        <span className="mono" style={{ fontSize: 11, color: 'var(--fg-mute)', textTransform: 'uppercase', letterSpacing: '0.2em' }}>{label}</span>
        <span style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600, fontSize: 22, color: 'var(--fg)' }}>{formatter(value)}</span>
      </div>
      <input
        type="range"
        min={min} max={max} step={step} value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        style={{
          width: '100%', height: 4, appearance: 'none',
          background: `linear-gradient(to right, var(--petrol-500) 0%, var(--petrol-500) ${pct}%, var(--ink-3) ${pct}%, var(--ink-3) 100%)`,
          borderRadius: 4, outline: 'none', cursor: 'pointer'
        }}
      />
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8, fontSize: 11, color: 'var(--fg-mute)', fontFamily: 'JetBrains Mono, monospace' }}>
        <span>{formatter(min)}</span><span>{formatter(max)}</span>
      </div>
      <style>{`
        input[type="range"]::-webkit-slider-thumb {
          appearance: none;
          width: 20px; height: 20px;
          border-radius: 50%;
          background: #fff;
          border: 3px solid var(--petrol-500);
          cursor: pointer;
          box-shadow: 0 2px 8px rgba(43,134,230,0.4);
        }
        input[type="range"]::-moz-range-thumb {
          width: 20px; height: 20px;
          border-radius: 50%;
          background: #fff;
          border: 3px solid var(--petrol-500);
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}

function ShowroomBand() {
  return (
    <section style={{
      position: 'relative',
      padding: '0',
      borderTop: '1px solid var(--line)',
      borderBottom: '1px solid var(--line)',
      background: 'var(--ink-0)',
      overflow: 'hidden'
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: 0,
        height: 280
      }} className="show-band">
        {[
          'assets/cars/creta-grey-front-2.jpg',
          'assets/cars/toro-red-rear.jpg',
          'assets/cars/creta-silver-3q.jpg',
          'assets/cars/creta-grey-side.jpg',
        ].map((src, i) => (
          <div key={i} style={{
            position: 'relative', overflow: 'hidden',
            borderRight: i < 3 ? '1px solid var(--line)' : 'none'
          }}>
            <img src={src} alt=""
                 style={{ width: '100%', height: '100%', objectFit: 'cover',
                          transition: 'transform 0.6s' }}
                 onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                 onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'} />
          </div>
        ))}
      </div>
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(180deg, rgba(6,8,11,0.75), rgba(6,8,11,0.4) 50%, rgba(6,8,11,0.85))',
        pointerEvents: 'none'
      }} />
      <div className="container" style={{
        position: 'absolute', inset: 0,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        textAlign: 'center', pointerEvents: 'none'
      }}>
        <div>
          <div className="mono" style={{
            color: 'var(--petrol-300)', textTransform: 'uppercase',
            letterSpacing: '0.4em', fontSize: 11, marginBottom: 14
          }}>Showroom · São Raimundo Nonato</div>
          <h3 style={{
            fontSize: 'clamp(28px, 4vw, 44px)',
            fontWeight: 700, lineHeight: 1.1,
            letterSpacing: '-0.02em',
            maxWidth: 800, margin: '0 auto'
          }}>
            Carros bem cuidados, expostos<br/>como deve ser.
          </h3>
        </div>
      </div>
      <style>{`
        @media (max-width: 720px) {
          .show-band { grid-template-columns: 1fr 1fr !important; height: 360px !important; }
        }
      `}</style>
    </section>
  );
}

function Sobre() {
  return (
    <section style={{
      background: 'var(--ink-0)',
      padding: '100px 0',
      borderTop: '1px solid var(--line)'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)',
          gap: 64,
          alignItems: 'center'
        }} className="sobre-grid">
          <div>
            <div className="mono" style={{
              color: 'var(--petrol-500)', textTransform: 'uppercase',
              letterSpacing: '0.32em', fontSize: 11,
              display: 'inline-flex', alignItems: 'center', gap: 10,
              marginBottom: 20
            }}>
              <span style={{ width: 24, height: 1, background: 'var(--petrol-500)' }} />
              Sobre a Cardoso
            </div>
            <h2 style={{
              fontSize: 'clamp(28px, 3.6vw, 44px)',
              lineHeight: 1.1, fontWeight: 700, letterSpacing: '-0.02em'
            }}>
              Uma loja construída na <span style={{ color: 'var(--petrol-500)' }}>confiança</span> de quem já comprou.
            </h2>
            <p style={{ marginTop: 24, color: 'var(--fg-dim)', fontSize: 16, lineHeight: 1.65, maxWidth: 520 }}>
              A Cardoso Veículos vende carros do jeito que todo comprador merece ser atendido:
              sem letras miúdas, sem pressa e com especialistas dedicados do outro lado da mesa.
              Aceitamos seu usado e trabalhamos com as principais financeiras do país.
            </p>

            <div style={{ marginTop: 32, display: 'flex', flexWrap: 'wrap', gap: 10 }}>
              {['Revisão completa', 'Documentação ok', 'Procedência verificada', 'Atendimento direto'].map(t => (
                <span key={t} style={{
                  padding: '8px 14px',
                  border: '1px solid var(--line-2)',
                  borderRadius: 999,
                  fontSize: 12.5,
                  color: 'var(--fg-dim)',
                  display: 'inline-flex', alignItems: 'center', gap: 8
                }}>
                  <IconCheck size={12} stroke={2.4} style={{ color: 'var(--petrol-500)' }} /> {t}
                </span>
              ))}
            </div>
          </div>

          <div style={{
            position: 'relative',
            borderRadius: 18,
            overflow: 'hidden',
            border: '1px solid var(--line)',
            aspectRatio: '4/3'
          }}>
            <img src="assets/cars/creta-grey-front-2.jpg" alt="Showroom Cardoso"
                 style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 880px) {
          .sobre-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

function Localizacao() {
  return (
    <section style={{
      background: 'var(--ink-1)',
      padding: '100px 0',
      borderTop: '1px solid var(--line)'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 5fr) minmax(0, 7fr)',
          gap: 48,
          alignItems: 'stretch'
        }} className="loc-grid">
          <div>
            <SectionEyebrow kicker="Localização">
              Venha conhecer o estoque pessoalmente.
            </SectionEyebrow>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <InfoRow icon={<IconPin size={18} />} label="Endereço">
                {ADDRESS_LINE_1}<br/>{ADDRESS_LINE_2}<br/>CEP {ADDRESS_CEP}
              </InfoRow>
              <InfoRow icon={<IconClock size={18} />} label="Horário">
                Seg a Sex · 08h–18h · Sáb · 08h–13h
              </InfoRow>
              <InfoRow icon={<IconPhone size={18} />} label="WhatsApp">
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--petrol-500)' }}>
                  {WHATSAPP_DISPLAY}
                </a>
              </InfoRow>
            </div>

            <div style={{ marginTop: 28, display: 'flex', flexWrap: 'wrap', gap: 10 }}>
              <Button as="a" href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS_LINE_1 + ', ' + ADDRESS_LINE_2)}`}
                      target="_blank" variant="primary"
                      style={{ background: 'var(--petrol-500)', borderColor: 'var(--petrol-400)' }}
                      icon={<IconArrow size={16} stroke={2.2} />}>
                Traçar rota
              </Button>
              <Button as="a" href={WHATSAPP_LINK} target="_blank" variant="ghost" icon={<IconArrow size={16} stroke={2.2} />}>
                <IconWhatsApp size={16} stroke={2} /> Agendar visita
              </Button>
            </div>
          </div>

          <div style={{
            position: 'relative',
            borderRadius: 20,
            overflow: 'hidden',
            border: '1px solid var(--line)',
            minHeight: 420,
            background: 'var(--ink-2)'
          }}>
            <iframe
              title="Mapa Cardoso Veículos"
              src="https://www.google.com/maps?q=Rua+Dr+Humberto+Paixao+955+Sao+Raimundo+Nonato+PI&output=embed"
              style={{
                width: '100%', height: '100%', border: 0,
                position: 'absolute', inset: 0,
                filter: 'grayscale(0.3) contrast(1.05) brightness(0.85)'
              }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div style={{
              position: 'absolute', left: 16, bottom: 16,
              background: 'rgba(6,8,11,0.92)',
              backdropFilter: 'blur(10px)',
              border: '1px solid var(--line-2)',
              borderRadius: 12,
              padding: '14px 18px',
              maxWidth: 280,
              pointerEvents: 'none'
            }}>
              <div className="mono" style={{ fontSize: 10, color: 'var(--petrol-500)', letterSpacing: '0.24em', textTransform: 'uppercase' }}>Você está aqui</div>
              <div style={{ fontWeight: 600, fontSize: 14, marginTop: 4 }}>Cardoso Veículos</div>
              <div style={{ fontSize: 12, color: 'var(--fg-dim)', marginTop: 2 }}>{ADDRESS_LINE_2}</div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 920px) {
          .loc-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

function InfoRow({ icon, label, children }) {
  return (
    <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
      <div style={{
        width: 44, height: 44, flexShrink: 0,
        borderRadius: 12,
        border: '1px solid var(--line-2)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: 'var(--petrol-500)',
        background: 'rgba(15,78,160,0.18)'
      }}>{icon}</div>
      <div>
        <div className="mono" style={{ fontSize: 10, color: 'var(--fg-mute)', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: 6 }}>{label}</div>
        <div style={{ fontSize: 15, color: 'var(--fg)', lineHeight: 1.55 }}>{children}</div>
      </div>
    </div>
  );
}

function CTA() {
  return (
    <section style={{
      background: 'var(--petrol-900)',
      padding: '100px 0',
      borderTop: '1px solid var(--line)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse at 80% 50%, rgba(43,134,230,0.4), transparent 60%)'
      }} />
      <div className="container" style={{ position: 'relative' }}>
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          gap: 40, flexWrap: 'wrap'
        }}>
          <div style={{ maxWidth: 620 }}>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.02em' }}>
              Pronto para encontrar o seu próximo carro?
            </h2>
            <p style={{ marginTop: 16, color: 'var(--fg-dim)', fontSize: 16, lineHeight: 1.6 }}>
              Fale com nossa equipe pelo WhatsApp. Apresentamos o estoque disponível,
              avaliamos seu usado e simulamos a melhor parcela — tudo em uma única conversa.
            </p>
          </div>
          <Button href={WHATSAPP_LINK} target="_blank" variant="whatsapp"
                  icon={<IconArrow size={18} stroke={2.2} />}
                  style={{ padding: '18px 28px', fontSize: 15 }}>
            <IconWhatsApp size={18} stroke={2} /> Falar com a Cardoso
          </Button>
        </div>
      </div>
    </section>
  );
}

function HomePage() {
  return (
    <main>
      <Hero />
      <Estoque />
      <Diferenciais />
      <ShowroomBand />
      <Sobre />
      <Localizacao />
      <CTA />
    </main>
  );
}

Object.assign(window, { HomePage });
