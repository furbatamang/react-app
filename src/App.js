import {Layout, MainPage} from './components/index';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Repositories from './pages/Repositories';
function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Routes>
            <Route exact path="/" element={<MainPage/>}/>
            <Route excat path="/repositories" element={<Repositories/>} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
