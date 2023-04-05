import './App.css';
import'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './components/NavbarComp';

const Home = () => {
  return(
    <>
      <NavbarComp/>
      <p>Welcome to this page</p>

    </>
  )
}
function App() {
  return (
    <div className="App">
      <NavbarComp/>
    </div>
  );
}

export default App;
