
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
  setBorderBlocks: function(displayWidth, displayHeight, grid) {
    // this function sets the border around the displayed grid to handle wrap-around
    const width = displayWidth + 2;
    const height = displayHeight + 2;
    const size = width * height;
    const dispCornerArr = [size - (width + 2), size - ((2 * width) - 1), (2 * width) - 2, width + 1];
    const cornerArr = [0, width - 1, size - width, size - 1];

    let cornerCount = -1;

    if (grid.length > 0) {
      return grid.map((life, i) => {
        if (life.displayPos) {
          return life;
        } else if (cornerArr.includes(life.id)) {
          cornerCount++;
          return Object.assign({}, life, {
            state: grid[dispCornerArr[cornerCount]].state
          });
        } else if (life.id < width) {
          return Object.assign({}, life, {
            state: grid[life.id + (size - (2 * width))].state
          });
        } else if (life.id >= size - width) {
          return Object.assign({}, life, {
            state: grid[life.id - (size - (2 * width))].state
          });
        } else if (life.id % width === width - 1) {
          return Object.assign({}, life, {
            state: grid[life.id - (width - 2)].state
          });
        } else if (life.id % width === 0) {
          return Object.assign({}, life, {
            state: grid[life.id + (width - 2)].state
          });
        }
        return life;
      });
    }
    return grid;
  }
}
