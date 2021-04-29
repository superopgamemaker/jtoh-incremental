let ON = OmegaNum; //so i dont have to type omeganum every time lol

var towerPoints = ON(1)
var builders = ON(0)
var boughtBuilders = ON(0)
var builderCost = ON(1)
var builderMultiplier = ON(1)
var applications = ON(0)
var boughtApplications = ON(0)
var applicationCost = ON(100)
var applicationMultiplier = ON(1)
var upgrade1 = ON(0)
var upgrade1Cost = ON(5)
function gameLoop() {
  towerPoints = towerPoints.plus(builders.div(1000/33).mul(builderMultiplier))
  builders = builders.plus(applications.div(1000/33).mul(applicationMultiplier))
document.getElementById("towerPointStatement").innerHTML = "You have " + towerPoints.notation() + " tower points, corresponding to a difficulty of Easy"
  }
setInterval(gameLoop, 33)
setInterval(save, 33)
 function buyBuilder() {
  if (towerPoints.gte(builderCost)) {
   towerPoints = towerPoints.minus(builderCost)
   builders = builders.plus(1)
   boughtBuilders = boughtBuilders.plus(1)
   builderCost = ON.pow(10, boughtBuilders.pow(2))
   builderMultiplier = ON.pow(((upgrade1.div(5)).plus(1)), boughtBuilders)
    document.getElementById("buyBuilderButton").innerHTML = "Buy a builder for " + builderCost.notation() + " tower points"
    }
}
function buyApplication() {
  if (towerPoints.gte(applicationCost)) {
   towerPoints = towerPoints.minus(applicationCost)
   applications = applications.plus(1)
   boughtApplications = boughtApplications.plus(1)
   applicationCost = ON(100).mul((ON.pow(10, boughtApplications.pow(2))).pow(2))
   applicationMultiplier = ON.pow(((upgrade1.div(5)).plus(1)), boughtApplications)
    document.getElementById("buyApplicationButton").innerHTML = "Buy an application for " + applicationCost.notation() + " tower points"
    }
}
function buyUpgrade1() {
  if (towerPoints.gte(upgrade1Cost)) {
   towerPoints = towerPoints.minus(upgrade1Cost)
   upgrade1 = upgrade1.plus(1)
   upgrade1Cost = ON(5).mul((ON.pow(5, upgrade1.pow(2))))
   builderMultiplier = ON.pow(((upgrade1.div(5)).plus(1)), boughtBuilders)
   applicationMultiplier = ON.pow(((upgrade1.div(5)).plus(1)), boughtApplications)
   document.getElementById("buyUpgrade1Button").innerHTML = "Buy Upgrade 1 for " + upgrade1Cost.notation() + " tower points"
    }
}
//Saving
function save() {
	let thesave = JSON.stringify(game);
	thesave = btoa(thesave);
	localStorage.setItem('elementaldimensonssave', thesave);
}

//Loading
function load() {
	let thesave = localStorage.getItem('elementaldimensonssave');
	if (thesave == null) {
		hardReset();
	} else {
		thesave = atob(thesave);
		game = JSON.parse(thesave);
	}
	document.getElementById("hd1 cost").innerHTML = "a hydrogen dimension 1 costs " + game.firstHDCost + " hydrogen nuclei."
	document.getElementById("hd2 cost").innerHTML = "a hydrogen dimension 2 costs " + game.secondHDCost + " hydrogen nuclei."
}

load();
