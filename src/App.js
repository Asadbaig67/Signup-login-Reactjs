import './App.css';
import LoginFormfrom from './components/LoginForm';
import Signup from './components/Signup';
import {
   BrowserRouter as Router,
   Routes,
   Route,
} from "react-router-dom";
function App() {
   return (
      <>
         <Router>
            <Routes>
               <Route path="/" element={<Signup />} />
               <Route path="/login" element={<LoginFormfrom />} />
            </Routes>
         </Router>
      </>
   );
}

export default App;
