import React from 'react';

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
      display: 'none',
    };
  }

  click = () => {
    console.log('popover click');
    this.setState({ display: '' });
  };

  render() {
    return (
      <div className="select-color Popover" style={{ display: this.state.display }}>
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
        <input id="color-input" type="text" placeholder="newLabel.color" />
        <button className="label-color-cand-rgb">OK</button>
      </div>
    );
  }
}

export default LabelPopover;
