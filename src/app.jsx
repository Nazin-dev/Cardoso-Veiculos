/* App entry — routing por estado */

function App() {
  const [route, setRoute] = React.useState(() => {
    const hash = window.location.hash.replace('#', '');
    return hash === 'contatos' ? 'contatos' : 'home';
  });

  React.useEffect(() => {
    window.location.hash = route;
  }, [route]);

  return (
    <div data-screen-label={route === 'home' ? '01 Home' : '02 Contatos'}>
      <Nav route={route} setRoute={setRoute} />
      {route === 'home' ? <HomePage /> : <ContatosPage />}
      <Footer setRoute={setRoute} />
      <WhatsAppFloat />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
