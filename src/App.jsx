
import Counter from '../counter';
import Player from '../Player';
import './App.css'

function App() {

  const handleClick = () => {
    alert('Clicked button')
  }

  const handleClickTow= (number) => {
    const newNumber = number + 3;
    alert(newNumber + ' Clicked')
  }

  return (
    <>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab fugit minus accusantium omnis odio debitis minima inventore optio libero, officia amet sequi, iste necessitatibus pariatur saepe, voluptatibus ipsa similique maxime.</p>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={() => handleClickTow(7)}>Clicked</button>
      <Counter></Counter>
      <Player></Player>
    </>
  )
}

export default App
