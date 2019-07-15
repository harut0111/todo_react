import React from 'react';

class Input extends React.Component {
    
    handleChange = (e) => {
        this.props.onInputChange(e.target.value);
    }

    //call addTodoItems() method on "Enter" press
    handleEnterPress = (e) => {
        if(e.keyCode === 13) this.props.onEnterPress();
    }
    
    render() {
        const {inputVal} = this.props;
        return <input 
                    type="text"
                    placeholder="what to do?"
                    autoFocus
                    value = {inputVal}
                    onChange = {this.handleChange}
                    onKeyDown={this.handleEnterPress}
                ></input>
    }
}

export default Input;