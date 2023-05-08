
function Crit({ piece, getWeight }) {
  // function increaseWeight(){
  //   piece.weight += 1
  //   console.log(piece.weight)
  // }
  function handleClick(){
    console.log(parseInt(piece.weight))
    piece.total_score += 1
    console.log("in function" + piece.total_score)
  }
  console.log("out of " + piece.total_score)

  return (
    <div>
      <h1>
        {piece.title}
      </h1>
      <div>
        {getWeight(piece.weight)}
        <button onClick={handleClick}>Increase Weighting</button>
      </div>
      <div>
        
      </div>
    </div>
  )
}

export default Crit