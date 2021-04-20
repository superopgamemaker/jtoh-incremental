var towerPoints = 1
var builders = 0
var boughtBuilders = 0
var builderCost = 1
var applications = 0
var boughtApplications = 0
var applicationCost = 100
function gameLoop() {
  towerPoints = towerPoints + (builders / (1000/33))
  builders = builders + (applications / (1000/33))
document.getElementById("towerPointStatement").innerHTML = "You have " + towerPoints + " tower points, corresponding to a difficulty of Easy"
  }
setInterval(gameLoop, 33)
 function buyBuilder() {
  if (towerPoints >= builderCost) {
   towerPoints = towerPoints - builderCost
   builders = builders + 1
   boughtBuilders = boughtBuilders + 1
   builderCost = 10 ** boughtBuilders ** 2
    document.getElementById("buyBuilderButton").innerHTML = "Buy a builder for " + builderCost + " tower points"
    }
}
function buyApplication() {
  if (towerPoints >= applicationCost) {
   towerPoints = towerPoints - applicationCost
   applications = applications + 1
   boughtApplications = boughtApplications + 1
   applicationCost = 100 * ((10 ** boughtBuilders ** 2) ** 2)
    document.getElementById("buyApplicationButton").innerHTML = "Buy an application for " + applicationCost + " tower points"
    }
}
