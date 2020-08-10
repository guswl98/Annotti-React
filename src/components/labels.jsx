import React from 'react';
import LabelTemplate from './labelTemplate';

const { remote } = window.require('electron');

// function rgb2hex(rgb) {
//   if (rgb.search('rgb') == -1) {
//     return rgb;
//   } else {
//     rgb = rgb.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+))?\)$/);
//     function hex(x) {
//       return ('0' + parseInt(x).toString(16)).slice(-2);
//     }
//     return '#' + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
//   }
// }

class LabelMenu extends React.Component {
  constructor() {
    super();

    this.state = {
      children: {},
    };
  }

  appendLabel = () => {
    var labelID = remote.getGlobal('projectManager').labelCounter;
    var labels = remote.getGlobal('projectManager').labelList;
    var labelNo = Object.keys(remote.getGlobal('projectManager').labelList).length;
    console.log(labelID);
    console.log(labels);
    console.log(labelNo);

    this.setState({
      children: {
        ...this.state.children,
        [labelID]: <LabelTemplate id={labelID} removeLabel={this.removeLabel} />,
      },
    });
  };

  removeLabel = (id) => {
    console.log('지울 리벨 : ');
    console.log(id);
    console.log(this.state.children);
    remote.getGlobal('projectManager').deleteLabel(id);
    const newChildren = this.state.children;
    delete newChildren[id];
    this.setState({
      children: newChildren,
    });
    console.log(this.state.children);
  };

  render() {
    return (
      <div className="label-menu">
        <div className="label-infos">
          {Object.keys(this.state.children).map((index) => this.state.children[index])}
        </div>
        <button type="button" id="add-label" className="add-label" onClick={this.appendLabel}>
          Add Label
        </button>
      </div>
    );
  }
}

export default LabelMenu;
