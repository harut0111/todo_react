import React from 'react';

class Input extends React.Component {
    
    handleChange = (e) => {
        this.props.onInputChange(e.target.value);
    }
    
    render() {
        const {inputVal} = this.props;
        return <input 
                    type="text"
                    value = {inputVal}
                    onChange = {this.handleChange}
                ></input>
    }
}

export default Input;