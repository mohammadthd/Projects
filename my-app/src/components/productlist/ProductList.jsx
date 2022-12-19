import React from "react";
import "./productlist.css";
import todolist from '../../img/todolist.png'
import flappybird from '../../img/flappybird.png'
import calculator from '../../img/calculator.png'
import onlinestore from '../../img/online-store.png'


const ProductList = () => {
  return (
    <div className="pl" id="Products">
      <div className="pl-texts">
        <h1 className="pl-title">Projects</h1>
        <p className="pl-desc">
          Here are my experiences I have worked on.
        </p>
      </div>
      <div className="pl-list">
        <div className="grid">
          <a target="_blank"><div className="gridd"><img className="image" src={todolist} alt="Logo" /></div></a>
          <div class="fadedbox">
            <div class="title text"> To do list </div>
          </div>
        </div>
        <div className="grid">
          <a target="_blank"><div className="gridd"><img className="image" src={flappybird} alt="Logo" /></div></a>
          <div class="fadedbox">
            <div class="title text"> Flappy bird </div>
          </div>
        </div>
        <div className="grid">
          <a target="_blank"><div className="gridd"><img className="image" src={calculator} alt="Logo" /></div></a>
          <div class="fadedbox">
            <div class="title text"> Calculator </div>
          </div>
        </div>
        <div className="grid">
          <a target="_blank"><div className="gridd"><img className="image" src={onlinestore} alt="Logo" /></div></a>
          <div class="fadedbox">
            <div class="title text"> Online store </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
