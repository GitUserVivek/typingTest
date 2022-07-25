import axios from "axios";
import { Component, useReducer } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import "./index.css";
class Counter extends Component {
  constructor({ objRemSecs, seconds }) {
    super();
    this.state = {
      remSecs: seconds,
      objRemSecs: objRemSecs,
    };
  }
  componentDidMount() {
    let interval = setInterval(() => {
      if (this.state.remSecs === 0) {
        this.state.objRemSecs.setState({
          remSecs: 0,
          readOnly: true,
          indexOfParaList: Math.floor(5 * Math.random()),
        });
        console.log(this.state.objRemSecs.setState);
        clearInterval(interval);
      } else {
        this.setState({
          remSecs: this.state.remSecs - 1,
        });
      }
    }, 1000);
  }
  render() {
    let Timestatus = "green";
    if (this.state.remSecs >= 20 && this.state.remSecs <= 30) {
      Timestatus = "orange";
    } else {
      if (this.state.remSecs < 20) {
        Timestatus = "red";
      }
    }
    return (
      <>
        <div className="Timer">
          <div
            id="timer"
            style={{
              background: Timestatus,
              padding: "1.5rem",
            }}
            className="poster"
          >
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
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

export default class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      remSecs: 10,
      Para: [
        "We have found Paragraphs and associated modules to be a very successful recipe. Our clients love the plugability and extensibility of the system. if they need something new then we can build it. Oftentimes they are happy with the standard Paragraph bundles we can provide with Paragraphs pack. We are therefore continuing to build the ecosystem to support our own site building efforts. Bundles which have general application will be released back into Paragraphs Pack. We are also committed to ensuring a great developer experience. Our modules do not ship as features. You won;t need to worry about overrides with us. All the site buider needs to do is enable the modules make the required tweaks if any and capture the config in their own feature. Come find out more at our DrupalSouth talk: Power to the editors: Introducing the Paragraphs module.",
        "This hook makes it super easy to subscribe to data in your Firestore database without having to worry about state management. Instead of calling Firestore's query.onSnapshot() method you simply pass a query to useFirestoreQuery() and you get back everything you need including status data and error. Your component will render again when data changes and your subscription will be automatically removed when the component unmounts. Our example even supports dependent queries where you can wait on needed data by passing a falsy value to the hook. Read through the recipe and comments below to see how it works.",
        "A common need is a way to redirect the user if they are signed out and trying to view a page that should require them to be authenticated. This example shows how you can easily compose our useAuth and useRouter hooks to create a new useRequireAuth hook that does just that. Of course this functionality could be added directly to our useAuth hook but then we'd need to make that hook aware of our router logic. Using the power of hook composition we can keep the other two hooks as simple as possible and just utilize our new useRequireAuth when redirection is needed.",
        "Rather than litter your components with a bunch of useState calls to keep track of the state of an async function you can use our custom hook which takes an async function as an input and returns the value error and status values we need to properly update our UI. Possible values for status prop are: 'idle' 'pending' 'success' 'error'. As you'll see in the code below our hook allows both immediate execution and delayed execution using the returned execute function.",
        "It's worth noting that unlike useMemo this hook isn't meant to avoid expensive calculations. It needs to be passed a computed value so that it can compare it to the old value. Where this comes in handy is if you want to offer a library to other developers and it would be annoying to force them to memoize an object before passing it to your library. If that object is created in the component body (often the case if it's based on props) then it's going to be a new object on every render. If that object is a useEffect dependency then it's going to cause the effect to fire on every render which can lead to problems or even an infinite loop. This hook allows you to avoid that scenario by using the old object reference instead of the new one if your custom comparison function deems them equal.",
      ],
      currentPara: "",
      indexOfParaList: Math.floor(5 * Math.random()),
      correct: 0,
      wrong: 0,
      typing: false,
      typingPara: [],
      wrongStrokes: 0,
      readOnly: false,
      signedIn: false,
      user: {},
    };
    this.tryLogin = this.tryLogin.bind(this);
    this.tryLogout = this.tryLogout.bind(this);
    this.checkUserState = this.checkUserState.bind(this);
  }
  componentDidMount() {
    this.state.currentPara = this.state.Para[this.state.indexOfParaList];
    this.state.typingPara = this.state.Para[this.state.indexOfParaList].split(" ");
    this.setState({ ...this.state });
    this.checkUserState();
  }
  tryLogin = (user) => {
    let userInfo = user.getBasicProfile();
    let userFirstName = userInfo.getGivenName();
    let userName = userInfo.getName();
    let userEmail = userInfo.getEmail();
    let userPic = userInfo.getImageUrl();

    let userToken = user.tokenObj.access_token.toString();

    let value = {
      userName: userFirstName,
      userFullName: userName,
      userEmail: userEmail,
      userPic: userPic,
      userToken: userToken,
    };
    localStorage.setItem("userInfo", JSON.stringify(value));
    this.checkUserState();
  };
  tryLogout() {
    localStorage.removeItem("userInfo");
    console.log(this.state);
    this.setState({
      signedIn: false,
      user: {},
    });
    this.setState({});
  }
  checkUserState() {
    let userInfo = JSON.parse(localStorage.getItem("userInfo"));
    if (userInfo == null) {
      this.state.signedIn = false;
      this.setState({
        ...this.state,
      });
    } else {
      this.state.signedIn = true;
      this.state.user = userInfo;
      this.setState({ ...this.state });
      console.log(userInfo);
      console.log(this.state.user);
    }
  }
  render() {
    const clientId = "1082757406270-hjptn6fkt7o21tj9cl3r6n2qpqangpro.apps.googleusercontent.com";
    return (
      <>
        {
          <div className="container">
            <div className="topBanner"></div>
            <div className="mainBody">
              <strong> Lets Check Your Typing Speed</strong>
              {this.state.remSecs === 0 ? (
                <div className="Res">
                  <h4>
                    <div>
                      CorrectWords
                      <br />
                      <br /> / min <br /> <br />
                      {this.state.correct}
                    </div>
                    <button
                      onClick={() => {
                        let data = new FormData();
                        data.append("name", this.state.user.userFullName);
                        data.append("email", this.state.user.userEmail);
                        data.append("speed", this.state.user.correct);
                        data.append("image", this.state.user.userPic);
                        data.append("token", this.state.user.userToken);
                        data.append("action", "INSERT");
                        axios
                          .post(
                            // "http://localhost/img/store.php",
                            "https://educationwebworld.000webhostapp.com/React-Js/index.php",
                            data
                          )
                          .then((res) => console.log(res.data));

                        this.setState({
                          remSecs: 60,
                          currentPara: this.state.Para[this.state.indexOfParaList],
                          typingPara: this.state.Para[this.state.indexOfParaList].split(" "),
                          correct: 0,
                          wrong: 0,
                          readOnly: false,
                          typing: false,
                          wrongStrokes: 0,
                        });
                      }}
                    >
                      X
                    </button>
                    <div>
                      wrongWords
                      <br />
                      <br /> / min <br /> <br />
                      {this.state.wrong}
                    </div>
                  </h4>
                </div>
              ) : (
                <>
                  <div className="postersRow">
                    {this.state.typing ? (
                      <Counter objRemSecs={this} seconds={this.state.remSecs} correct={this.state.correct} wrong={this.state.wrong} />
                    ) : (
                      <div className="Timing">
                        <div className="poster">
                          Select Time <br />
                          in Sec
                          <br />
                          <select
                            className="timeSelector"
                            onChange={(e) => {
                              this.state.remSecs = e.target.value;
                            }}
                          >
                            <option>10</option>
                            <option>60</option>
                            <option>120</option>
                            <option>180</option>
                          </select>
                        </div>
                      </div>
                    )}
                    <Poster type="Correct" typeCount={this.state.correct} />
                    <Poster type="Wrong" typeCount={this.state.wrong} />
                    <div className="correctWords">
                      <div className="poster">
                        {/* -------------- */}

                        {this.state.signedIn ? (
                          <>
                            Hi..{this.state.user.userName}
                            <br />
                            {/* Your High Score is : 30 /min */}
                          </>
                        ) : (
                          <GoogleLogin className="GoogleLogin" clientId={clientId} buttonText="Login" onSuccess={this.tryLogin} cookiePolicy={"single_host_origin"} />
                        )}
                        {this.state.signedIn ? (
                          <>
                            <br />
                            <GoogleLogout className="GoogleLogout" clientId={clientId} buttonText="LogOut" onLogoutSuccess={this.tryLogout} />
                          </>
                        ) : null}
                      </div>
                      {/* -------------- */}
                    </div>
                  </div>
                  <div className="givenPara">{this.state.Para[this.state.indexOfParaList]}</div>
                  <div className="inputField">
                    <div id="completedWords" onClick={() => document.getElementById("inputBox").focus()} className="words">
                      <div id="inProgress"></div>
                    </div>
                    <input
                      id="inputBox"
                      type="text"
                      autoCorrect="off"
                      contentEditable="true"
                      spellCheck="false"
                      autoComplete="off"
                      autoFocus={true}
                      readOnly={this.state.readOnly}
                      onChange={() => {
                        this.setState({ typing: true });
                      }}
                      onKeyDown={(e) => {
                        if (e.key === " ") {
                          let newWord = document.createElement("span");
                          let completedWords = document.getElementById("completedWords");

                          if (e.target.value.trim() === this.state.typingPara[0]) {
                            newWord.className = "correctWord";
                            this.state.typingPara.shift();
                            this.setState({ correct: this.state.correct + 1 });

                            if (completedWords.hasChildNodes()) completedWords.childNodes[document.getElementById("completedWords").childNodes.length - 1].remove();
                          } else {
                            let completedWords = document.getElementById("completedWords");
                            this.state.typingPara.shift();
                            newWord.className = "wrongWord";
                            this.setState({ wrong: this.state.wrong + 1 });

                            if (completedWords.hasChildNodes()) completedWords.childNodes[document.getElementById("completedWords").childNodes.length - 1].remove();

                            this.setState({
                              currentPara: this.state.currentPara.slice(this.state.currentPara.indexOf(" ") + 1, this.state.currentPara.length - 1),
                            });
                          }

                          newWord.innerHTML = e.target.value;
                          completedWords.append(newWord);
                          let inProgress = document.createElement("span");
                          inProgress.id = "inProgress";
                          completedWords.append(inProgress);
                          e.target.value = "";
                          if (this.state.currentPara[0] === " ") {
                            this.setState({
                              currentPara: this.state.currentPara.slice(1, this.state.currentPara.length),
                            });
                          }
                        } else {
                          let word = this.state.currentPara;
                          if (e.key === word[0] && this.state.wrongStrokes == 0) {
                            let inProgress = document.getElementById("inProgress");
                            inProgress.innerText += word[0];

                            this.state.currentPara[0] === " "
                              ? this.setState({
                                  currentPara: this.state.currentPara.slice(2, this.state.currentPara.length - 1),
                                })
                              : this.setState({
                                  currentPara: this.state.currentPara.slice(1, this.state.currentPara.length - 1),
                                });
                          } else {
                            if (e.key.length === 1 && !e.ctrlKey) {
                              let inProgress = document.getElementById("inProgress");
                              inProgress.innerText += e.key;
                              this.state.wrongStrokes += 1;
                              inProgress.classList.add("wrongTyping");
                            } else {
                              if (e.key === "Backspace") {
                                if (this.state.wrongStrokes === 0) {
                                  this.state.currentPara = e.target.value.charAt(e.target.value.length - 1) + this.state.currentPara;
                                } else {
                                  this.state.wrongStrokes -= 1;
                                  if (this.state.wrongStrokes === 0) document.getElementById("inProgress").classList.remove("wrongTyping");
                                }
                              }
                            }
                          }
                        }
                      }}
                      onKeyUp={(e) => {
                        if (e.key === "Backspace") {
                          let lastChild = document.getElementById("completedWords");
                          lastChild = lastChild.childNodes[lastChild.childNodes.length - 1];
                          lastChild.innerText = e.target.value;
                          console.log(e.target.value.length, e.target.value, lastChild.innerText);
                        }
                      }}
                    ></input>
                    <pre
                      className="incomingWords"
                      onClick={() => {
                        document.getElementById("inputBox").focus();
                      }}
                    >
                      {this.state.currentPara}
                    </pre>
                  </div>
                </>
              )}
            </div>
          </div>
        }
      </>
    );
  }
}
