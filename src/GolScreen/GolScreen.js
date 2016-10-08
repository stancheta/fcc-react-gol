import React from 'react';
import './GolScreen.sass';

const GolScreenGrid = React.createClass({
  render: function() {
    const defaultRectSize = 12;
    const defaultMarginSize = 1;
    const grid = this.props.lifeArr.map((life) => {
        return (
          <rect
            key={life.id}
            id={life.id}
            className={'rect ' + life.state}
            x={(life.id % this.props.width) * 13 }
            y={(Math.floor(life.id / this.props.width) * 13)}
            height={defaultRectSize}
            width={defaultRectSize}
          />
        );
      }
    );
    return (
      <svg width={this.props.width * (defaultRectSize + defaultMarginSize)}
        height={this.props.height * (defaultRectSize + defaultMarginSize)}>
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
          generation={0}
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
