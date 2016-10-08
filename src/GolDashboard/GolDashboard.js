import React from 'react';
import GolMenu from '../GolMenu/GolMenu';
import GolScreen from '../GolScreen/GolScreen';
import './GolDashboard.sass';

const GolDashboard = React.createClass({
  getInitialState: function() {
    return {
      life: [],
      width: 70,
      height: 50
    };
  },
  componentDidMount: function() {
    const size = this.state.width * this.state.height;
    let newLifeArr = [];
    for (let i = 0; i < size; i++) {
      newLifeArr.push({id: i, state: 'dead'});
    }
    this.setState({life: newLifeArr});
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
