
import './App.css';
import {  BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import MainPage from "./pages/MainPage"
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignForm';
import Profile from './pages/ProfilePage';

function App() {
  return (

    <Router>
       <div className="App">
   
       <Routes>
        <Route exact path='/' Component={MainPage}/>
         <Route  path='/LoginForm' Component={LoginForm}/>
         <Route  path='/SignupForm' Component={SignupForm}/>
         <Route path='/ProfilePage' Component={Profile}/>
      </Routes>
       </div>
     </Router>

  );
}

export default App;
