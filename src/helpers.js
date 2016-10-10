
function randomNumGen(max, min) {
  const minimum = min || 0;
  return Math.floor((Math.random() * (max - minimum)) + minimum);
}

module.exports = {
  newGrid: function(width, height) {
    const size = width * height;
    let newLifeArr = [];
    for (let i = 0; i < size; i++) {
      newLifeArr.push({id: i, state: 'dead'});
    }
    return newLifeArr;
  },
  randomizeGrid: function(grid) {
    const lifeStates = ['dead', 'born', 'alive'];
    return grid.map((block) => {
      return Object.assign({}, block, {
        state: lifeStates[randomNumGen(lifeStates.length)]
      });
    });
  }
}
