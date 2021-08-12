import './Quote.css';

const quote = 'Mathematics is not about numbers, equations, computations, or algorithms: it is about understanding. - William Paul Thurston';

const Quote = () => (
  <section className="quote-section">
    <div className="line" />
    <h5 className="quote">{quote}</h5>
  </section>
);

export default Quote;
