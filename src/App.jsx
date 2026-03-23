import { useState } from "react"

function App() {
  
  return (
    <>
    <h1>Spliter</h1>

    <div>
      
      <h2>Bill</h2>
      <input type="number" placeholder="0" />

      <div>
        <h2>Select tip %</h2>
        <article>
          <button>5%</button>
        </article>
        <article>
          <button>10%</button>
        </article>
        <article>
          <button>15%</button>
        </article>
        <article>
          <button>25%</button>
        </article>
        <article>
          <button>50%</button>
        </article>
        <article>
          <button>Custom</button>
        </article>
      </div>

      <h2>Number of People</h2>
      <input type="text" />

    </div>
    </>
    
  )
}

export default App