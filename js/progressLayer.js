addLayer("r", {
    startData() { return {
        unlocked: true,
        points: new Decimal(0),
        best: new Decimal(0),
    }},
    symbol:"<h2 style='color:#6C0E2F'>✾</h2>",
    color:"#EF5350",
        nodeStyle: {"background": "radial-gradient(circle, #EF5350 15%, #AD1457 90%)", 'border-radius': '45%'},
    row: "1",
    branches:[['p',1]],
    layerShown() {return hasUpgrade('p',26)||player.r.points.gte(1)},
    hotkeys: [
        {
            key: "r", // What the hotkey button is. Use uppercase if it's combined with shift, or "ctrl+x" for holding down ctrl.
            description: "r: reset your power points for progress", // The description of the hotkey that is displayed in the game's How To Play tab
            onPress() { if (player.r.unlocked) doReset("r") },
    }],

    resource: "progress",
    baseResource: "power points",
    baseAmount() {return player.p.points },
    requires: new Decimal(50000),
    type: "static",
    exponent: 0.8,

    gainMult() {
        mult = new Decimal(1)
        return mult
    }, 
    gainExp() {
        exp = new Decimal(1)
        return exp
    },

    upgrades: {
    },

    milestones: {
        0: {
            requirementDescription: "1 progress",
            effectDescription: "multiply power points by x3",
            done() { return player.r.points.gte(1)},
            unlocked() {return true},
            style() {return {"border-radius": "0%", "width": "250px", "height": "80px"}},
        },
        1: {
            requirementDescription: "2 progress",
            effectDescription: "multiply points by x3",
            done() { return player.r.points.gte(2)},
            unlocked() {return true},
            style() {return {"border-radius": "0%", "width": "250px", "height": "80px"}},
        },
        2: {
            requirementDescription: "3 progress",
            effectDescription: "reapply 'milestone upgrade'",
            done() { return player.r.points.gte(3)},
            unlocked() {return player.r.points.gte(2)},
            style() {return {"border-radius": "0%", "width": "250px", "height": "80px"}},
        },
        3: {
            requirementDescription: "4 progress",
            effectDescription: "multiply points by x2",
            done() { return player.r.points.gte(4)},
            unlocked() {return player.r.points.gte(2)},
            style() {return {"border-radius": "0%", "width": "250px", "height": "80px"}},
        },
        4: {
            requirementDescription: "5 progress",
            effectDescription(){return "boost point gain based on progress<br> effect: x"+ format(new Decimal(player.r.points).pow(0.6).mul(0.4).add(1))},
            done() { return player.r.points.gte(5)},
            unlocked() {return player.r.points.gte(4)},
            style() {return {"border-radius": "0%", "width": "250px", "height": "80px"}},
        },
        5: {
            requirementDescription: "6 progress",
            effectDescription: "unlock a new row of power upgrades",
            done() { return player.r.points.gte(6)},
            unlocked() {return player.r.points.gte(4)},
            style() {return {"border-radius": "0%", "width": "250px", "height": "80px"}},
        },
        6: {
            requirementDescription: "10 progress",
            effectDescription: "automatically buy power upgrades and get 20% of power points on reset per second",
            done() { return player.r.points.gte(10)},
            unlocked() {return hasMilestone('r',5)},
            style() {return {"border-radius": "0%", "width": "250px", "height": "80px"}},
        },
        7: {
            requirementDescription: "15 progress",
            effectDescription: "unlock a new layer",
            done() { return player.r.points.gte(15)},
            unlocked() {return hasMilestone('r',5)},
            style() {return {"border-radius": "0%", "width": "250px", "height": "80px"}},
        },
    },

    tabFormat: [
        "main-display",
        "prestige-button",
        ["display-text", function() {return "you have " + format(player.p.points) + " power points<br>your best progress is " + format(player.r.best)}],
        "blank",
        ["column",[
            ["row",[["milestone", 0], ["milestone", 1]]], ["row",[["milestone", 2], ["milestone", 3]]], ["row",[["milestone", 4], ["milestone", 5]]],  ["row",[["milestone", 6], ["milestone", 7]]]
        ]],
        "blank",
        "upgrades",
    ], 
})