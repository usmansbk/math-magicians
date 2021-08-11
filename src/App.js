import {
  Link, Switch, Route, BrowserRouter,
} from 'react-router-dom';
import Home from './components/Home';

const routes = [
  {
    name: 'Home',
    path: '/',
    component: Home,
  },
  {
    name: 'Calculator',
    path: '/calculator',
    component: Home,
  },
  {
    name: 'Quote',
    path: '/quote',
    component: Home,
  },
];

const App = () => (
  <BrowserRouter>
    <>
      <header>
        <h1>Math Magicians</h1>
        <nav>
          <ul>
            {routes.map(({ name, path }) => (
              <li key={path}>
                <Link to={path}>{name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <Switch>
        {routes.map(({ path, component: Component }) => (
          <Route key={path} path={path}><Component /></Route>))}
      </Switch>
    </>
  </BrowserRouter>
);

export default App;
