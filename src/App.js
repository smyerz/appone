import Logo from './Logo';
import Btn from './ClickHandler';

import './App.css';
//root file
//rendered to the browser from index file
//beginning of error test

function App() {
  return (
    <div> 
      {/* this is a comment in JSX */}      
    <Logo />
    <Btn />
    </div>
  )
}
//more than one line must have a parent component or </>
export default App;

/*
import Card from './Card';

function Logo(props) {
  const userPic = <img src={avatar} alt="cat with pizza in mouth"/>;
  return userPic;
}

//all items must be declared in App function to be seen online
//references must be located in the src folder or same folder
function App() {
  return (
    <div className='App'>
      <h1> Hello World!</h1>
      <Logo /> 
      <Card h2 = "first card's h2" h3 = "first card's h3" />
      <Card h2 = "second card's h2" h3 = "second card's h3" />
      <Card h2 = "third card's h2" h3 = "third card's h3" />
    </div>
  );
}


export default App;
*/
