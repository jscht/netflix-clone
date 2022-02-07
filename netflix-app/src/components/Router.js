import {
   BrowserRouter,
   Switch,
   Route,
} from "react-router-dom";
import Home from "../routes/Home"
import Movie from "../routes/Movie"
import TV from "../routes/TV"
import Search from "../routes/Search"
import Detail from "../routes/Detail"

function Router() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/movie">
            <Movie />
          </Route>
          <Route path="/movie/:id">
            <Detail />
          </Route>
          <Route path="/tv">
            <TV />
          </Route>
          <Route path="/tv/:id">
            <Detail />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
        </Switch>
      </BrowserRouter>
    )
}

export default Router;