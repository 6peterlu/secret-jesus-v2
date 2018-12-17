var shuffleSeed = require('shuffle-seed')
window.onload = getData;

function getIdentity(foundcity, foundstate, foundcountry) {
	if(foundstate == "CA" && foundcity == "Saratoga") {
		return "Somya";
	} else if(foundstate == "WA") {
		return "Peter";
	} else if(foundstate == "CA" && foundcity == "Folsom") {
		return "Annie";
	} else if(foundstate == "TX") {
		return "Lewis";
	} else if(foundstate == "NY") {
		return "Ashley";
	} else {
		return "All";
	}
}

function modifyForeground(target){
	var photo = document.getElementById('photo');
	if(target == "Somya"){
		photo.src = "Somya.jpeg";
	} else if (target == "Annie"){
		photo.src = "Annie.jpeg";
	} else if (target == "Peter"){
		photo.src = "Peter.jpeg";
	} else if (target == "Lewis"){
		photo.src = "Lewis.jpeg";
	} else if (target == "Ashley"){
		photo.src = "Ashley.jpeg";
	} else if (target == "All"){
		photo.src = "plasmaXmas.jpg"; //edit this
	}
}

function getData() {
  var foundcity = geoplugin_city();
  var foundstate = geoplugin_region();
  var foundcountry = geoplugin_countryCode();
  var user = getIdentity(foundcity, foundstate, foundcountry);
  var assigned = document.getElementById('assignment');
  var welcome = document.getElementById('welcome');
  if(user != "All"){
	  var targets = ["Peter", "Lewis", "Annie", "Somya", "Ashley"];
	  var seed = "bingo our lord and savior";
	  var randomized = shuffleSeed.shuffle(targets, seed);
	  var targetIndex = (randomized.indexOf(user) + 1) % targets.length;
	  var target = randomized[targetIndex];
	  modifyForeground(target);
	  welcome.innerHTML = "Welcome " + user + "!";
	  assigned.innerHTML = "your target is: " + target;
  } else {
  	welcome.innerHTML = "Welcome back!";
  	assigned.innerHTML = "Don't forget to gift your assigned person, and have a fantastic quarter!(:"
  }

}
