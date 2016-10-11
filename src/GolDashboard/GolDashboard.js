import React from 'react';
import GolMenu from '../GolMenu/GolMenu';
import GolScreen from '../GolScreen/GolScreen';
import './GolDashboard.sass';
import helpers from '../helpers';
import config from '../config';

const GolDashboard = React.createClass({
  getInitialState: function() {
    return {
      life: [],
      width: 70,
      height: 50,
      state: '',
      speed: '',
      generation: 0
    };
  },
  componentDidMount: function() {
    this.setState({
      life: helpers.randomizeGrid(helpers.newGrid(this.state.width, this.state.height)),
      gameState: 'play',
      speed: 'fast'
    });

    this.timer = setInterval(this.tick, config.timer['fast']);
  },
  componentWillUnmount: function() {
    clearInterval(this.timer);
  },
  handleClearGrid: function() {
    if (this.timer) {
      clearInterval(this.timer);
    }
    this.setState({
      life: this.state.life.map((l) => {
        if (l.state === 'dead') {
          return l;
        } else {
          return Object.assign({}, l, {
            state: 'dead'
          });
        }
      }),
      gameState: 'pause',
      generation: 0
    });
  },
  handleSizeChange: function(w, h) {
    if (this.timer) {
      clearInterval(this.timer);
    }
    this.setState({
      width: w,
      height: h,
      life: helpers.newGrid(w, h),
      gameState: 'pause',
      generation: 0
    });
  },
  handleSpeedChange: function(s) {
    this.setState({speed: s});
    if (this.timer && this.state.gameState === 'play') {
      clearInterval(this.timer);
      this.timer = setInterval(this.tick, config.timer[s]);
    }
  },
  handleStateChange(s) {
    if (s === 'play' && this.state.gameState === 'pause') {
      this.setState({gameState: 'play'});
      this.timer = setInterval(this.tick, config.timer[this.state.speed]);
    } else if (s === 'pause' && this.state.gameState === 'play') {
      this.setState({gameState: 'pause'});
      clearInterval(this.timer);
    }
  },
  handleBlockClick(id) {
    this.setState({
      life: this.state.life.map((l) => {
        if (l.id === id) {
          return Object.assign({}, l, {
            state: l.state === 'dead' ? 'born' : 'dead'
          });
        }
        return l;
      })
    });
  },
  getNextGeneration: function() {
    const width = this.state.width + 2;
    const newGrid = helpers.setBorderBlocks(this.state.width,this.state.height, this.state.life);
    return newGrid.map((l) => {
      let neighbors = [];
      let neighborCount = 0;
      if (l.displayPos) {
        neighbors = [0, l.id - (width + 1), l.id - width, l.id - (width - 1), l.id - 1, l.id + 1,
          l.id + (width + 1), l.id + width, l.id + (width - 1)];
        neighborCount = neighbors.reduce((prev, curr) => {
          if (newGrid[curr].state === 'alive' || newGrid[curr].state === 'born') {
            return prev + 1;
          } else {
            return prev;
          }
        });
        // brings block back to life if there are exactly 3 neighbors
        if (l.state === 'dead' && neighborCount === 3) {
          return Object.assign({}, l, {
            state: 'born'
          });
        // blocks stay alive if there are 2 or 3 neighbors
        } else if ((l.state === 'alive' || l.state === 'born') && (neighborCount === 2 || neighborCount === 3)) {
          return Object.assign({}, l, {
            state: 'alive'
          });
        }
        // otherwise, blocks die or remain dead
        return Object.assign({}, l, {
          state: 'dead'
        });

      }
      return l;
    })
  },
  tick: function() {
    this.setState({
      life: this.getNextGeneration(),
      generation: this.state.generation + 1
    });

    // stops Game of Life upon extinction
    for (let i = 0; i < this.state.life.length; i++) {
      if (this.state.life[i].state === 'alive' || this.state.life[i].state === 'born') break;
      if (i === (this.state.life.length - 1)) {
        this.setState({gameState: 'pause', generation: 0});
        clearInterval(this.timer);
      }
    }
  },
  render: function() {
    return (
      <div className="GolDashboard">
        <GolMenu
          width={this.state.width}
          speed={this.state.speed}
          state={this.state.gameState}
          onSizeChange={this.handleSizeChange}
          onSpeedChange={this.handleSpeedChange}
          onStateChange={this.handleStateChange}
          onClearGrid={this.handleClearGrid}
        />
        <GolScreen
          generation={this.state.generation}
          lifeArr={this.state.life}
          width={this.state.width}
          height={this.state.height}
          onBlockClick={this.handleBlockClick}
         />
      </div>
    );
  }
});

export default GolDashboard;
