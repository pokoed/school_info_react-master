import './App.css';
import './components/MainPage'
import MainPage from './components/MainPage';
import {
  Switch,
  Route,
  useHistory,
  Router
} from "react-router-dom";

function App() {
  return (
    <Route exact path="/" component={MainPage} />
  );
}

export default App;
