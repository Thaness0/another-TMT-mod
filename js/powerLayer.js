addLayer("p", {
    startData() { return {
        unlocked: true,
        points: new Decimal(0),
        best: new Decimal(0),
    }},
    symbol:"<h1 style='color:#22493C'>֎</h1>",
    color:"#26A69A",
        nodeStyle: {"background": "radial-gradient(circle, #80CBC4 15%, #00695C 90%)", 'border-radius': '45%'},
    milestonePopups() {return false},
    row: "0",
    layerShown() {return true},
    hotkeys: [
        {
            key: "p", // What the hotkey button is. Use uppercase if it's combined with shift, or "ctrl+x" for holding down ctrl.
            description: "p: reset your points for prestige points", // The description of the hotkey that is displayed in the game's How To Play tab
            onPress() { if (player.p.unlocked) doReset("p") },
    }],

    resource: "power",
    baseResource: "points",
    baseAmount() {return player.points },
    requires: new Decimal(10),
    type: "normal",
    exponent: 0.5,

    gainMult() {
        mult = new Decimal(1)
        if (hasMilestone('p',0)) mult = mult.mul(1.5)
        if (hasMilestone('p',1)) mult = mult.mul(1.5)
        if (hasUpgrade('p',21)) mult = mult.mul(2)
        if (hasMilestone('p',2)) mult = mult.mul(2)
        if (hasUpgrade('p',22)) mult = mult.mul(upgradeEffect('p',22)) 
        if (hasMilestone('p',5)) mult = mult.mul(new Decimal(player.p.milestones.length).pow(0.4).mul(0.9).add(1))
        if (hasMilestone('r',0)) mult = mult.mul(3)
        if (hasMilestone('r',4)) mult = mult.mul(3)
        if (getBuyableAmount('s',13)>0) mult = mult.mul(new Decimal(1.2).mul(getBuyableAmount('s',13)))
        return mult
    }, 
    gainExp() {
        exp = new Decimal(1)
        return exp
    },
    passiveGeneration(passgenp) {
         passgenp =  0
        if (hasUpgrade('p',36)) passgenp = passgenp + 0.3
        if (hasMilestone('r',6)) passgenp = passgenp + 0.2
        passgenp = passgenp + (getBuyableAmount('s',11)*0.1)
        if(hasUpgrade('a',11)) passgenp = passgenp + (getBuyableAmount('s',11)*0.15)
            return passgenp
    }, 
    autoUpgrade() {return (player.a.autoPowUp)}, //add later

    clickables: {
        11:{ //totally not stolen from XxXOLEGXxX's my very good tree
                title:"power",
                display: "hold to Reset (totally not stolen from Y🆎oi)",
                canClick() {
                    return tmp[this.layer].canReset
                },
                onHold() {
                    doReset(this.layer)
                },
                style() {return {"border-radius":"0px 33% 33% opx","border":"4px solid","border-color":"rgba(0, 0, 0, .125)"}}

        }

    },

    upgrades: {
        11:{
            title:"time for yet another generic TMT mod",
            description:"start point generation",
            cost: new Decimal(1),
        },
        12:{
            title:"upgrade upgrade",
            description() {return "add the amount of power upgrades you've bought to your point gain"},
            cost: new Decimal(2),
            effect() {return player.p.upgrades.length},
            effectDisplay() { return "+"+format(upgradeEffect(this.layer, this.id)) },
        },
        13:{
            title:"slightly more points",
            description:"multiply point gain by 1.5x",
            cost: new Decimal(5),
        },
        14:{
            title:"another small multiplier",
            description:"multiply point gain by 1.5x",
            cost: new Decimal(12),
        },
        15:{
            title:"upgrade upgrade 2",
            description:"get a small multiplier to points based on your amount of power upgrades",
            cost: new Decimal(25),
            effect() {return (new Decimal(player.p.upgrades.length).pow(0.6).mul(0.7).add(1))},
            effectDisplay() { return "x"+format(upgradeEffect(this.layer, this.id)) },
        },
        16:{
            title:"can i have more than just upgrades",
            description:"unlock power milestones",
            cost: new Decimal(80),
        },
        21:{
            title:"maybe more power points is better",
            description:"multiply power point gain by x2",
            cost: new Decimal(200),
        },
        22:{
            title:"done with milestone for like, 3 upgrades",
            description:"multiply power point gain based on upgrades bought",
            cost: new Decimal(1200),
            effect() {return (new Decimal(player.p.upgrades.length).pow(0.4).mul(0.5).add(1))},
            effectDisplay() { return "x"+format(upgradeEffect(this.layer, this.id)) },
        },
        23:{
            title:"milestone upgrade",
            description:"add to your base point gain based on power milestones",
            cost: new Decimal(4000),
            effect() {return (new Decimal(player.p.milestones.length).pow(0.7).mul(0.9).add(1))},
            effectDisplay() { return "+"+format(upgradeEffect(this.layer, this.id)) },
        },
        24:{
            title:"WRONG",
            description:"unlock more milestones",
            cost: new Decimal(7000),
        },
        25:{
            title:"another slight boost",
            description:"multiply point gain by x1.5",
            cost: new Decimal(30000),
        },
        26:{
            title:"new kinds of content",
            description() {return "unlock a new layer<br>"},
            cost: new Decimal(75000),
        },
        31:{
            title:"back to upgrades",
            description() {return "does nothing, add to the upgrade upgrades though"},
            cost: new Decimal(500000),
            unlocked() {return hasMilestone('r',5)},
        },
        32:{
            title:"you have enough effects",
            description() {return "does nothing, add to the upgrade upgrades though"},
            cost: new Decimal(1300000),
            unlocked() {return hasMilestone('r',5)},
        },
        33:{
            title:"this will make your effects stronger",
            description() {return "does nothing, add to the upgrade upgrades though"},
            cost: new Decimal(2800000),
            unlocked() {return hasMilestone('r',5)},
        },
        34:{
            title:"maybe ill give you effects later",
            description() {return "does nothing, add to the upgrade upgrades though"},
            cost: new Decimal(5000000),
            unlocked() {return hasMilestone('r',5)},
        },
        35:{
            title:"probably not",
            description() {return "does nothing, add to the upgrade upgrades though"},
            cost: new Decimal(8888888),
            unlocked() {return hasMilestone('r',5)},
        },
        36:{
            title:"passive-ish",
            description() {return "get 30% of power points on reset per second"},
            cost: new Decimal(5000),
            unlocked() {return hasMilestone('r',5)},
        },
    },

    milestones: {
        0: {
            requirementDescription: "1000 points",
            effectDescription: "multiply power points by x1.5",
            done() { return player.points.gte(1000) && hasUpgrade('p',16)},
            unlocked() {return hasUpgrade('p',16)},
            style() {return {"border-radius": "0%", "width": "250px", "height": "80px"}},
        },
        1: {
            requirementDescription: "150 power points",
            effectDescription: "multiply power points by x1.5",
            done() { return player.p.points.gte(150) && hasMilestone('p',0)},
            unlocked() {return hasMilestone('p',0)},
            style() {return {"border-radius": "0%", "width": "250px", "height": "80px"}},
        },
        2: {
            requirementDescription: "4000 points",
            effectDescription: "multiply power points by x2",
            done() { return player.points.gte(4000) && hasMilestone('p',1)},
            unlocked() {return hasMilestone('p',1)},
            style() {return {"border-radius": "0%", "width": "250px", "height": "80px"}},
        },
        3: {
            requirementDescription: "500 power points",
            effectDescription: "multiply points by x3",
            done() { return player.p.points.gte(500) && hasMilestone('p',1)},
            unlocked() {return hasMilestone('p',1)},
            style() {return {"border-radius": "0%", "width": "250px", "height": "80px"}},
        },
        4: {
            requirementDescription: "20000 points",
            effectDescription() {return "multiply points based on milestones<br> effect: x" + format((new Decimal(player.p.milestones.length).pow(0.4).mul(0.9).add(1)))},
            done() { return player.points.gte(20000) && hasUpgrade('p',24)},
            unlocked() {return hasUpgrade('p',24)},
            style() {return {"border-radius": "0%", "width": "250px", "height": "80px"}},
        },
        5: {
            requirementDescription: "10000 power points",
            effectDescription() {return "multiply power points based on milestones<br> effect: x" + format((new Decimal(player.p.milestones.length).pow(0.4).mul(0.9).add(1)))},
            done() { return player.p.points.gte(10000) && hasUpgrade('p',24)},
            unlocked() {return hasUpgrade('p',24)},
            style() {return {"border-radius": "0%", "width": "250px", "height": "80px"}},
        },
    },

    tabFormat: [
        "main-display",
        ["row", ["prestige-button", ["clickable", 11]]],
        ["display-text", function() {return "you have " + format(player.points) + " points<br>your best points is " + format(player.p.best)}],
        "blank",
        ["column",[
            ["row",[["milestone", 0], ["milestone", 1]]], ["row",[["milestone", 2], ["milestone", 3]]], ["row",[["milestone", 4], ["milestone", 5]]]
        ]],
        "blank",
        "upgrades",
    ], 
})