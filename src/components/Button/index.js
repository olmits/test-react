import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
    constructor(props){
        super(props)
    }
    onClickHandler(){
        const {onClick} = this.props;
        onClick()
    }
    render(){
        const {innerText} = this.props;

        return(
            <button 
                type='button' 
                onClick={this.onClickHandler.bind(this)}
            >{innerText}</button>
        )
    }
}

Button.propTypes = {
    onClick: PropTypes.func,
    innerText: PropTypes.string
}

export default Button;
