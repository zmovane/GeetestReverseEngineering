function now() {
  return new Date().getTime();
}

function delay(ms) {
  return new Promise((cb) => setTimeout(cb, ms));
}

module.exports = { now, delay };
