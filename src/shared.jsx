/* Shared: Logo, Nav, Footer, WhatsApp float, Section header */

const WHATSAPP_NUMBER = '5589981190165';
const WHATSAPP_DISPLAY = '+55 (89) 98119-0165';
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;
const INSTAGRAM_LINK = 'https://instagram.com/_cardoso_veiculos';
const ADDRESS_LINE_1 = 'Rua Dr. Humberto Paixão, 955';
const ADDRESS_LINE_2 = 'Galo Branco — São Raimundo Nonato / PI';
const ADDRESS_CEP = '64770-000';

/* Logo — emblema vetorial baseado no símbolo C-bracket da marca + wordmark.
   Recriei o "C" da marca como SVG para escalar limpo, sem JPG cinza. */
function CardosoLogo({ size = 42, mono = false }) {
  const blue = mono ? '#fff' : '#2b86e6';
  const silver = mono ? '#fff' : '#e8edf2';
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, lineHeight: 1 }}>
      <svg width={size} height={size * 0.78} viewBox="0 0 64 50" fill="none" aria-hidden="true">
        {/* C bracket — top blue plate */}
        <path d="M 6 8 L 38 8 L 32 17 L 18 17 L 18 24 L 12 24 Z" fill={blue} />
        {/* C bracket — bottom silver plate */}
        <path d="M 12 26 L 18 26 L 18 33 L 32 33 L 38 42 L 6 42 Z" fill={silver} />
      </svg>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        <div style={{
          fontFamily: 'Sora, sans-serif',
          fontWeight: 700,
          fontSize: size * 0.46,
          letterSpacing: '0.01em',
          color: mono ? '#fff' : 'var(--fg)',
          lineHeight: 1
        }}>CARDOSO</div>
        <div style={{
          fontFamily: 'Sora, sans-serif',
          fontWeight: 500,
          fontSize: size * 0.21,
          letterSpacing: '0.34em',
          color: blue,
          textTransform: 'uppercase',
          marginTop: 1
        }}>Veículos</div>
      </div>
    </div>
  );
}

/* Top Nav */
function Nav({ route, setRoute }) {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (r) => { setRoute(r); setOpen(false); window.scrollTo({ top: 0, behavior: 'instant' }); };

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: scrolled ? 'rgba(7,9,12,0.85)' : 'rgba(7,9,12,0.55)',
      backdropFilter: 'blur(14px)',
      WebkitBackdropFilter: 'blur(14px)',
      borderBottom: scrolled ? '1px solid var(--line)' : '1px solid transparent',
      transition: 'all 0.3s ease',
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 76,
      }}>
        <button onClick={() => go('home')} style={{ padding: 0 }}>
          <CardosoLogo size={42} />
        </button>

        <nav style={{ display: 'flex', alignItems: 'center', gap: 4 }} className="desktop-nav">
          {[
            { id: 'home', label: 'Home' },
            { id: 'contatos', label: 'Contatos' },
          ].map(item => (
            <button
              key={item.id}
              onClick={() => go(item.id)}
              style={{
                padding: '10px 18px',
                fontSize: 14,
                fontWeight: 500,
                color: route === item.id ? 'var(--fg)' : 'var(--fg-dim)',
                position: 'relative',
                letterSpacing: '0.01em',
              }}
            >
              {item.label}
              {route === item.id && (
                <span style={{
                  position: 'absolute',
                  bottom: 4, left: '50%', transform: 'translateX(-50%)',
                  width: 4, height: 4, borderRadius: 4,
                  background: 'var(--petrol-300)'
                }} />
              )}
            </button>
          ))}
          <a
            href={WHATSAPP_LINK}
            target="_blank" rel="noopener noreferrer"
            style={{
              marginLeft: 16,
              padding: '11px 20px',
              background: 'var(--whatsapp)',
              color: '#0a1410',
              fontWeight: 600,
              fontSize: 14,
              borderRadius: 999,
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              letterSpacing: '0.01em',
            }}
          >
            <IconWhatsApp size={16} stroke={2} /> WhatsApp
          </a>
        </nav>

        <button
          className="mobile-toggle"
          onClick={() => setOpen(o => !o)}
          style={{
            display: 'none',
            padding: 8, color: 'var(--fg)'
          }}
          aria-label="Menu"
        >
          {open ? <IconClose size={22} /> : <IconMenu size={22} />}
        </button>
      </div>

      {open && (
        <div className="mobile-menu" style={{
          borderTop: '1px solid var(--line)',
          background: 'rgba(13,17,23,0.98)',
          padding: '8px 20px 20px'
        }}>
          {[
            { id: 'home', label: 'Home' },
            { id: 'contatos', label: 'Contatos' },
          ].map(item => (
            <button
              key={item.id}
              onClick={() => go(item.id)}
              style={{
                width: '100%',
                textAlign: 'left',
                padding: '14px 4px',
                fontSize: 16,
                color: route === item.id ? 'var(--fg)' : 'var(--fg-dim)',
                borderBottom: '1px solid var(--line)',
                fontWeight: 500
              }}
            >{item.label}</button>
          ))}
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
             style={{
               display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
               marginTop: 16, padding: '14px',
               background: 'var(--whatsapp)', color: '#0a1410',
               fontWeight: 600, borderRadius: 999
             }}>
            <IconWhatsApp size={18} stroke={2} /> Falar no WhatsApp
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 880px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: inline-flex !important; }
        }
      `}</style>
    </header>
  );
}

/* Footer */
function Footer({ setRoute }) {
  return (
    <footer style={{
      background: 'var(--ink-1)',
      borderTop: '1px solid var(--line)',
      paddingTop: 80,
      paddingBottom: 32,
      marginTop: 0
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: 48,
          paddingBottom: 56,
          borderBottom: '1px solid var(--line)'
        }}>
          <div>
            <CardosoLogo size={48} />
            <p style={{ marginTop: 20, color: 'var(--fg-dim)', fontSize: 14, maxWidth: 280 }}>
              Revenda de veículos usados e seminovos em São Raimundo Nonato — PI.
              Confiança, transparência e atendimento personalizado.
            </p>
          </div>

          <div>
            <h4 style={{ fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--petrol-300)', fontWeight: 500, marginBottom: 18 }}>Navegação</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <button onClick={() => { setRoute('home'); window.scrollTo(0,0); }} style={{ textAlign: 'left', color: 'var(--fg-dim)', fontSize: 14 }}>Home</button>
              <button onClick={() => { setRoute('contatos'); window.scrollTo(0,0); }} style={{ textAlign: 'left', color: 'var(--fg-dim)', fontSize: 14 }}>Contatos</button>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--fg-dim)', fontSize: 14 }}>WhatsApp</a>
            </div>
          </div>

          <div>
            <h4 style={{ fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--petrol-300)', fontWeight: 500, marginBottom: 18 }}>Contato</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, color: 'var(--fg-dim)', fontSize: 14 }}>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <IconPhone size={14} /> {WHATSAPP_DISPLAY}
              </a>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                <IconPin size={14} style={{ marginTop: 4, flexShrink: 0 }} />
                <span>{ADDRESS_LINE_1}<br/>{ADDRESS_LINE_2}</span>
              </div>
            </div>
          </div>

          <div>
            <h4 style={{ fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--petrol-300)', fontWeight: 500, marginBottom: 18 }}>Redes</h4>
            <div style={{ display: 'flex', gap: 10 }}>
              <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                 style={{ width: 40, height: 40, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--line-2)', borderRadius: 999, color: 'var(--fg-dim)' }}>
                <IconInstagram size={16} />
              </a>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
                 style={{ width: 40, height: 40, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--line-2)', borderRadius: 999, color: 'var(--fg-dim)' }}>
                <IconWhatsApp size={16} />
              </a>
            </div>
            <div style={{ marginTop: 24, fontSize: 13, color: 'var(--fg-mute)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <IconClock size={13} /> Seg–Sex · 08h–18h
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 6 }}>
                <IconClock size={13} /> Sábado · 08h–13h
              </div>
            </div>
          </div>
        </div>

        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          gap: 12,
          paddingTop: 28,
          fontSize: 12,
          color: 'var(--fg-mute)',
          fontFamily: 'JetBrains Mono, monospace',
          letterSpacing: '0.04em'
        }}>
          <span>© 2026 CARDOSO VEÍCULOS LTDA · CNPJ 47.290.573/0001-60</span>
          <span>SÃO RAIMUNDO NONATO · PIAUÍ · BRASIL</span>
        </div>
      </div>
    </footer>
  );
}

/* WhatsApp Floating */
function WhatsAppFloat() {
  const [showLabel, setShowLabel] = React.useState(false);
  React.useEffect(() => {
    const t = setTimeout(() => setShowLabel(true), 1500);
    const t2 = setTimeout(() => setShowLabel(false), 6000);
    return () => { clearTimeout(t); clearTimeout(t2); };
  }, []);

  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank" rel="noopener noreferrer"
      style={{
        position: 'fixed',
        right: 24, bottom: 24,
        zIndex: 100,
        display: 'flex', alignItems: 'center', gap: 12,
      }}
    >
      {showLabel && (
        <div style={{
          background: 'var(--ink-1)',
          color: 'var(--fg)',
          padding: '10px 14px',
          borderRadius: 10,
          fontSize: 13,
          fontWeight: 500,
          border: '1px solid var(--line-2)',
          boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
          animation: 'fadeUp 0.5s ease both',
          whiteSpace: 'nowrap'
        }}>
          Atendimento rápido pelo WhatsApp
        </div>
      )}
      <div style={{
        width: 60, height: 60,
        borderRadius: '50%',
        background: 'var(--whatsapp)',
        color: '#0a1410',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        animation: 'wapulse 2.4s ease-out infinite',
      }}>
        <IconWhatsApp size={28} stroke={2} />
      </div>
    </a>
  );
}

/* Section Eyebrow + Title combo */
function SectionEyebrow({ kicker, children, align = 'left', light = false }) {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: align === 'center' ? 'center' : 'flex-start',
      gap: 14,
      textAlign: align === 'center' ? 'center' : 'left',
      marginBottom: 48,
    }}>
      <div className="mono" style={{
        color: light ? 'var(--petrol-700)' : 'var(--petrol-300)',
        textTransform: 'uppercase',
        letterSpacing: '0.32em',
        display: 'inline-flex',
        alignItems: 'center',
        gap: 10,
        fontSize: 11,
      }}>
        <span style={{ display: 'inline-block', width: 24, height: 1, background: light ? 'var(--petrol-700)' : 'var(--petrol-300)' }} />
        {kicker}
      </div>
      <h2 style={{
        fontSize: 'clamp(28px, 4vw, 48px)',
        fontWeight: 600,
        lineHeight: 1.1,
        color: light ? 'var(--ink-0)' : 'var(--fg)',
        maxWidth: 720,
      }}>{children}</h2>
    </div>
  );
}

/* Primary Button */
function Button({ as = 'button', variant = 'primary', children, icon, href, target, onClick, style = {} }) {
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 10,
    padding: '14px 24px',
    fontSize: 14,
    fontWeight: 600,
    letterSpacing: '0.02em',
    borderRadius: 999,
    border: '1px solid transparent',
    cursor: 'pointer',
    transition: 'transform 0.2s ease, background 0.2s ease, border-color 0.2s ease',
  };
  const variants = {
    primary: { background: 'var(--petrol-700)', color: '#fff', borderColor: 'var(--petrol-600)' },
    whatsapp: { background: 'var(--whatsapp)', color: '#0a1410' },
    ghost: { background: 'transparent', color: 'var(--fg)', borderColor: 'var(--line-2)' },
    light: { background: 'var(--paper)', color: 'var(--ink-0)' },
  };
  const Comp = as === 'a' || href ? 'a' : 'button';
  return (
    <Comp
      href={href} target={target} rel={target ? 'noopener noreferrer' : undefined}
      onClick={onClick}
      style={{ ...base, ...variants[variant], ...style }}
      onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-1px)'; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; }}
    >
      {children}
      {icon}
    </Comp>
  );
}

Object.assign(window, {
  WHATSAPP_NUMBER, WHATSAPP_DISPLAY, WHATSAPP_LINK, INSTAGRAM_LINK,
  ADDRESS_LINE_1, ADDRESS_LINE_2, ADDRESS_CEP,
  CardosoLogo, Nav, Footer, WhatsAppFloat, SectionEyebrow, Button
});
