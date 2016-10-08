import React from 'react';
import './GolScreen.sass';

const GolScreenGrid = React.createClass({
  render: function() {
    return (
      <svg>

      </svg>
    );
  }
});

const GolScreenHeader = function(props) {
  return (
    <div  className="header">
      <h2>Generation: {props.generation}</h2>
    </div>
  );
};

const GolScreen = React.createClass({
  render: function() {
    return (
      <div className="GolScreen section">
        <GolScreenHeader
          generation={0}
        />
        <hr />
        <GolScreenGrid/>
      </div>
    );
  }
});

export default GolScreen;
