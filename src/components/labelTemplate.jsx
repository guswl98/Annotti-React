import React from 'react';
import '../styles/label.css';
import LabelPopover from './labelPopover';
import { Popover } from 'antd';

const { remote } = window.require('electron');
const labelPopover = new LabelPopover();

class labelTemplate extends React.Component {
  constructor(props) {
    super(props);
    this.state = { id: props.id, randomColor: null };
  }

  removeLabel = (e) => {
    this.props.removeLabel(e.target.id);
  };

  getRandomColor = () => {
    var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    var labelColors = Object.values(remote.getGlobal('projectManager').labelColors);
    while (labelColors.includes(randomColor)) {
      randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    }
    remote.getGlobal('projectManager').appendLabel(null, randomColor);
    var labelCounter = remote.getGlobal('projectManager').labelCounter;
    return randomColor;
  };

  componentDidMount() {
    this.setState({ randomColor: this.getRandomColor() });
  }

  popover = () => {
    console.log('CLick popover');
  };

  render() {
    return (
      <div className="appendLabel" id={this.state.id}>
        <div>
          <span
            className="label-color"
            id={this.state.id}
            style={{ backgroundColor: this.state.randomColor }}
            type="primary"
          ></span>
          <input type="text" className="label" placeholder="LABEL" />
          <input type="checkbox" className="activate" id="labelID" />
          <span className="label-counter" id="labelID"></span>
          <button className="del" id={this.state.id} onClick={this.removeLabel}>
            X
          </button>
        </div>
      </div>
    );
  }
}

export default labelTemplate;
