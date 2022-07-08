import React from "react";
import {AiOutlineSearch} from 'react-icons/ai';
import './Hero.css'

export default function () {
  return (
    <div className="hero">
      <div className="content">
        <h1>Find the perfect place</h1>
        <p className="searchText">
          Search the largest selection of luxury high-rise apartment, multi
          family homes and luxury homes
        </p>
        <form className="search">
        
        <div>
        <input type='text' placeholder="Search here"/>
        </div>
        <div className="radio">
            <input type='radio' checked />
            <label>Buy</label>
            <input type='radio' />
            <label>Rent</label>
            <button type='submit'> <AiOutlineSearch className="icon"/></button>
        </div>
        </form>
      </div>
    </div>
  );
}
