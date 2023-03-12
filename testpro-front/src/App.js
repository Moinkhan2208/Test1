import './App.css';
//import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './layout/Navbar';
import Home from './layout/Pages/Home';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import AddUser from './Users/AddUser';

function App() {
  return (
    <div className="App">      
      <Router>
        <Navbar />
        <Routes>
          
         <Route exact path="/" element={<Home />} />
          <Route exact path="/adduser" element={<AddUser />} />
        </Routes>        
  </Router>
    </div>

    {/*ddd*/}
  );
}

export default App;
