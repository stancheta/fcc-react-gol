import React from 'react';
import './GolMenu.sass';

const GolMenuHeader = function(props) {
  return (
    <div  className="header">
      <a href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life">
        <h1>Game of Life</h1>
      </a>
      <hr />
    </div>
  );
};

const GolMenu = React.createClass({
  handleSizeButtonClick: function(evt) {
    const btn = evt.target;
    if (btn.value === 'small') {
      this.props.onSizeChange(50, 30);
    } else if (btn.value === 'medium') {
      this.props.onSizeChange(70, 50);
    } else if (btn.value === 'large'){
      this.props.onSizeChange(100, 80);
    }
  },
  handleSpeedButtonClick: function(evt) {
    const btn = evt.target;
    if (btn.value === 'fast') {
      this.props.onSpeedChange('fast');
    } else if (btn.value === 'medium') {
      this.props.onSpeedChange('medium');
    } else if (btn.value === 'slow') {
      this.props.onSpeedChange('slow');
    }
  },
  handleStateButtonClick: function(evt) {
    const btn = evt.target;
    if (btn.value === 'clear') {
      this.props.onClearGrid();
    } else if (btn.value === 'play') {
      this.props.onStateChange('play');
    } else if (btn.value === 'pause') {
      this.props.onStateChange('pause');
    }
  },
  render: function() {
    return (
      <div className="GolMenu section">
        <GolMenuHeader />

        <h3>State:</h3>
        <button name='play-button' value='play' onClick={this.handleStateButtonClick}
          className={this.props.state === 'play' ? 'btn-active' : ''}
        >
          Play
        </button>
        <button name='pause-button' value='pause' onClick={this.handleStateButtonClick}
          className={this.props.state === 'pause' ? 'btn-active' : ''}
        >
          Pause
        </button>
        <button name='clear-button' value='clear' onClick={this.handleStateButtonClick}>
          Clear
        </button>

        <h3>Board Size:</h3>
        <button name='small-button' value='small' onClick={this.handleSizeButtonClick}
          className={this.props.width === 50 ? 'btn-active' : ''}
        >
          50x30
        </button>
        <button name='medium-button' value='medium' onClick={this.handleSizeButtonClick}
          className={this.props.width === 70 ? 'btn-active' : ''}
        >
          70x50
        </button>
        <button name='large-button' value='large' onClick={this.handleSizeButtonClick}
          className={this.props.width === 100 ? 'btn-active' : ''}
        >
          100x80
        </button>

        <h3>Simulation Speed:</h3>
        <button name='slow-button' value='slow' onClick={this.handleSpeedButtonClick}
          className={this.props.speed === 'slow' ? 'btn-active' : ''}
        >
          Slow
        </button>
        <button name='medium-button' value='medium' onClick={this.handleSpeedButtonClick}
          className={this.props.speed === 'medium' ? 'btn-active' : ''}
        >
          Medium
        </button>
        <button name='fast-button' value='fast' onClick={this.handleSpeedButtonClick}
          className={this.props.speed === 'fast' ? 'btn-active' : ''}
        >
          Fast
        </button>
      </div>
    );
  }
});

export default GolMenu;
