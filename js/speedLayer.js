addLayer("s", {
    startData() { return {
        unlocked: false,
        points: new Decimal(0),
        best: new Decimal(0),
    }},
    symbol:"<h2 style='color:#1B4520'>✸</h2>",
    color:"#AED581",
        nodeStyle: {"background": "radial-gradient(circle, #AED581 15%, #388E3C 90%)", 'border-radius': '45%'},
    row: "1",
    branches:[['p',1]],
    layerShown() {return hasMilestone('r',7)||player.r.points.gte(1)},
    hotkeys: [
        {
            key: "s", // What the hotkey button is. Use uppercase if it's combined with shift, or "ctrl+x" for holding down ctrl.
            description: "s: reset your power for speed points", // The description of the hotkey that is displayed in the game's How To Play tab
            onPress() { if (player.s.unlocked) doReset("s") },
    }],

    resource: "speed points",
    baseResource: "power",
    baseAmount() {return player.p.points },
    requires: new Decimal(5000000),
    type: "normal",
    exponent: 0.3,

    gainMult() {
        mult = new Decimal(1)
        return mult
    }, 
    gainExp() {
        exp = new Decimal(1)
        return exp
    },
    passiveGeneration(passgenp) {
         passgenp =  0
            return passgenp
    }, 

    buyables: {
        11: {
            cost(x) { return new Decimal(x).pow(0.4).mul(x/3).add(1) },
            display() { return "<h2>faster generation</h2><br>gives another 10% of power on reset for each one you buy<br>cost: " + format(this.cost()) + "<br>amount owned: " + format(getBuyableAmount(this.layer, this.id)) },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
        },
        12: {
            cost(x) { return new Decimal(x).pow(0.6).mul(x/5).add(1) },
            display() { return ((getBuyableAmount('s',11)>0)?"<h2>unlocked!</h2>":"<h2>you need 1 'faster generation</h2>") + "<br><h2>more points for me</h2><br>multiply point gain by x1.5 for each you buy (it is additive)<br>cost: " + format(this.cost()) + "<br>amount owned: " + format(getBuyableAmount(this.layer, this.id)) },
            canAfford() { return (player[this.layer].points.gte(this.cost()) && (getBuyableAmount('s',11)>0))},
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
        },
        13: {
            cost(x) { return new Decimal(x).pow(1.1).mul(x/2).add(1) },
            display() { return ((getBuyableAmount('s',11)>4)?"<h2>unlocked!</h2>":"<h2>you need 5 'faster generation</h2>") + "<br><h2>can i get some power?</h2><br>multiply power gain by x1.2 for each you buy (it is additive)<br>cost: " + format(this.cost()) + "<br>amount owned: " + format(getBuyableAmount(this.layer, this.id)) },
            canAfford() { return (player[this.layer].points.gte(this.cost()) && (getBuyableAmount('s',11)>4))},
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
        },
        
    },

    tabFormat: [
        "main-display",
        "prestige-button",
        ["display-text", function() {return "you have " + format(player.p.points) + " power<br>your best points is " + format(player.s.best)}],
        "blank",
        ["column",[
            ["row",[["buyable", 11], ["buyable", 12]]], ["row",[["buyable", 13], ["buyable", 14]]], ["row",[["buyable", 15], ["buyable", 16]]]
        ]],  
        "blank",
        "upgrades",
    ], 
})