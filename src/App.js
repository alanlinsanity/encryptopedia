import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import Header from './Components/Header';
import HomePage from './Pages/HomePage';
import CoinPage from './Pages/CoinPage';
import VideoPage from './Pages/VideoPage';
import { makeStyles } from "@material-ui/core";

function App() {

  const useStyles = makeStyles(() => ({
    App: {
      backgroundColor: '#43556D',
      color: "white",
      minHeight: "100vh",
    },
  }));

  const classes = useStyles()

  return (
    <div>
    <Router basename="/encryptopedia"> 
      <div className={classes.App}>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path='/:id' element={<CoinPage />}/> 
          <Route path='/videos' element={<VideoPage />}/> 
        </Routes>
      </div>
    </Router>
  </div>
  );
}


export default App;
