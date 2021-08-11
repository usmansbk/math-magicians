import { Link } from 'react-router-dom';

const routes = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Calculator',
    path: '/calculator',
  },
  {
    name: 'Quote',
    path: '/quote',
  },
];

const App = () => (
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
  </>
);

export default App;
