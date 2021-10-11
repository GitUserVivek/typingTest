import Poster from './Components/Poster';
import Board from './Components/Board';
import './index.css';
function HomePage() {
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
            <div className="words">ff</div>
            <input type="text" autoCorrect={false} spellCheck="false" ></input>
          </div>

        </div>
      </div>
    </div>

  </>;

}

export default HomePage;