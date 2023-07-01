import {Route, BrowserRouter, Routes, Link} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld';
import SecondPage from './components/SecondPage';
import RefComponent from './components/RefComponent';
import ControllerComponent from './components/ControllerComponent';
import CounterComponent from './components/CounterComponent';
import TodoList from './components/TodoList';

function App() {
  return (
    <BrowserRouter>
      <main className="w-screen h-screen bg-slate-400 flex flex-col items-center justify-center">
        <img src={logo} className='w-96' alt="logo"></img>
        <h1 className='text-4xl font-bold'>Desarrollo Web con React IECA</h1>
        <div className="flex gap-4">
          <Link to="/hola-mundo" className='font-bold '>
            Hola Mundo
          </Link>
          <Link to="/segunda-pagina" className='font-bold '>
            Segunda Pagina
          </Link>
          <Link to="/ref-component" className='font-bold '>
            UseRef
          </Link>
          <Link to="/controller-component" className='font-bold '>
            ComponenteControlador
          </Link>
          <Link to="/counter-component" className='font-bold '>
            Contador
          </Link>
          <Link to="/todo-list" className='font-bold '>
            Lista Todo
          </Link>
        </div>
        <Routes>
          <Route path='/hola-mundo' exact element={<HelloWorld />} ></Route>
          <Route path='/segunda-pagina' exact element={<SecondPage />} ></Route>
          <Route path='/ref-component' exact element={<RefComponent />} ></Route>
          <Route path='/controller-component' exact element={<ControllerComponent />} ></Route>
          <Route path='/counter-component' exact element={<CounterComponent />} ></Route>
          <Route path='/todo-list' exact element={<TodoList />} ></Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
