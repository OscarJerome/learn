import {useState} from 'react';

const MainContent = () => {

    const [name ,setName] = useState("Harry");

    const [count,setCount] = useState(0);
    


    const handleNameChange = () => {
        const names = ["Jace","Harry","Den","Joe"];
        const int = Math.floor(Math.random()*4);
        setName(names[int]);
    }

    const handleClick = () =>{
      setCount(count+1)
      setCount(count+1)
      console.log(count);
    }
    // const handleClick = () =>{
    //   console.log("You clicked It !");
    // }
    const handleClick2 = (name ) =>{
      console.log(count);
    }
    // const handleClick2 = (name ) =>{
    //   console.log(`${name}  was clicked`);
    // }
    // const handleClick3 = (e) =>{
    //   console.log(e.target.innerText);
    // }

  return (
    <main>
      <p onDoubleClick={handleClick}>
        Hello {name} !
        {/* Hello {handleNameChange()} ! */}
      </p>
      <button onClick={handleNameChange}>Change Name</button>
      {/* <button onClick={handleClick}>Click Here</button> */}
      <button onClick={handleClick}>Click Here</button>
      <button onClick={handleClick2}>Click Here</button>
      {/* <button onClick={() => handleClick2("Harry")}>Click Here</button> */}
      {/* <button onClick={(e) => handleClick3(e)}>Click Here</button> */}
    </main>
  )
}

export default MainContent;
