import './App.css';
import { Navbar, About, Footer} from './components';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <Navbar />
        <About />
        <Footer />
      </div>
    </div>
  );
}

export default App;
