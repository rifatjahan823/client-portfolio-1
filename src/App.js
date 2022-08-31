import './App.css';
import Home from './Components/Pages/Home/Home';
import Cursor from './Components/Pages/Shared/Cursor/Cursor';
import Footer from './Components/Pages/Shared/Footer/Footer';
import Header from './Components/Pages/Shared/Header/Header';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div >
      <Cursor></Cursor>
      <Header></Header>
      <Routes>
      <Route path="/" element={<Home />} />
    </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
