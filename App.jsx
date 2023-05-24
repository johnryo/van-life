import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, About, Vans } from './pages';
import { Header } from './components';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/vans' element={<Vans />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
