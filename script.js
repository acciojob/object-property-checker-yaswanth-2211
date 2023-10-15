const sampleObject = { red: "#FF0000", green: "#00FF00", white: "#FFFFFF" };

function hasKey(key) {
  //   write your code her
	for(i=0;i<3;i++){
		if(key==Object.keys(sampleObject)[i]){
			return true
		}
	}
	return false;
	
}

// Do not change the code below
const key = prompt("Enter Key.");
alert(hasKey(key));
