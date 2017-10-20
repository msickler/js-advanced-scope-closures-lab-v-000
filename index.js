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
