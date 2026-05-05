const App = () => {
  return (
    <div>
      <nav>
        <Link href="/">Inicio</Link> | 
        <Link href="/proyectos">Proyectos</Link> | 
        <Link href="/contacto">Contacto</Link>
      </nav>

      <hr />

      <Route path="/">
        <h1>Bienvenido a mi Portafolio</h1>
        <p>Esta es la página principal.</p>
      </Route>

      <Route path="/proyectos">
        <h1>Mis Proyectos</h1>
        <p>Aquí puedes ver mis desarrollos recientes.</p>
      </Route>

      <Route path="/contacto">
        <h1>Contacto</h1>
        <p>Envíame un mensaje.</p>
      </Route>
    </div>
  );
};

export default App;