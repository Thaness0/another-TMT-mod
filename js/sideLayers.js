addLayer("ach", {
    startData() { return {
        unlocked: true,
        points: new Decimal(0),
    }},
    symbol:"<h2 style='color:#824200'>❂</h2>",
    color:"#FFF176",
        nodeStyle: {"background": "radial-gradient(circle, #FFF176 15%, #FF8F00 90%)", 'border-radius': '45%', 'width': '80px', 'height': '80px'},
    row: "side",
    layerShown() {return true},

    resource: "achievements",
    baseResource: "points",
    baseAmount() {return player.points },
    type: "none",

   achievements: {
    11: {
        name:"first is alway free",
        done() {return hasUpgrade('p',11)},
        tooltip() {return "get the first power upgrade"},
        style(){return {"border-radius": "10% / 10%", "width": "100px", "height": "100px", 'background-color': (hasAchievement('ach',this.id)?(hasAchievement('ach', 16))?'#FFF176':'#FF8F60':'#bf8f8f' )}},
        onComplete() {player['ach'].points = player['ach'].points.add(1) },
    },
    12: {
        name:"double probably isn't slight",
        done() {return hasUpgrade('p',13)},
        tooltip() {return "get the third power upgrade"},
        style(){return {"border-radius": "10% / 10%", "width": "100px", "height": "100px", 'background-color': (hasAchievement('ach',this.id)?(hasAchievement('ach', 16))?'#FFF176':'#FF8F60':'#bf8f8f' )}},
        onComplete() {player['ach'].points = player['ach'].points.add(1) },
    },
    13: {
        name:"a very small amount of point",
        done() {return player.points.gte(100)},
        tooltip() {return "get 100 points"},
        style(){return {"border-radius": "10% / 10%", "width": "100px", "height": "100px", 'background-color': (hasAchievement('ach',this.id)?(hasAchievement('ach', 16))?'#FFF176':'#FF8F60':'#bf8f8f' )}},
        onComplete() {player['ach'].points = player['ach'].points.add(1) },
    },
    14: {
        name:"milestone time",
        done() {return hasMilestone('p',0)},
        tooltip() {return "get the first power milestone"},
        style(){return {"border-radius": "10% / 10%", "width": "100px", "height": "100px", 'background-color': (hasAchievement('ach',this.id)?(hasAchievement('ach', 16))?'#FFF176':'#FF8F60':'#bf8f8f' )}},
        onComplete() {player['ach'].points = player['ach'].points.add(1) },
    },
    15: {
        name:"that got expensive fast",
        done() {return hasUpgrade('p',22)},
        tooltip() {return "get the eigth power upgrade"},
        style(){return {"border-radius": "10% / 10%", "width": "100px", "height": "100px", 'background-color': (hasAchievement('ach',this.id)?(hasAchievement('ach', 16))?'#FFF176':'#FF8F60':'#bf8f8f' )}},
        onComplete() {player['ach'].points = player['ach'].points.add(1) },
    },
    16: {
        name:"even more milestones",
        done() {return hasMilestone('p', 4)},
        tooltip() {return "get the fifth power milestone"},
        style(){return {"border-radius": "10% / 10%", "width": "100px", "height": "100px", 'background-color': (hasAchievement('ach',this.id)?(hasAchievement('ach', 16))?'#FFF176':'#FF8F60':'#bf8f8f' )}},
        onComplete() {player['ach'].points = player['ach'].points.add(1) },
    },
    21: {
        name:"time for a new layer",
        done() {return player.r.points.gte(1)},
        tooltip() {return "get 1 progress"},
        style(){return {"border-radius": "10% / 10%", "width": "100px", "height": "100px", 'background-color': (hasAchievement('ach',this.id)?(hasAchievement('ach', 26))?'#FFF176':'#FF8F60':'#bf8f8f' )}},
        onComplete() {player['ach'].points = player['ach'].points.add(1) },
    },
    22: {
        name:"milestones galore",
        done() {return hasMilestone('r', 2)},
        tooltip() {return "get the third progress milestone"},
        style(){return {"border-radius": "10% / 10%", "width": "100px", "height": "100px", 'background-color': (hasAchievement('ach',this.id)?(hasAchievement('ach', 26))?'#FFF176':'#FF8F60':'#bf8f8f' )}},
        onComplete() {player['ach'].points = player['ach'].points.add(1) },
    },
    23: {
        name:"points without points?",
        done() {return (player.points.gte(15000) && !(hasUpgrade('p',11)))},
        tooltip() {return "get 15000 points with the first power upgrade"},
        style(){return {"border-radius": "10% / 10%", "width": "100px", "height": "100px", 'background-color': (hasAchievement('ach',this.id)?(hasAchievement('ach', 26))?'#FFF176':'#FF8F60':'#bf8f8f' )}},
        onComplete() {player['ach'].points = player['ach'].points.add(1) },
    },
    24: {
        name:"very very useful",
        done() {return (hasMilestone('r',5))},
        tooltip() {return "get the sixth progress milestone"},
        style(){return {"border-radius": "10% / 10%", "width": "100px", "height": "100px", 'background-color': (hasAchievement('ach',this.id)?(hasAchievement('ach', 26))?'#FFF176':'#FF8F60':'#bf8f8f' )}},
        onComplete() {player['ach'].points = player['ach'].points.add(1) },
    },
    25: {
        name:"time to automate",
        done() {return (hasMilestone('r',6))},
        tooltip() {return "get the seventh progress milestone"},
        style(){return {"border-radius": "10% / 10%", "width": "100px", "height": "100px", 'background-color': (hasAchievement('ach',this.id)?(hasAchievement('ach', 26))?'#FFF176':'#FF8F60':'#bf8f8f' )}},
        onComplete() {player['ach'].points = player['ach'].points.add(1) },
    },
    26: {
        name:"all the filler",
        done() {return (hasUpgrade('p',35))},
        tooltip() {return "get power upgrade 'probably not'"},
        style(){return {"border-radius": "10% / 10%", "width": "100px", "height": "100px", 'background-color': (hasAchievement('ach',this.id)?(hasAchievement('ach', 26))?'#FFF176':'#FF8F60':'#bf8f8f' )}},
        onComplete() {player['ach'].points = player['ach'].points.add(1) },
    },
   },

    tabFormat: [
        ["display-text", function() {return "you have achieved <h2 style='color:#FFF176'>" + player.ach.achievements.length + "/idk</h2> achievements"}],
        "blank",
        "blank",
        ["row", [["achievement", 11], ["achievement", 12], ["achievement", 13], ["achievement", 14], ["achievement", 15], ["achievement", 16]]],
        ["row", [["achievement", 21], ["achievement", 22], ["achievement", 23], ["achievement", 24], ["achievement", 25], ["achievement", 26]]],
    ],
}),

addLayer("save", {
    startData() { return {
        unlocked: true,
        points: new Decimal(2),
    }},
    symbol:"<h2 style='color:#111111'>!</h2>",
    color:"#757575",
        nodeStyle: {"background": "radial-gradient(circle, #F5F5F5 15%, #424242 90%)", 'border-radius': '45%', 'width': '80px', 'height': '80px'},
    row: "side",
    layerShown() {return true},

    resource: "saves",
    baseResource: "points",
    baseAmount() {return player.points },
    type: "none",

    clickables: {
        11: {
            title: "power",
            display: "layer finished",
            canClick: true,
            onClick() {
                if(!confirm("your current progress won't be saved!")) return;
                importSave("eyJ0YWIiOiJvcHRpb25zLXRhYiIsIm5hdlRhYiI6InRyZWUtdGFiIiwidGltZSI6MTcyNDk4MDI3NzU2OSwibm90aWZ5Ijp7fSwidmVyc2lvblR5cGUiOiJNRUdBU0hJVCIsInZlcnNpb24iOiIwLjAiLCJ0aW1lUGxheWVkIjo1NzkuNDA0MDAwMDAwMDAzMSwia2VlcEdvaW5nIjpmYWxzZSwiaGFzTmFOIjpmYWxzZSwicG9pbnRzIjoiMzI5ODYuMTM4OTA2MTIxMTE2Iiwic3VidGFicyI6eyJjaGFuZ2Vsb2ctdGFiIjp7fX0sImxhc3RTYWZlVGFiIjoicCIsImluZm9ib3hlcyI6e30sImluZm8tdGFiIjp7InVubG9ja2VkIjp0cnVlLCJ0b3RhbCI6IjAiLCJiZXN0IjoiMCIsInJlc2V0VGltZSI6NTc5LjQwNDAwMDAwMDAwMzEsImZvcmNlVG9vbHRpcCI6ZmFsc2UsImJ1eWFibGVzIjp7fSwibm9SZXNwZWNDb25maXJtIjpmYWxzZSwiY2xpY2thYmxlcyI6e30sInNwZW50T25CdXlhYmxlcyI6IjAiLCJ1cGdyYWRlcyI6W10sIm1pbGVzdG9uZXMiOltdLCJsYXN0TWlsZXN0b25lIjpudWxsLCJhY2hpZXZlbWVudHMiOltdLCJjaGFsbGVuZ2VzIjp7fSwiZ3JpZCI6e30sInByZXZUYWIiOiIifSwib3B0aW9ucy10YWIiOnsidW5sb2NrZWQiOnRydWUsInRvdGFsIjoiMCIsImJlc3QiOiIwIiwicmVzZXRUaW1lIjo1NzkuNDA0MDAwMDAwMDAzMSwiZm9yY2VUb29sdGlwIjpmYWxzZSwiYnV5YWJsZXMiOnt9LCJub1Jlc3BlY0NvbmZpcm0iOmZhbHNlLCJjbGlja2FibGVzIjp7fSwic3BlbnRPbkJ1eWFibGVzIjoiMCIsInVwZ3JhZGVzIjpbXSwibWlsZXN0b25lcyI6W10sImxhc3RNaWxlc3RvbmUiOm51bGwsImFjaGlldmVtZW50cyI6W10sImNoYWxsZW5nZXMiOnt9LCJncmlkIjp7fSwicHJldlRhYiI6IiJ9LCJjaGFuZ2Vsb2ctdGFiIjp7InVubG9ja2VkIjp0cnVlLCJ0b3RhbCI6IjAiLCJiZXN0IjoiMCIsInJlc2V0VGltZSI6NTc5LjQwNDAwMDAwMDAwMzEsImZvcmNlVG9vbHRpcCI6ZmFsc2UsImJ1eWFibGVzIjp7fSwibm9SZXNwZWNDb25maXJtIjpmYWxzZSwiY2xpY2thYmxlcyI6e30sInNwZW50T25CdXlhYmxlcyI6IjAiLCJ1cGdyYWRlcyI6W10sIm1pbGVzdG9uZXMiOltdLCJsYXN0TWlsZXN0b25lIjpudWxsLCJhY2hpZXZlbWVudHMiOltdLCJjaGFsbGVuZ2VzIjp7fSwiZ3JpZCI6e30sInByZXZUYWIiOiIifSwiYmxhbmsiOnsidW5sb2NrZWQiOnRydWUsInRvdGFsIjoiMCIsImJlc3QiOiIwIiwicmVzZXRUaW1lIjo1NzkuNDA0MDAwMDAwMDAzMSwiZm9yY2VUb29sdGlwIjpmYWxzZSwiYnV5YWJsZXMiOnt9LCJub1Jlc3BlY0NvbmZpcm0iOmZhbHNlLCJjbGlja2FibGVzIjp7fSwic3BlbnRPbkJ1eWFibGVzIjoiMCIsInVwZ3JhZGVzIjpbXSwibWlsZXN0b25lcyI6W10sImxhc3RNaWxlc3RvbmUiOm51bGwsImFjaGlldmVtZW50cyI6W10sImNoYWxsZW5nZXMiOnt9LCJncmlkIjp7fSwicHJldlRhYiI6IiJ9LCJ0cmVlLXRhYiI6eyJ1bmxvY2tlZCI6dHJ1ZSwidG90YWwiOiIwIiwiYmVzdCI6IjAiLCJyZXNldFRpbWUiOjU3OS40MDQwMDAwMDAwMDMxLCJmb3JjZVRvb2x0aXAiOmZhbHNlLCJidXlhYmxlcyI6e30sIm5vUmVzcGVjQ29uZmlybSI6ZmFsc2UsImNsaWNrYWJsZXMiOnt9LCJzcGVudE9uQnV5YWJsZXMiOiIwIiwidXBncmFkZXMiOltdLCJtaWxlc3RvbmVzIjpbXSwibGFzdE1pbGVzdG9uZSI6bnVsbCwiYWNoaWV2ZW1lbnRzIjpbXSwiY2hhbGxlbmdlcyI6e30sImdyaWQiOnt9LCJwcmV2VGFiIjoiIn0sImFjaCI6eyJ1bmxvY2tlZCI6dHJ1ZSwicG9pbnRzIjoiNiIsInRvdGFsIjoiMCIsImJlc3QiOiI2IiwicmVzZXRUaW1lIjo1NzkuNDA0MDAwMDAwMDAzMSwiZm9yY2VUb29sdGlwIjp0cnVlLCJidXlhYmxlcyI6e30sIm5vUmVzcGVjQ29uZmlybSI6ZmFsc2UsImNsaWNrYWJsZXMiOnt9LCJzcGVudE9uQnV5YWJsZXMiOiIwIiwidXBncmFkZXMiOltdLCJtaWxlc3RvbmVzIjpbXSwibGFzdE1pbGVzdG9uZSI6bnVsbCwiYWNoaWV2ZW1lbnRzIjpbIjExIiwiMTIiLCIxMyIsIjE0IiwiMTUiLCIxNiJdLCJjaGFsbGVuZ2VzIjp7fSwiZ3JpZCI6e30sInByZXZUYWIiOiIifSwic2F2ZSI6eyJ1bmxvY2tlZCI6dHJ1ZSwicG9pbnRzIjoiMSIsInRvdGFsIjoiMCIsImJlc3QiOiIxIiwicmVzZXRUaW1lIjo1NzkuNDA0MDAwMDAwMDAzMSwiZm9yY2VUb29sdGlwIjpmYWxzZSwiYnV5YWJsZXMiOnt9LCJub1Jlc3BlY0NvbmZpcm0iOmZhbHNlLCJjbGlja2FibGVzIjp7IjExIjoiIn0sInNwZW50T25CdXlhYmxlcyI6IjAiLCJ1cGdyYWRlcyI6W10sIm1pbGVzdG9uZXMiOltdLCJsYXN0TWlsZXN0b25lIjpudWxsLCJhY2hpZXZlbWVudHMiOltdLCJjaGFsbGVuZ2VzIjp7fSwiZ3JpZCI6e30sInByZXZUYWIiOiIifSwicCI6eyJ1bmxvY2tlZCI6dHJ1ZSwicG9pbnRzIjoiMjc5OCIsImJlc3QiOiI3NTc4OCIsInRvdGFsIjoiMTIwMzIzIiwicmVzZXRUaW1lIjoxNi4yNTgwMDAwMDAwMDAwMDYsImZvcmNlVG9vbHRpcCI6dHJ1ZSwiYnV5YWJsZXMiOnt9LCJub1Jlc3BlY0NvbmZpcm0iOmZhbHNlLCJjbGlja2FibGVzIjp7fSwic3BlbnRPbkJ1eWFibGVzIjoiMCIsInVwZ3JhZGVzIjpbMTEsMTIsMTMsMTQsMTUsMTYsMjEsMjIsMjMsMjQsMjUsMjZdLCJtaWxlc3RvbmVzIjpbIjAiLCIxIiwiMyIsIjIiLCI0IiwiNSJdLCJsYXN0TWlsZXN0b25lIjoiNSIsImFjaGlldmVtZW50cyI6W10sImNoYWxsZW5nZXMiOnt9LCJncmlkIjp7fSwicHJldlRhYiI6IiJ9LCJyIjp7InVubG9ja2VkIjp0cnVlLCJwb2ludHMiOiIwIiwiYmVzdCI6IjAiLCJ0b3RhbCI6IjAiLCJyZXNldFRpbWUiOjU3Mi41NzMwMDAwMDAwMDIxLCJmb3JjZVRvb2x0aXAiOnRydWUsImJ1eWFibGVzIjp7fSwibm9SZXNwZWNDb25maXJtIjpmYWxzZSwiY2xpY2thYmxlcyI6e30sInNwZW50T25CdXlhYmxlcyI6IjAiLCJ1cGdyYWRlcyI6W10sIm1pbGVzdG9uZXMiOltdLCJsYXN0TWlsZXN0b25lIjpudWxsLCJhY2hpZXZlbWVudHMiOltdLCJjaGFsbGVuZ2VzIjp7fSwiZ3JpZCI6e30sInByZXZUYWIiOiIifX0=")
            },
            style() {return{
                'background-color': tmp.p.color,
            }},
        },
        12: {
            title: "progress",
            display: "layer finished",
            canClick: true,
            onClick() {
                if(!confirm("your current progress won't be saved!")) return;
                importSave("eyJ0YWIiOiJvcHRpb25zLXRhYiIsIm5hdlRhYiI6InRyZWUtdGFiIiwidGltZSI6MTcyNTA0ODQ4MDAzOCwibm90aWZ5Ijp7fSwidmVyc2lvblR5cGUiOiJNRUdBU0hJVCIsInZlcnNpb24iOiIwLjAiLCJ0aW1lUGxheWVkIjozNzU2LjA5MzAwMDAwMDI2NSwia2VlcEdvaW5nIjpmYWxzZSwiaGFzTmFOIjpmYWxzZSwicG9pbnRzIjoiMjEwLjM0NzU1OTk4MTU5MDM0Iiwic3VidGFicyI6eyJjaGFuZ2Vsb2ctdGFiIjp7fX0sImxhc3RTYWZlVGFiIjoiciIsImluZm9ib3hlcyI6e30sImluZm8tdGFiIjp7InVubG9ja2VkIjp0cnVlLCJ0b3RhbCI6IjAiLCJiZXN0IjoiMCIsInJlc2V0VGltZSI6Mzc1Ni4wOTMwMDAwMDAyNjUsImZvcmNlVG9vbHRpcCI6ZmFsc2UsImJ1eWFibGVzIjp7fSwibm9SZXNwZWNDb25maXJtIjpmYWxzZSwiY2xpY2thYmxlcyI6e30sInNwZW50T25CdXlhYmxlcyI6IjAiLCJ1cGdyYWRlcyI6W10sIm1pbGVzdG9uZXMiOltdLCJsYXN0TWlsZXN0b25lIjpudWxsLCJhY2hpZXZlbWVudHMiOltdLCJjaGFsbGVuZ2VzIjp7fSwiZ3JpZCI6e30sInByZXZUYWIiOiIifSwib3B0aW9ucy10YWIiOnsidW5sb2NrZWQiOnRydWUsInRvdGFsIjoiMCIsImJlc3QiOiIwIiwicmVzZXRUaW1lIjozNzU2LjA5MzAwMDAwMDI2NSwiZm9yY2VUb29sdGlwIjpmYWxzZSwiYnV5YWJsZXMiOnt9LCJub1Jlc3BlY0NvbmZpcm0iOmZhbHNlLCJjbGlja2FibGVzIjp7fSwic3BlbnRPbkJ1eWFibGVzIjoiMCIsInVwZ3JhZGVzIjpbXSwibWlsZXN0b25lcyI6W10sImxhc3RNaWxlc3RvbmUiOm51bGwsImFjaGlldmVtZW50cyI6W10sImNoYWxsZW5nZXMiOnt9LCJncmlkIjp7fSwicHJldlRhYiI6IiJ9LCJjaGFuZ2Vsb2ctdGFiIjp7InVubG9ja2VkIjp0cnVlLCJ0b3RhbCI6IjAiLCJiZXN0IjoiMCIsInJlc2V0VGltZSI6Mzc1Ni4wOTMwMDAwMDAyNjUsImZvcmNlVG9vbHRpcCI6ZmFsc2UsImJ1eWFibGVzIjp7fSwibm9SZXNwZWNDb25maXJtIjpmYWxzZSwiY2xpY2thYmxlcyI6e30sInNwZW50T25CdXlhYmxlcyI6IjAiLCJ1cGdyYWRlcyI6W10sIm1pbGVzdG9uZXMiOltdLCJsYXN0TWlsZXN0b25lIjpudWxsLCJhY2hpZXZlbWVudHMiOltdLCJjaGFsbGVuZ2VzIjp7fSwiZ3JpZCI6e30sInByZXZUYWIiOiIifSwiYmxhbmsiOnsidW5sb2NrZWQiOnRydWUsInRvdGFsIjoiMCIsImJlc3QiOiIwIiwicmVzZXRUaW1lIjozNzU2LjA5MzAwMDAwMDI2NSwiZm9yY2VUb29sdGlwIjpmYWxzZSwiYnV5YWJsZXMiOnt9LCJub1Jlc3BlY0NvbmZpcm0iOmZhbHNlLCJjbGlja2FibGVzIjp7fSwic3BlbnRPbkJ1eWFibGVzIjoiMCIsInVwZ3JhZGVzIjpbXSwibWlsZXN0b25lcyI6W10sImxhc3RNaWxlc3RvbmUiOm51bGwsImFjaGlldmVtZW50cyI6W10sImNoYWxsZW5nZXMiOnt9LCJncmlkIjp7fSwicHJldlRhYiI6IiJ9LCJ0cmVlLXRhYiI6eyJ1bmxvY2tlZCI6dHJ1ZSwidG90YWwiOiIwIiwiYmVzdCI6IjAiLCJyZXNldFRpbWUiOjM3NTYuMDkzMDAwMDAwMjY1LCJmb3JjZVRvb2x0aXAiOmZhbHNlLCJidXlhYmxlcyI6e30sIm5vUmVzcGVjQ29uZmlybSI6ZmFsc2UsImNsaWNrYWJsZXMiOnt9LCJzcGVudE9uQnV5YWJsZXMiOiIwIiwidXBncmFkZXMiOltdLCJtaWxlc3RvbmVzIjpbXSwibGFzdE1pbGVzdG9uZSI6bnVsbCwiYWNoaWV2ZW1lbnRzIjpbXSwiY2hhbGxlbmdlcyI6e30sImdyaWQiOnt9LCJwcmV2VGFiIjoiIn0sInIiOnsidW5sb2NrZWQiOnRydWUsInBvaW50cyI6IjE1IiwiYmVzdCI6IjE1IiwidG90YWwiOiIxNSIsInJlc2V0VGltZSI6Mi4zMzc5OTk5OTk5OTk5OTk2LCJmb3JjZVRvb2x0aXAiOnRydWUsImJ1eWFibGVzIjp7fSwibm9SZXNwZWNDb25maXJtIjpmYWxzZSwiY2xpY2thYmxlcyI6e30sInNwZW50T25CdXlhYmxlcyI6IjAiLCJ1cGdyYWRlcyI6W10sIm1pbGVzdG9uZXMiOlsiMCIsIjEiLCIyIiwiMyIsIjQiLCI1IiwiNiIsIjciXSwibGFzdE1pbGVzdG9uZSI6IjciLCJhY2hpZXZlbWVudHMiOltdLCJjaGFsbGVuZ2VzIjp7fSwiZ3JpZCI6e30sInByZXZUYWIiOiIifSwicCI6eyJ1bmxvY2tlZCI6dHJ1ZSwicG9pbnRzIjoiMC44ODUwMDAwMDAwMDAwMDA2IiwiYmVzdCI6IjUuMTI4MjAwMDAwMDAwMDAwNSIsInRvdGFsIjoiOC44ODUwMDAwMDAwMDAwMDIiLCJyZXNldFRpbWUiOjIuMzM3OTk5OTk5OTk5OTk5NiwiZm9yY2VUb29sdGlwIjp0cnVlLCJidXlhYmxlcyI6e30sIm5vUmVzcGVjQ29uZmlybSI6ZmFsc2UsImNsaWNrYWJsZXMiOnt9LCJzcGVudE9uQnV5YWJsZXMiOiIwIiwidXBncmFkZXMiOlsiMTEiLCIxMiIsIjEzIl0sIm1pbGVzdG9uZXMiOltdLCJsYXN0TWlsZXN0b25lIjpudWxsLCJhY2hpZXZlbWVudHMiOltdLCJjaGFsbGVuZ2VzIjp7fSwiZ3JpZCI6e30sInByZXZUYWIiOiIifSwiYWNoIjp7InVubG9ja2VkIjp0cnVlLCJwb2ludHMiOiIxMiIsInRvdGFsIjoiMCIsImJlc3QiOiIxMiIsInJlc2V0VGltZSI6Mzc1Ni4wOTMwMDAwMDAyNjUsImZvcmNlVG9vbHRpcCI6dHJ1ZSwiYnV5YWJsZXMiOnt9LCJub1Jlc3BlY0NvbmZpcm0iOmZhbHNlLCJjbGlja2FibGVzIjp7fSwic3BlbnRPbkJ1eWFibGVzIjoiMCIsInVwZ3JhZGVzIjpbXSwibWlsZXN0b25lcyI6W10sImxhc3RNaWxlc3RvbmUiOm51bGwsImFjaGlldmVtZW50cyI6WyIxMSIsIjEyIiwiMTMiLCIxNCIsIjE1IiwiMTYiLCIyMSIsIjIyIiwiMjMiLCIyNCIsIjI1IiwiMjYiXSwiY2hhbGxlbmdlcyI6e30sImdyaWQiOnt9LCJwcmV2VGFiIjoiIn0sInNhdmUiOnsidW5sb2NrZWQiOnRydWUsInBvaW50cyI6IjEiLCJ0b3RhbCI6IjAiLCJiZXN0IjoiMSIsInJlc2V0VGltZSI6MzcyNS45NzcwMDAwMDAyNjYzLCJmb3JjZVRvb2x0aXAiOmZhbHNlLCJidXlhYmxlcyI6e30sIm5vUmVzcGVjQ29uZmlybSI6ZmFsc2UsImNsaWNrYWJsZXMiOnsiMTEiOiIiLCIxMiI6IiJ9LCJzcGVudE9uQnV5YWJsZXMiOiIwIiwidXBncmFkZXMiOltdLCJtaWxlc3RvbmVzIjpbXSwibGFzdE1pbGVzdG9uZSI6bnVsbCwiYWNoaWV2ZW1lbnRzIjpbXSwiY2hhbGxlbmdlcyI6e30sImdyaWQiOnt9LCJwcmV2VGFiIjoiIn19")
            },
            style() {return{
                'background-color': tmp.r.color,
            }},
        },
    }, 

    tabFormat: [
        ["display-text", function() {return "this is the savebank which will allow to import saves at diffrent points of the game.<br> <h3>Note:</h3> this is mostly for recoving lost progress"}],
        "blank",
        ["column",[
            ["row",[["clickable", 11], ["clickable", 12]]], ["row",[["clickable", 13], ["clickable", 14]]], ["row",[["clickable", 15], ["clickable", 16]]],
        ]],
        "blank",
    ],
})