import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import store from "./redux/store";
import Home from "./Page/Home";
import feather from "feather-icons";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    feather.replace();
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
