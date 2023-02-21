// import logo from './logo.svg';
// import './App.css';
import AllRoutes from './Components/AllRoutes';
import Footer from './UserPages/HomePage/Footer';
import Navbar from './UserPages/HomePage/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes/>
      <Footer/>
    </div>
  );
}

export default App;
