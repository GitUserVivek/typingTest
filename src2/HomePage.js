import { Component } from "react";
import { useState, useEffect } from "react";
import "./index.css";
class Counter extends Component {
  constructor() {
    super();
    this.state = {
      remSecs: 60,
    };
  }
  componentDidMount() {
    let interval = setInterval(() => {
      if (this.state.remSecs === 0) {
        clearInterval(interval);
      } else {
        this.setState({
          remSecs: this.state.remSecs - 1,
        });
        console.log(this.state.remSecs);
      }
    }, 1000);
  }
  render() {
    console.log("rendered..");
    return (
      <>
        <div className="Timer">
          <div id="timer" className="poster">
            {this.state.remSecs} <br /> sec rem
          </div>
        </div>
      </>
    );
  }
}
function Poster({ type, typeCount }) {
  return (
    <div className="correctWords">
      <div className="poster">
        {typeCount} <br /> {type} words <br /> per min
      </div>
    </div>
  );
}
export default function HomePage() {
  var Para = [
    "We have found Paragraphs and associated modules to be a very successful recipe. Our clients love the plugability and extensibility of the system. if they need something new then we can build it. Oftentimes they are happy with the standard Paragraph bundles we can provide with Paragraphs pack. We are therefore continuing to build the ecosystem to support our own site building efforts. Bundles which have general application will be released back into Paragraphs Pack. We are also committed to ensuring a great developer experience. Our modules do not ship as features. You won;t need to worry about overrides with us. All the site buider needs to do is enable the modules make the required tweaks if any and capture the config in their own feature. Come find out more at our DrupalSouth talk: Power to the editors: Introducing the Paragraphs module.",
    "This hook makes it super easy to subscribe to data in your Firestore database without having to worry about state management. Instead of calling Firestore's query.onSnapshot() method you simply pass a query to useFirestoreQuery() and you get back everything you need including status data and error. Your component will render again when data changes and your subscription will be automatically removed when the component unmounts. Our example even supports dependent queries where you can wait on needed data by passing a falsy value to the hook. Read through the recipe and comments below to see how it works.",
    "A common need is a way to redirect the user if they are signed out and trying to view a page that should require them to be authenticated. This example shows how you can easily compose our useAuth and useRouter hooks to create a new useRequireAuth hook that does just that. Of course this functionality could be added directly to our useAuth hook but then we'd need to make that hook aware of our router logic. Using the power of hook composition we can keep the other two hooks as simple as possible and just utilize our new useRequireAuth when redirection is needed.",
    "Rather than litter your components with a bunch of useState calls to keep track of the state of an async function you can use our custom hook which takes an async function as an input and returns the value error and status values we need to properly update our UI. Possible values for status prop are: 'idle' 'pending' 'success' 'error'. As you'll see in the code below our hook allows both immediate execution and delayed execution using the returned execute function.",
    "It's worth noting that unlike useMemo this hook isn't meant to avoid expensive calculations. It needs to be passed a computed value so that it can compare it to the old value. Where this comes in handy is if you want to offer a library to other developers and it would be annoying to force them to memoize an object before passing it to your library. If that object is created in the component body (often the case if it's based on props) then it's going to be a new object on every render. If that object is a useEffect dependency then it's going to cause the effect to fire on every render which can lead to problems or even an infinite loop. This hook allows you to avoid that scenario by using the old object reference instead of the new one if your custom comparison function deems them equal.",
  ];
  var indexOfParaList = Math.floor(5 * Math.random());
  let typingPara = Para[indexOfParaList].split(" ");

  const [correct, setCorrect] = useState(0);
  const [wrong, setWrong] = useState(0);
  const [typing, setTyping] = useState(false);
  console.log("rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr");
  return (
    <>
      <div className="container">
        <div className="topBanner"></div>
        <div className="mainBody">
          <strong> Lets Check Your Typing Speed</strong>
          <div className="postersRow">
            {typing ? (
              <Counter correct={correct} wrong={wrong} />
            ) : (
              <div className="Timing">
                <div className="poster">
                  {60} <br /> sec rem , <br />
                  startTyping..
                </div>
              </div>
            )}
            <Poster type="Correct" typeCount={correct} />
            <Poster type="Wrong" typeCount={wrong} />
          </div>
          <div className="givenPara">{Para[indexOfParaList]}</div>

          {/* Input box started..  */}
          <div className="inputField">
            <div
              id="completedWords"
              onClick={() => document.getElementById("inputBox").focus()}
              className="words"
            ></div>
            <input
              id="inputBox"
              autoFocus={true}
              onChange={() => {
                setTyping(true);
              }}
              onKeyDown={(e) => {
                if (e.key === " ") {
                  let newWord = document.createElement("span");
                  let completedWords =
                    document.getElementById("completedWords");

                  if (e.target.value.trim() === typingPara[0]) {
                    newWord.className = "correctWord";
                    typingPara.shift();
                    setCorrect(correct + 1);
                  } else {
                    typingPara.shift();
                    newWord.className = "wrongWord";
                    setWrong(wrong + 1);
                  }

                  newWord.innerHTML = e.target.value;
                  completedWords.append(newWord);
                  e.target.value = "";
                } else {
                  if (e.key === typingPara[0][0]) {
                    console.log(true);
                  }
                }
              }}
              type="text"
              autoCorrect="off"
              spellCheck="false"
            ></input>
            <div className="incomingWords">
              {typingPara.toString().replaceAll(",", " ")}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
