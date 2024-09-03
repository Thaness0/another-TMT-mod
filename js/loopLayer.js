addLayer("l", {
    startData() { return {
        unlocked: true,
        points: new Decimal(0),
        best: new Decimal(0),
    }},
    symbol:"<h2 style='color:#880E4F'>Ω</h2>",
    color:"#BA68C8",
        nodeStyle: {"background": "radial-gradient(circle, #BA68C8 15%, #880E4F 90%)", 'border-radius': '45%',"width": "160px","height": "160px"},
    row: "2",
    position: "1",
    branches:[['p',2],['a',3],['mp',3]],
    layerShown() {return hasMilestone('r',8)||player.l.points.gte(1)},
    hotkeys: [
        {
            key: "l", // What the hotkey button is. Use uppercase if it's combined with shift, or "ctrl+x" for holding down ctrl.
            description: "l: reset your power for loops", // The description of the hotkey that is displayed in the game's How To Play tab
            onPress() { if (player.l.unlocked) doReset("l") },
    }],

    resource: "loops",
    baseResource: "power",
    baseAmount() {return player.p.points },
    requires: new Decimal(1.78e308),
    type: "normal",
    exponent: 0.7,

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
                title:"loop",
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
        ["display-text", function() {return "you have " + format(player.p.points) + " power <br>your best loops is " + format(player.l.best)}],
        "blank",
        "blank",
    ], 
})