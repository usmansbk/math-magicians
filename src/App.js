import {
  NavLink, Switch, Route, HashRouter as Router,
} from 'react-router-dom';
import Home from './components/Home';
import Calculator from './components/Calculator';
import Quote from './components/Quote';

const routes = [
  {
    name: 'Home',
    path: '/',
    component: <Home />,
  },
  {
    name: 'Calculator',
    path: '/calculator',
    component: <Calculator />,
  },
  {
    name: 'Quote',
    path: '/quote',
    component: <Quote />,
  },
];

const App = () => (
  <Router basename={process.env.PUBLIC_URL}>
    <>
      <header className="app-bar">
        <h1 className="app-title">Math Magicians</h1>
        <nav className="nav">
          <ul className="nav-links">
            {routes.map(({ name, path }) => (
              <li key={path}>
                <NavLink exact activeClassName="active" to={path}>{name}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <div className="container">
        <Switch>
          {routes.map(({ path, component }) => (
            <Route exact key={path} path={path}>{component}</Route>))}
        </Switch>
      </div>
    </>
  </Router>
);

export default App;
