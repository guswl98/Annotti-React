import React from 'react';
import '../styles/label.css';

var bgColors = { "Skyblue" : "#10b1fe",
                    "Green" : "#3fc56b",
                    "Brown" : "#ce9887",
                    "Yellow" : "#f9c859",
                    "Pink" : "#ff78f8",
                    "Puple": "#9f7efe",
                    "Blue" : "#3691ff",
                    "Orange" : "#ff936a",
                    "Punch" : "#ff6480",
                    "Pantone" : "#7a82da"
};

const selectDivStyle={
    'display' : 'none'
}

class labelTemplate extends React.Component{
    constructor()
    {
        super();
        this.state = { randomColor: null }
    }

    getRandomColor = () =>
    {
        var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
        return randomColor;
    }
    componentWillMount()
    {
        this.setState({ randomColor: this.getRandomColor() });
    }
    generateRandomColor = () =>
    {
        this.setState({ randomColor: this.getRandomColor() });
    }

    render()
    {
        return(
            <div className='appendLabel'>
                <div>
                    <span className='label-color' id='labelID' style = {{ backgroundColor: this.state.randomColor }}></span>
                    <input type='text' className='label' placeholder='LABEL'/>
                    <input type='checkbox' className='activate' id='labelID'/>
                    <span className='label-counter' id='labelID'></span>
                    <div className='del' id='del'>X</div>
                    <div className= 'select-color bubble' style={selectDivStyle}></div>
                </div>
                <div className = 'select-color bubble' style={selectDivStyle}>
                    <span className='label-color-cand label-color-circle' style={{backgroundColor:bgColors.Skyblue}}></span>
                    <span className='label-color-cand label-color-circle' style={{backgroundColor:bgColors.Green}}></span>
                    <span className='label-color-cand label-color-circle' style={{backgroundColor:bgColors.Brown}}></span>
                    <span className='label-color-cand label-color-circle' style={{backgroundColor:bgColors.Yellow}}></span>
                    <span className='label-color-cand label-color-circle' style={{backgroundColor:bgColors.Pink}}></span>
                    <span className='label-color-cand label-color-circle' style={{backgroundColor:bgColors.Puple}}></span>
                    <span className='label-color-cand label-color-circle' style={{backgroundColor:bgColors.Blue}}></span>
                    <span className='label-color-cand label-color-circle' style={{backgroundColor:bgColors.Orange}}></span>
                    <span className='label-color-cand label-color-circle' style={{backgroundColor:bgColors.Punch}}></span>
                    <span className='label-color-cand label-color-circle' style={{backgroundColor:bgColors.Pantone}}></span>
                    <input id='color-input' type='text' value='newLabel.color'/>
                    <button className='label-color-cand-rgb'>OK</button>
                </div>
            </div>
        );
    }
}

export default labelTemplate;
