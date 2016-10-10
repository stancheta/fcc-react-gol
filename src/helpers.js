
function randomNumGen(max, min) {
  const minimum = min || 0;
  return Math.floor((Math.random() * (max - minimum)) + minimum);
}

module.exports = {
  newGrid: function(displayWidth, displayHeight) {
    const width = displayWidth + 2;
    const height = displayHeight + 2;
    const size = width * height;
    let dPos = 0;
    let newLifeArr = [];
    for (let i = 0; i < size; i++) {
      if (i < width || i > (size - width - 1) || i % width === 0 || i % width === width - 1) {
        newLifeArr.push({id: i, state: 'dead'});
      } else {
        newLifeArr.push({id: i, state: 'dead', displayPos: dPos.toString()});
        dPos++;
      }
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
  },
  setBorderBlocks: function(displayHeight, displayWidth, grid) {

  }
}
