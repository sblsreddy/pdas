import { useState } from "react";
import './SearchBar.css'

function SearchBar( {linktoSearchBar}){
  
  const[term, SetTerm] = useState('');

  const handleChange =(event) => {
   //console.log (event.target.value);
   SetTerm(event.target.value);
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log('I need to tell parent about some data, The following line is to tell parent from child ');
    linktoSearchBar (term);
  }
   
    return (
      <div className="search-bar">
        <form onSubmit={handleFormSubmit}>
          <div>  
            <label>Enter Search term : </label>         
           <input value={term} onChange={handleChange}></input>
          </div>
        </form>
      </div>
    );
}

export default SearchBar;