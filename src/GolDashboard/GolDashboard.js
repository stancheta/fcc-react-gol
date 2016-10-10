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
      state: ''
    };
  },
  componentDidMount: function() {
    // life: helpers.newGrid(this.state.width, this.state.height),
    this.setState({
      life: helpers.randomizeGrid(helpers.newGrid(this.state.width, this.state.height)),
      state: 'play'
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
      })
    });
  },
  handleSizeChange: function(w, h) {
    this.setState({
      width: w,
      height: h,
      life: helpers.newGrid(w, h)
    });
  },
  render: function() {
    return (
      <div className="GolDashboard">
        <GolMenu
          width={this.state.width}
          speed={'slow'}
          state={'play'}
          onSizeChange={this.handleSizeChange}
          onClearGrid={this.handleClearGrid}
        />
        <GolScreen
          lifeArr={this.state.life}
          width={this.state.width}
          height={this.state.height}
         />
      </div>
    );
  }
});

export default GolDashboard;
