import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactRevealText from 'react-reveal-text'
import shuffleSeed from 'shuffle-seed'

// Sadly, this service no longer works. find a new one next year!
// function getIdentity(foundcity, foundstate) {
// 	if(foundstate == "California" && foundcity == "Saratoga") {
// 		return "Somya";
// 	} else if(foundstate == "Washington") {
// 		return "Peter";
// 	} else if(foundstate == "California" && foundcity == "Folsom") {
// 		return "Annie";
// 	} else if(foundstate == "Texas") {
// 		return "Lewis";
// 	} else if(foundstate == "New York") {
// 		return "Ashley";
// 	} else {
// 		return "All";
// 	}
// }

function setIdentity(identity) {
	//get targets
	var seed = "one persons trashley is another ones treasure";
	var randomized = shuffleSeed.shuffle(targets, seed);
	var targetIndex = (randomized.indexOf(identity) + 1) % targets.length;
	var target = randomized[targetIndex];
	renderRemainder(identity, target);
}

const styles = {
  header: {
    textAlign: 'center',
    backgroundColor: 'red'
  },
  image: {
    width: 1000,
    border: '10px solid #021a40'
  }
};

class BorderImage extends Component {
  render() {
    return (
        <img src={this.props.imgsrc} style={styles.image}/>
    )
  }
}

class FadeText extends React.Component {

  constructor() {
    super();
    this.state = { show: false };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ show: true });
    }, this.props.timeout);
  }

  render() {
    return (
        <h1>
          <ReactRevealText show={this.state.show} text={this.props.text} style={{
							color: "white",
							fontFamily: 'Dancing Script'
						}}/>
				</h1>
    );
  }
}

class TwoToneText extends React.Component {

  constructor() {
    super();
    this.state = { show: false };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ show: true });
    }, this.props.timeout);
  }

  render() {
    return (
        <h1>
          <ReactRevealText show={this.state.show} text={this.props.text1} style={{
							color: "white",
							fontFamily: 'Dancing Script',
							display: "inline"
						}}/>
					<ReactRevealText show={this.state.show} text={this.props.text2} style={{
							color: "black",
							fontFamily: 'Dancing Script',
							display: "inline"
					}}/>
					<ReactRevealText show={this.state.show} text={this.props.text3} style={{
							color: "white",
							fontFamily: 'Dancing Script',
							display: "inline"
					}}/>
				</h1>
    );
  }
}


class LinkText extends React.Component {

  constructor() {
    super();
    this.state = { show: false };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ show: true });
    }, this.props.timeout);
  }

  render() {
    return (
        <h1>
          <ReactRevealText show={this.state.show} text={this.props.text1} style={{
							color: "white",
							fontFamily: 'Dancing Script',
							display: "inline"
						}}/>
					<span id={this.props.text2} onClick={(e) => {
							setIdentity(this.props.text2)
						}}><ReactRevealText show={this.state.show} text={this.props.text2} style={{
							color: "pink",
							fontFamily: 'Dancing Script',
							display: "inline",
					}}/></span>
					<ReactRevealText show={this.state.show} text={this.props.text3} style={{
							color: "white",
							fontFamily: 'Dancing Script',
							display: "inline"
					}}/>
			</h1>
    );
  }
}

class DoubleLinkText extends React.Component {

  constructor() {
    super();
    this.state = { show: false };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ show: true });
    }, this.props.timeout);
  }

  render() {
    return (
        <h1>
          <ReactRevealText show={this.state.show} text={this.props.text1} style={{
							color: "white",
							fontFamily: 'Dancing Script',
							display: "inline"
						}}/>
					<span id={this.props.text2} onClick={(e) => {
							setIdentity(this.props.text2)
						}}><ReactRevealText show={this.state.show} text={this.props.text2} style={{
							color: "pink",
							fontFamily: 'Dancing Script',
							display: "inline"
					}}/></span>
					<ReactRevealText show={this.state.show} text={this.props.text3} style={{
							color: "white",
							fontFamily: 'Dancing Script',
							display: "inline"
					}}/>
				<span id={this.props.text4} onClick={(e) => {
							setIdentity(this.props.text4)
						}}><ReactRevealText show={this.state.show} text={this.props.text4} style={{
							color: "pink",
							fontFamily: 'Dancing Script',
							display: "inline"
					}}/></span>
				<ReactRevealText show={this.state.show} text={this.props.text5} style={{
							color: "white",
							fontFamily: 'Dancing Script',
							display: "inline"
					}}/>
			</h1>
    );
  }
}

const header = document.querySelector('#header');
const footer = document.querySelector('#footer');
const photo = document.querySelector('#photo');

// Geolocation (deprecated)
// const foundcity = geoplugin_city();
// const foundstate = geoplugin_region();
// const identity = getIdentity(foundcity, foundstate);

// const poemStanzaOne = [
// 	"Twas the night before Christmas, when all through the house,",
// 	"No one in plasma was stirring, except Lewis and his gaming mouse;",
// 	"Somya hung her pipettes on the rack with care,",
// 	"in the hopes that her PhD admission letters soon would be there;",
// 	"Ashley was nestled all snug in her bed,",
// 	"while visions of tight GD&T danced in her head;",
// 	"And Peter in his Python, and Annie in her Matlab,",
// 	"had just settled in for a long winter's nap.",
// ]

const poemStanzaOneOpening = [
	["Twas the night before Christmas, when all through the house,", " ", " "],
	["No one in plasma was stirring, except ", "Lewis", " and his gaming mouse;"],
	[" ", "Somya", " hung her pipettes on the rack with care,"],
	[" ", " ", "in the hopes that her PhD admission letters soon would be there;"],
	[" ", "Ashley", " was nestled all snug in her bed,"],
	[" ", " ", "while visions of tight GD&T danced in her head;"],
];

const poemStanzaTwoMale = [
	"and away they all flew like the down of a thistle.",
	"but I heard him exclaim, ere he drove out of sight--"
];

const poemStanzaTwoFemale = [
	"and away they all flew like the down of a thistle.",
	"but I heard her exclaim, ere she drove out of sight--"
];


const targets = ["Peter", "Lewis", "Annie", "Somya", "Ashley"];

const animationSpeed = 2000;  // larger numbers are slower

let temp = document.createElement("div");
poemStanzaOneOpening.forEach(function(line, i) {
	temp = document.createElement("div");
	ReactDOM.hydrate(<LinkText text1={line[0]} text2={line[1]} text3={line[2]} timeout={animationSpeed * i}/>, temp);
	header.appendChild(temp);
});
// special case
temp = document.createElement("div");
ReactDOM.hydrate(<DoubleLinkText text1="And " text2="Peter" text3=" in his Python, and " text4="Annie" text5= " in her Matlab," timeout={animationSpeed * poemStanzaOneOpening.length}/>, temp);
header.appendChild(temp);
temp = document.createElement("div");
ReactDOM.hydrate(<LinkText text1=" " text2=" " text3="had just settled in for a long winter's nap." timeout={animationSpeed * (poemStanzaOneOpening.length + 1)}/>, temp);
header.appendChild(temp);


function renderRemainder(identity, target) {
	footer.innerHTML = "";
	temp = document.createElement("div");
	if (identity === 'Lewis' || identity === 'Peter') { // male pronouns
		ReactDOM.hydrate(<TwoToneText text1=" " text2={identity} text3=" sprang to his sleigh, to his team gave a whistle," timeout={0}/>, temp);
			footer.appendChild(temp);
			poemStanzaTwoMale.forEach(function(line, i) {
				temp = document.createElement("div");
				ReactDOM.hydrate(<FadeText text={line} timeout={animationSpeed * (i + 1)}/>, temp);
				footer.appendChild(temp);
			});
			temp = document.createElement("div");
			ReactDOM.hydrate(<TwoToneText text1="Merry Christmas to " text2={target} text3=", and to all a good night!" timeout={animationSpeed * (poemStanzaTwoMale.length + 1)}/>, temp);
			footer.appendChild(temp);
		} else { // female pronouns
			ReactDOM.hydrate(<TwoToneText text1=" " text2={identity} text3=" sprang to her sleigh, to her team gave a whistle," timeout={0}/>, temp);
				footer.appendChild(temp);
				poemStanzaTwoFemale.forEach(function(line, i) {
					temp = document.createElement("div");
					ReactDOM.hydrate(<FadeText text={line} timeout={animationSpeed * (i + 1)}/>, temp);
					footer.appendChild(temp);
				});
				temp = document.createElement("div");
				ReactDOM.hydrate(<TwoToneText text1="Merry Christmas to " text2={target} text3=", and to all a good night!" timeout={animationSpeed * (poemStanzaTwoFemale.length + 1)}/>, temp);
				footer.appendChild(temp);
		}
}
