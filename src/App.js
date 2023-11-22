// This is the main app file that runs on the client side
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import EditQ from './pages/EditQ';
import EditQuiz from './pages/EditQuiz';

import CreateQuiz from './pages/CreateQuiz';

function App() {
  return (
    <Router>
        <>
          <Routes>
            <Route
              path='/'
              element={<Home />}
            />
            <Route
              path='/edit/:quizTitle' 
              element={<EditQ />}
            />
            <Route
              path='/create'
              element={<CreateQuiz />}
            />
            <Route
              path='*'
              element={<h1 className='display-2'>Wrong page!</h1>}
            />
          </Routes>

        </>
      </Router>

  );
}

export default App;
