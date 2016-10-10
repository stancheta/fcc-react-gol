import React from 'react';
import GolMenu from '../GolMenu/GolMenu';
import GolScreen from '../GolScreen/GolScreen';
import './GolDashboard.sass';
import helpers from '../helpers';

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
    // life: helpers.newGrid(this.state.width, this.state.height),
    this.setState({
      life: helpers.randomizeGrid(helpers.newGrid(this.state.width, this.state.height)),
      gameState: 'pause',
      speed: 'fast'
    });
  },
  handleClearGrid: function() {
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
      gameState: 'pause'
    });
  },
  handleSizeChange: function(w, h) {
    this.setState({
      width: w,
      height: h,
      life: helpers.newGrid(w, h),
      gameState: 'pause'
    });
  },
  handleSpeedChange: function(s) {
    this.setState({speed: s});
  },
  handleStateChange(s) {
    if (s === 'play') {
      this.setState({
        life: this.getNextGeneration()
      });
    }
    this.setState({gameState: 'pause'});
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
