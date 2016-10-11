import React from 'react';
import './GolScreen.sass';

const GolScreenGrid = React.createClass({
  handleBlockClick: function(evt) {
    const block = evt.target
    this.props.onBlockClick(+block.id);
  },
  render: function() {
    const rectSize = 10;
    const marginSize = 1;
    const grid = this.props.lifeArr.map((life) => {
      if (life.displayPos) {
        return (
          <rect
            key={life.id}
            id={life.id}
            value={life.state}
            className={'rect ' + life.state}
            x={(life.displayPos % this.props.width) * (rectSize + marginSize) }
            y={(Math.floor(life.displayPos / this.props.width) * (rectSize + marginSize))}
            height={rectSize}
            width={rectSize}
            onClick={this.handleBlockClick}
          />
        );
      }
      return '';
    });
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
          onBlockClick={this.props.onBlockClick}
        />
      </div>
    );
  }
});

export default GolScreen;
