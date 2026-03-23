import { useState } from "react"
import './styles/app.scss'

function App() {
  const [bill, setBill] = useState(0)
  const [people, setPeople] = useState(0)
  const [amount, setAmount] = useState(0)
  const [total, setTotal] = useState(0)
  const [custom, setCustom] = useState()

  function handleClick(pourcent) {
    let result = (bill * pourcent) / 100
    setAmount(result / people)
    setTotal((parseFloat(bill) + result) / people)

    if (custom) {
      pourcent = custom
    }
  }

  function reset() {
    setBill(0)
    setPeople(0)
    setAmount(0)
    setTotal(0)
  }

  return (
    <>
      <section>

        <img src="images\logo.svg" alt="logo" />

        <div className="container">

          <div className="bill">
            <h2>Bill</h2>
            <input
              type="number"
              value={bill}
              onChange={(e) => { setBill(e.target.value) }}
            />

            <h2>Select tip %</h2>
            <div className="btn">
              <button onClick={() => handleClick(5)}>5%</button>
              <button onClick={() => handleClick(10)}>10%</button>
              <button onClick={() => handleClick(15)}>15%</button>
              <button onClick={() => handleClick(25)}>25%</button>
              <button onClick={() => handleClick(50)}>50%</button>
              <button id="custom" onClick={() => handleClick(custom)}>
                <input type="number"
                  placeholder="Custom"
                  value={custom}
                  onChange={(e) => { setCustom(e.target.value) }} />
              </button>
            </div>

            <h2>Number of People</h2>
            <input
              type="number"
              value={people}
              onChange={(e) => { setPeople(e.target.value) }}
            />
          </div>

          <div className="amount">
            <article>
              <div>
                <h3>Tip Amount</h3>
                <p>/ person</p>
              </div>
              <h2>${amount.toFixed(2)}</h2>
            </article>

            <article>
              <div>
                <h3>Total</h3>
                <p>/ person</p>
              </div>
              <h2>${total.toFixed(2)}</h2>
            </article>

            <button onClick={() => reset()}>Reset</button>
          </div>
        </div>
      </section>
    </>

  )
}

export default App