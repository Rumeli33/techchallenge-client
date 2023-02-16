import './App.css';
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Phones from './components/Phones';
import PhoneDetails from './components/PhoneDetails';

function App() {


  return (
    <div className="App">
    test
    <Routes>
          <Route path="/" element={<Phones />} />
          <Route path="/:phoneId" element={<PhoneDetails />} />
          </Routes>
    </div>
  );
}

export default App;
