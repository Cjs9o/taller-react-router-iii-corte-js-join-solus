import { AuthProvider, useAuth } from './context/AuthContext';
import { Link, Route, ProtectedRoute } from './components/Router';

const Login = () => {
  const { login } = useAuth();
  return (<div><h1>Página de Login</h1><button onClick={login}>Iniciar Sesión</button></div>);
};

const Home = () => {
  const { logout } = useAuth();
  return (<div><h1>Bienvenido al Home (Protegido)</h1><button onClick={logout}>Cerrar Sesión</button></div>);
};

const About = () => <h1>Sobre Nosotros (Público)</h1>;

export default function App() {
  return (
    <AuthProvider>
      <nav>
        <Link href="/login">Login</Link> | <Link href="/home">Home</Link> | <Link href="/about">About</Link>
      </nav>
      <hr />
      <Route path="/login"><Login /></Route>
      <Route path="/about"><About /></Route>
      <ProtectedRoute path="/home"><Home /></ProtectedRoute>
    </AuthProvider>
  );
}