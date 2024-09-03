addLayer("mp", {
    startData() { return {
        unlocked: true,
        points: new Decimal(0),
        best: new Decimal(0),
    }},
    symbol:"<h2 style='color:#220C4A'>❃</h2>",
    color:"#303F9F",
        nodeStyle: {"background": "radial-gradient(circle, #1E88E5 15%, #220C4A 90%)", 'border-radius': '45%'},
    row: "1",
    position: "0",
    branches:[['p',1],['r',2]],
    layerShown() {return hasMilestone('r',8)||player.mp.points.gte(1)},
    hotkeys: [
        {
            key: "P", // What the hotkey button is. Use uppercase if it's combined with shift, or "ctrl+x" for holding down ctrl.
            description: "shift + P: reset your power for meta-power", // The description of the hotkey that is displayed in the game's How To Play tab
            onPress() { if (player.a.unlocked) doReset("a") },
    }],

    resource: "meta-power",
    baseResource: "power",
    baseAmount() {return player.p.points },
    requires: new Decimal(1e9),
    type: "normal",
    exponent: 0.2,

    gainMult() {
        mult = new Decimal(1)
        return mult
    }, 
    gainExp() {
        exp = new Decimal(1)
        return exp
    },
    passiveGeneration(passgen) {
            passgen =  0
        return passgen
    }, 
    autoUpgrade() {return false}, //add later

    clickables: {
        11:{ //totally not stolen from XxXOLEGXxX's my very good tree
                title:"meta-power",
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

    tabFormat: [
        "main-display",
        ["row", ["prestige-button", ["clickable", 11]]],
        ["display-text", function() {return "you have " + format(player.p.points) + " power <br>your best meta-power is " + format(player.mp.best)}],
        "blank",
        "blank",
    ], 
})