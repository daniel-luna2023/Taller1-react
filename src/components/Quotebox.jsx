import './styles/Quotebox.css'

const Quotebox = ({handleChange, quote}) => {

console.log(quote)

  return (
    <section className='quoteclas'>
      <h1 className='title'>Galaxys phrases</h1>

      <section>
        <button onClick={handleChange}>try againt</button>
        <article className='article'>
          <p>{quote.phrase}</p>
        </article>
      </section>

      <footer className='footer'><h4>{quote.author}</h4></footer>
    </section>
  )
}

export default Quotebox
