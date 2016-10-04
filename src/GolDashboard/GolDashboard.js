import React from 'react';
import GolMenu from '../GolMenu/GolMenu';
import GolScreen from '../GolScreen/GolScreen';
import './GolDashboard.sass';

const GolDashboard = React.createClass({
  render: function() {
    return (
      <div className="GolDashboard">
        <GolMenu />
        <GolScreen />
      </div>
    );
  }
});

export default GolDashboard;
