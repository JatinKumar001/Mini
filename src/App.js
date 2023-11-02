import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home';
import Map from './pages/map/Map';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/map' element={<Map />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
