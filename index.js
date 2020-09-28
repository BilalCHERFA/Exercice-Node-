var myInfos = require("./information");

const cowsay = require("cowsay");

console.log(cowsay.say({
	text : `Hi I'm ${myInfos.name} from ${myInfos.campus}`,
	e : "oO",
	T : "U "
}));

    
    
    




