import { 
  BrowserRouter,
  Routes,
  Route 
} from "react-router-dom";
import './App.css';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import TrackerPage from './pages/TrackerPage';
import ListAll from './pages/ListAll';
import Login from './pages/Login';
import CreateAccount from './pages/CreateAccount';

function App() {
  
  return (
    <div className="App">
      <div className="wrapper">
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" exact element={ <HomePage /> } />
            <Route path="/createaccount" element={ <CreateAccount /> } />
            <Route path="/login" element={ <Login /> } />
            <Route path="/trackerpage" element={ <TrackerPage /> } />
            <Route path="/listall" element={ <ListAll /> } />
          </Routes>  
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
