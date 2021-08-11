import './Home.css';

const CONTENT = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at enim viverra, volutpat velit vitae, pretium sem. Nullam laoreet dui eget tellus aliquam, a semper est dignissim. Sed tempus leo quis nisi vulputate rutrum. Nunc rhoncus maximus congue. In eleifend feugiat risus, et cursus nulla vehicula ut. Curabitur ac blandit erat. In hac habitasse platea dictumst. Proin a erat ac turpis laoreet tincidunt quis ac nulla. In volutpat, turpis at feugiat ullamcorper, tellus est condimentum nisi, non tincidunt risus tellus eget massa. Nam lectus purus, molestie ac venenatis eget, pharetra nec sem. Ut venenatis pharetra tellus eleifend blandit. Vivamus interdum enim tincidunt faucibus posuere.

Mauris eget libero ut turpis ultrices mattis vitae ac velit. Nam est odio, sollicitudin in felis ac, eleifend consectetur purus. Phasellus elementum turpis purus, ac accumsan nibh vulputate vel. Donec tempor placerat sollicitudin. Maecenas sapien mi, suscipit vel vestibulum quis, efficitur non leo. Cras eros eros, suscipit vitae est condimentum, vehicula facilisis odio. Vivamus vehicula quis arcu in blandit. Nullam aliquet pulvinar ipsum, ac imperdiet ipsum aliquam eget. Sed sollicitudin ligula quis condimentum imperdiet. Aliquam vestibulum quis sem vitae interdum. Sed tempor metus et tristique faucibus. Nulla ipsum arcu, feugiat sed tempor a, bibendum eu nibh. Aliquam vestibulum dignissim tellus ut volutpat. Phasellus mattis fermentum urna pellentesque congue. Quisque iaculis enim malesuada lacus bibendum pulvinar. Phasellus quis tortor in dui placerat aliquam.`;

const Home = () => (
  <section className="home">
    <h2 className="section-title">Welcome to our page!</h2>
    <p>{CONTENT}</p>
    <p>{CONTENT}</p>
  </section>
);

export default Home;
