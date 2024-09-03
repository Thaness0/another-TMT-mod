let modInfo = {
	name: "The Power Tree",
	id: "MEGASHIT",
	author: "Thaness0",
	pointsName: "points",
	modFiles: ["powerLayer.js", "tree.js", "sideLayers.js", "progressLayer.js","speedLayer.js","autoLayer.js"],//add mpower and loop later

	discordName: "totally real discord",
	discordLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
	initialStartPoints: new Decimal (10), // Used for hard resets and new players
	offlineLimit: 1,  // In hours
}

// Set your version in num and name
let VERSION = {
	num: "v0.1",
	name: "Another Generic TMT Mod",
}

let changelog = `<h1>Changelog:</h1><br>
	<h3>v0.1</h3><br>
		-added 2 more prestige layers and finished the other 2<br>
		-added more achievements<br>
		-added an actual end point (40 progress)<br>
		- other stuff <br>
		-3 :3's (including this one)
	<h3>v0.0.1 test update</h3><br>
		- added 2 prestige layers<br>
		- Added achievements<br>
		- 2 new themes.`

let winText = `good job beating the game! you probably were not suppose to do this yet`

// If you add new functions anywhere inside of a layer, and those functions have an effect when called, add them here.
// (The ones here are examples, all official functions are already taken care of)
var doNotCallTheseFunctionsEveryTick = ["blowUpEverything"]

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
	if (hasMilestone('p',4)) gain = gain.mul((new Decimal(player.p.milestones.length).pow(0.4).mul(0.9).add(1)))
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
	{return "current endgame: 40 progress" + 
		    "<br>  if layers aren't visible, try reloading the page"+
			"<br>"
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