import logo from './logo.svg';
import './App.css';
import logo192 from "./assets/img/logo192.png"
import {
  createBrowserRouter,
  RouterProvider,
  Router,
} from 'react-router-dom';
import PaginaBusqueda from './paginas/PaginaBusqueda';
import Error404 from './components/Error404';
import Lista from './components/lista/Lista';


const router = createBrowserRouter([
  {
    path: '/',
    element: <PaginaBusqueda />,
    errorElement: <Error404/>, 
  },
  {
    path: '/buscador',
    element: <PaginaBusqueda />,
  },
  {
    path: '/lista',
    element: <Lista/>,
  },

])

function App() {
  return (
    <div className="App">
      
      <RouterProvider router = {router} />
    </div>
  );
}

export default App;
