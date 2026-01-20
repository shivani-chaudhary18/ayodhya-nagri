import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HomePage from './pages/homePage';
import About from './pages/about';
import Services from './pages/services';
import Contact from './pages/contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
