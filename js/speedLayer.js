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
    position: "2",
    branches:[['p',1]],
    layerShown() {return hasMilestone('r',7)||player.s.points.gte(1)},
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
        if(getBuyableAmount('s',14)>0) mult = mult.mul(new Decimal(1.4).pow(getBuyableAmount('s',14)))
        return mult
    }, 
    gainExp() {
        exp = new Decimal(1)
        return exp
    },
    passiveGeneration(passgen) {
         passgen =  0
         if (hasUpgrade('a',14))passgen = passgen + 0.05
            return passgen
    }, 

    clickables: {
        11:{ //totally not stolen from XxXOLEGXxX's my very good tree
                title:"speed",
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

    buyables: {
        11: {
            cost(x) { return new Decimal(x).pow(0.4).mul(x/3).add(1) },
            display() { return "<h2>faster generation</h2><br>gives another 10% of power on reset for each one you buy<br>cost: " + format(this.cost()) + "<br>amount owned: " + format(getBuyableAmount(this.layer, this.id)) + "<br>effect: +" + ((hasUpgrade('a',11))? format(new Decimal(getBuyableAmount('s',11)).mul(25)):format(new Decimal(getBuyableAmount('s',11)).mul(10))) + "%" },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
        },
        12: {
            cost(x) { return new Decimal(x).pow(0.6).mul(x/5).add(1) },
            display() { return ((getBuyableAmount('s',11)>0)?"<h2>unlocked!</h2>":"<h2>you need 1 'faster generation'</h2>") + "<br><h2>more points for me</h2><br>multiply point gain by x1.5 for each you buy (it is additive)<br>cost: " + format(this.cost()) + "<br>amount owned: " + format(getBuyableAmount(this.layer, this.id)) + "<br>effect: x" + format(new Decimal(getBuyableAmount('s',12)).mul(1.5))},
            canAfford() { return (player[this.layer].points.gte(this.cost()) && (getBuyableAmount('s',11)>0))},
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
        },
        13: {
            cost(x) { return new Decimal(x).pow(1.1).mul(x/2).add(1) },
            display() { return ((getBuyableAmount('s',11)>2)?"<h2>unlocked!</h2>":"<h2>you need 3 'faster generation'</h2>") + "<br><h2>can i get some power?</h2><br>multiply power gain by x1.2 for each you buy (it is additive)<br>cost: " + format(this.cost()) + "<br>amount owned: " + format(getBuyableAmount(this.layer, this.id)) + "<br>effect: x" + format(new Decimal(getBuyableAmount('s',13)).mul(1.2))},
            canAfford() { return (player[this.layer].points.gte(this.cost()) && (getBuyableAmount('s',11)>2))},
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
        },
        14: {
            cost(x) { return new Decimal(x).pow(2.2).mul(x/2).add(1).pow((getBuyableAmount('s',14)>20)?1.4:1) },
            display() { return ((getBuyableAmount('s',13)>3)?"<h2>unlocked!</h2>":"<h2>you need 4 'can i get some power?'</h2>") + "<br><h2>speedy speed</h2><br>multiply speed gain by x1.4 for each you buy (it is multiplicitive)<br>cost: " + format(this.cost()) + "<br>amount owned: " + format(getBuyableAmount(this.layer, this.id)) + "<br>effect: x" + format(new Decimal(1.4).pow(new Decimal(getBuyableAmount('s',14))))},
            canAfford() { return (player[this.layer].points.gte(this.cost()) && (getBuyableAmount('s',13)>3))},
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            unlocked() {return hasMilestone('r',8)},
        },
        15: {
            cost(x) { return (new Decimal(x).add(1)).pow(2).mul(x/2).add(2).pow(18)},// .pow(18) is temp meant to stop getting any yet
            display() { return ((getBuyableAmount('s',14)>9999)?"<h2>unlocked!</h2>":"<h2>you aren't getting this yet</h2>") + "<br><h2>not yet :3</h2><br>multiply nothing by x1 duodecilion!1!!1 for each you buy (it is a thing)<br>cost: " + format(this.cost()) + "<br>amount owned: " + format(getBuyableAmount(this.layer, this.id)) + "<br>effect: ^^" + format(new Decimal(1.4).pow(new Decimal(getBuyableAmount('s',15))))},
            canAfford() { return (player[this.layer].points.gte(this.cost()) && (getBuyableAmount('s',14)>9999))},
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            unlocked() {return hasMilestone('r',9)},
        },
        16: {
            cost(x) { return (new Decimal(x).add(1)).pow(2).mul(x/2).add(2).pow(18)},// .pow(18) is temp meant to stop getting any yet
            display() { return ((getBuyableAmount('s',14)>9999)?"<h2>unlocked!</h2>":"<h2>you aren't getting this yet</h2>") + "<br><h2>not yet :3</h2><br>multiply nothing by x1 duodecilion!1!!1 for each you buy (it is a thing)<br>cost: " + format(this.cost()) + "<br>amount owned: " + format(getBuyableAmount(this.layer, this.id)) + "<br>effect: ^^" + format(new Decimal(1.4).pow(new Decimal(getBuyableAmount('s',15))))},
            canAfford() { return (player[this.layer].points.gte(this.cost()) && (getBuyableAmount('s',14)>9999))},
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            unlocked() {return hasMilestone('r',9)},
        },
        
    },

    tabFormat: [
        "main-display",
        ["row", ["prestige-button", ["clickable", 11]]],
        ["display-text", function() {return "you have " + format(player.p.points) + " power<br>your best points is " + format(player.s.best)}],
        "blank",
        ["column",[
            ["row",[["buyable", 11], ["buyable", 12]]], ["row",[["buyable", 13], ["buyable", 14]]], ["row",[["buyable", 15], ["buyable", 16]]]
        ]],  
        "blank",
        "upgrades",
    ], 
})