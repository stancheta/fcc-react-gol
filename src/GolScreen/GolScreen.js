import React from 'react';
import './GolScreen.sass';

const GolScreenGrid = React.createClass({
  render: function() {
    const rectSize = 10;
    const marginSize = 1;
    const grid = this.props.lifeArr.map((life) => {
        return (
          <rect
            key={life.id}
            id={life.id}
            className={'rect ' + life.state}
            x={(life.id % this.props.width) * (rectSize + marginSize) }
            y={(Math.floor(life.id / this.props.width) * (rectSize + marginSize))}
            height={rectSize}
            width={rectSize}
          />
        );
      }
    );
    return (
      <svg width={this.props.width * (rectSize + marginSize)}
        height={this.props.height * (rectSize + marginSize)}>
        {grid}
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
          generation={this.props.generation}
        />
        <hr />
        <GolScreenGrid
          lifeArr={this.props.lifeArr}
          width={this.props.width}
          height={this.props.height}
        />
      </div>
    );
  }
});

export default GolScreen;
