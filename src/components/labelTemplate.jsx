import React from 'react';
import '../styles/label.css';
import LabelPopover from './labelPopover';
import { Popover } from 'antd';

const { remote } = window.require('electron');

class labelTemplate extends React.Component {
  constructor(props) {
    super(props);
    this.child = React.createRef();
    this.state = { id: props.id, randomColor: null, hide: true };
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
    var label = remote.getGlobal('projectManager').appendLabel(null, randomColor);
    return randomColor;
  };

  componentDidMount() {
    this.setState({ randomColor: this.getRandomColor() });
  }

  popover = () => {
    this.setState({ hide: !this.state.hide });
    this.refs.child.click();
  };

  render() {
    return (
      <div className="appendLabel" id={this.state.id}>
        <div>
          <div className="popover">
            <span
              className="label-color"
              id={this.state.id}
              style={{ backgroundColor: this.state.randomColor }}
              onClick={this.popover}
            ></span>
            <LabelPopover id={this.state.id} ref="child"></LabelPopover>
          </div>
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
