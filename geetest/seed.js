function seed() {
  function _seed() {
    return ((65536 * (1 + Math["random"]())) | 0)
      ["toString"](16)
      ["substring"](1);
  }
  return _seed() + _seed() + _seed() + _seed();
}

module.exports = { seed };
