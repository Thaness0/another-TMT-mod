addLayer("a", {
    startData() { return {
        unlocked: true,
        points: new Decimal(0),
        best: new Decimal(0),
        autoPowUp: false,
        autoProRes: false,
    }},
    symbol:"<h2 style='color:#D84315'>✥</h2>",
    color:"#FFB74D",
        nodeStyle: {"background": "radial-gradient(circle, #FFB74D 15%, #D84315 90%)", 'border-radius': '45%'},
    row: "1",
    position: "3",
    branches:[['p',1],['s',2]],
    layerShown() {return hasMilestone('r',8)||player.a.points.gte(1)},
    hotkeys: [
        {
            key: "a", // What the hotkey button is. Use uppercase if it's combined with shift, or "ctrl+x" for holding down ctrl.
            description: "a: reset your power for auto points", // The description of the hotkey that is displayed in the game's How To Play tab
            onPress() { if (player.a.unlocked) doReset("a") },
    }],

    resource: "auto points",
    baseResource: "power",
    baseAmount() {return player.p.points },
    requires: new Decimal(20000000),
    type: "static",
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
                title:"automation",
                display: "hold to Reset (totally not stolen from Y🆎oi)",
                canClick() {
                    return tmp[this.layer].canReset
                },
                onHold() {
                    doReset(this.layer)
                },
                style() {return {"border-radius":"0px 33% 33% opx","border":"4px solid","border-color":"rgba(0, 0, 0, .125)"}}

        },
        12:{ 
            title:"automate power upgrades",
            display() {return "click to toggle automated power upgrades<br>enabled: "+ player.a.autoPowUp},
            canClick() {return true},
            onClick() {
                return (player.a.autoPowUp) = !(player.a.autoPowUp)
            },
            unlocked() {return hasUpgrade('a',12)},
    },
    13:{ 
        title:"automate progress",
        display() {return "click to toggle automated progress resets<br>enabled: "+ player.a.autoProRes},
        canClick() {return true},
        onClick() {
            return (player.a.autoProRes) = !(player.a.autoProRes)
        },
        unlocked() {return hasUpgrade('a',13)},
    },

    },

    upgrades: {
        11:{
            title:"stronger power automation",
            description:"makes the effect of 'faster generation 25% per each owned instead of 10%",
            cost:new Decimal(1)
        },
        12:{
            title:"auto power",
            description:"unlock the ability to automatically buy power upgrades",
            cost:new Decimal(3)
        },
        13:{
            title:"auto progress",
            description:"unlock the ability to automatically do progress resets",
            cost:new Decimal(7)
        },
        14:{
            title:"auto speed points",
            description:"get 5% of speed on reset per second",
            cost:new Decimal(10)
        }
    },

    tabFormat: [
        "main-display",
        ["row", ["prestige-button", ["clickable", 11]]],
        ["display-text", function() {return "you have " + format(player.p.points) + " power <br>your best auto points is " + format(player.a.best)}],
        "blank",
        ["row", [["clickable", 12], ["clickable", 13], ["clickable", 14]]],
        ["row", [["clickable",21], ["clickable",22], ["clickable",23]]],
        "blank",
        "upgrades",
    ], 
})