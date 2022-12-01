function ordinalSuffix(n) {
  // exception, teen numbers ending in 11, 12, 13 use th
  const teenNum = n % 100;
  if (teenNum <= 20 && teenNum >= 10) {
    return n + 'th'
  }
  const num = n % 10;
  // st for numbers ending in 1
  if (num === 1) {
    return n + 'st'
    // nd for numbers ending in 2
  } else if (num === 2) {
    return n + 'nd'
    // rd for numbers ending in 3
  } else if (num === 3) {
    return n + 'rd'
    // th for all other numbers
  } else {
    return n + 'th'
  }
}

module.exports = { ordinalSuffix };
