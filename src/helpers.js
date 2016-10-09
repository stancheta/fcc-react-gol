
module.exports = {
  newBoard: function(width, height) {
    const size = width * height;
    let newLifeArr = [];
    for (let i = 0; i < size; i++) {
      if (i === 1)
        newLifeArr.push({id: i, state: 'born'});
      else if (i === 2)
        newLifeArr.push({id: i, state: 'alive'});
      else
        newLifeArr.push({id: i, state: 'dead'});
    }
    return newLifeArr;
  }
}
