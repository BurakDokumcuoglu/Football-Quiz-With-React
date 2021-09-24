import styles from "./App.css";
import Menu from "../src/components/Menu";
import UserProfile from "./components/UserProfile";
import Titles from "./components/Titles";
import Games from "./components/Games";
import Prize from "./components/Prize";
import StartAndBuy from "./components/StartAndBuy";
import HistoryAndRules from "./components/HistoryAndRules";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Game from "../src/pages/Game";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Menu className={styles.menu}></Menu>
            <UserProfile className={styles.userp}></UserProfile>
            <Titles className={styles.titles}></Titles>
            <Prize className={styles.prize}></Prize>
            <Games className={styles.games}></Games>
            <StartAndBuy className={styles.startAndBuy}></StartAndBuy>
            <HistoryAndRules
              className={styles.historyAndRules}
            ></HistoryAndRules>
            <Footer className={styles.footer}></Footer>
          </Route>
          <Route path="/game">
            <Game></Game>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
