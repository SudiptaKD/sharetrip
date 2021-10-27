import './styles/style.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar';
import Searchmodifier from './components/Searchmodifier';
import CenterLayout from './components/CenterLayout';

function App() {
  return (
    <div className="App" >
      <Navbar/>
      <Searchmodifier/>
      <CenterLayout/>
    </div>
  );
}

export default App;
