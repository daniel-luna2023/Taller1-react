
const Quotebox = ({handleChange, quote}) => {

console.log(quote)

  return (
    <section>
      <h1>Galaxys phrases</h1>

      <section>
        <button onClick={handleChange}>try againt</button>
        <article>
          <p>{quote.phrase}</p>
        </article>
      </section>

      <footer><h4>{quote.author}</h4></footer>
    </section>
  )
}

export default Quotebox
