
import { Suspense } from 'react';
import Counter from '../counter';
import Player from '../Player';
import User from '../User';
import './App.css'
import Friends from '../Friends';
import Posts from '../Posts';

// User fetch
const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users")
  .then(res => res.json());

// Frinds fetch
const fetchFriends = async() => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users")
  return res.json();
}

// Post fetch
const fetchPost = async() => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts")
  return res.json();
}


function App() {

  const friendsPromise = fetchFriends();
  const postsPromise = fetchPost();

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
      <Suspense fallback={<h2 className="py-[10px] text-[24px]">User Loading...</h2>}>
        <User fetchUsers = {fetchUsers}></User>
      </Suspense>
      <Suspense fallback={<h2 className="py-[10px] text-[24px]">Frinds Loading...</h2>}>
        <Friends friendsPromise = {friendsPromise}></Friends>
      </Suspense>
      <Suspense fallback={<h2 className="py-[10px] text-[24px]">Posts Coming...</h2>}>
        <Posts postsPromise = {postsPromise}></Posts>
      </Suspense>
    </>
  )
}

export default App
