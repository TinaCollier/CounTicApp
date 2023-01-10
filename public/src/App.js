import { 
  BrowserRouter,
  Routes,
  Route 
} from "react-router-dom";
import './App.css';
import AppProvider from "./context/AppProvider";
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import TrackerPage from './pages/TrackerPage';
import CompletedEvents from './pages/CompletedEvents';
import LogIn from './pages/LogIn';


function App() {
  
  return (
    <AppProvider>
      <div className="App">
        <div className="wrapper">
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path="/" exact element={ <HomePage /> } />
              <Route path="/login" element={ <LogIn /> } />
              <Route path="/trackerpage" element={ <TrackerPage /> } />
              <Route path="/completedevents" element={ <CompletedEvents /> } />
            </Routes>  
          </BrowserRouter>
        </div>
      </div>
      </AppProvider>
  );
}

export default App;
