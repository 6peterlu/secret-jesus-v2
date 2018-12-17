import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactRevealText from 'react-reveal-text'
import 'shuffle-Seed'

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
    paddingTop: 40,
    textAlign: 'center',
    backgroundColor: 'red'
  },
  image: {
    width: 1000,
    border: '10px solid #021a40'
  }
};

// class Header extends Component {
//   render() {
//     return (
//       <ReactRevealText show text="Welcome!"/>
//       // <div style={styles.header}>
//       //   <br/>
//       //   You have been assigned (placeholder!)
//       // </div>
//     )
//   }
// }

class BorderImage extends Component {
  render() {
    return (
        <img src={this.props.imgsrc} style={styles.image}/>
    )
  }
}

class Wrapper extends React.Component {

  constructor() {
    super();
    this.state = { show: false };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ show: true });
    }, 2000);
  }

  render() {
    return (
      <div style={{ border: '1px solid grey', textAlign: 'center' }}>
        <h1>
          <ReactRevealText show={this.state.show} text={"Welcome, " + this.props.name + "!"}/>
        </h1>
      </div>
    );
  }
}

const header = document.querySelector('#header');
const photo = document.querySelector('#photo');

// Geolocation
const foundcity = geoplugin_city();
const foundstate = geoplugin_region();
const identity = getIdentity(foundcity, foundstate);

if (identity !== "All") {
  ReactDOM.render(<Wrapper name={identity}/>, header);
}
ReactDOM.render(<BorderImage imgsrc = {"plasma.jpg"}/>, photo);
ReactDOM.render(<Wrapper name={target}/>,giftee)

//get targets
if(identity != "All"){
	var targets = ["Peter", "Lewis", "Annie", "Somya", "Ashley"];
	var seed = "bingo our lord and savior";
	var randomized = shuffleSeed.shuffle(targets, seed);
	var targetIndex = (randomized.indexOf(identity) + 1) % targets.length;
	var target = randomized[targetIndex];
