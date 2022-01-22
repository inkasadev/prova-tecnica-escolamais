import { Navbar } from './components/patterns/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import { Home } from './components/screens/Home';
import { Todos } from './components/screens/Todos/Todos';

const App = () => {

  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/todos/:userId" element={<Todos />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
