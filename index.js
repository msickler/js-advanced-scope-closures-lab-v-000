function produceDrivingRange(blockRange) {
  return function(a, b) {
    let distance = parseInt(b) - parseInt(a)
    if (distance > blockRange) {
      return `${distance - blockRange} blocks out of range`
    } else {
      return `within range by ${blockRange - distance}`
    }
  }
}

function produceTipCalculator(tip) {
  return function(total) {
    return tip * total
  }
}

function createDriver() {
   let driverId = 0
 
   return class {
     constructor(name){
       this.name = name
      this.id = ++driverId
     }
   }
 }
