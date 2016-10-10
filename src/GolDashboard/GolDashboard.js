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
  render: function() {
    return (
      <div className="GolDashboard">
        <GolMenu
          size={'small'}
          speed={'slow'}
          state={'play'}
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
