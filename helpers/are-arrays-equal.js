module.exports = (a, b) => (a.length === b.length) && (a.every(e => b.includes(e)));