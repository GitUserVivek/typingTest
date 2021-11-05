import Poster from './Components/Poster';
import Board from './Components/Board';
import { useState, useEffect } from "react";
import './index.css';
function HomePage() {
  var Para = "This hook makes it super easy to subscribe to data in your Firestore database without having to worry about state management. Instead of calling Firestore's query.onSnapshot() method you simply pass a query to useFirestoreQuery() and you get back everything you need including status data and error. Your component will re-render when data changes and your subscription will be automatically removed when the component unmounts. Our example even supports dependent queries where you can wait on needed data by passing a falsy value to the hook. Read through the recipe and comments below to see how it works.";
  Para = Para.split(" ");

  var indexOfParaList = Math.floor((5 * Math.random()));

  return <>
    <div>
      <div className="container">
        <div className="topBanner"></div>
        <div className="mainBody">
          <strong>  Lets Check Your Typing Test</strong>
          <div className="postersRow">
            <Poster classname="Timer" />
            <Poster classname="Correct" />
            <Poster classname="Wrong" />
          </div>
          <Board />

          {/* Input box started..  */}
          <div className="inputField">
            <div className="words"> </div>
            <input type="text" autoCorrect="off" spellCheck="false" ></input>
          </div>

        </div>
      </div>
    </div>

  </>;

}

export default HomePage;