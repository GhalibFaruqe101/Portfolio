



import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Card from './Card.jsx'
import Work from './work.jsx';
import Home from './Home.jsx';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home /> } /> 
      
      
        <Route path="/work" element={<Work />} />
        
      </Routes>
     
    </Router>
      
  );
}

export default App;
