import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactRevealText from 'react-reveal-text'
import shuffleSeed from 'shuffle-seed'

function getIdentity(foundcity, foundstate) {
	if(foundstate == "California" && foundcity == "Saratoga") {
		return "Somya";
	} else if(foundstate == "Washington") {
		return "Peter";
	} else if(foundstate == "California" && foundcity == "Folsom") {
		return "Annie";
	} else if(foundstate == "Texas") {
		return "Lewis";
	} else if(foundstate == "New York") {
		return "Ashley";
	} else {
		return "All";
	}
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
		console.log(this.props.text2);
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

const header = document.querySelector('#header');
const photo = document.querySelector('#photo');

// Geolocation
const foundcity = geoplugin_city();
const foundstate = geoplugin_region();
const identity = getIdentity(foundcity, foundstate);
const assignment = "<PLACEHOLDER>";

const poemStanzaOne = [
	"Twas the night before Christmas, when all through the house,",
	"No one in plasma was stirring, except Lewis and his gaming mouse;",
	"Somya hung her pipettes on the rack with care,",
	"in the hopes that her PhD admission letters soon would be there;",
	"Ashley was nestled all snug in her bed,",
	"while visions of tight GD&T danced in her head;",
	"And Peter in his Python, and Annie in her Matlab,",
	"had just settled in for a long winter's nap.",
]

const poemStanzaTwo = [
	"and away they all flew like the down of a thistle.",
	"but I heard him/her exclaim, ere he/she drove out of sight--"
];

//get targets
if(identity != "All"){
	var targets = ["Peter", "Lewis", "Annie", "Somya", "Ashley"];
	var seed = "bingo our lord and savior";
	var randomized = shuffleSeed.shuffle(targets, seed);
	var targetIndex = (randomized.indexOf(identity) + 1) % targets.length;
	var target = randomized[targetIndex];
	console.log(randomized[targetIndex],targetIndex)
}

if (identity !== "All") {
	let temp = document.createElement("div");
	poemStanzaOne.forEach(function(line, i) {
		temp = document.createElement("div");
		ReactDOM.hydrate(<FadeText text={line} timeout={2000 * i}/>, temp);
		header.appendChild(temp);
	});
	header.appendChild(document.createElement("br"));
	temp = document.createElement("div");
ReactDOM.hydrate(<TwoToneText text1=" " text2={identity} text3=" sprang to his sleigh, to his/her team gave a whistle," timeout={2000 * poemStanzaOne.length}/>, temp);
	header.appendChild(temp);
	poemStanzaTwo.forEach(function(line, i) {
		temp = document.createElement("div");
		ReactDOM.hydrate(<FadeText text={line} timeout={2000 * (i + poemStanzaOne.length + 1)}/>, temp);
		header.appendChild(temp);
	});
	temp = document.createElement("div");
	ReactDOM.hydrate(<TwoToneText text1="Merry Christmas to " text2={target} text3=", and to all a good night!" timeout={2000 * (poemStanzaOne.length + poemStanzaTwo.length + 1)}/>, temp);
	header.appendChild(temp);
}
