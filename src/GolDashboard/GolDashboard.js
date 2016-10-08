import React from 'react';
import GolMenu from '../GolMenu/GolMenu';
import GolScreen from '../GolScreen/GolScreen';
import './GolDashboard.sass';

const GolDashboard = React.createClass({
  getInitialState: function() {
    return {
      life: [],
      width: 50,
      height: 30
    };
  },
  componentDidMount: function() {
    const defaultSize = 1500;
    let newLifeArr = [];
    for (let i = 0; i < defaultSize; i++) {
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
