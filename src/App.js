
import './App.css';

import { Route, Routes } from 'react-router-dom';
import Pnf from './component/Pnf';
import Home from './pages/Home';


function App() {
  return (
    <div >
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='*' element={<Pnf/>}/>
      </Routes>
    </div>
  );
}

export default App;
