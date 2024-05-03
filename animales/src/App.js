import { useState } from "react";
import AnimalShow from "./AnimalShow";

function getRandomAnimal() {
  const animals = ["cow", "ox", "dog", "cat", "gator", "horse"];

  return animals[Math.floor(Math.random * animals.length)];
}

function App() {
  const [animals, setAnimals] = useState([]);

  const handleClick = () => {
    setAnimals([...animals, getRandomAnimal()]);
  };

  const renderedAnimals = animals.map((animal, index) => {
    return <AnimalShow type={animal} key={index} />;
  });

  return (
    <div>
      <button onClick={handleClick}> Add Animal</button>
      <div>Animals are : {renderedAnimals} </div>
    </div>
  );
}

export default App;
