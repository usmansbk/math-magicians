const routes = [
  {
    name: 'Home',
    path: '/home',
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
              <a href={path}>{name}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  </>
);

export default App;
