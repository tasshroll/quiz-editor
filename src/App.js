// This is the main app file that runs on the client side
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
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
              path='/edit'
              element={<EditQuiz />}
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
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
