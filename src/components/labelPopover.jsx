import React from 'react';

const { remote } = window.require('electron');

var bgColors = {
  Skyblue: '#10b1fe',
  Green: '#3fc56b',
  Brown: '#ce9887',
  Yellow: '#f9c859',
  Pink: '#ff78f8',
  Puple: '#9f7efe',
  Blue: '#3691ff',
  Orange: '#ff936a',
  Punch: '#ff6480',
  Pantone: '#7a82da',
};

class LabelPopover extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      hide: true,
      color: null,
    };
  }

  click = () => {
    const currentState = this.state.hide;
    this.setState({ hide: !currentState });
  };

  handleChange = (e) => {
    this.setState({ color: e.target.value });
  };
  changeProperty = () => {
    console.log(this.state.color);
    const labelColors = remote.getGlobal('projectManager').labelColors;
    if (!Object.values(labelColors).includes(this.state.color)) {
      remote.getGlobal('projectManager').changeLabelColor(this.state.id, this.state.color);
    } else {
      console.log('Color Exist');
    }
  };
  render() {
    return (
      <div className="popover__menu">
        <div
          className="select-color"
          id={this.state.id}
          style={this.state.hide ? { display: 'none' } : { display: 'block' }}
        >
          <span
            className="label-color-cand label-color-circle"
            style={{ backgroundColor: bgColors.Skyblue }}
          ></span>
          <span
            className="label-color-cand label-color-circle"
            style={{ backgroundColor: bgColors.Green }}
          ></span>
          <span
            className="label-color-cand label-color-circle"
            style={{ backgroundColor: bgColors.Brown }}
          ></span>
          <span
            className="label-color-cand label-color-circle"
            style={{ backgroundColor: bgColors.Yellow }}
          ></span>
          <span
            className="label-color-cand label-color-circle"
            style={{ backgroundColor: bgColors.Pink }}
          ></span>
          <span
            className="label-color-cand label-color-circle"
            style={{ backgroundColor: bgColors.Puple }}
          ></span>
          <span
            className="label-color-cand label-color-circle"
            style={{ backgroundColor: bgColors.Blue }}
          ></span>
          <span
            className="label-color-cand label-color-circle"
            style={{ backgroundColor: bgColors.Orange }}
          ></span>
          <span
            className="label-color-cand label-color-circle"
            style={{ backgroundColor: bgColors.Punch }}
          ></span>
          <span
            className="label-color-cand label-color-circle"
            style={{ backgroundColor: bgColors.Pantone }}
          ></span>
          <input
            id="color-input"
            type="text"
            placeholder="newLabel.color"
            onChange={this.handleChange}
          />
          <button className="label-color-cand-rgb" onClick={this.changeProperty}>
            OK
          </button>
        </div>
      </div>
    );
  }
}

export default LabelPopover;
