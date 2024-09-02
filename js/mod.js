let modInfo = {
	name: "The loop Tree",
	id: "MEGASHIT",
	author: "Thaness0",
	pointsName: "points",
	modFiles: ["powerLayer.js", "tree.js", "sideLayers.js", "progressLayer.js","speedLayer.js"],

	discordName: "",
	discordLink: "",
	initialStartPoints: new Decimal (10), // Used for hard resets and new players
	offlineLimit: 1,  // In hours
}

// Set your version in num and name
let VERSION = {
	num: "0.1",
	name: "starting out",
}

let changelog = `<h1>Changelog:</h1><br>
	<h3>v0.1</h3><br>
		- added 3 prestige layers<br>
		- Added achievements and savebank<br>
		- 2 new themes.`

let winText = `good job beating the game! you probably were not suppose to do this yet`

// If you add new functions anywhere inside of a layer, and those functions have an effect when called, add them here.
// (The ones here are examples, all official functions are already taken care of)
var doNotCallTheseFunctionsEveryTick = ["blowUpEverything", "importSave"]

function getStartPoints(){
    return new Decimal(modInfo.initialStartPoints)
}

// Determines if it should show points/sec
function canGenPoints(){
	return true
}

// Calculate points/sec!
function getPointGen() {
	if(!canGenPoints())
		return new Decimal(0)

	let gain = new Decimal(0)
	if (hasUpgrade('p',11)) gain = gain.add(1)
	if (hasUpgrade('p',12)) gain = gain.add(upgradeEffect('p',12))
	if (hasUpgrade('p',23)) gain = gain.add(upgradeEffect('p',23))
	if (hasMilestone('r',2)) gain = gain.add(upgradeEffect('p',23))
	if (hasUpgrade('p',13)) gain = gain.times(1.5)
	if (hasUpgrade('p',14)) gain = gain.times(1.5)
	if (hasUpgrade('p',15)) gain = gain.times(upgradeEffect('p',15))
	if (hasMilestone('p',3)) gain = gain.mul(3)
	if (hasMilestone('p',5)) gain = gain.mul((new Decimal(player.p.milestones.length).pow(0.4).mul(0.9).add(1)))
	if (hasUpgrade('p',25)) gain = gain.times(1.5)
	if (hasMilestone('r',1)) gain = gain.mul(3)
	if (hasMilestone('r',3)) gain = gain.mul(2)
	if (hasMilestone('r',4)) gain = gain.mul(new Decimal(player.r.points).pow(0.6).mul(0.4).add(1))
	if (getBuyableAmount('s',12)>0) gain = gain.mul(new Decimal(1.5).mul(getBuyableAmount('s',12)))
	return gain
}

// You can add non-layer related variables that should to into "player" and be saved here, along with default values
function addedPlayerData() { return {
}}

// Display extra things at the top of the page
var displayThings = [function() 
	{return "current endgame: IDK yet" + 
		    "<br> for some reason the layers randomly appear and disappear when you reload the page,"+
			"<br>i wish i knew why. just reload until you see them (this can take a while, sorry)"
}]

// Determines when the game "ends"
function isEndgame() {
	return player.points.gte(new Decimal("e280000000"))
}



// Less important things beyond this point!

// Style for the background, can be a function
var backgroundStyle = {

}

// You can change this if you have things that can be messed up by long tick lengths
function maxTickLength() {
	return(3600) // Default is 1 hour which is just arbitrarily large
}

// Use this if you need to undo inflation from an older version. If the version is older than the version that fixed the issue,
// you can cap their current resources with this.
function fixOldSave(oldVersion){
}