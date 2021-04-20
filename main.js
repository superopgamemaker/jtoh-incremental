//death// 
var towerPoints = 1
var builders = 0
var boughtBuilders = 0
var builderCost = 1
gameLoop() {
  var towerPoints = towerPoints + (builders / (1000/33))
  }
loop(gameLoop, 33)
buyBuilder() {
  if towerPoints => builderCost {
    var towerPoints = towerPoints - builderCost
    var builders = builders + 1
    var boughtBuilders = boughtBuilders + 1
    var builderCost = 10 ** boughtBuilders ** 2
    }
}
