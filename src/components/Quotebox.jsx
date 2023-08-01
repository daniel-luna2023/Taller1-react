import './styles/Quotebox.css'

const Quotebox = ({handleChange, quote}) => {

console.log(quote)

  return (
    <section className='quoteclas'>
      <h1 className='title'>Galaxy phrase</h1>

      <section className='section'>
        <button onClick={handleChange} className='button'>try again</button>
        <article className='article'>
          <p>{quote.phrase}</p>
        </article>
        <h4>{quote.author}</h4>
      </section>

      <footer className='footer'>create by: Oscar Gomez</footer>
    </section>
  )
}

export default Quotebox
