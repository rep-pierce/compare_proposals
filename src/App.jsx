import { useContext } from 'react'
import { Context } from './contexts/Context'
import './App.css'
import Crit from './components/Crit'

function App() {
  const {criteria} = useContext(Context)

  function getWeight(input) {
    let total = 0;
    criteria.forEach(crit => {
        total += crit.total_score;
    });
    return (
      <div>
        {'total: ' + total + ', input: ' + input}
      </div>
    )
  }

  function renderCriteria(){
    return criteria.map( piece => <Crit key={piece.title} piece={piece} getWeight={getWeight} />)
  }



  return (
    <>
      <div>
        <h1>Home Sweet Home</h1>
        <div>
          {!criteria ? null : renderCriteria()}
        </div>
      </div>
    </>
  )
}

export default App
