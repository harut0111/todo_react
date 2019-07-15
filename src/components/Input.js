import React from 'react';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import {useStyles} from '../constants/app_const.js';


export default function FilledTextFields(props) {

    //set by me
    const {inputVal} = props;

    function handleChange(e) {
        props.onInputChange(e.target.value);
    }

    //call addTodoItems() method on "Enter" press
    function handleEnterPress(e) {
        if(e.keyCode === 13) props.onEnterPress();
    }

    // set by Material UI
    const classes = useStyles();
    // this function added for prevent submit event (by me)
    function submitHandler(e) {
        e.preventDefault();
    }

    function handleBtnClick() {
      props.onBtnClick();
    }

    return (
        <form className={classes.container} noValidate autoComplete="off" onSubmit={submitHandler}>
          <Input
            placeholder="what to do ?"
            className={classes.input}
            inputProps={{'aria-label': 'Description', }}
            
            //set by me
            autoFocus
            value={inputVal}
            onChange = {handleChange}
            onKeyDown={handleEnterPress}
          />

          <Button 
            onClick={handleBtnClick} 
            variant="contained" color="primary" 
            className={classes.button}
          >
            add to do
          </Button>
        </form>
  );
}




/* import React from 'react';
import FilledTextFields from './MaterialUI_Input'


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

        return  <>
                <input 
                    placeholder="what to do?"
                    autoFocus
                    value = {inputVal}
                    onChange = {this.handleChange}
                    onKeyDown={this.handleEnterPress}
                ></input>
                <FilledTextFields />

                </>
    }
}

export default Input; */
