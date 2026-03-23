import { useState } from "react"

function App() {
  let x = 0
  const [bill, setBill] = useState(0)
  const [people, setPeople] = useState(0)
  const [amount, setAmount] = useState(0)
  const [total, setTotal] = useState(0)

  function handleClick(pourcent){
    let result = (bill * pourcent)/100
    setAmount(result / people)
    setTotal((parseFloat(bill) + result) / 5)
  }

  function reset(){
    setBill(0)
    setPeople(0)
    setAmount(0)
    setTotal(0)
  }
  
  return (
    <>
    <h1>Spliter</h1>

    <div>
      
      <h2>Bill</h2>
      <input 
      type="number" 
      value={bill} 
      onChange={(e) => {setBill(e.target.value)}} />

      <div>
        <h2>Select tip %</h2>
        <article>
          <button onClick={() => handleClick(5)}>5%</button>
        </article>
        <article>
          <button onClick={() => handleClick(10)}>10%</button>
        </article>
        <article>
          <button onClick={() => handleClick(15)}>15%</button>
        </article>
        <article>
          <button onClick={() => handleClick(25)}>25%</button>
        </article>
        <article>
          <button onClick={() => handleClick(50)}>50%</button>
        </article>
        <article>
          <input type="text" placeholder="Custom" />
        </article>
      </div>

      <h2>Number of People</h2>
      <input
      type="number" 
      value={people} 
      onChange={(e) => {setPeople(e.target.value)}} />

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
    </>
    
  )
}

export default App