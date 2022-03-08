import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import Header from './Components/Header';
import HomePage from './Pages/HomePage';
import CoinPage from './Pages/CoinPage';
import NewsPage from './Pages/NewsPage';
import { makeStyles } from "@material-ui/core";
import 'helvatica-neue-lt/index.css';

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
          <Route path='/news' element={<NewsPage />}/> 
        </Routes>
      </div>
    </Router>
  </div>
  );
}


export default App;
